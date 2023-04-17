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
