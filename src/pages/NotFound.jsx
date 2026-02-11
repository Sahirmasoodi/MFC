import { Link } from "react-router-dom";
import { FaFutbol, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 px-6 text-white">

      {/* Animated Football Icon */}
      <div className="mb-6">
        <FaFutbol className="text-8xl text-gray-400 animate-bounce" />
      </div>

      {/* Big 404 Text */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-gray-500 tracking-widest">
        404
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mt-4">
        Goal Missed!
      </h2>

      {/* Message */}
      <p className="text-gray-300 mt-4 max-w-lg leading-relaxed">
        Looks like the page you’re trying to reach has gone out of play.  
        Don’t worry — even the best teams miss sometimes!
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">

        <Link
          to="/"
          className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <Link
          to="/matches"
          className="bg-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
        >
          View Matches
        </Link>

      </div>

      {/* Fun Footer Text */}
      <p className="mt-10 text-gray-500 text-sm">
        Mustafaabad FC – Passion • Teamwork • Victory
      </p>

    </div>
  );
};

export default NotFound;
