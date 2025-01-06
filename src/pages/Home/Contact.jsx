import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

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
      className="py-20 px-10 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>

      <p className="text-center mb-10 text-gray-600 dark:text-gray-300">
        Have questions or want to collaborate? Send me a message, and I’ll get
        back to you as soon as possible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
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

      {status && (
        <p className="text-center mt-6 text-sm text-green-600 dark:text-green-400">
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;
