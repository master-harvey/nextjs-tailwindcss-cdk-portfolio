import { v4 as uuidv4 } from 'uuid';
import {
	FiLinkedin, FiGlobe
} from 'react-icons/fi';

const categories = {
	ai: 'AI/ML Integration & Training',
	web: 'Web & App Development',
	server: 'Cloud & Virtual Servers',
	rpa: 'Robotic Process Automation',
	cad: 'CAD, CAM & CNC',
	modeling: '3D Sculpting'
}

export const projectsData = [
	{
		id: 1,
		title: 'Image Generators',
		url: 'image-generator-integration',
		category: categories.ai,
		img: '/images/imagegen/imagegen.jpg',
		ProjectHeader: {
			title: 'Image Generator Integration',
			publishDate: 'Jul 26, 2021',
			tags: 'AI/ML Integrations',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Image Generator Integration',
				img: '/images/imagegen/midjourney.png',
			},
			{
				id: uuidv4(),
				title: 'Image Generator Integration',
				img: '/images/imagegen/brain.jpg',
			},
			{
				id: uuidv4(),
				title: 'Image Generator Integration',
				img: '/images/imagegen/nightcafe.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'AI Image Generation',
				},
				{
					id: uuidv4(),
					title: 'MidJourney',
					details: "Homepage",
					href: 'https://www.midjourney.com/',
				},
				{
					id: uuidv4(),
					title: 'DallE-2',
					details: "Homepage",
					href: 'https://openai.com/product/dall-e-2',
				},
				{
					id: uuidv4(),
					title: 'Ferry (Coming Soon)',
					details: "Homepage",
					href: 'https://nightcafe.studio/',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Paint with your keystrokes by utilizing stable diffusion models to create breathtaking virtual art from a text prompt',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'DallE-2', 'MidJourney'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'As a software developer, I have extensive experience in configuring code for cloud services, utilizing cloud infrastructure services to scale applications and reduce operational costs. However, for longer-running jobs, I also have experience hosting Linux on-premises.',
				},
				{
					id: uuidv4(),
					details:
						'Running services on-premises can provide greater control and flexibility, allowing developers to fine-tune configurations and optimize performance. While managing and maintaining an on-premises server can be time-consuming and requires technical expertise, the benefits of having 24/7 computing services in house and being able to host longer running processes that wouldn\'t qualify for a cloud platform\'s free tier is invaluable.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 2,
		title: 'Full-Stack Web Apps',
		url: 'web-app-dev',
		category: categories.web,
		img: '/images/fullstack/fullstack.png',
		feature: true,
		ProjectHeader: {
			title: 'Web Application Development',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Web Application Development',
				img: '/images/fullstack/keypad.png',
			},
			{
				id: uuidv4(),
				title: 'Web Application Development',
				img: '/images/fullstack/ez-rrule.png',
			},
			{
				id: uuidv4(),
				title: 'Web Application Development',
				img: '/images/fullstack/ferry.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Application Development',
				},
				{
					id: uuidv4(),
					title: 'Automation Keypad Configurator',
					details: "Homepage",
					href: 'https://keypad.mastersautomation.tech/',
				},
				{
					id: uuidv4(),
					title: 'Ez-RRule-Generator',
					details: "Homepage",
					href: 'https://github.com/master-harvey/ez-rrule-generator',
				},
				{
					id: uuidv4(),
					title: 'Ferry (Coming Soon)',
					details: "Homepage",
					href: 'https://ferry.mastersautomation.tech/',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Deploy a beautiful and responsive custom application that can function on almost any computing platform, from a single codebase.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Javscript', 'React', 'Svlete', 'Next', 'Vue', 'AWS', 'Google Cloud', 'Azure'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'When it comes to developing custom web applications, a serverless cloud architecture with a web interface generated using a JavaScript framework like React, Svelte, Vue, or Next is often the best approach. This approach offers several advantages over traditional server-based architectures, such as faster load times, increased scalability, and better redundancy.',
				},
				{
					id: uuidv4(),
					details:
						'One of the key advantages of a serverless cloud architecture is the use of content delivery networks (CDNs), which distribute application resources across multiple servers around the world. This reduces latency and ensures that the application loads quickly, regardless of the user\'s location. Additionally, serverless architectures can automatically scale to handle increased traffic, ensuring that the application remains fast and responsive even during periods of high usage.',
				},
				{
					id: uuidv4(),
					details:
						'In addition, serverless architectures offer better redundancy and reliability than traditional server-based architectures. By distributing application resources across multiple servers and automatically redirecting traffic in the event of a server failure, serverless architectures ensure that the application remains available and accessible to users. I\'ve been a huge fan of the AWS CDK to deploy my serverless applications, especially now that the internal AWS teams have started using this as their foundation for Infrastructure as Code also.',
				},
				{
					id: uuidv4(),
					details:
						'One of the main benefits of developing web applications with a JavaScript framework is that they can offer app-like experiences that almost perfectly match installed app experiences. This is achieved by utilizing the web browser\'s capabilities to create smooth animations, offline support, and other features that were previously only available in native apps. With fewer repositories, simpler code maintenance, and no app store transaction fees... web applications can offer an extremely cost effective and powerful alternative to traditional applications.',
				},
				{
					id: uuidv4(),
					details:
						'As a software developer, I am excited to see how web applications continue to evolve and push the boundaries of what is possible on the web. The development of powerful libraries such as ThreeJS and React-Three-Fiber have already demonstrated the potential for creating immersive and interactive experiences that blur the line between web and native applications. I believe that we are only scratching the surface of what is possible with web applications, and I look forward to seeing where the future takes us.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 3,
		title: 'Language Models',
		url: 'lm-integrations',
		category: categories.ai,
		img: '/images/LLMs/LLMs.png',
		feature: true,
		ProjectHeader: {
			title: 'Language Model Integrations',
			publishDate: 'Jul 26, 2021',
			tags: 'AI/ML Integrations',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Language Model Integrations',
				img: '/images/LLMs/prompt.jpg',
			},
			{
				id: uuidv4(),
				title: 'Language Model Integrations',
				img: '/images/LLMs/openai-logo-chatgpt.jpg',
			},
			{
				id: uuidv4(),
				title: 'Language Model Integrations',
				img: '/images/LLMs/chat.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Language Model Integrations',
				},
				{
					id: uuidv4(),
					title: 'Chat GPT',
					details: "Homepage",
					href: 'https://openai.com/blog/chatgpt',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Use Large Language Models (LLM) to generate code, rewrite contracts, write marketing copy, and much more.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ChatGPT'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The integration of AI solutions like ChatGPT, Dall-E 2, and Midjourney has become increasingly easy thanks to the simple API automation offered by these tools. By integrating these AI services into their workflows, businesses can benefit from the advanced capabilities of these solutions, including pattern recognition, creative output, and more. I can teach your team how they can take full advantage of these tools, and integrate them directly into an automated workflow.',
				},
				{
					id: uuidv4(),
					details:
						'One of the key advantages of AI integration is the ability to automate repetitive or time-consuming tasks, freeing up valuable time and resources. AI tools can assist with pattern recognition in image and data analysis, allowing businesses to identify trends and make more informed decisions. Additionally, creative AI tools like Dall-E 2 can help jumpstart creative projects by generating unique and inspiring images that can then be refined by human designers.',
				},
				{
					id: uuidv4(),
					details:
						'Overall, AI integration has the potential to transform businesses across industries, providing advanced capabilities for creative output. With simple API automation and the availability of powerful AI tools businesses can streamline their operations and gain a competitive edge. As the field of AI continues to evolve, we can expect to see even more advanced and powerful solutions that will further enhance the capabilities of businesses across the globe.',
				},
				{
					id: uuidv4(),
					details:
						'Although algorithms will continue to advance, custom neural network creation is almost exclusively done by corporations because of the massive amount of data required to train these models. Practically speaking; collecting this much data and pairing it with novel computer science is expensive, hence why I\'m specializing in integration of commercially made AI until algorithms that work with leaner datasets are publicized.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 4,
		title: 'Web Scraping',
		url: 'web-scraping',
		category: categories.rpa,
		img: '/images/scraping/capturing.png',
		ProjectHeader: {
			title: 'Web Scraping',
			publishDate: 'Jul 26, 2021',
			tags: 'Robotic Process Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Web Scraping',
				img: '/images/scraping/rockwell.png',
			},
			{
				id: uuidv4(),
				title: 'Web Scraping',
				img: '/images/scraping/courtscraper.png',
			},
			{
				id: uuidv4(),
				title: 'Web Scraping',
				img: '/images/scraping/rockwell.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Scraping',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Automatically collect data from the web',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python', 'UiPath', 'Automation Anywhere'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Web scraping has become a popular technique for extracting data from websites and other online sources. Tools like UiPath and Automation Anywhere offer powerful features for automating web scraping tasks, including the ability to extract data from dynamic websites and handle complex authentication and pagination.',
				},
				{
					id: uuidv4(),
					details:
						'While these platforms offer many advantages, some developers prefer to run their own custom web scrapers in the cloud using programming languages like Python. One of the main advantages of running custom web scrapers is the flexibility and customizability it offers. By building a scraper from scratch, developers can tailor the tool to their specific needs and extract data in a way that is optimized for their particular use case.',
				},
				{
					id: uuidv4(),
					details:
						'Another advantage of running custom web scrapers is the ability to run them in the cloud, which offers benefits such as greater scalability, reliability, and accessibility. By deploying web scrapers on cloud platforms like AWS or Google Cloud, developers can take advantage of powerful computing resources and easily scale their scrapers up or down as needed.',
				},
				{
					id: uuidv4(),
					details:
						'Although webscraping sounds very attractive, there are some challenges to consider. For example, building and maintaining a custom scraper can be time-consuming and requires a strong understanding of web technologies and programming languages like Python. In addition, web scraping can be legally and ethically complex, and it is important to carefully consider the legality and ethics of scraping a particular website or source of data.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 5,
		title: 'GUI Automation',
		url: 'robotic-process-automation',
		category: categories.rpa,
		img: '/images/guiautomation/RPA.jpg',
		feature: true,
		ProjectHeader: {
			title: 'GUI Robotic Process Automation',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Robotic Process Automation',
				img: '/images/guiautomation/takeoff.png',
			},
			{
				id: uuidv4(),
				title: 'Robotic Process Automation',
				img: '/images/guiautomation/brands.png',
			},
			{
				id: uuidv4(),
				title: 'Robotic Process Automation',
				img: '/images/guiautomation/cnc.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Robotic Process Automation',
				},
				{
					id: uuidv4(),
					title: 'UiPath',
					details: "Homepage",
					href: 'https://www.uipath.com/'
				},
				{
					id: uuidv4(),
					title: 'Automation Anywhere',
					details: "Homepage",
					href: 'https://www.automationanywhere.com/'
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create programs that simulate human interaction in a desktop environment to automate even the most uncooperative programs in your workflow.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python', 'Automation Anywhere', 'UiPath'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Robotic Process Automation (RPA) has become increasingly popular in recent years as businesses look for ways to automate repetitive tasks and reduce costs. UiPath and Automation Anywhere are two of the most popular RPA platforms on the market, offering a range of tools and features to help businesses automate processes across a variety of industries. Platforms like UiPath and Automation Anywhere offer a more streamlined approach to automating business processes than writing programs by hand in languages like Python. These platforms offer a range of tools and features that allow users to easily create and manage workflows, from simple tasks to complex processes that involve multiple systems and departments.',
				},
				{
					id: uuidv4(),
					details:
						'As a software developer, I have deployed a few process automations using UiPath and Automation Anywhere in the last few years, and by using python in the past. One of the key advantages of UiPath and Automation Anywhere is that they offer a robust automation platform that goes beyond just generating robotic workflows. These platforms provide a wide range of features, such as machine learning, artificial intelligence, cloud integration, and analytics that allow businesses to optimize their processes and gain valuable insights into their operations.',
				},
				{
					id: uuidv4(),
					details:
						'Another advantage of RPA is its ability to reduce errors and increase efficiency. By automating repetitive tasks, businesses can free up valuable time and resources, allowing employees to focus on more high-level work. In addition, RPA can help reduce errors and improve accuracy, which can have a significant impact on the bottom line. I like to say that RPA is especially useful for eliminating the most boring and repetitive tasks in business, such as data entry and report generation. By automating these tasks, businesses allow employees to focus on what people are truly good at.',
				},
				{
					id: uuidv4(),
					details:
						'Despite the many benefits of RPA, there are some challenges to consider. For example, implementing RPA requires a significant investment of time and resources, both in terms of developing the automation workflows and training employees on how to use them. In addition, RPA is not always the best solution for every business process, and it is important to carefully evaluate the benefits and drawbacks before implementing it.',
				},
				{
					id: uuidv4(),
					details:
						'Overall, RPA has become an increasingly popular tool for businesses looking to streamline processes and reduce costs. As a software developer, I am excited to see how AI will transform RPA. As machine learning and artificial intelligence continue to evolve, we can expect to see even more powerful and sophisticated automation platforms that can handle increasingly complex tasks and workflows. Overall, RPA is a valuable tool for businesses looking to streamline their operations, reduce costs, and increase efficiency, and I am excited to see it eliminate countless tedious tasks.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 6,
		title: 'Website-in-a-box',
		url: 'quick-website-deployments',
		category: categories.web,
		img: '/images/wordpress/woo.png',
		ProjectHeader: {
			title: 'Quick Website Deployments',
			publishDate: 'April 12, 2023',
			tags: 'Wordpress, Odoo, Web',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Quick Website Deployments with Wordpress, Odoo',
				img: '/images/wordpress/sureclean.png',
			},
			{
				id: uuidv4(),
				title: 'Quick Website Deployments',
				img: '/images/wordpress/vegas.png',
			},
			{
				id: uuidv4(),
				title: 'Quick Website Deployments',
				img: '/images/wordpress/masters.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Examples',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Master\'s Automation',
					details: "Homepage",
					href: 'https://mastersautomation.tech/'
				},
				{
					id: uuidv4(),
					title: 'Sure Clean',
					details: "Homepage",
					href: 'https://surecleancorp.com/'
				},
				{
					id: uuidv4(),
					title: 'VIP Vegas Travel (retired)',
					details: "Homepage",
					href: 'https://vegas.mastersautomation.tech/'
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Quickly deploy a polished business presence to the internet.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Wordpress', 'Odoo', 'HTML', 'Javascript'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'WordPress and other premade "website in a box" software like Odoo have become increasingly popular over the years, and for good reason. These platforms offer a simple, cost-effective, and extremely fast way for businesses to establish an online presence without having to go through the hassle of building a website from scratch.',
				},
				{
					id: uuidv4(),
					details:
						'As a web developer, I have deployed a handful of these websites for small businesses over the years, and I have found that they are often the best choice for companies that want a basic website with a few essential features, such as contact information, a blog, and social media integration. These premade platforms offer a range of templates and themes that can be easily customized to match the branding and style of the business, making it easy to create a professional-looking website in a short amount of time.',
				},
				{
					id: uuidv4(),
					details:
						'One of the main advantages of using premade website software is the user-friendly content management system that comes with it. Even those with little to no web development experience can easily create and manage website content, including adding or editing pages, posts, images, and other media. The intuitive interface allows business owners to make minor updates and changes to their website without needing extensive coding knowledge. Although initial setup with email and hosting services may demand assistance from a web developer, the included CMS can give businesses more control over their online presence while saving lots of money in the long run.',
				},
				{
					id: uuidv4(),
					details:
						'In addition, many of these platforms offer a range of plugins and add-ons that can be used to enhance the functionality of the website. From SEO optimization tools to eCommerce integrations, there are a wide range of options available that can help businesses grow and expand their online presence.',
				},
				{
					id: uuidv4(),
					details:
						'While premade website software offers many advantages, it may not be the best choice for every situation. For example, while making WordPress plugins is possible and fairly straightforward, businesses that require more robust web applications may want to consider a serverless architecture and a JavaScript framework like React. Custom web applications can provide a more tailored and flexible solution that is better suited for complex projects that require a higher level of customization and performance. However, for many small businesses that just need a basic website, premade website software is often the best choice.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
	{
		id: 7,
		title: 'Part & Assembly CAD',
		url: 'CAD',
		category: categories.cad,
		img: '/images/CAD/eagle.png',
		ProjectHeader: {
			title: 'Part & Assembly CAD',
			publishDate: 'Jul 26, 2021',
			tags: 'CAD, CAM & CNC',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Assembly & Part Design',
				img: '/images/CAD/inventor.png',
			},
			{
				id: uuidv4(),
				title: 'Assembly & Part Design',
				img: '/images/CAD/solidworks.png',
			},
			{
				id: uuidv4(),
				title: 'Assembly & Part Design',
				img: '/images/CAD/fusion.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Copmuter Aided Part & Assembly Design',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Design accurate parts and assemblies that can be created automatically using the latest in computer aided machinery',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Autodesk Inventor', 'Fusion360', 'SolidWorks'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'As a maker and engineer, I have used several CAD software programs including Fusion 360, SolidWorks, and Inventor to create parts and assemblies for various projects. These programs allow me to create precise 3D models that can be modified, refined, and analyzed before being sent to a CAM software program for toolpath creation.',
				},
				{
					id: uuidv4(),
					details:
						'Once the design is finalized, I use CAM software like Fusion 360 and Inventor CAM to generate toolpaths that will be used by my homemade and 3D printed CNC machine. Depending on the project, I may use either a laser engraver or an end mill to fabricate the parts from a variety of materials including wood, plastics, and metals.',
				},
				{
					id: uuidv4(),
					details:
						'I really appreciate having CAD and CAM software in my workflow because the ability to quickly iterate and refine designs before committing to a final product is absolutely invaluable. This reduces the risk of errors and ensures that the final product is of high quality and meets all design requirements.',
				},
				{
					id: uuidv4(),
					details:
						'Additionally, the use of a homemade and 3D printed CNC machine offers me an affordable and flexible solution for perfect and unattended fabrication. This allows me to create custom parts and assemblies with a high degree of precision without the need for expensive commercial-grade equipment. Overall, the integration of CAD, CAM, and CNC technologies has revolutionized the way I approach fabrication projects. By leveraging these tools, I am able to create high-quality, custom parts and assemblies that meet my exact specifications with minimal effort and cost.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 8,
		title: 'Artistic 3d Modeling',
		url: '3d',
		category: categories.modeling,
		img: '/images/sculpting/sculpting.jpg',
		ProjectHeader: {
			title: '3d Modeling',
			publishDate: 'Jul 26, 2021',
			tags: '3d Modeling',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: '3d Modeling',
				img: '/images/sculpting/blender-heads.png',
			},
			{
				id: uuidv4(),
				title: '3d Modeling',
				img: '/images/sculpting/chairs.png',
			},
			{
				id: uuidv4(),
				title: '3d Modeling',
				img: '/images/sculpting/house.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: '3d Modeling',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Create character models, game assets, and other 3d objects in which exact dimensions are less important than form and animation',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Blender', 'Unreal Engine'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'As a maker and engineer, I have used several CAD software programs including Fusion 360, SolidWorks, and Inventor to create parts and assemblies for various projects. These programs allow me to create precise 3D models that can be modified, refined, and analyzed before being sent to a CAM software program for toolpath creation.',
				},
				{
					id: uuidv4(),
					details:
						'Once the design is finalized, I use CAM software like Fusion 360 and Inventor CAM to generate toolpaths that will be used by my homemade and 3D printed CNC machine. Depending on the project, I may use either a laser engraver or an end mill to fabricate the parts from a variety of materials including wood, plastics, and metals.',
				},
				{
					id: uuidv4(),
					details:
						'I really appreciate having CAD and CAM software in my workflow because the ability to quickly iterate and refine designs before committing to a final product is absolutely invaluable. This reduces the risk of errors and ensures that the final product is of high quality and meets all design requirements.',
				},
				{
					id: uuidv4(),
					details:
						'Additionally, the use of a homemade and 3D printed CNC machine offers me an affordable and flexible solution for perfect and unattended fabrication. This allows me to create custom parts and assemblies with a high degree of precision without the need for expensive commercial-grade equipment. Overall, the integration of CAD, CAM, and CNC technologies has revolutionized the way I approach fabrication projects. By leveraging these tools, I am able to create high-quality, custom parts and assemblies that meet my exact specifications with minimal effort and cost.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
	{
		id: 9,
		title: 'Cloud Configuration',
		url: 'cloud-config',
		category: categories.server,
		img: '/images/cloud/cloud.png',
		ProjectHeader: {
			title: 'Cloud Configuration',
			publishDate: 'Jul 26, 2021',
			tags: 'Cloud Configuration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Cloud Configuration',
				img: '/images/cloud/aws.png',
			},
			{
				id: uuidv4(),
				title: 'Cloud Configuration',
				img: '/images/cloud/google.jpg',
			},
			{
				id: uuidv4(),
				title: 'Cloud Configuration',
				img: '/images/cloud/azure.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Details',
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Cloud Configuration',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Use the most powerful public computing platforms to process all types of workloads',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'AWS', 'Google Cloud'
					],
				},
			],
			ProjectDetailsHeading: 'About',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'As a software developer, I have extensive experience in configuring code for cloud services, utilizing cloud infrastructure services to scale applications and reduce operational costs. However, for longer-running jobs, I also have experience hosting Linux on-premises.',
				},
				{
					id: uuidv4(),
					details:
						'Running services on-premises can provide greater control and flexibility, allowing developers to fine-tune configurations and optimize performance. While managing and maintaining an on-premises server can be time-consuming and requires technical expertise, the benefits of having 24/7 computing services in house and being able to host longer running processes that wouldn\'t qualify for a cloud platform\'s free tier is invaluable.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// {
				// 	id: uuidv4(),
				// 	name: 'Twitter',
				// 	icon: <FiTwitter />,
				// 	url: 'https://twitter.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Instagram',
				// 	icon: <FiInstagram />,
				// 	url: 'https://instagram.com/realstoman',
				// },
				// {
				// 	id: uuidv4(),
				// 	name: 'Facebook',
				// 	icon: <FiFacebook />,
				// 	url: 'https://facebook.com/',
				// },
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				// {
				// 	id: uuidv4(),
				// 	name: 'Youtube',
				// 	icon: <FiYoutube />,
				// 	url: 'https://www.youtube.com/c/StomanStudio',
				// },
			],
		},
	},
];
