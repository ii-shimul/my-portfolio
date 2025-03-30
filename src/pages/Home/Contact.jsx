import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "portfolio",
        "portfolio-template",
        form.current,
        "ybVKvXmnjPo8qTeNG" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="py-10 md:py-16 px-10 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>

      <p className="text-center mb-10 text-gray-600 dark:text-gray-300">
        Have questions or want to collaborate? Send me a message, and I'll get
        back to you as soon as possible.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            } transition`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Feel free to reach out through any of the platforms below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              <span className="text-gray-700 dark:text-gray-200">
                +880 17566 51557
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 dark:text-red-400 text-xl" />
              <span className="text-gray-700 dark:text-gray-200">
                islamshimul27@gmail.com
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
              <a
                href="https://github.com/ii-shimul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/ii-shimul
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-700 dark:text-blue-500 text-xl" />
              <a
                href="https://linkedin.com/in/ii-shimul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/ii-shimul
              </a>
            </div>
          </div>
        </div>
      </div>

      {status && (
        <p className="text-center mt-6 text-sm text-green-600 dark:text-green-400">
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;
