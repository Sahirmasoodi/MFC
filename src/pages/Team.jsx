import PlayerCard from "../components/PlayerCard";
import aamil from "../assets/aamil.jpeg";
import abdullah from "../assets/abdullah.jpeg";
import imaad from "../assets/imaad.jpeg";
import sahir from "../assets/sahir.jpeg";
import abyaad from "../assets/abyaad.jpeg";
import uzair from "../assets/uzair.jpeg";
import ahmed from "../assets/ahmed.jpeg";
import ans from "../assets/ans.jpeg";
import areeb from "../assets/areeb.jpeg";
import israr from "../assets/israr.jpeg";
import hamid from "../assets/hamid.jpeg";
import atiq from "../assets/atiq.jpeg";
import afgun from "../assets/afgun.jpeg";
import defaultimg from "../assets/defaultimg.jpg";

const Team = () => {
  // ⭐ Playing XI
  const playingPlayers = [
    { name: "Safaan", position: "Captain", number: 10, img: defaultimg },
    { name: "Abdullah", position: "Forward", number: 9, img: abdullah },
    { name: "Ans Tariq", position: "Forward", number: 11, img: ans },
    { name: "Israr", position: "Forward", number: 7, img: israr },
    { name: "Uzair Qadeer", position: "Defender", number: 2, img: uzair },
    { name: "Rehan", position: "Goal Keeper", number: 1, img: defaultimg },
    { name: "Abyaad", position: "Defender", number: 3, img: abyaad },
    { name: "Sahir", position: "Defender", number: 4, img: sahir },
    { name: "Aamil", position: "Forward", number: 8, img: aamil },
    { name: "Imaad", position: "Midfielder", number: 6, img: imaad },
    { name: "Haamid", position: "Midfielder", number: 5, img: hamid },
    { name: "Ahmed", position: "Defender", number: 12, img: ahmed },
    { name: "Mohsin", position: "Defender", number: 13, img: defaultimg },
    { name: "Atiq", position: "Midfielder", number: 14, img: atiq },
  ];

  const otherPlayers = [
    { name: "Rayan", position: "Forward", number: 15, img: defaultimg },
    { name: "Haris", position: "Midfielder", number: 16, img: defaultimg },
    { name: "Basant", position: "Defender", number: 17, img: defaultimg },
    { name: "Shakir", position: "Defender", number: 18, img: defaultimg },
    {
      name: "Aqib Ramzan",
      position: "Midfielder",
      number: 19,
      img: defaultimg,
    },
    { name: "Azhaad", position: "Defender", number: 20, img: defaultimg },
    { name: "Tawfeeq", position: "Midfielder", number: 21, img: defaultimg },
    { name: "Muteeb", position: "Defender", number: 22, img: defaultimg },
    { name: "Hyder", position: "Forward", number: 23, img: defaultimg },
    { name: "Areeb", position: "Forward", number: 24, img: areeb },
    { name: "Afgun", position: "Defender", number: 25, img: afgun },
    { name: "Shahid", position: "Goal Keeper", number: 26, img: defaultimg },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-400 text-sm md:text-base">
          The brothers who represent Mustafaabad FC on the field
        </p>
      </div>

      <div className="mb-16">
       <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-300 inline-block px-6 py-2 border border-gray-700 rounded-full bg-gray-900/50 backdrop-blur-sm">
            Core Squad
          </h3>
        </div>

        <div
          className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8 
          max-w-7xl mx-auto"
        >
          {playingPlayers.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-300 inline-block px-6 py-2 border border-gray-700 rounded-full bg-gray-900/50 backdrop-blur-sm">
            Extended Squad
          </h3>
        </div>

        <div
          className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8 
          max-w-7xl mx-auto"
        >
          {otherPlayers.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
