import boto3
from os import environ
from json import loads

client = boto3.client('sns')

def handler(event, context):
    try:
        event = loads(event)['body']
    except:
        event = loads(event['body'])

    response = client.publish(
        TopicArn=environ['TOPIC'],
        Message=f"{event['name']} made an inquiry on {environ['URL']}:\n\n\t{event['message']}\n\nReply to them at {event['email']}", Subject=f"{event['name']} | {event['subject']}"
    )
    return {
        "statusCode": 200, "body": response['MessageId'],
        "headers": {"Content-Type": "application/json"}
    }
