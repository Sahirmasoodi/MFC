import PlayerCard from "../components/PlayerCard";
import aamil from "../assets/aamil.jpeg";
import abdullah from "../assets/abdullah.jpeg";
import imaad from "../assets/imaad.jpeg";
import sahir from "../assets/sahir.jpeg";
import abyaad from "../assets/abyaad.jpeg";
import uzair from "../assets/uzair.jpeg";
import ahmed from "../assets/ahmed2.jpeg";
import ans from "../assets/ans.jpeg";
import areeb from "../assets/areeb.jpeg";
import israr from "../assets/israr.jpeg";
import atiq from "../assets/atiq.jpeg";
import afgun from "../assets/afgun.jpeg";
import defaultimg from "../assets/defaultimg.jpg";
const Team = () => {
  const players = [
    { name: "Safaan", position: "Captain", number: 12, img: defaultimg },
    { name: "Abdullah", position: "Forward", number: 7, img: abdullah },
    { name: "Ans Tariq", position: "Forward", number: 17, img: ans },
    { name: "Israr", position: "Forward", number: 10, img: israr },
    { name: "Tawfeeq", position: "Midfielder", number: 23, img: defaultimg },
    { name: "Uzair Qadeer", position: "Defender", number: 9, img: uzair },
    { name: "Aqib Ramzan", position: "Midfielder", number: 8, img: defaultimg },
    { name: "Ahmed", position: "Defender", number: 5, img: ahmed },
    { name: "Rayan", position: "Forward", number: 11, img: defaultimg },
    { name: "Rehan", position: "Goal Keeper", number: 19, img: defaultimg },
    { name: "Abyaad", position: "Defender", number: 4, img: abyaad },
    { name: "Haris", position: "Midfielder", number: 14, img: defaultimg },
    { name: "Sahir", position: "Defender", number: 29, img: sahir },
    { name: "Basant", position: "Defender", number: 13, img: defaultimg },
    { name: "Aamil", position: "Forward", number: 6, img: aamil },
    { name: "Shakir", position: "Defender", number: 27, img: defaultimg },
    { name: "Atiq", position: "Midfielder", number: 16, img: atiq },
    { name: "Azhaad", position: "Defender", number: 15, img: defaultimg },
    { name: "Imaad", position: "Defender", number: 21, img: imaad },
    { name: "Haamid", position: "Defender", number: 14, img: defaultimg },
    { name: "Mohsin", position: "Defender", number: 18, img: defaultimg },
    { name: "Muteeb", position: "Defender", number: 22, img: defaultimg },
    { name: "Hyder", position: "Forward", number: 1, img: defaultimg },
    { name: "Areeb", position: "Forward", number: 28, img: areeb },
    { name: "Afgun", position: "Defender", number: 30, img: afgun },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>

        <p className="text-gray-400 text-sm md:text-base">
          The brothers who represent Mustafaabad FC on the field
        </p>
      </div>

      {/* Players Grid */}
      <div
        className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8 
        max-w-7xl mx-auto"
      >
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default Team;
