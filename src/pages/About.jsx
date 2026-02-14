import { FaUsers, FaHandshake, FaFutbol, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        About Mustafaabad FC
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Card Template */}
        {[
          {
            icon: <FaUsers />,
            title: "Who We Are",
            text: "Mustafaabad Football Club is a friendly colony-based team formed by local players who share a common love for football. We are not a professional club – we are a group of friends and brothers who come together to enjoy the beautiful game."
          },
          {
            icon: <FaHandshake />,
            title: "Brotherhood & Spirit",
            text: "Our team is built on friendship, unity and passion. We gather players from our colony and compete with other local teams. Winning is great, but enjoying the game together is what truly matters."
          },
          {
            icon: <FaFutbol />,
            title: "Our Journey",
            text: "Sometimes we play amazing football, sometimes we struggle – but we always give our best. Every match teaches us something new and helps us grow stronger as a team."
          },
          {
            icon: <FaBullseye />,
            title: "Our Mission",
            text: "To unite young players of our colony, promote sportsmanship, and create a positive football culture where everyone gets a chance to play and enjoy the game."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl p-6 
              bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 
              shadow-xl transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl text-white group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {item.text}
            </p>

            {/* Animated Line */}
            <div className="w-0 group-hover:w-16 h-[2px] bg-white mt-6 transition-all duration-500"></div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 rounded-2xl"></div>
          </div>
        ))}

      </div>

      {/* Values Section */}
      <div className="max-w-5xl mx-auto mt-16 
        bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 
        p-8 rounded-2xl shadow-xl text-center">

        <h3 className="text-2xl md:text-3xl font-semibold mb-8">
          Our Values
        </h3>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-400 text-sm md:text-base">
          <li>• Brotherhood and unity</li>
          <li>• Respect for the game and opponents</li>
          <li>• Teamwork over individual glory</li>
          <li>• Playing with passion and enjoyment</li>
        </ul>
      </div>

    </div>
  );
};

export default About;
