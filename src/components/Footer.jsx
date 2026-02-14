import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { images } from "../assets/assests";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      <div className=" mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={images.logo} className="h-10" alt="MFC Logo" />
          <span className="font-bold text-lg -ms-2">Mustafaabad FC</span>
        </div>
        

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <FaFacebook className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-3 text-xs">
        © {new Date().getFullYear()} Mustafaabad Football Club
      </div>

    </footer>
  );
};

export default Footer;
