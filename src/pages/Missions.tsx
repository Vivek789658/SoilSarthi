import { useState } from 'react';
import { Sprout, Droplets, Bug, Leaf, Clock, Target, ChevronDown } from 'lucide-react';

interface MissionsProps {
  onNavigate: (page: string) => void;
}

const missions = [
  {
    id: 1,
    title: 'Switch to Bio-Pesticides',
    description: 'Replace chemical pesticides with organic alternatives for one season',
    category: 'pest_management',
    crop: 'All Crops',
    difficulty: 'medium',
    duration: '90 days',
    points: 150,
    progress: 45,
    icon: Bug,
    season: 'All Seasons',
  },
  {
    id: 2,
    title: 'Mulch Banana Fields',
    description: 'Apply organic mulch to banana plantations for moisture retention',
    category: 'soil',
    crop: 'Banana',
    difficulty: 'easy',
    duration: '21 days',
    points: 80,
    progress: 0,
    icon: Leaf,
    season: 'Monsoon',
  },
  {
    id: 3,
    title: 'Adopt Mixed Cropping',
    description: 'Plant complementary crops together to improve soil health',
    category: 'crop',
    crop: 'Vegetables',
    difficulty: 'hard',
    duration: '120 days',
    points: 200,
    progress: 0,
    icon: Sprout,
    season: 'Summer',
  },
  {
    id: 4,
    title: 'Install Drip Irrigation',
    description: 'Set up drip irrigation system to conserve water',
    category: 'water',
    crop: 'All Crops',
    difficulty: 'medium',
    duration: '30 days',
    points: 120,
    progress: 70,
    icon: Droplets,
    season: 'All Seasons',
  },
  {
    id: 5,
    title: 'Compost Your Farm Waste',
    description: 'Create organic compost from agricultural waste',
    category: 'soil',
    crop: 'All Crops',
    difficulty: 'easy',
    duration: '60 days',
    points: 100,
    progress: 0,
    icon: Leaf,
    season: 'All Seasons',
  },
  {
    id: 6,
    title: 'Rainwater Harvesting Setup',
    description: 'Build a rainwater collection system for irrigation',
    category: 'water',
    crop: 'All Crops',
    difficulty: 'hard',
    duration: '45 days',
    points: 180,
    progress: 0,
    icon: Droplets,
    season: 'Pre-Monsoon',
  },
];

export default function Missions({ onNavigate }: MissionsProps) {
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMissions = missions.filter((mission) => {
    const cropMatch = selectedCrop === 'all' || mission.crop.toLowerCase().includes(selectedCrop);
    const difficultyMatch = selectedDifficulty === 'all' || mission.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'all' || mission.category === selectedCategory;
    return cropMatch && difficultyMatch && categoryMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Available Missions</h1>
          <p className="text-xl text-gray-600">Choose a mission and start earning rewards today</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Crop</label>
              <div className="relative">
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Crops</option>
                  <option value="banana">Banana</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="rice">Rice</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="soil">Soil Health</option>
                  <option value="water">Water Management</option>
                  <option value="crop">Crop Management</option>
                  <option value="pest_management">Pest Management</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
              <div className="relative">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white">
                  <option value="all">All Seasons</option>
                  <option value="summer">Summer</option>
                  <option value="monsoon">Monsoon</option>
                  <option value="winter">Winter</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map((mission) => (
            <div
              key={mission.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden border-l-4 border-green-500"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-white p-2 rounded-full">
                    <mission.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(mission.difficulty)}`}>
                    {mission.difficulty.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{mission.title}</h3>
              </div>

              <div className="p-4">
                <p className="text-gray-600 mb-4 text-sm">{mission.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Sprout className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-medium">Crop:</span>
                    <span className="ml-2">{mission.crop}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{mission.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-medium">Points:</span>
                    <span className="ml-2 text-yellow-600 font-bold">{mission.points} pts</span>
                  </div>
                </div>

                {mission.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-green-600">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <span>{mission.progress > 0 ? 'Continue' : 'Start Mission'}</span>
                  <span>✅</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMissions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No missions found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCrop('all');
                setSelectedDifficulty('all');
                setSelectedCategory('all');
              }}
              className="mt-4 text-green-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
