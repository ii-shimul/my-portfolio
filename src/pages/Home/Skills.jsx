import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-6xl mx-auto mt-10 max-sm:px-10 pb-10">
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:gap-7">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            <div
              className={`flex items-center justify-center text-6xl text-gray-700 dark:text-gray-100 hover:text-[${skill.color}]`}
              onMouseEnter={(e) => (e.currentTarget.style.color = skill.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h3 className="text-center mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
