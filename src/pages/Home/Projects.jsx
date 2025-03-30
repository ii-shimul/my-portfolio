import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
	{
		id: "hostelmate",
		title: "Hostel Management",
		description:
			"A modern, responsive hostel management website built with React.",
		technologies: ["React", "Node.js" , "Firebase", "Material UI", "MongoDB", "Stripe"],
		link: "https://hostelmate-b7e8e.web.app/",
	},
	{
		id: "shareplate",
		title: "Food Sharing Website",
		description:
			"A platform that connects people to share excess food with those in need.",
		technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
		link: "https://shareplate-72dea.web.app/",
	},

	{
		id: "ocean-xplorer",
		title: "Ocean Xplorer",
		description: "A frontend focused sea adventure website.",
		technologies: ["React", "Tailwind", "Firebase", "Framer Motion"],
		link: "https://ocean-xplorer.web.app/",
	},
];

const Projects = () => {
  return (
		<div
			id="projects"
			className="md:py-16 py-10 px-3 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
		>
			<motion.h2
				className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				My Projects
			</motion.h2>

			<div className="max-w-7xl mx-auto max-sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
					>
						<iframe
							src={project.link}
							title="Food Sharing Website"
							className="w-full h-[500px] object-cover"
						></iframe>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-sm mb-4 text-center">{project.description}</p>
							<div className="flex flex-wrap justify-center gap-2 mb-4">
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className="px-3 py-1 text-sm font-medium bg-gray-800 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-center items-center gap-3">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="btn border-none bg-blue-600"
								>
									Live Link
								</a>
								<Link
									to={`/details/${project.id}`}
									rel="noopener noreferrer"
									className="btn btn-soft"
								>
									Details
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Projects;
