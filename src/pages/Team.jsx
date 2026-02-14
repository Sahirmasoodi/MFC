import PlayerCard from "../components/PlayerCard";
import aamil from "../assets/aamil.jpeg";
import abdullah from "../assets/abdullah.jpeg";
import imaad from "../assets/imaad.jpeg";
import sahir from "../assets/sahir.jpeg";
import defaultimg from "../assets/defaultimg.jpg";
const Team = () => {
 const players = [
  { name: "Abdullah", position: "Captain", number: 7, img: abdullah },
  { name: "Ans Tariq", position: "Forward", number: 17, img: defaultimg },
  { name: "Israr", position: "Forward", number: 10, img: defaultimg },
  { name: "Tawfeeq", position: "Midfielder", number: 23, img: defaultimg },
  { name: "Safaan", position: "Forward", number: 12, img: defaultimg },
  { name: "Uzair Qadeer", position: "Defender", number: 9, img: defaultimg },
  { name: "Aqib Ramzan", position: "Midfielder", number: 8, img: defaultimg },
  { name: "Ahmed", position: "Defender", number: 5, img: defaultimg },
  { name: "Rayan", position: "Forward", number: 11, img: defaultimg },
  { name: "Rehan", position: "Goal Keeper", number: 19, img: defaultimg },
  { name: "Abiyaad", position: "Defender", number: 24, img: defaultimg },
  { name: "Haris", position: "Midfielder", number: 14, img: defaultimg },
  { name: "Sahir", position: "Defender", number: 29, img: sahir },
  { name: "Basant", position: "Defender", number: 13, img: defaultimg },
  { name: "Aamil", position: "Forward", number: 6, img: aamil },
  { name: "Atiq", position: "Midfielder", number: 16, img: defaultimg },
  { name: "Azhaad", position: "Defender", number: 15, img: defaultimg },
  { name: "Imaad", position: "Defender", number: 21, img: imaad },
  { name: "Haamid", position: "Defender", number: 14, img: defaultimg },
  { name: "Mohsin", position: "Defender", number: 18, img: defaultimg },
  { name: "Muteeb", position: "Defender", number: 22, img: defaultimg },
  { name: "Hyder", position: "Forward", number: 1, img: defaultimg },
  { name: "Areeb", position: "Forward", number: 28, img: defaultimg },
];


  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Team
      </h2>

      <p className="text-center text-gray-600 mb-8">
        The brothers who represent Mustafaabad FC on the field
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default Team;
