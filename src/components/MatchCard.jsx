const MatchCard = ({ team1, team2, date, time, venue, result }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">
          {team1} vs {team2}
        </h3>
      </div>

      <p className="text-sm mt-2">📅 {date}</p>
      <p className="text-sm">⏰ {time}</p>
      <p className="text-sm">📍 {venue}</p>

      {result && (
        <p className="mt-3 font-semibold text-gray-700">
          Result: {result}
        </p>
      )}
    </div>
  );
};

export default MatchCard;
