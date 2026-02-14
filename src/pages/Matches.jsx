const MatchCard = ({ team1, team2, date, venue, result }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden 
      bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 
      text-white shadow-lg transition-all duration-300 
      hover:-translate-y-1 hover:shadow-2xl">

      {/* Top Section */}
      <div className="relative p-5">

        {/* Teams Row */}
        <div className="flex items-center justify-between text-sm md:text-base font-semibold">
          <span className="truncate">{team1}</span>
          <span className="text-gray-400 mx-2">vs</span>
          <span className="truncate text-right">{team2}</span>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-3 text-center text-lg font-bold tracking-wide">
            {result}
          </div>
        )}

        {/* Match Info */}
        <div className="mt-4 text-xs text-gray-400 text-center">
          <p>{date}</p>
          <p className="mt-1 text-gray-500">{venue}</p>
        </div>

        {/* Animated Line */}
        <div className="w-0 group-hover:w-12 h-0.5 bg-white mx-auto mt-4 transition-all duration-300"></div>
      </div>

      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/5"></div>
    </div>
  );
};


const Matches = () => {
  const upcomingMatches = [
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "February 15, 2026",
      venue: "Maloora Ground",
    },
  ];

  const pastMatches = [
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "July 20, 2025",
      venue: "Maloora Ground",
      result: "4 - 8",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "July 06, 2025",
      venue: "Maloora Ground",
      result: "7 - 5",
    },
    {
      team1: "Mustafabad FC",
      team2: "Maloora FC",
      date: "July 04, 2025",
      venue: "Maloora Ground",
      result: "1 - 7",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 29, 2025",
      venue: "Maloora Ground",
      result: "5 - 3",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 15, 2025",
      venue: "Maloora Ground",
      result: "6 - 7",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 6, 2025",
      venue: "Maloora Ground",
      result: "6 - 6",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "June 1, 2025",
      venue: "Maloora Ground",
      result: "4 - 5",
    },
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "May 25, 2025",
      venue: "Maloora Ground",
      result: "6 - 8",
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-950 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-500">
        Matches
      </h2>

      {/* Upcoming Matches */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-500">
          Upcoming Matches
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </section>

      {/* Past Matches */}
      <section>
        <h3 className="text-2xl font-semibold mb-4 text-gray-500">
          Past Results
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {pastMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Matches;
