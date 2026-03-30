import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("access_key", "e531d982-107d-41a8-bead-6eabefeb4f5b");

      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError(true);
    }

    setLoading(false);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="text-center mb-14 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight"
        >
          Contact Mustafaabad FC
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-xl mx-auto text-base md:text-lg"
        >
          Want to play a friendly match? Have any questions? Feel free to reach
          out to us and let's build something amazing together.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto relative z-10 items-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="flex-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: FaPhone,
              title: "Call Us",
              info: "+91 6005351153",
            },
            {
              icon: FaEnvelope,
              title: "Email Us",
              info: "contact@mustafaabadfc.com",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Find Us",
              info: "Mustafaabad Zainakote, Srinagar",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative rounded-2xl p-6 overflow-hidden bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className="text-4xl text-gray-400 group-hover:text-gray-300 transition-colors"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.info}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full bg-gray-950 p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gray-900/30 opacity-0"
            />

            <div className="relative z-10">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-gray-300 mb-2 text-sm font-semibold">
                  Your Name
                </label>
                <motion.input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-900 border-2 border-gray-800 text-white p-4 rounded-xl outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700/30 transition-all duration-300 placeholder-gray-600"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label className="block text-gray-300 mb-2 text-sm font-semibold">
                  Email Address
                </label>
                <motion.input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-900 border-2 border-gray-800 text-white p-4 rounded-xl outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700/30 transition-all duration-300 placeholder-gray-600"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-300 mb-2 text-sm font-semibold">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows="5"
                  className="w-full bg-gray-900 border-2 border-gray-800 text-white p-4 rounded-xl outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700/30 transition-all duration-300 resize-none placeholder-gray-600"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg overflow-hidden relative group border border-gray-800 hover:border-gray-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800/50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">
                  {loading ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ⚽ Sending...
                    </motion.span>
                  ) : (
                    "Send Message"
                  )}
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="bg-gray-900 text-gray-200 px-6 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-2xl border border-gray-800"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaCheckCircle className="text-2xl text-gray-400" />
              Message sent successfully!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="bg-gray-900 text-gray-200 px-6 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-2xl border border-gray-800"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaExclamationCircle className="text-2xl text-gray-500" />
              Something went wrong. Try again!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
