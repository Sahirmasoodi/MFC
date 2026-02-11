import PlayerCard from "../components/PlayerCard";

const Team = () => {
  const players = [
    { name: "Abdullah", position: "Captain", number: 7 },
    { name: "Ans Tariq", position: "Forward", number: 17 },
    { name: "Israr", position: "Forward", number: 10 },
    { name: "Safaan", position: "Forward", number: 12 },
    { name: "Uzair Qadeer", position: "Defender", number: 9 },
    { name: "Aqib Ramzan", position: "Midfielder", number: 8 },
    { name: "Ahmed", position: "Defender", number: 5 },
    { name: "Rayan", position: "Forward", number: 11 },
    { name: "Haris", position: "Midfielder", number: 14 },
    { name: "Sahir", position: "Defender", number: 1 },
    { name: "Basant", position: "Defender", number: 13 },
    { name: "Aamil", position: "Forward", number: 6 },
    { name: "Atiq", position: "Midfielder", number: 16 },
    { name: "Azhaad", position: "Defender", number: 15 },
    { name: "Imaad", position: "Defender", number: 21 },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">

      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Team
      </h2>

      <p className="text-center text-gray-600 mb-8">
        The brothers who represent Mustafaabad FC on the field
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default Team;
