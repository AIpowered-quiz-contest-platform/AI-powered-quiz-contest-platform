import React from "react";

// 🔹 Mock Data
const UPCOMING_CONTESTS = [
  {
    id: 1,
    title: "Frontend Battle",
    domain: "Frontend",
    date: "20 April 2026",
    time: "7:00 PM",
  },
  {
    id: 2,
    title: "Backend Challenge",
    domain: "Backend",
    date: "22 April 2026",
    time: "6:00 PM",
  },
];

const PAST_CONTESTS = [
  {
    id: 1,
    title: "React Quiz",
    domain: "Frontend",
    score: 85,
    rank: 5,
    status: "Completed",
  },
  {
    id: 2,
    title: "Node.js Test",
    domain: "Backend",
    score: 72,
    rank: 12,
    status: "Completed",
  },
  {
    id: 3,
    title: "UI Design Basics",
    domain: "UI/UX",
    score: 60,
    rank: 20,
    status: "Completed",
  },
];

// 🔹 Helper for domain colors (same style as leaderboard)
const getDomainColor = (domain) => {
  switch (domain) {
    case "Frontend":
      return "text-sky-500 bg-sky-100 dark:bg-sky-900/30 dark:text-sky-400";
    case "Backend":
      return "text-teal-600 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400";
    case "Data Science":
      return "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400";
    case "UI/UX":
      return "text-pink-600 bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400";
    default:
      return "";
  }
};

const QuizPage = () => {
  return (
    <div className="p-4 md:p-6 space-y-8">

      {/* 🔥 Upcoming Contests */}
      <div className="bg-white rounded-3xl border border-sky-100/50 shadow-lg p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          🚀 Upcoming Contests
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {UPCOMING_CONTESTS.map((contest) => (
            <div
              key={contest.id}
              className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-800">
                  {contest.title}
                </h3>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${getDomainColor(
                    contest.domain
                  )}`}
                >
                  {contest.domain}
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-2">
                📅 {contest.date} • ⏰ {contest.time}
              </p>

              <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl text-sm font-semibold shadow-md shadow-sky-500/30">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🏆 Past Contests */}
      <div className="bg-white rounded-3xl border border-sky-100/50 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-800">
            📊 Past Performance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-4 text-xs text-slate-400 uppercase">
                  Contest
                </th>
                <th className="px-6 py-4 text-xs text-slate-400 uppercase">
                  Domain
                </th>
                <th className="px-6 py-4 text-xs text-slate-400 uppercase text-center">
                  Score
                </th>
                <th className="px-6 py-4 text-xs text-slate-400 uppercase text-center">
                  Rank
                </th>
                <th className="px-6 py-4 text-xs text-slate-400 uppercase text-right">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {PAST_CONTESTS.map((contest) => (
                <tr key={contest.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-800">
                    {contest.title}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-semibold ${getDomainColor(
                        contest.domain
                      )}`}
                    >
                      {contest.domain}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center font-bold text-slate-700">
                    {contest.score}
                  </td>

                  <td className="px-6 py-4 text-center text-slate-600">
                    #{contest.rank}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                      {contest.status}
                    </span>
                  </td>
                </tr>
              ))}

              {PAST_CONTESTS.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-slate-500">
                    No contests attempted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default QuizPage;