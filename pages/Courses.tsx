
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Star, ArrowRight, Smile, Rocket, Wind, Key, CheckCircle, GraduationCap, Flag } from 'lucide-react';
import StudentAchievements from '../components/StudentAchievements';

export const courseData = [
  {
    id: 'kids',
    num: '01',
    title: 'Kids',
    subtitle: 'Early Explorers',
    description: 'Nơi niềm vui bắt đầu! Giúp trẻ làm quen với tiếng Anh qua các hoạt động trò chơi, bài hát và những câu chuyện thú vị.',
    icon: <Smile className="w-8 h-8" />,
    color: 'bg-yellow-400 text-white',
    accent: 'text-yellow-600',
    tag: 'Pre-A1'
  },
  {
    id: 'starters',
    num: '02',
    title: 'Starters',
    subtitle: 'First Steps',
    description: 'Bước đầu tiên cho các bé trong các kỹ năng nghe, nói, đọc và viết cơ bản bằng tiếng Anh.',
    icon: <Star className="w-8 h-8" />,
    color: 'bg-orange-400 text-white',
    accent: 'text-orange-600',
    tag: 'Pre-A1 (Cambridge)'
  },
  {
    id: 'movers',
    num: '03',
    title: 'Movers',
    subtitle: 'Active Learners',
    description: 'Developing practical communication skills. Students start taking part in simple conversations.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'bg-red-500 text-white',
    accent: 'text-red-700',
    tag: 'A1 (Cambridge)'
  },
  {
    id: 'flyers',
    num: '04',
    title: 'Flyers',
    subtitle: 'Confident Speakers',
    description: 'The bridge to intermediate English. Mastery of everyday written and spoken English.',
    icon: <Wind className="w-8 h-8" />,
    color: 'bg-pink-500 text-white',
    accent: 'text-pink-700',
    tag: 'A2 (Cambridge)'
  },
  {
    id: 'ket',
    num: '05',
    title: 'KET',
    subtitle: 'Key Foundations',
    description: 'A basic-level qualification that shows you can use English to communicate in simple situations.',
    icon: <Key className="w-8 h-8" />,
    color: 'bg-blue-500 text-white',
    accent: 'text-blue-700',
    tag: 'A2 (Key)'
  },
  {
    id: 'pet',
    num: '06',
    title: 'PET',
    subtitle: 'Intermediate Bridge',
    description: 'Developing the ability to communicate in English for practical tasks at an intermediate level.',
    icon: <CheckCircle className="w-8 h-8" />,
    color: 'bg-indigo-500 text-white',
    accent: 'text-indigo-700',
    tag: 'B1 (Preliminary)'
  },
  {
    id: 'ielts',
    num: '07',
    title: 'IELTS',
    subtitle: 'Global Success',
    description: 'Advanced preparation for higher education and global migration. Professional English mastery.',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'bg-slate-900 text-white',
    accent: 'text-slate-400',
    tag: 'B2 - C1+'
  }
];

const Courses: React.FC = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-card'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
           <Sun className="w-64 h-64 animate-spin-slow" style={{ animationDuration: '40s' }} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-fredoka font-bold mb-6">The Sunshine Path</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Đi theo lộ trình của HappyShine thiết kế và xem sự tự tin với tiếng Anh của bé ngày một càng tỏa sáng.</p>
        </div>
      </section>

      {/* Connected Path Section */}
      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* The Connecting Line (Vertical Path) - Visible on lg screens */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-red-100 -translate-x-1/2 hidden lg:block">
               <div className="absolute top-0 left-0 w-full bg-red-600 opacity-20 h-full rounded-full"></div>
            </div>
            
            {/* Mobile Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-red-100 lg:hidden"></div>

            <div className="space-y-20 relative">
              {courseData.map((level, index) => (
                <div key={level.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Card Content */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`reveal-card ${index % 2 === 0 ? 'reveal-left lg:text-right' : 'reveal-right lg:text-left'} bg-white p-8 rounded-[2rem] shadow-xl border-2 border-slate-50 hover:border-red-600 transition-all group relative`}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{level.tag}</span>
                        <span className="text-2xl font-black text-red-600/10 font-fredoka">{level.num}</span>
                      </div>
                      <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-1">{level.title}</h3>
                      <h4 className={`${level.accent} font-bold text-sm uppercase mb-4`}>{level.subtitle}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{level.description}</p>
                      <Link 
                        to={`/courses/${level.id}`}
                        className={`inline-flex items-center font-bold text-sm text-red-600 group-hover:scale-105 transition-transform ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                      >
                        See Detail <ArrowRight className={`w-4 h-4 ${index % 2 === 0 ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </Link>
                    </div>
                  </div>

                  {/* Icon Step (Center) */}
                  <div className="relative z-10 w-20 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-transform hover:scale-125 cursor-default ${level.color}`}>
                      {level.icon}
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Path End Marker */}
            <div className="mt-20 flex justify-center relative z-10">
              <div className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col items-center shadow-2xl animate-finish">
                <Flag className="w-10 h-10 mb-2" />
                <span className="font-bold">Chặng đường còn dài!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <StudentAchievements />

      {/* Graduation Call to Action */}
      <section className="py-24 bg-red-600 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <GraduationCap className="w-20 h-20 text-white mx-auto mb-8 animate-float" />
          <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-white mb-8">Bé sẵn sàng đồng hành cùng HappyShine chưa nào?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/enroll" className="bg-white text-red-600 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all text-center">
              Đăng ký đánh giá năng lực miễn phí ngay!
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 text-white/5">
          <Sun className="w-80 h-80" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
