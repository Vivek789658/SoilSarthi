import { Trophy, Medal, Award, TrendingUp, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Leaderboard() {
  const [selectedPanchayat, setSelectedPanchayat] = useState('all');

  const leaderboardData = [
    {
      rank: 1,
      name: 'Suresh Menon',
      village: 'Vellanikkara',
      panchayat: 'Thrissur',
      score: 945,
      avatar: '👨‍🌾',
      badge: 'Eco Hero',
    },
    {
      rank: 2,
      name: 'Lakshmi Nair',
      village: 'Chavakkad',
      panchayat: 'Thrissur',
      score: 890,
      avatar: '👩‍🌾',
      badge: 'Water Warrior',
    },
    {
      rank: 3,
      name: 'Ramesh Kumar',
      village: 'Kunnamkulam',
      panchayat: 'Thrissur',
      score: 875,
      avatar: '👨‍🌾',
      badge: 'Soil Saver',
    },
    {
      rank: 4,
      name: 'Priya Krishnan',
      village: 'Irinjalakuda',
      panchayat: 'Thrissur',
      score: 820,
      avatar: '👩‍🌾',
      badge: 'Bio Champion',
    },
    {
      rank: 5,
      name: 'Vijayan Pillai',
      village: 'Chalakudy',
      panchayat: 'Thrissur',
      score: 795,
      avatar: '👨‍🌾',
      badge: 'Crop Master',
    },
    {
      rank: 6,
      name: 'Anjali Thomas',
      village: 'Kodungallur',
      panchayat: 'Thrissur',
      score: 760,
      avatar: '👩‍🌾',
      badge: 'Green Pioneer',
    },
    {
      rank: 7,
      name: 'Rajesh Kumar',
      village: 'Thrissur',
      panchayat: 'Thrissur',
      score: 675,
      avatar: '👨‍🌾',
      badge: 'Soil Saver',
      isCurrentUser: true,
    },
    {
      rank: 8,
      name: 'Meera Varma',
      village: 'Guruvayur',
      panchayat: 'Thrissur',
      score: 640,
      avatar: '👩‍🌾',
      badge: 'Water Warrior',
    },
    {
      rank: 9,
      name: 'Krishnan Nair',
      village: 'Wadakkanchery',
      panchayat: 'Thrissur',
      score: 615,
      avatar: '👨‍🌾',
      badge: 'Bio Champion',
    },
    {
      rank: 10,
      name: 'Savithri Amma',
      village: 'Mala',
      panchayat: 'Thrissur',
      score: 590,
      avatar: '👩‍🌾',
      badge: 'Crop Master',
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-8 h-8 text-yellow-500" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Medal className="w-8 h-8 text-orange-600" />;
      default:
        return <Award className="w-6 h-6 text-green-600" />;
    }
  };

  const getRankBgColor = (rank: number, isCurrentUser?: boolean) => {
    if (isCurrentUser) return 'bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-500';
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-yellow-100';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100';
    if (rank === 3) return 'bg-gradient-to-r from-orange-50 to-orange-100';
    return 'bg-white';
  };

  const panchayats = ['all', 'Thrissur', 'Ernakulam', 'Palakkad', 'Malappuram'];

  const filteredData =
    selectedPanchayat === 'all'
      ? leaderboardData
      : leaderboardData.filter((f) => f.panchayat === selectedPanchayat);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Community Leaderboard</h1>
          <p className="text-xl text-gray-600">See how you rank among fellow farmers</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-700">Filter by Panchayat:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {panchayats.map((panchayat) => (
                <button
                  key={panchayat}
                  onClick={() => setSelectedPanchayat(panchayat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPanchayat === panchayat
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {panchayat === 'all' ? 'All Areas' : panchayat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {filteredData.slice(0, 3).map((farmer) => (
            <div
              key={farmer.rank}
              className={`${getRankBgColor(farmer.rank)} rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all`}
            >
              <div className="flex justify-center mb-4">{getRankIcon(farmer.rank)}</div>
              <div className="text-6xl mb-3">{farmer.avatar}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{farmer.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {farmer.village}, {farmer.panchayat}
              </p>
              <div className="bg-white rounded-lg py-3 px-4 inline-block shadow-sm">
                <div className="text-3xl font-bold text-green-600">{farmer.score}</div>
                <div className="text-xs text-gray-600">Sustainability Score</div>
              </div>
              <div className="mt-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm inline-block">
                🏆 {farmer.badge}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
            <h2 className="text-2xl font-bold text-white">Full Rankings</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredData.map((farmer) => (
              <div
                key={farmer.rank}
                className={`${getRankBgColor(farmer.rank, farmer.isCurrentUser)} p-4 hover:shadow-md transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12">
                      {farmer.rank <= 3 ? (
                        getRankIcon(farmer.rank)
                      ) : (
                        <div className="text-xl font-bold text-gray-600">#{farmer.rank}</div>
                      )}
                    </div>

                    <div className="text-4xl">{farmer.avatar}</div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-bold text-gray-800">{farmer.name}</h3>
                        {farmer.isCurrentUser && (
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                            YOU
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {farmer.village}, {farmer.panchayat}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block text-center px-4">
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      🏆 {farmer.badge}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">{farmer.score}</span>
                    </div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>

                <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
                  <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                    🏆 {farmer.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No farmers found in this panchayat.</p>
          </div>
        )}
      </div>
    </div>
  );
}
