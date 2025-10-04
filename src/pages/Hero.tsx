import { ArrowRight, Leaf, Droplets, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Learn eco-friendly farming techniques',
    },
    {
      icon: TrendingUp,
      title: 'Earn Rewards',
      description: 'Get recognized for good farming',
    },
    {
      icon: Droplets,
      title: 'Save Resources',
      description: 'Optimize water and soil usage',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="relative h-[600px] bg-gradient-to-r from-green-900 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Farming Made Fun, Sustainable & Rewarding
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Complete missions, earn rewards, and join a community of progressive farmers.
            </p>
            <button
              onClick={() => onNavigate('missions')}
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <span>Start Your First Mission</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-green-500"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to start your sustainable farming journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Choose Mission', emoji: '🎯' },
            { step: '2', title: 'Complete Task', emoji: '✅' },
            { step: '3', title: 'Upload Proof', emoji: '📸' },
            { step: '4', title: 'Earn Points', emoji: '🏆' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                {item.step}
              </div>
              <p className="text-4xl mb-2">{item.emoji}</p>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Join 10,000+ Farmers Already Making a Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey towards sustainable and profitable farming today
            </p>
            <button
              onClick={() => onNavigate('missions')}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
