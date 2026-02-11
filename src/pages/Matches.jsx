const MatchCard = ({ team1, team2, date, venue, result }) => {
  return (
    <div className="bg-white border-l-4 border-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
      
      <h3 className="text-lg font-bold text-gray-800">
        {team1} vs {team2}
      </h3>

      <p className="text-sm text-gray-600 mt-1">
        {date} | {venue}
      </p>

      {result && (
        <p className="mt-2 text-gray-900 font-semibold">
          Score: {result}
        </p>
      )}
    </div>
  );
};



const Matches = () => {
  const upcomingMatches = [
    {
      team1: "Mustafabad FC",
      team2: "Umarabad FC",
      date: "December 28, 2025",
      venue: "Birla Ground",
    },
    {
      team1: "Mustafabad FC",
      team2: "Parimpora FC",
      date: "May 18, 2025",
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
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">

      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Matches
      </h2>

      {/* Upcoming Matches */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
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
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
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
