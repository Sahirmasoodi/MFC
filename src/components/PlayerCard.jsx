const PlayerCard = ({ name, position, number }) => {
  return (
    <div className="relative group bg-linear-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg p-8 text-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>

      <div className="absolute top-4 left-4 text-8xl font-extrabold text-white/5 select-none">
        {number}
      </div>

      <div className="relative z-10">

        <div className="text-5xl font-extrabold text-purple-400 mb-2">
          #{number}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-1">
          {name}
        </h3>

        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          {position}
        </p>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>

      </div>
    </div>
  );
};

export default PlayerCard;
