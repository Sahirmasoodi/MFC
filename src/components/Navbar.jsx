import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {images} from '../assets/assests'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg relative">
      <div className="flex justify-between items-center">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src={images.logo} className="size-10 bg-transparent" />
          <span className="-ml-2 font-heading">MFC</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/team" className="hover:text-purple-400">Team</Link>
          <Link to="/matches" className="hover:text-purple-400">Matches</Link>
          <Link to="/gallery" className="hover:text-purple-400">Gallery</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-800 absolute left-0 top-full w-full flex flex-col text-center py-4 gap-4 z-50">
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-purple-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/team" className="hover:text-purple-400">Team</Link>
          <Link onClick={() => setOpen(false)} to="/matches" className="hover:text-purple-400">Matches</Link>
          <Link onClick={() => setOpen(false)} to="/gallery" className="hover:text-purple-400">Gallery</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="hover:text-purple-400">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-purple-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
