import PlayerCard from "../components/PlayerCard";
import aamil from "../assets/aamil.jpeg";
import abdullah from "../assets/abdullah.jpeg";
import imaad from "../assets/imaad.jpeg";
import sahir from "../assets/sahir.jpeg";
import abyaad from "../assets/abyaad.jpeg";
import uzair from "../assets/uzair.jpeg";
import ahmed from "../assets/ahmed.jpeg";
import ans from "../assets/ans.jpg";
import areeb from "../assets/areeb.jpeg";
import israr from "../assets/israr.jpeg";
import hamid from "../assets/hamid.jpeg";
import atiq from "../assets/atiq.jpeg";
import afgun from "../assets/afgun.jpeg";
import shahid from "../assets/shahid.jpg";
import haris from "../assets/haris.jpg";
import rehan from "../assets/rehan.jpeg";
import safaan from "../assets/safaan.png";
import mohsin from "../assets/mohsin.png";
import basant from "../assets/basant.png";
import defaultimg from "../assets/defaultimg.jpg";
import { motion } from "framer-motion";
import { FaFutbol } from "react-icons/fa";

const Team = () => {
  const playingPlayers = [
    { name: "Safaan", position: "Captain", number: 10, img: safaan },
    { name: "Abdullah", position: "Forward", number: 9, img: abdullah },
    { name: "Ans Tariq", position: "Forward", number: 11, img: ans },
    { name: "Israr", position: "Forward", number: 7, img: israr },
    { name: "Uzair Qadeer", position: "Defender", number: 2, img: uzair },
    { name: "Rehan", position: "Goal Keeper", number: 1, img: rehan },
    { name: "Abyaad", position: "Defender", number: 3, img: abyaad },
    { name: "Sahir", position: "Defender", number: 4, img: sahir },
    { name: "Aamil", position: "Forward", number: 8, img: aamil },
    { name: "Imaad", position: "Midfielder", number: 6, img: imaad },
    { name: "Haamid", position: "Midfielder", number: 5, img: hamid },
    { name: "Ahmed", position: "Defender", number: 12, img: ahmed },
    { name: "Mohsin", position: "Defender", number: 13, img: mohsin },
    { name: "Atiq", position: "Midfielder", number: 14, img: atiq },
  ];

  const otherPlayers = [
    { name: "Rayan", position: "Forward", number: 15, img: defaultimg },
    { name: "Haris", position: "Midfielder", number: 16, img: haris },
    { name: "Basant", position: "Defender", number: 17, img: basant },
    { name: "Shakir", position: "Defender", number: 18, img: defaultimg },
    { name: "Aqib Ramzan", position: "Midfielder", number: 19, img: defaultimg },
    { name: "Azhaad", position: "Defender", number: 20, img: defaultimg },
    { name: "Tawfeeq", position: "Midfielder", number: 21, img: defaultimg },
    { name: "Muteeb", position: "Defender", number: 22, img: defaultimg },
    { name: "Hyder", position: "Forward", number: 23, img: defaultimg },
    { name: "Areeb", position: "Forward", number: 24, img: areeb },
    { name: "Afgun", position: "Defender", number: 25, img: afgun },
    { name: "Shahid", position: "Goal Keeper", number: 26, img: shahid },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="text-center mb-14 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={titleVariants}
          className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight"
        >
          Our Team
        </motion.h2>

        <motion.p
          variants={titleVariants}
          className="text-gray-400 text-base md:text-lg"
        >
          The brothers who represent Mustafaabad FC on the field
        </motion.p>
      </motion.div>

      
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 px-8 py-3 bg-gray-900/60 border border-gray-800 rounded-full backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-200">Core Squad</h3>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {playingPlayers.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
            >
              <PlayerCard {...player} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 px-8 py-3 bg-gray-900/60 border border-gray-800 rounded-full backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-200">Extended Squad</h3>
            
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherPlayers.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
            >
              <PlayerCard {...player} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Team;