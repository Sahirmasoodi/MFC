import { images } from "../assets/assests";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photoList = [
    images.img9,
    images.img1,
    images.img2,
    images.img7,
    images.img3,
    images.img4,
    images.img5,
    images.img6,
    images.img8,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

     

      <motion.div
        className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {photoList.map((img, index) => (
          <motion.div
            key={index}
            className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-gray-950"
            layoutId={`gallery-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative overflow-hidden h-full">
              <motion.img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              />

              <motion.div
                className="absolute inset-0 rounded-2xl border-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-gray-700"
              />

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <motion.div
                  className="bg-gray-900/80 backdrop-blur-md p-4 rounded-full border border-gray-700"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaExpand className="text-gray-300 text-2xl" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gray-900/20 rounded-2xl pointer-events-none"
              />
            </div>

            <motion.div
              className="absolute top-4 left-4 bg-gray-900/70 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-800"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              #{index + 1}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full h-auto max-h-[90vh] rounded-2xl overflow-hidden bg-gray-950 border border-gray-800"
              layoutId={`gallery-${selectedImage}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={photoList[selectedImage]}
                alt={`gallery-${selectedImage}`}
                className="w-full h-full object-contain"
              />

              <motion.button
                className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-md p-3 rounded-full text-gray-300 hover:text-white transition-all border border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-2xl">✕</span>
              </motion.button>

              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-md p-3 rounded-full text-gray-300 hover:text-white transition-all border border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : photoList.length - 1))}
              >
                ←
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-md p-3 rounded-full text-gray-300 hover:text-white transition-all border border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage((prev) => (prev < photoList.length - 1 ? prev + 1 : 0))}
              >
                →
              </motion.button>

              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-lg text-gray-300 font-semibold border border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {selectedImage + 1} / {photoList.length}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
