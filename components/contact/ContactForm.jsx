import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useState } from 'react';

function ContactForm() {
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	function submitForm(e) {
		e.preventDefault()
		setSuccess(false); setError(false); setLoading(true);
		fetch("https://446mz2xyrcz35ret4r5i2rtkee0esajl.lambda-url.us-east-2.on.aws/", {
			method: "PUT", headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				subject: document.getElementById("subject").value,
				message: document.getElementById("message").value
			}),
		}).catch(() => setError(true)).then(() => setSuccess(true)).finally(() => setLoading(false))
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => submitForm(e)}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form  {loading && "- Sending..."}{error && "- Error"}{success && "- Thank You!"}
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
					<p className="mt-2">{error && "How embarassing :|"}{success && "You'll hear back from me soon!"}</p>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
