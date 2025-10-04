import { Heart, MessageCircle, Share2, Image as ImageIcon, Video } from 'lucide-react';
import { useState } from 'react';

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Suresh Menon',
      avatar: '👨‍🌾',
      village: 'Vellanikkara',
      time: '2 hours ago',
      content: 'Just completed my first drip irrigation setup! Water usage reduced by 40%. Thanks to the SoilSathi community for all the guidance.',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 45,
      comments: 12,
      isLiked: false,
    },
    {
      id: 2,
      author: 'Lakshmi Nair',
      avatar: '👩‍🌾',
      village: 'Chavakkad',
      time: '5 hours ago',
      content: 'My banana plantation after 3 weeks of mulching. The soil moisture retention is amazing! Highly recommend this practice to all fellow farmers.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 67,
      comments: 18,
      isLiked: true,
    },
    {
      id: 3,
      author: 'Ramesh Kumar',
      avatar: '👨‍🌾',
      village: 'Kunnamkulam',
      time: '1 day ago',
      content: 'Switched to bio-pesticides this season. Healthier crops and better yields. The environment wins, and so do we!',
      image: 'https://images.pexels.com/photos/4505169/pexels-photo-4505169.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 89,
      comments: 24,
      isLiked: true,
    },
    {
      id: 4,
      author: 'Priya Krishnan',
      avatar: '👩‍🌾',
      village: 'Irinjalakuda',
      time: '2 days ago',
      content: 'Here is my mixed cropping experiment - tomatoes, beans, and marigolds growing together. The marigolds naturally keep pests away!',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 52,
      comments: 15,
      isLiked: false,
    },
  ]);

  const tips = [
    {
      author: 'Vijayan Pillai',
      tip: 'Water your plants early morning or late evening to minimize evaporation',
      category: 'Water Management',
    },
    {
      author: 'Anjali Thomas',
      tip: 'Neem leaves mixed in compost help keep pests away naturally',
      category: 'Pest Control',
    },
    {
      author: 'Rajesh Kumar',
      tip: 'Rotate crops every season to maintain soil nutrients',
      category: 'Soil Health',
    },
  ];

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Community</h1>
          <p className="text-xl text-gray-600">Share your success stories and learn from others</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">👨‍🌾</div>
                <input
                  type="text"
                  placeholder="Share your farming success story..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                  <ImageIcon className="w-5 h-5" />
                  <span>Photo</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                  <Video className="w-5 h-5" />
                  <span>Video</span>
                </button>
                <button className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Post
                </button>
              </div>
            </div>

            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-4xl">{post.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{post.author}</h3>
                      <p className="text-sm text-gray-600">
                        {post.village} • {post.time}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-80 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${post.isLiked
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-red-600' : ''}`} />
                      <span className="font-semibold">{post.likes}</span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-semibold">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Community Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Members</span>
                  <span className="text-2xl font-bold">10,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Posts Today</span>
                  <span className="text-2xl font-bold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Active Now</span>
                  <span className="text-2xl font-bold">423</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tips from Fellow Farmers</h2>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-start space-x-2 mb-2">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="text-sm text-gray-700 mb-2">{tip.tip}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">- {tip.author}</span>
                          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                            {tip.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white text-center">
              <h2 className="text-xl font-bold mb-3">Join WhatsApp Group</h2>
              <p className="text-sm text-blue-100 mb-4">
                Get daily farming tips, weather updates, and connect with 5000+ farmers
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
