import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { images } from "../assets/assests";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Matches", path: "/matches" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl text-white border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-2xl font-bold cursor-pointer"
          >
            <motion.img
              src={images.logo}
              alt="MFC Logo"
              className="w-10 h-10 object-contain"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.span
              className="font-heading tracking-widest text-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              MFC
            </motion.span>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex gap-2 lg:gap-6 font-medium"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.li key={link.name} variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "text-gray-100 bg-gray-900/80"
                          : "text-gray-400 hover:text-gray-100"
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-lg ${
                          isActive
                            ? "bg-gray-800/50"
                            : "bg-gray-800/0 group-hover:bg-gray-800/30"
                        }`}
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span className="relative z-10">
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-900 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute top-20 left-0 w-full bg-black/98 backdrop-blur-xl border-b border-gray-800 overflow-hidden"
      >
        <motion.div
          className="flex flex-col px-4 py-4 space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  onClick={() => setOpen(false)}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gray-900/80 text-gray-100"
                      : "text-gray-400 hover:bg-gray-900/50 hover:text-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
