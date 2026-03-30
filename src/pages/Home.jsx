import { images } from "../assets/assests";
import { Link } from "react-router-dom";
import { FaFutbol, FaHandshake, FaTrophy, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-black text-white overflow-hidden">

      <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-gray-950/60 via-gray-950/40 to-black/80"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="hidden md:block relative w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={images.desktopHome}
            className="w-full max-h-[90vh] object-fill"
            alt="MFC Desktop Hero"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <motion.div
          className="block md:hidden relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={images.mobileHome}
            className="w-full object-cover"
            alt="MFC Mobile Hero"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        </motion.div>
      </div>

      <motion.section
        className="py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight"
        >
          Welcome to MFC
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-gray-400 px-4 leading-relaxed text-sm md:text-lg"
        >
          Mustafaabad FC is a local football team built on friendship and love
          for the game. We play with heart, represent our colony and enjoy every
          moment on the field.
        </motion.p>
      </motion.section>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center text-center px-4 gap-6 pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/matches"
            className="group relative bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden border border-gray-800 hover:border-gray-700"
          >
            <motion.div
              className="absolute inset-0 bg-gray-800/50"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              View Matches
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight size={16} />
              </motion.span>
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/team"
            className="group relative border-2 border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden hover:border-gray-600 transition-all"
          >
            <motion.div
              className="absolute inset-0 bg-gray-800/30"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Meet Team</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            className="text-3xl md:text-5xl font-black text-center mb-16 text-white tracking-tight"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What Defines Us
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: FaFutbol,
                title: "Friendly Matches",
                text: "We regularly play matches with teams from different colonies and enjoy healthy competition.",
              },
              {
                icon: FaHandshake,
                title: "Team Spirit",
                text: "Unity and brotherhood are the core values of our team on and off the field.",
              },
              {
                icon: FaTrophy,
                title: "Love for Football",
                text: "For us football is more than a game – it is passion, fun and togetherness.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl p-8 overflow-hidden bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all"
              >
                <motion.div
                  className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6 text-gray-400 inline-block group-hover:text-gray-300 transition-colors"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <item.icon />
                  </motion.div>

                  <h4 className="text-2xl font-bold mb-3 text-gray-100">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.text}
                  </p>

                  <motion.div
                    className="w-0 group-hover:w-12 h-0.5 bg-gray-700 mt-6 rounded-full transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10">
          <motion.h3
            className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Want to Play a Match With Us?
          </motion.h3>

          <motion.p
            className="mb-8 text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are always open for friendly matches and new challenges.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg overflow-hidden relative group border border-gray-800 hover:border-gray-700"
            >
              <motion.div
                className="absolute inset-0 bg-gray-800/60"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
