import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

const GuestFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-poppins text-2xl mb-4">
              Sedap<span className="text-hijau">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering the best food experience with fresh ingredients and authentic recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hijau transition-colors">
                <FacebookOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hijau transition-colors">
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hijau transition-colors">
                <TwitterOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hijau transition-colors">
                <YoutubeOutlined style={{ fontSize: '24px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guest" className="text-gray-400 hover:text-hijau transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/guest#about" className="text-gray-400 hover:text-hijau transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/guest#products" className="text-gray-400 hover:text-hijau transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/guest#testimonials" className="text-gray-400 hover:text-hijau transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Restaurant Street, Jakarta, Indonesia</li>
              <li>Phone: +62 123 456 7890</li>
              <li>Email: info@sedap.com</li>
              <li>Hours: 10:00 AM - 10:00 PM</li>
            </ul>
          </div>

          {/* Partners */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Our Partners</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://via.placeholder.com/100x50?text=Partner1" alt="Partner 1" className="bg-white rounded p-2" />
              <img src="https://via.placeholder.com/100x50?text=Partner2" alt="Partner 2" className="bg-white rounded p-2" />
              <img src="https://via.placeholder.com/100x50?text=Partner3" alt="Partner 3" className="bg-white rounded p-2" />
              <img src="https://via.placeholder.com/100x50?text=Partner4" alt="Partner 4" className="bg-white rounded p-2" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2023 Sedap Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;
