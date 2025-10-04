import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    'Government Schemes',
    'Training Programs',
    'FAQ',
    'Helpline',
  ];

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>1800-425-1661</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>agri@kerala.gov.in</span>
              </div>
              <p className="text-sm text-green-200 mt-4">
                Department of Agriculture<br />
                Government of Kerala
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-700 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-green-700 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Join our WhatsApp community for daily farming tips and updates
            </p>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-green-200">
          <p>&copy; 2025 SoilSarthi. All rights reserved. Department of Agriculture, Kerala.</p>
        </div>
      </div>
    </footer>
  );
}
