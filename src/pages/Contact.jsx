import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: ""
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
    <div className="p-6 md:p-10 ">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Contact Mustafaabad FC
        </h2>

        <p className="text-gray-600">
          Want to play a friendly match?  
          Have any questions?  
          Feel free to reach out to us.
        </p>
      </div>

      {/* Form Card */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[600px] bg-white p-8 rounded-lg shadow"
        >

          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full border border-gray-300 p-3 rounded outline-none focus:border-gray-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full border border-gray-300 p-3 rounded outline-none focus:border-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded outline-none focus:border-gray-500 h-36"
              placeholder="Write your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center mt-4">
              Message sent successfully!
            </p>
          )}

        </form>
      </div>

    </div>
  );
};

export default Contact;
