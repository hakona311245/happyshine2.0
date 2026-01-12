
import React from 'react';
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/media/logo/pnglogo/HAPPY SHINE - LOGO-04 - CROP.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex h-10 items-center mb-6">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="Happy Shine"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Thắp sáng tương lai và lan tỏa sự tin trong con đường học tiếng Anh của các bé cùng Happy Shine.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573773185198&locale=vi_VN" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="flex h-10 items-center mb-6">
              <h4 className="text-xl font-bold">Tìm Hiểu Thêm</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">Giới Thiệu</Link></li>
              <li><Link to="/courses" className="hover:text-red-500 transition-colors">Khóa Học</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Liên Hệ</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Đăng Ký Tư Vấn</Link></li>
            </ul>
          </div>

          <div>
            <div className="flex h-10 items-center mb-6">
              <h4 className="text-xl font-bold">Thông Tin</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/legal-paper" className="hover:text-red-500 transition-colors">Hồ Sơ Pháp Lý</Link></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Công Khai Thông Tin</a></li>
            </ul>
          </div>

          <div>
            <div className="flex h-10 items-center mb-6">
              <h4 className="text-xl font-bold">Hỗ Trợ</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Quận 6: Số 25 đường 32, Phường Bình Phú, TP HCM</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Quận 7: Số 12, đường 5K, Phường Tân Thuận, TP HCM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>093 718 0953</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>maiduong.happyenglish@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Trung tâm Happy Shine. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Smile className="w-4 h-4 text-red-500" /> for the bright minds.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
