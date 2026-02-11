import { FaUsers, FaHandshake, FaFutbol, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-6 md:p-10 ">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        About Mustafaabad FC
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Who We Are */}
        <div className="bg-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-2xl text-gray-800" />
            <h3 className="text-2xl font-semibold">Who We Are</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Mustafaabad Football Club is a friendly colony-based team formed by local players who share a common love for football.  
            We are not a professional club – we are a group of friends and brothers who come together to enjoy the beautiful game.
          </p>
        </div>

        {/* Brotherhood */}
        <div className="bg-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <FaHandshake className="text-2xl text-gray-800" />
            <h3 className="text-2xl font-semibold">Brotherhood & Spirit</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Our team is built on friendship, unity and passion.  
            We gather players from our colony and compete with other local teams.  
            Winning is great, but enjoying the game together is what truly matters.
          </p>
        </div>

        {/* Journey */}
        <div className="bg-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <FaFutbol className="text-2xl text-gray-800" />
            <h3 className="text-2xl font-semibold">Our Journey</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Sometimes we play amazing football, sometimes we struggle – but we always give our best.  
            Every match teaches us something new and helps us grow stronger as a team.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-2xl text-gray-800" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            To unite young players of our colony, promote sportsmanship, and create a positive football culture where everyone gets a chance to play and enjoy the game.
          </p>
        </div>

      </div>

      {/* Values Section */}
      <div className="max-w-5xl mx-auto mt-10 bg-gray-200 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Our Values
        </h3>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-center gap-2">
            • Brotherhood and unity
          </li>
          <li className="flex items-center gap-2">
            • Respect for the game and opponents
          </li>
          <li className="flex items-center gap-2">
            • Teamwork over individual glory
          </li>
          <li className="flex items-center gap-2">
            • Playing with passion and enjoyment
          </li>
        </ul>
      </div>

    </div>
  );
};

export default About;
