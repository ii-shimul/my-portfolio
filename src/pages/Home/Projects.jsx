import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Sharing Website",
    description:
      "A platform that connects people to share excess food with those in need.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://shareplate-72dea.web.app/",
  },
  {
    title: "Adventure Website",
    description: "A modern, responsive adventure website built with React.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://ocean-xplorer.web.app/",
  },
  {
    title: "Movie Store",
    description:
      "A full-stack movie platform with user authentication.",
    technologies: ["React", "Express", "Stripe", "MongoDB"],
    link: "https://moviemania-660e7.web.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-20 px-3 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-sm mb-4">{project.description}</p>
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
