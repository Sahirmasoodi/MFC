import { images } from "../assets/assests";
import { Link } from "react-router-dom";
import { FaFutbol, FaHandshake, FaTrophy } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full bg-gray-950 text-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full">

        {/* Desktop Image */}
        <img
          src={images.desktopHome}
          className="hidden md:block w-full max-h-[90vh] object-fill"
          alt="MFC Desktop Hero"
        />

        {/* Mobile Image */}
        <img
          src={images.mobileHome}
          className="block md:hidden w-full object-cover"
          alt="MFC Mobile Hero"
        />

        {/* Dark Overlay */}
      

        {/* Hero Content */}
      
      </div>

      <section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to MFC
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 px-4 leading-relaxed text-sm md:text-base">
          Mustafaabad FC is a local football team built on friendship and love
          for the game. We play with heart, represent our colony and enjoy every
          moment on the field.
        </p>
      </section>
  <div className=" flex flex-col items-center justify-center text-center px-4">
         

          <div className="flex gap-4">
            <Link
              to="/matches"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold 
              hover:bg-gray-200 transition-all duration-300"
            >
              View Matches
            </Link>

            <Link
              to="/team"
              className="border border-white px-6 py-3 rounded-lg 
              hover:bg-white hover:text-black transition-all duration-300"
            >
              Meet Team
            </Link>
          </div>
        </div>
     
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
            What Defines Us
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {[{
              icon: <FaFutbol />,
              title: "Friendly Matches",
              text: "We regularly play matches with teams from different colonies and enjoy healthy competition."
            },
            {
              icon: <FaHandshake />,
              title: "Team Spirit",
              text: "Unity and brotherhood are the core values of our team on and off the field."
            },
            {
              icon: <FaTrophy />,
              title: "Love for Football",
              text: "For us football is more than a game – it is passion, fun and togetherness."
            }].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-8 
                bg-linear-to-br from-gray-900 via-gray-800 to-gray-900
                shadow-xl transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-6 flex justify-center 
                  transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm md:text-base">
                  {item.text}
                </p>

                <div className="w-0 group-hover:w-16 h-[2px] bg-white mx-auto mt-6 transition-all duration-500"></div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Want to Play a Match With Us?
        </h3>

        <p className="mb-8 text-gray-400">
          We are always open for friendly matches and new challenges.
        </p>

        <Link
          to="/contact"
          className="bg-white text-black px-8 py-3 rounded-lg 
          font-semibold hover:bg-gray-200 
          transition-all duration-300 hover:scale-[1.05]"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default Home;
