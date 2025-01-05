// max-w-7xl mx-auto max-sm:px-10 mt-10

import {motion } from "motion/react";

const About = () => {

  return (
    <div
      id="about"
      className="flex items-center justify-center py-20 px-10 md:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Right Section: Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold">Injamamul Islam Shimul</span>, a
          passionate Web Developer and Designer. I specialize in crafting
          visually appealing and functional websites that provide exceptional
          user experiences. My journey in web development has been fueled by a
          love for technology and a dedication to continuous learning.
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          With a focus on innovation, modern design, and responsive layouts, I
          aim to transform ideas into impactful digital solutions. I’m always
          exploring new tools and technologies to stay ahead in the
          fast-evolving tech landscape.
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          Outside of coding, I enjoy solving challenges, brainstorming creative
          solutions, and collaborating with like-minded individuals to bring
          exciting projects to life.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all">
          Let’s Connect
        </button>
      </motion.div>
    </div>
  );
}

export default About;