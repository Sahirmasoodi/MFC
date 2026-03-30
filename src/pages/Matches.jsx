import { motion } from "framer-motion";
import { FaFutbol } from "react-icons/fa";

const MatchCard = ({ team1, team2, date, venue, result }) => {
  const myTeam = "Mustafabad FC";

  let matchStatus = null;
  let statusColor = "";
  let borderColor = "";

  if (result) {
    const [score1, score2] = result.split("-").map((s) => parseInt(s.trim()));
    const isTeam1 = team1 === myTeam;
    const myScore = isTeam1 ? score1 : score2;
    const opponentScore = isTeam1 ? score2 : score1;

    if (myScore > opponentScore) {
      matchStatus = "WIN";
      statusColor = "text-gray-300";
      borderColor = "border-gray-700 hover:border-gray-600";
    } else if (myScore < opponentScore) {
      matchStatus = "LOSS";
      statusColor = "text-gray-400";
      borderColor = "border-gray-800 hover:border-gray-700";
    } else {
      matchStatus = "DRAW";
      statusColor = "text-gray-400";
      borderColor = "border-gray-700 hover:border-gray-600";
    }
  }

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden bg-gray-950 text-white shadow-lg transition-all duration-300 border ${borderColor}`}
      whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 z-10">
        <motion.div
          className="flex items-center justify-between text-base md:text-lg font-bold gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.span
            className="truncate flex-1 text-right pr-2 text-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            {team1}
          </motion.span>
          <motion.span
            className="text-gray-600 font-light shrink-0"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            vs
          </motion.span>
          <motion.span
            className="truncate flex-1 text-left pl-2 text-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            {team2}
          </motion.span>
        </motion.div>

        {result && (
          <motion.div
            className="mt-6 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className={`text-4xl md:text-5xl font-black tracking-wider ${statusColor}`}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {result}
            </motion.div>

            <motion.div
              className={`mt-3 text-sm font-bold px-4 py-1.5 inline-block rounded-lg bg-gray-900/80 ${statusColor} border border-gray-800 uppercase tracking-widest`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {matchStatus}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="mt-6 text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="text-xs md:text-sm text-gray-500 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            {date}
          </motion.div>

          <motion.div
            className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            {venue}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-0 group-hover:w-20 h-0.5 mx-auto mt-5 transition-all duration-300 bg-gray-700 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: 80 }}
        />
      </div>

      <motion.div
        className="absolute top-3 right-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity text-gray-600"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaFutbol />
      </motion.div>
    </motion.div>
  );
};

const Matches = () => {
  const upcomingMatches = [];

  const pastMatches = [
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "March 27, 2026",
      venue: "Malloora Ground",
      result: "4 - 2",
    },
    {
      team1: "Mustafabad FC",
      team2: "Haroon FC",
      date: "March 26, 2026",
      venue: "HMT Ground",
      result: "5 - 4",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "February 15, 2026",
      venue: "Maloora Ground",
      result: "4 - 4",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "July 20, 2025",
      venue: "Maloora Ground",
      result: "4 - 8",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "July 06, 2025",
      venue: "Maloora Ground",
      result: "7 - 5",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 29, 2025",
      venue: "Maloora Ground",
      result: "5 - 3",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 15, 2025",
      venue: "Maloora Ground",
      result: "6 - 7",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 6, 2025",
      venue: "Maloora Ground",
      result: "6 - 6",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 1, 2025",
      venue: "Maloora Ground",
      result: "4 - 5",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "May 25, 2025",
      venue: "Maloora Ground",
      result: "6 - 8",
    },
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

  return (
    <motion.div
      className="p-6 md:p-10 bg-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-black text-white tracking-tight"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Matches
        </motion.h2>
      </motion.div>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl font-bold mb-8 text-gray-200 flex items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Upcoming Matches
        </motion.h3>

        {upcomingMatches?.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="bg-gray-950 border border-gray-800 rounded-2xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div className="absolute inset-0 bg-gray-900/20" />

            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-gray-300 text-2xl font-bold mb-2">
                No upcoming matches yet
              </p>
              <p className="text-gray-600 text-base">
                Stay tuned for the next fixtures ⚽
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl font-bold mb-8 text-gray-200 flex items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Past Results
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pastMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Matches;
