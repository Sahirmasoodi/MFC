import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { images } from "../assets/assests";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, label: "Facebook", link: "#" },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/mustafaabadfc/",
    },
    { icon: FaTwitter, label: "Twitter", link: "#" },
    { icon: FaYoutube, label: "YouTube", link: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      className="w-full z-50 bg-black shadow-2xl border-t border-gray-800 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center gap-3 group cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={images.logo}
            className="h-10 w-10 object-contain"
            alt="MFC Logo"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.span
            className="font-bold text-lg tracking-wide text-gray-200 group-hover:text-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Mustafaabad FC
          </motion.span>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 text-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                {social.link === "#" ? (
                  <motion.button
                    className="text-gray-500 hover:text-gray-300 transition-all duration-300"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    <Icon className="text-2xl" />
                  </motion.button>
                ) : (
                  <motion.a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-300 transition-all duration-300"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                )}

                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-800"
                  initial={{ y: 5, opacity: 0 }}
                  whileHover={{ y: -5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.label}
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 -z-10 bg-gray-700 transition-opacity duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center text-sm text-gray-600 pb-3 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.p
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          © {new Date().getFullYear()} Mustafaabad Football Club • Passion • Teamwork • Victory
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-800 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.footer>
  );
};

export default Footer;
