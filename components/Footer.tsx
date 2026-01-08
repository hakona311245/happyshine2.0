
import React from 'react';
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Smile } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="text-red-500 w-8 h-8" />
              <span className="text-2xl font-fredoka font-bold">Happy Shine</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Illuminating futures and spreading confidence through mastery of the English language since 2012. Join our community of 10,000+ happy students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-red-500 transition-colors">Our Story</a></li>
              <li><a href="#/courses" className="hover:text-red-500 transition-colors">English Courses</a></li>
              <li><a href="#/contact" className="hover:text-red-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Enrollment Guide</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Reach Out</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>123 Sunshine Avenue, Education District, London</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>hello@happyshine.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Happy Shine English Center. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Smile className="w-4 h-4 text-red-500" /> for the bright minds.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
