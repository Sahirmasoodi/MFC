const MatchCard = ({ team1, team2, date, venue, result }) => {
  const myTeam = "Mustafabad FC";

  let matchStatus = null; // win | loss | draw
  let statusColor = "";
  let borderColor = "";

  if (result) {
    const [score1, score2] = result.split("-").map((s) => parseInt(s.trim()));

    const isTeam1 = team1 === myTeam;

    const myScore = isTeam1 ? score1 : score2;
    const opponentScore = isTeam1 ? score2 : score1;

    if (myScore > opponentScore) {
      matchStatus = "WIN";
      statusColor = "text-green-400";
      borderColor = "border-green-500/40";
    } else if (myScore < opponentScore) {
      matchStatus = "LOSS";
      statusColor = "text-red-400";
      borderColor = "border-red-500/40";
    } else {
      matchStatus = "DRAW";
      statusColor = "text-gray-400";
      borderColor = "border-gray-500/40";
    }
  }

  return (
    <div
      className={`group relative rounded-xl overflow-hidden 
      bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 
      text-white shadow-lg transition-all duration-300 
      hover:-translate-y-1 hover:shadow-2xl border ${borderColor}`}
    >
      <div className="relative p-5">
        {/* Teams Row */}
        <div className="flex items-center justify-between text-sm md:text-base font-semibold">
          <span className="truncate">{team1}</span>
          <span className="text-gray-400 mx-2">vs</span>
          <span className="truncate text-right">{team2}</span>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-4 text-center">
            <div className={`text-2xl font-bold tracking-wider ${statusColor}`}>
              {result}
            </div>

            <div
              className={`mt-2 text-xs font-semibold px-3 py-1 inline-block rounded-full 
              bg-white/10 ${statusColor}`}
            >
              {matchStatus}
            </div>
          </div>
        )}

        {/* Match Info */}
        <div className="mt-5 text-xs text-gray-400 text-center">
          <p>{date}</p>
          <p className="mt-1 text-gray-500">{venue}</p>
        </div>

        {/* Animated Accent Line */}
        <div
          className={`w-0 group-hover:w-16 h-0.5 mx-auto mt-4 transition-all duration-300 ${
            matchStatus === "WIN"
              ? "bg-green-400"
              : matchStatus === "LOSS"
              ? "bg-red-400"
              : "bg-gray-400"
          }`}
        ></div>
      </div>

      {/* Soft Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ${
          matchStatus === "WIN"
            ? "bg-green-500/5"
            : matchStatus === "LOSS"
            ? "bg-red-500/5"
            : "bg-white/5"
        }`}
      ></div>
    </div>
  );
};


const Matches = () => {
  const upcomingMatches = [
    // {
    //   team1: "Mustafabad FC",
    //   team2: "Umarabad FC",
    //   date: "February 15, 2026",
    //   venue: "Maloora Ground",
    // },
  ];

  const pastMatches = [
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "February 15, 2026",
      venue: "Maloora Ground",
      result: "4 - 4",
    },
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

  {upcomingMatches?.length > 0 ? (
    <div className="grid md:grid-cols-2 gap-6">
      {upcomingMatches.map((match, index) => (
        <MatchCard key={index} {...match} />
      ))}
    </div>
  ) : (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
      <p className="text-gray-400 text-lg font-medium">
        No upcoming matches yet
      </p>
      <p className="text-gray-600 text-sm mt-2">
        Stay tuned for the next fixtures ⚽
      </p>
    </div>
  )}
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
