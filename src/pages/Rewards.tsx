import { GraduationCap, Ticket, Award, Users, Lock, CheckCircle } from 'lucide-react';

export default function Rewards() {
  const currentPoints = 675;

  const rewards = [
    {
      id: 1,
      title: 'Free Government Training Program',
      description: 'Access to advanced sustainable farming training by Kerala Agricultural University',
      type: 'training',
      icon: GraduationCap,
      pointsRequired: 500,
      isUnlocked: true,
      isClaimed: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Organic Fertilizer Discount',
      description: '30% discount voucher for organic fertilizers from authorized dealers',
      type: 'discount',
      icon: Ticket,
      pointsRequired: 300,
      isUnlocked: true,
      isClaimed: true,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Excellence Certificate',
      description: 'Official certificate of recognition from Department of Agriculture, Kerala',
      type: 'certificate',
      icon: Award,
      pointsRequired: 600,
      isUnlocked: true,
      isClaimed: false,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 4,
      title: 'Bio-Pesticide Starter Kit',
      description: 'Free starter kit with organic pest control solutions worth Rs. 2000',
      type: 'discount',
      icon: Ticket,
      pointsRequired: 700,
      isUnlocked: false,
      isClaimed: false,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      title: 'Public Recognition Award',
      description: 'Feature in Kerala Agriculture Magazine and social media recognition',
      type: 'recognition',
      icon: Users,
      pointsRequired: 800,
      isUnlocked: false,
      isClaimed: false,
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 6,
      title: 'Advanced Irrigation Workshop',
      description: 'Exclusive workshop on modern drip and sprinkler irrigation systems',
      type: 'training',
      icon: GraduationCap,
      pointsRequired: 900,
      isUnlocked: false,
      isClaimed: false,
      color: 'from-teal-500 to-teal-600',
    },
    {
      id: 7,
      title: 'Soil Testing Kit',
      description: 'Professional soil testing kit with lab analysis support',
      type: 'discount',
      icon: Ticket,
      pointsRequired: 1000,
      isUnlocked: false,
      isClaimed: false,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 8,
      title: 'Master Farmer Badge',
      description: 'Prestigious recognition as a Master Sustainable Farmer with exclusive benefits',
      type: 'recognition',
      icon: Award,
      pointsRequired: 1200,
      isUnlocked: false,
      isClaimed: false,
      color: 'from-red-500 to-red-600',
    },
  ];

  const getProgressPercentage = (required: number) => {
    return Math.min((currentPoints / required) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Rewards & Incentives</h1>
          <p className="text-xl text-gray-600">Unlock amazing rewards as you progress</p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Points Balance</h2>
              <p className="text-green-200">Keep earning to unlock more rewards</p>
            </div>
            <div className="bg-white text-green-700 rounded-full w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold">{currentPoints}</div>
                <div className="text-sm">points</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500 bg-opacity-30 rounded-lg p-4">
              <div className="text-2xl font-bold">{rewards.filter((r) => r.isUnlocked && !r.isClaimed).length}</div>
              <div className="text-sm text-green-100">Available to Claim</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 rounded-lg p-4">
              <div className="text-2xl font-bold">{rewards.filter((r) => r.isClaimed).length}</div>
              <div className="text-sm text-green-100">Already Claimed</div>
            </div>
            <div className="bg-green-500 bg-opacity-30 rounded-lg p-4">
              <div className="text-2xl font-bold">{rewards.filter((r) => !r.isUnlocked).length}</div>
              <div className="text-sm text-green-100">Locked Rewards</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward) => {
            const progress = getProgressPercentage(reward.pointsRequired);
            return (
              <div
                key={reward.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                  reward.isUnlocked ? 'hover:shadow-xl transform hover:-translate-y-1' : 'opacity-75'
                }`}
              >
                <div className={`bg-gradient-to-r ${reward.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">
                      <reward.icon className="w-8 h-8" />
                    </div>
                    {reward.isUnlocked ? (
                      reward.isClaimed ? (
                        <div className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>Claimed</span>
                        </div>
                      ) : (
                        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                          Available
                        </div>
                      )
                    ) : (
                      <div className="bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Lock className="w-4 h-4" />
                        <span>Locked</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{reward.title}</h3>
                  <p className="text-sm text-white text-opacity-90">{reward.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Points Required</span>
                      <span className="text-gray-800 font-bold">{reward.pointsRequired} pts</span>
                    </div>

                    {!reward.isUnlocked && (
                      <>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                          <div
                            className={`bg-gradient-to-r ${reward.color} h-3 rounded-full transition-all`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {reward.pointsRequired - currentPoints} more points needed
                        </p>
                      </>
                    )}
                  </div>

                  {reward.isUnlocked && !reward.isClaimed && (
                    <button className={`w-full bg-gradient-to-r ${reward.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-md`}>
                      Claim Reward 🎉
                    </button>
                  )}

                  {reward.isClaimed && (
                    <button className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed" disabled>
                      Already Claimed
                    </button>
                  )}

                  {!reward.isUnlocked && (
                    <button className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center space-x-2" disabled>
                      <Lock className="w-5 h-5" />
                      <span>Keep Farming to Unlock</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Earn More Points?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">Complete Missions</h3>
                <p className="text-sm text-gray-600">Earn 50-200 points per mission</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-gray-800 mb-2">Earn Badges</h3>
                <p className="text-sm text-gray-600">Get 50 bonus points per badge</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="font-bold text-gray-800 mb-2">Share on Community</h3>
                <p className="text-sm text-gray-600">Earn 20 points per popular post</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold text-gray-800 mb-2">Refer Farmers</h3>
                <p className="text-sm text-gray-600">Get 100 points per referral</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
