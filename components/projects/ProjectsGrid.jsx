import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid(props) {
	const [searchProject, setSearchProject] = useState();
	const [selectProject, setSelectProject] = useState();

	// @todo - To be fixed
	// const searchProjectsByTitle = projectsData.filter((item) => {
	// 	const result = item.title
	// 		.toLowerCase()
	// 		.includes(searchProject.toLowerCase())
	// 		? item
	// 		: searchProject == ''
	// 		? item
	// 		: '';
	// 	return result;
	// });

	const selectProjectsByFeatured = projectsData.filter((item) => { return item.feature ?? false });

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
					{props.featured && "Featured "}Services portfolio
				</p>
			</div>

			<div className="mt-6 sm:mt-10">
				<div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
					<div className="flex ml-auto gap-2">
						<input
							className="ont-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
							onChange={(e) => setSearchProject(e.target.value)}
							id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name"
						/>
						<span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{props.featured
					? selectProjectsByFeatured.map((project, index) => {
						return <ProjectSingle key={index} {...project} />;
					})
					: projectsData.map((project, index) => (
						<ProjectSingle key={index} {...project} />
					))}
			</div>
		</section>
	);
}

export default ProjectsGrid;
