import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai'

function AIMLBanner() {
    return <div className='mt-28'>
        <h2 className="text-3xl mb-2 text-center text-primary-dark dark:text-primary-light">Wondering how your team can fully utilize the power of the latest AI?</h2>
        <p className="text-xl text-center text-primary-dark dark:text-primary-light w-3/4 mx-auto">I provide training on the latest tools, and can seamlessly enhance your team&apos;s workflow with ChatGPT, Dalle-2, MidJourney, Agent Frameworks, Robotic Process Automation, and more.</p>
        <br />
        <div className="max-w-fit mx-auto text-center">
            <Link href="/contact" aria-label="Contact" className='text-center mx-auto max-w-fit'>
                <button className="max-w-fit font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
                    <div className="flex flex-row space-x-1 max-w-fit items-center">
                        <p className="max-w-fit">Contact me</p>
                        <AiOutlineArrowRight />
                    </div>
                </button>
            </Link>
        </div>
        <br />
        <p className="text-md text-center text-primary-dark dark:text-primary-light w-3/4 mx-auto font-bold">Not excited about AI yet? Artificial Intelligence is the final fronteir of automation.</p>
        <p className="text-md text-center text-primary-dark dark:text-primary-light w-3/4 mx-auto">It has the potential to accelerate almost every workflow</p>
    </div>
}

export default AIMLBanner;
