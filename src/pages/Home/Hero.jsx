import { Typewriter } from "react-simple-typewriter";
import hero from "../../assets/hero.png";
import ParticlesComponent from "../../components/ParticlesBG";
import { AwesomeButton } from "react-awesome-button";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto max-sm:px-10 max-sm:py-5 relative">
      <ParticlesComponent id="heroBG" />
      <div className="gap-10 flex justify-center items-center">
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
          <p className="max-w-2xl mb-3">
            I design and develop modern, responsive websites that bring your
            ideas to life. As a passionate learner and tech enthusiast, I
            continuously improve my skills to stay ahead in the field. With a
            focus on innovation and user experience, I'm ready to help create
            something amazing with you.
          </p>
          <a
            href="https://drive.google.com/file/d/1L9RtLJ06WGUfuBMuUxhc4eGXCVhAiBBS/view"
            target="_blank"
            rel="noreferrer"
          >
            <AwesomeButton>Download Resume</AwesomeButton>
          </a>
          <div className="flex gap-3 mt-5 text-xl md:text-2xl">
            <a
              href="https://github.com/ii-shimul"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ii-shimul"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/zahannami"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="mailto:islamshimul27@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="max-md:hidden relative flex justify-center items-center">
          <div className="absolute w-[200px] right-0 h-full -z-10 bg-[#dceaf7]"></div>
          <img src={hero} className="h-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
