import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					measurement="6"
				/>

				<CounterItem
					title="Stars on GitHub"
					measurement="5"
				/>

				<CounterItem
					title="Positive feedback"
					measurement="100%"
				/>

				<CounterItem
					title="Reason to remember the name"
					measurement="100%"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
