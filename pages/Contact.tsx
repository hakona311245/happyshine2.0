
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sun, User, MessageCircle, Smile } from 'lucide-react';
import centerq7 from '@/media/img/gallery/centerq7.jpg';

const Contact: React.FC = () => {
  const locations = [
    {
      name: "Sunshine Quận 7",
      address: "Số 12, đường 5K, Phường Tân Thuận, TP HCM",
      image: centerq7,
      rep: {
        name: "Ms. Phương",
        role: "Đại Diện Quận 7",
        phone: "039 333 3507",
        avatar: ""
      },
      hours: "Mon - Sat: 8:00 AM - 9:00 PM"
    },
    {
      name: "Sunshine Quận 6",
      address: "Số 25 đường 32, Phường Bình Phú, TP HCM",
      image: centerq7,
      rep: {
        name: "Ms. Vy",
        role: "Dại Diện Quận 6",
        phone: "093 718 0953",
        avatar: ""
      },
      hours: "Mon - Fri: 9:00 AM - 8:00 PM"
    }
  ];

  return (
    <div className="bg-white">
      {/* Contact Hero */}
      <section className="bg-red-600 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Sun className="w-80 h-80 animate-spin-slow" style={{ animationDuration: '50s' }} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">Gừi lời chào tới <span className="text-yellow-300">HappyShine</span></h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Bé có thắc mắc? HappyShine có mặt để tìm ra con đường tiếng anh phù hợp với bé nhất.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-slate-900 mb-4">Tới ngay với trung tâm</h2>
            <p className="text-slate-500">Tìm trung tâm gần bạn nhất và gặp đội ngũ của HappyShine.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl group flex flex-col md:flex-row border-4 border-transparent hover:border-red-100 transition-all">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[300px]" 
                  />
                  <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    Sunshine {i + 1}
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-4">{loc.name}</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600 text-sm">{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{loc.hours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Representative Section */}
                  <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Center Representative</p>
                    <div className="flex items-center gap-4">
                      <img src={loc.rep.avatar} alt={loc.rep.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                      <div>
                        <h4 className="font-bold text-slate-900">{loc.rep.name}</h4>
                        <p className="text-xs text-slate-500 mb-1">{loc.rep.role}</p>
                        <a href={`tel:${loc.rep.phone}`} className="flex items-center gap-1.5 text-red-600 font-bold text-sm hover:underline">
                          <Phone className="w-3.5 h-3.5" />
                          {loc.rep.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Smile className="w-4 h-4" />
                <span>Bé đã sẵn sàng bắt đầu chưa?</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-slate-900 mb-8">
                Gửi ngay <span className="text-red-600">Lời Nhắn</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Dù là câu hỏi về khóa học, lịch trình hay bất cứ điều gì khác, đội ngũ của HappyShine luôn sẵn sàng hỗ trợ bé. Hãy điền vào mẫu bên dưới và thầy cô sẽ liên hệ với bé trong thời gian sớm nhất.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Support</p>
                    <p className="font-bold text-slate-900">maiduong.happyenglish@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">SĐT / Zalo</p>
                    <p className="font-bold text-slate-900">093 718 0953</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(239,68,68,0.15)] border border-slate-50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Interested Level</label>
                    <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                      <option>Select a course</option>
                      <option>Kids</option>
                      <option>Primary (Starters/Movers/Flyers)</option>
                      <option>Academic (KET/PET)</option>
                      <option>IELTS Success</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Your Message</label>
                    <textarea placeholder="Tell us about your child's goals..." rows={4} className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none resize-none"></textarea>
                  </div>

                  <button className="w-full group bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-5 rounded-2xl shadow-xl shadow-red-100 transition-all flex items-center justify-center gap-3 active:scale-95 overflow-hidden relative">
                    <span className="relative z-10">Gửi Ngay</span>
                    <Send className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Sun at Footer */}
      <div className="flex justify-center py-10">
        <div className="bg-red-50 p-4 rounded-full">
          <Sun className="w-12 h-12 text-red-600 animate-spin-slow" style={{ animationDuration: '20s' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
