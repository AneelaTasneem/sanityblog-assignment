// pages/contact.js
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className=" h-[550px] flex flex-col items-center justify-center   bg-white dark:bg-black">
      <h1 className="text-4xl font-bold mb-4 text-black hover:text-gray-600 dark:text-purple-800 dark:hover:text-white">Contact Us</h1>
      <p className=" text-center text-sm md:text-xl lg:text-3xl mb-8 text-black dark:text-white">You can reach us through the following platforms:</p>

      <div className="flex space-x-6 text-3xl text-gray-700 dark:text-purple-800  ">
        <Link href="https://twitter.com/yourusername" target="_blank">
          <div className="hover:text-black dark:hover:text-white">
            <FaTwitter />
          </div>
        </Link>

        <Link href="https://www.instagram.com/yourusername" target="_blank">
          <div className="hover:text-black dark:hover:text-white">
            <FaInstagram />
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/aneela-tasneem-b770192b7" target="_blank">
          <div className="hover:text-black dark:hover:text-white">
            <FaLinkedin />
          </div>
        </Link>

        <Link href="https://github.com/AneelaTasneem" target="_blank">
          <div className="hover:text-black dark:hover:text-white">
            <FaGithub />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
