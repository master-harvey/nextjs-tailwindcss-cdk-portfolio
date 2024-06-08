import { Stack, StackProps, aws_iam as iam, aws_sns as sns, aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //SNS topic
    const topic = sns.Topic.fromTopicArn(this, "notificationTopic", this.node.tryGetContext('topic'))

    //IAM role that Lambda will assume to work with codebuild, cloudformation, and lambda
    const notifyRole = new iam.Role(this, 'portfolio--notify', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      description: "Allows lambda to publish to sns notifications and cloudwatch logs"
    })
    notifyRole.addToPrincipalPolicy(new iam.PolicyStatement({
      actions: ['logs:CreateLogGroup'], resources: [`arn:aws:logs:${Stack.of(this).region}:${Stack.of(this).account}:*`]
    }))
    
    //Notification Function and URL
    const funcName = "portfolioPublishNotification"
    const func = new lambda.Function(this, "publisher", {
      functionName: funcName,
      role: notifyRole, handler: "main.handler",
      code: lambda.Code.fromAsset("./lambda"),
      runtime: lambda.Runtime.PYTHON_3_9,
      environment: { "TOPIC": topic.topicArn, "URL": this.node.tryGetContext('URL') }
    })
    topic.grantPublish(func)
    notifyRole.addToPrincipalPolicy(new iam.PolicyStatement({
      actions: ["logs:CreateLogStream", "logs:PutLogEvents"], resources: [`arn:aws:logs:${Stack.of(this).region}:${Stack.of(this).account}:log-group:/aws/lambda/${funcName}:*`]
    }))
    const funcURL = func.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedMethods: [lambda.HttpMethod.PUT], allowedHeaders: ["content-type"],
        allowedOrigins: [`https://ianharvey.pro`,`https://www.ianharvey.pro`]
      }
    })
  }
}