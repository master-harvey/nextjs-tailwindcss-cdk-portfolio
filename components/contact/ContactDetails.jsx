import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaUserAstronaut } from 'react-icons/fa'

const contacts = [
	{
		id: 0,
		name: 'Ian Harvey',
		icon: <FaUserAstronaut />,
	},
	{
		id: 1,
		name: 'Denver, Colorado',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'info@mastersautomation.tech',
		icon: <FiMail />,
	}
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<p className="text-lg text-ternary-dark dark:text-ternary-light">Commercial AI integration, custom software development, and reliable tech support tailored to your team&apos;s needs.</p>
			</div>
		</div>
	);
}

export default ContactDetails;
