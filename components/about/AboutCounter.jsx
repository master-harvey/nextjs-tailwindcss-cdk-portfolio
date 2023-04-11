import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 0, duration: 3 });
	useCountUp({ ref: 'feedbackCounter', end: 100, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 100, duration: 4 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					measurement="A few"
				/>

				<CounterItem
					title="Stars on GitHub"
					measurement="A couple"
				/>

				<CounterItem
					title="Positive feedback"
					measurement="100%*"
				/>

				<CounterItem
					title="Projects completed"
					measurement="100%**"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
