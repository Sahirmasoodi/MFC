import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      // Web3Forms Access Key
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

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Mustafaabad FC
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Want to play a friendly match? Have any questions? Feel free to reach
          out to us.
        </p>
      </div>

      {/* Form Card */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[600px] 
          bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
          p-8 rounded-2xl shadow-2xl
          transition-all duration-500 hover:shadow-3xl"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2 text-sm">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full bg-gray-950 border border-gray-700 
              p-3 rounded-lg outline-none 
              focus:border-white focus:ring-1 focus:ring-white 
              transition"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2 text-sm">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full bg-gray-950 border border-gray-700 
              p-3 rounded-lg outline-none 
              focus:border-white focus:ring-1 focus:ring-white 
              transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-950 border border-gray-700 
              p-3 rounded-lg outline-none 
              focus:border-white focus:ring-1 focus:ring-white 
              transition h-36"
              placeholder="Write your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg 
            font-semibold transition-all duration-300 
            hover:bg-gray-200 hover:scale-[1.02] 
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4 text-sm">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
