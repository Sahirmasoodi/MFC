import defaultimg from "../assets/defaultimg.jpg";
import { motion } from "framer-motion";
import { FaFutbol } from "react-icons/fa";

const PlayerCard = ({ name, position, number, img }) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all duration-500 cursor-pointer"
      whileHover={{ y: -12 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="relative h-80 overflow-hidden bg-gray-900">
        <motion.img
          src={img || defaultimg}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black via-gray-950/70 to-transparent"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <motion.div
          className="absolute bottom-6 right-6 text-[110px] font-black text-gray-800/50 leading-none select-none group-hover:text-gray-700/60 transition-all duration-300"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {number}
        </motion.div>
      </motion.div>

      <motion.div className="relative p-6 bg-gray-950 text-center">
        <motion.h3
          className="text-2xl font-bold tracking-wide text-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {name}
        </motion.h3>

        <motion.p
          className="text-sm uppercase tracking-[3px] text-gray-500 mt-2 group-hover:text-gray-400 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {position}
        </motion.p>

        <motion.div
          className="w-0 group-hover:w-14 h-0.5 bg-gray-700 mx-auto mt-6 transition-all duration-500 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: 56 }}
        />

        <motion.div
          className="mt-4 inline-block px-3 py-1 text-xs font-semibold rounded-lg bg-gray-900 border border-gray-800 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        >
          #{number}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gray-800/10 rounded-2xl pointer-events-none"
      />

      <motion.div
        className="absolute inset-0 rounded-2xl border-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-gray-600"
      />
    </motion.div>
  );
};

export default PlayerCard;
