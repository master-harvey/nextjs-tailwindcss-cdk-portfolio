import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';


export const metadata = {
	title: {
		template: "%s | Ian Harvey",
		default: "Ian Harvey",
	},
	openGraph: {
		type: 'website',
		title: 'Ian Harvey',
		description: 'Technical professional that specialize in virtual Process Automation, Computing Architecture, and Robotics',
		url: 'https://ianharvey.pro/'
	},
	description: 'Technical professional that specialize in virtual Process Automation, Computing Architecture, and Robotics',
	metadataBase: new URL('https://www.ianharvey.pro/'),
	applicationName: "Ian Harvey",
	authors: [{ name: "Ian Harvey" }],
	generator: 'Next.js',
	keywords: [
		'automation', 'code', 'robotics', 'robotic process automation', 'denver', 'colorado',
		'digital automation', 'rpa', 'ui path', 'uipath', 'automation anywhere', 'automationanywhere', 'power automate',
		'web development', 'javascript', 'react', 'next.js',
		'node.js', 'web dev', 'html', 'css', 'architecture',
		'python', 'software', 'development',
		'design', 'product design', 'testing'
	],
}

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300 min-h-screen">
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default MyApp;
