import { FaUsers, FaHandshake, FaFutbol, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const cardData = [
    {
      icon: FaUsers,
      title: "Who We Are",
      text: "Mustafaabad Football Club is a friendly colony-based team formed by local players who share a common love for football. We are not a professional club – we are a group of friends and brothers who come together to enjoy the beautiful game.",
      delay: 0,
    },
    {
      icon: FaHandshake,
      title: "Brotherhood & Spirit",
      text: "Our team is built on friendship, unity and passion. We gather players from our colony and compete with other local teams. Winning is great, but enjoying the game together is what truly matters.",
      delay: 0.1,
    },
    {
      icon: FaFutbol,
      title: "Our Journey",
      text: "Sometimes we play amazing football, sometimes we struggle – but we always give our best. Every match teaches us something new and helps us grow stronger as a team.",
      delay: 0.2,
    },
    {
      icon: FaBullseye,
      title: "Our Mission",
      text: "To unite young players of our colony, promote sportsmanship, and create a positive football culture where everyone gets a chance to play and enjoy the game.",
      delay: 0.3,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated subtle background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-900/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-black text-center mb-16 relative z-10 text-white tracking-tight"
      >
        About Mustafaabad FC
      </motion.h2>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cardData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl p-8 overflow-hidden bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all"
              >
                {/* Subtle hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon with Animation */}
                  <motion.div
                    className="text-5xl mb-6 inline-block text-gray-400 group-hover:text-gray-300 transition-colors"
                    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-400 leading-relaxed text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.text}
                  </motion.p>

                  {/* Animated Line */}
                  <motion.div
                    className="w-0 group-hover:w-12 h-0.5 bg-gray-700 mt-6 rounded-full transition-all duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl p-12 bg-gray-950 border border-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Subtle background animation */}
          <motion.div
            className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100"
          />

          {/* Floating background element */}
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 bg-gray-900/30 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.div className="relative z-10">
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-100 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Values
            </motion.h3>

            <motion.ul
              className="grid md:grid-cols-2 gap-6 text-gray-300 text-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Brotherhood and unity",
                "Respect for the game and opponents",
                "Teamwork over individual glory",
                "Playing with passion and enjoyment",
              ].map((value, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.span
                    className="text-2xl text-gray-500 group-hover:text-gray-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⚽
                  </motion.span>
                  <span className="group-hover:text-gray-200 transition-colors">
                    {value}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
