import { useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
	{
		id: "shareplate",
		title: "SharePlate - Food Sharing Platform",
		description:
			"A platform that connects individuals to share excess food with those in need, aiming to reduce food waste and support communities.",
		technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
		image: "/assets/SharePlate.png",
		liveLink: "https://shareplate-72dea.web.app/",
		repoLink: "https://github.com/ii-shimul/project-shareplate",
		challenges: [
			"Implementing real-time updates for food availability.",
			"Ensuring secure user authentication and data privacy.",
			"Designing an intuitive and responsive user interface.",
		],
		improvements: [
			"Integrating geolocation features to facilitate local food sharing.",
			"Developing a mobile application for broader accessibility.",
			"Implementing a rating system to build trust among users.",
		],
	},
	{
		id: "hostelmate",
		title: "HostelMate",
		description:
			"A meal management system where users can browse, order, and review meals while admins can manage meals, track revenue, and handle upcoming meal requests. Features include user authentication, payments, meal filtering, and a dark mode UI.",
		technologies: ["React", "Firebase", "Material UI", "MongoDB", "Stripe"],
		image: "/assets/MealMaster.png",
		liveLink: "https://hostelmate-b7e8e.web.app/",
		repoLink: "https://github.com/ii-shimul/project-hostelmate",
		challenges: [
			"Implementing efficient server-side filtering and pagination.",
			"Ensuring smooth dark mode compatibility with Material UI.",
			"Handling secure payments and order management with Stripe.",
		],
		improvements: [
			"Adding AI-based meal recommendations for users.",
			"Enhancing the admin dashboard with real-time analytics.",
			"Integrating a delivery tracking system for meal orders.",
		],
	},
	{
		id: "ocean-xplorer",
		title: "Ocean Xplorer",
		description:
			"An educational platform that provides interactive learning experiences about ocean life, marine species, and environmental awareness.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
		image: "/assets/OceanXplorer.png",
		liveLink: "https://ocean-xplorer.web.app/",
		repoLink: "https://github.com/ii-shimul/project-ocean-xplorer",
		challenges: [
			"Optimizing performance for interactive content.",
			"Implementing real-time data fetching with Supabase.",
			"Ensuring accessibility for a diverse audience.",
		],
		improvements: [
			"Adding more interactive quizzes and learning modules.",
			"Implementing an AI-powered chatbot for ocean-related questions.",
			"Enhancing mobile responsiveness for a better user experience.",
		],
	},
];

const Details = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return (
			<p className="text-center text-red-500 text-xl">Project not found.</p>
		);
	}

	return (
		<div className="max-w-7xl mx-auto py-16 px-6">
			<h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
				{project.title}
			</h2>
			<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
				{project.description}
			</p>

			{/* Project Image */}
			<iframe
				src={project.liveLink}
				title="Food Sharing Website"
				className="w-full h-[500px] object-cover my-4 rounded-md"
			></iframe>

			{/* Technology Stack */}
			<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
				Tech Stack Used
			</h3>
			<ul className="flex flex-wrap gap-3 mb-6">
				{project.technologies.map((tech, index) => (
					<li
						key={index}
						className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-white"
					>
						{tech}
					</li>
				))}
			</ul>

			{/* Live and Repo Links */}
			<div className="flex gap-4 mb-6">
				<a
					href={project.liveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
				>
					Live Project <FaExternalLinkAlt />
				</a>
				<a
					href={project.repoLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition"
				>
					GitHub Repo <FaGithub />
				</a>
			</div>

			{/* Challenges Faced */}
			<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
				Challenges Faced
			</h3>
			<ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
				{project.challenges.map((challenge, index) => (
					<li key={index}>{challenge}</li>
				))}
			</ul>

			{/* Potential Improvements */}
			<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
				Future Improvements
			</h3>
			<ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
				{project.improvements.map((improvement, index) => (
					<li key={index}>{improvement}</li>
				))}
			</ul>
		</div>
	);
};

export default Details;
