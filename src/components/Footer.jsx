import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { images } from "../assets/assests";

const Footer = () => {
  return (
    <footer className=" w-full z-50 bg-black shadow shadow-gray-500 border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src={images.logo} className="h-9" alt="MFC Logo" />
          <span className="font-semibold text-base tracking-wide">
            Mustafaabad FC
          </span>
        </div>

        <div className="flex items-center gap-4 text-lg">
          
          <FaFacebook className="cursor-pointer text-gray-400 hover:text-white transition duration-200" />

          <a
            href="https://www.instagram.com/mustafaabadfc/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="cursor-pointer text-gray-400 hover:text-pink-500 transition duration-200" />
          </a>

          <FaTwitter className="cursor-pointer text-gray-400 hover:text-blue-400 transition duration-200" />

          <FaYoutube className="cursor-pointer text-gray-400 hover:text-red-500 transition duration-200" />
        </div>
      </div>

      <div className="text-center text-[11px] text-gray-500 pb-2">
        © {new Date().getFullYear()} Mustafaabad Football Club
      </div>
    </footer>
  );
};

export default Footer;