import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { images } from '../assets/assests';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Matches", path: "/matches" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black backdrop-blur-md text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-3 text-2xl font-bold cursor-pointer transition-transform hover:scale-105"
          >
            <img src={images.logo} alt="MFC Logo" className="w-10 h-10 object-contain" />
            <span className="font-heading tracking-wide">MFC</span>
          </div>

          <ul className="hidden md:flex gap-2 lg:gap-6 font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive 
                        ? "bg-gray-900 text-white shadow-sm" 
                        : "text-gray-00 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
             const isActive = location.pathname === link.path;
             return (
              <Link 
                key={link.name}
                onClick={() => setOpen(false)} 
                to={link.path} 
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-gray-900 text-white" 
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white hover:pl-6"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;