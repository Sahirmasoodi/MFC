import { images } from "../assets/assests";
import { Link } from "react-router-dom";
import { FaFutbol, FaHandshake, FaTrophy } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full">
        {/* Desktop Image */}
        <img
          src={images.desktopHome}
          className="hidden md:block w-screen max-h-[93vh] object-fill"
          alt="MFC Desktop Hero"
        />

        {/* Mobile Image */}
        <img
          src={images.mobileHome}
          className="block md:hidden w-full object-contain"
          alt="MFC Mobile Hero"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Mustafaabad Football Club
          </h1>

          <div className="flex gap-4">
            <Link
              to="/matches"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition"
            >
              View Matches
            </Link>

            <Link
              to="/team"
              className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Meet Team
            </Link>
          </div>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section className="py-14  text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to MFC
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 px-4 leading-relaxed">
          Mustafaabad FC is a local football team built on friendship and love
          for the game. We play with heart, represent our colony and enjoy every
          moment on the field.
        </p>
      </section>

      {/* FEATURES SECTION - IMPROVED */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What Defines Us
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Card 1 */}
            <div className="bg-gray-50 border rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <FaFutbol className="text-5xl text-gray-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Friendly Matches</h4>
              <p className="text-gray-600">
                We regularly play matches with teams from different colonies and
                enjoy healthy competition.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-5xl text-gray-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Team Spirit</h4>
              <p className="text-gray-600">
                Unity and brotherhood are the core values of our team on and off
                the field.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <FaTrophy className="text-5xl text-gray-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Love for Football</h4>
              <p className="text-gray-600">
                For us football is more than a game – it is passion, fun and
                togetherness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - IMPROVED */}
      <section className="py-16  text-center">
        <h3 className="text-3xl font-bold mb-4">
          Want to Play a Match With Us?
        </h3>

        <p className="mb-6 text-gray-500">
          We are always open for friendly matches and new challenges.
        </p>

        <Link
          to="/contact"
          className="bg-gray-200 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
