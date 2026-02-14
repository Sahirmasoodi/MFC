import defaultimg from "../assets/defaultimg.jpg";

const PlayerCard = ({ name, position, number, img }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gray-900  border border-gray-800 transition-all duration-500 hover:-translate-y-3 ">

      {/* Player Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={img || defaultimg}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

        {/* Jersey Number (Large Background Style) */}
        <div className="absolute bottom-6 right-6 text-[110px] font-black text-white/10 leading-none select-none">
          {number}
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="relative p-6 bg-gray-950 text-center">

        <h3 className="text-2xl font-bold tracking-wide text-white">
          {name}
        </h3>

        <p className="text-sm uppercase tracking-[4px] text-gray-400 mt-2">
          {position}
        </p>

        {/* Animated Line */}
        <div className="w-0 group-hover:w-16 h-[2px] bg-white mx-auto mt-6 transition-all duration-500"></div>
      </div>

      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5"></div>

    </div>
  );
};

export default PlayerCard;
