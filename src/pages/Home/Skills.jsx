import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26", level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 85 },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 80 },
  { name: "React", icon: <FaReact />, color: "#61DAFB", level: 75 },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: 80 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    level: 75,
  },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 70 },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 85 },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-7xl mx-auto mt-10 max-sm:px-10"
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 lg:gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group"
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
            {/* Circular Progress Bar */}
            <CircularProgressbarWithChildren
              value={skill.level}
              styles={{
                path: { stroke: skill.color, strokeWidth: 6 },
                trail: { stroke: "#eee", strokeWidth: 6 },
              }}
              className=""
            >
              <div className="text-7xl text-gray-700 dark:text-gray-100">
                {skill.icon}
              </div>
            </CircularProgressbarWithChildren>

            {/* Skill Name */}
            <h3 className="text-center mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
              {skill.name}
            </h3>

            {/* Tooltip */}
            <div
              id={`tooltip-${skill.name}`}
              className="absolute bottom-20 hidden group-hover:block z-50 text-sm p-2 bg-gray-800 text-white rounded shadow-md"
              style={{ transform: "translateY(110%)" }}
            >
              Proficiency: {skill.level}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
