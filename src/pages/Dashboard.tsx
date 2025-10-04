import { Award, TrendingUp, Calendar, Target, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const sustainabilityScore = 675;
  const maxScore = 1000;
  const scorePercentage = (sustainabilityScore / maxScore) * 100;

  const badges = [
    { name: 'Soil Saver', icon: '🌱', earned: true, color: 'from-green-500 to-green-600' },
    { name: 'Water Warrior', icon: '💧', earned: true, color: 'from-blue-500 to-blue-600' },
    { name: 'Bio Champion', icon: '🦋', earned: true, color: 'from-purple-500 to-purple-600' },
    { name: 'Crop Master', icon: '🌾', earned: false, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Eco Hero', icon: '🏆', earned: false, color: 'from-orange-500 to-orange-600' },
    { name: 'Green Pioneer', icon: '⭐', earned: false, color: 'from-teal-500 to-teal-600' },
  ];

  const recentActivity = [
    { date: '2025-10-02', activity: 'Completed "Mulch Banana Fields" mission', points: 80 },
    { date: '2025-09-28', activity: 'Started "Switch to Bio-Pesticides" mission', points: 0 },
    { date: '2025-09-25', activity: 'Earned "Water Warrior" badge', points: 50 },
    { date: '2025-09-20', activity: 'Completed "Install Drip Irrigation" mission', points: 120 },
  ];

  const weeklyProgress = [
    { day: 'Mon', score: 45 },
    { day: 'Tue', score: 60 },
    { day: 'Wed', score: 55 },
    { day: 'Thu', score: 75 },
    { day: 'Fri', score: 80 },
    { day: 'Sat', score: 70 },
    { day: 'Sun', score: 90 },
  ];

  const maxWeeklyScore = Math.max(...weeklyProgress.map((d) => d.score));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-xl text-gray-600">Track your sustainable farming journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Sustainability Score</h2>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#22c55e"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - scorePercentage / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-4xl font-bold text-gray-800">{sustainabilityScore}</span>
                  <span className="text-sm text-gray-600">out of {maxScore}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Missions Done</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-md p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Farm Details</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-green-200">Farmer Name</div>
                <div className="text-lg font-semibold">Rajesh Kumar</div>
              </div>
              <div>
                <div className="text-sm text-green-200">Location</div>
                <div className="text-lg font-semibold">Thrissur, Kerala</div>
              </div>
              <div>
                <div className="text-sm text-green-200">Farm Size</div>
                <div className="text-lg font-semibold">3.5 acres</div>
              </div>
              <div>
                <div className="text-sm text-green-200">Primary Crop</div>
                <div className="text-lg font-semibold">Rice & Vegetables</div>
              </div>
              <div>
                <div className="text-sm text-green-200">Member Since</div>
                <div className="text-lg font-semibold">March 2025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Badges Earned</h2>
              <Award className="w-6 h-6 text-yellow-500" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl text-center transition-all ${
                    badge.earned
                      ? `bg-gradient-to-br ${badge.color} text-white shadow-lg transform hover:scale-105`
                      : 'bg-gray-100 text-gray-400 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <div className="text-xs font-semibold">{badge.name}</div>
                  {badge.earned && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Weekly Progress</h2>
              <Calendar className="w-6 h-6 text-green-600" />
            </div>

            <div className="flex items-end justify-between h-48 space-x-2">
              {weeklyProgress.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-200 rounded-t-lg relative" style={{ height: `${(day.score / maxWeeklyScore) * 100}%` }}>
                    <div className="bg-green-500 w-full h-full rounded-t-lg"></div>
                    <div className="absolute -top-6 left-0 right-0 text-center text-xs font-semibold text-gray-600">
                      {day.score}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2 font-medium">{day.day}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600">Weekly Average</div>
              <div className="text-2xl font-bold text-green-600">
                {Math.round(weeklyProgress.reduce((a, b) => a + b.score, 0) / weeklyProgress.length)} pts/day
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
            <Target className="w-6 h-6 text-green-600" />
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{activity.activity}</div>
                    <div className="text-sm text-gray-500">{activity.date}</div>
                  </div>
                </div>
                {activity.points > 0 && (
                  <div className="bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-yellow-700">+{activity.points} pts</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
