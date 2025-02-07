import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-10 md:px-20">
      <div className="max-w-5xl mx-auto flex md:justify-around max-md:flex-col max-md:justify-center max-md:gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Connect with Me
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ii-shimul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ii-shimul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:islamshimul27@gmail.com"
              className="text-red-400 hover:text-white transition text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} II Shimul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
