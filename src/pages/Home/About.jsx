import { motion } from "motion/react";
import Education from "./Education";

const About = () => {
  return (
    <div
      id="about"
      className="py-10 md:py-14 max-sm:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 dark:text-white mb-8">
        About Me
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-center md:text-left"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-6 text-center">
            Me in my own words
          </h3>
          <p className="md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I’m{" "}
            <span className="font-semibold">Injamamul Islam Shimul</span>, a
            passionate Web Developer and Designer. I specialize in crafting
            visually appealing and functional websites that provide exceptional
            user experiences. My journey in web development has been fueled by a
            love for technology and a dedication to continuous learning.
          </p>

          <p className="md:text-xl text-gray-600 dark:text-gray-300 mt-4 mb-6 leading-relaxed">
            Outside of coding, I enjoy solving challenges, brainstorming
            creative solutions, and collaborating with like-minded individuals
            to bring exciting projects to life.
          </p>
          <a
            href="#contact"
            className=" px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Let’s Connect
          </a>
        </motion.div>
        <Education></Education>
      </div>
    </div>
  );
};

export default About;
