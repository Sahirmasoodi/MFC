import { Link } from "react-router-dom";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
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
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black px-6 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-9xl md:text-[150px]"
          >
            <FaFutbol className="text-gray-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-8xl md:text-9xl font-black tracking-widest mb-4 text-gray-300"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-200"
        >
          Goal Missed! ⚽
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          Looks like the page you're trying to reach has gone out of play. Don't
          worry — even the best teams miss sometimes!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2 mb-8"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gray-600 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden relative group border border-gray-800 hover:border-gray-700 transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-gray-800/50"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaArrowLeft /> Back to Home
              </span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/matches"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden relative group border border-gray-800 hover:border-gray-700 transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-gray-800/50"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaFutbol /> View Matches
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-base mt-8 font-semibold"
        >
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Mustafaabad FC — Passion • Teamwork • Victory
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gray-800 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
