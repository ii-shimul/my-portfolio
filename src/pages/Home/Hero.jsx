import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  return (
    <div className="py-10 px-20">
      <div>
        <h1>
          <span className="text-lg md:text-2xl">Hello, I am</span> <br />
          <span className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-[#4ab7c3] to-blue-400 bg-clip-text text-transparent">
            Injamamul Islam Shimul
          </span>
        </h1>
        <p className="text-xl md:text-4xl mt-3 mb-3">
          I am a{" "}
          <span className="bg-gradient-to-r from-[#388d9b] via-[#388d9b] to-[#358a98] bg-clip-text text-transparent">
            <Typewriter
              words={["Web Developer", "Designer", "Coder"]}
              loop={true}
              speed={200}
              cursor={true}
              cursorStyle="_"
              typeSpeed={100}
            />
          </span>
        </p>
        <p>
          I design and develop modern, responsive websites to bring your ideas
          to life. Let's create something amazing together.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;