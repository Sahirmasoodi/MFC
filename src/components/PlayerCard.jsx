const PlayerCard = ({ name, position, number }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center transition hover:shadow-xl border border-gray-100">

      {/* Jersey Number */}
      <div className="text-6xl font-extrabold text-gray-300 mb-2">
        #{number}
      </div>

      {/* Player Name - MAIN FOCUS */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {name}
      </h3>

      {/* Position */}
      <p className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
        {position}
      </p>

      {/* Simple Divider */}
      <div className="w-16 h-1 bg-gray-800 mx-auto mt-4 rounded"></div>

    </div>
  );
};

export default PlayerCard;
