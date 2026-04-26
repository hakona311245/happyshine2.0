
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
    color: 'bg-[#BB2A31] text-white',
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
      <section className="bg-[#BB2A31] py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute -top-16 -right-16 opacity-10">
           <Sun className="w-72 h-72 md:w-96 md:h-96 animate-spin-slow" style={{ animationDuration: '44s' }} />
        </div>
        <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-sm backdrop-blur">
              <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              <span>HappyShine Learning Roadmap</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-fredoka font-bold mb-6 leading-tight">The Sunshine Path</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">Đi theo lộ trình của HappyShine thiết kế và xem sự tự tin với tiếng Anh của bé ngày một càng tỏa sáng.</p>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { value: '7', label: 'Learning levels' },
                { value: 'Pre-A1', label: 'Starting point' },
                { value: 'C1+', label: 'Advanced goal' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <p className="font-fredoka text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-red-100">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connected Path Section */}
      <section className="py-16 md:py-20 lg:py-24 relative bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-red-100 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-red-600 shadow-sm">
              Course Roadmap
            </span>
            <h2 className="mt-5 text-3xl font-fredoka font-bold text-slate-900 md:text-4xl">
              One clear next step for every learner
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* The Connecting Line (Vertical Path) - Visible on lg screens */}
            <div className="absolute left-1/2 top-8 bottom-20 w-1 bg-slate-200 -translate-x-1/2 hidden rounded-full lg:block">
               <div className="absolute top-0 left-0 w-full bg-[#BB2A31] opacity-20 h-full rounded-full"></div>
            </div>
            
            {/* Mobile Connecting Line */}
            <div className="absolute left-8 top-8 bottom-20 w-1 bg-slate-200 rounded-full lg:hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#BB2A31] opacity-20 rounded-full"></div>
            </div>

            <div className="space-y-8 md:space-y-10 lg:space-y-14 relative">
              {courseData.map((level, index) => (
                <div key={level.id} className={`flex items-start gap-4 lg:items-center lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Card Content */}
                  <div className="order-2 w-full min-w-0 lg:order-none lg:w-5/12">
                    <div
                      className={`reveal-card ${index % 2 === 0 ? 'reveal-left lg:text-right' : 'reveal-right lg:text-left'} group relative rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_26px_70px_-34px_rgba(15,23,42,0.55)] focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 md:p-7`}
                    >
                      <div className={`flex items-center gap-3 mb-5 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-600">{level.tag}</span>
                        <span className="text-3xl leading-none font-black text-red-600/10 font-fredoka">{level.num}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-fredoka font-bold text-slate-900 mb-1">{level.title}</h3>
                      <h4 className={`${level.accent} font-bold text-xs uppercase tracking-[0.18em] mb-4`}>{level.subtitle}</h4>
                      <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">{level.description}</p>
                      <Link 
                        to={`/courses/${level.id}`}
                        className={`inline-flex items-center rounded-full font-bold text-sm text-red-600 transition-all duration-200 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 active:scale-95 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                      >
                        See Detail <ArrowRight className={`w-4 h-4 ${index % 2 === 0 ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </Link>
                    </div>
                  </div>

                  {/* Icon Step (Center) */}
                  <div className="order-1 relative z-10 w-16 shrink-0 flex justify-center lg:order-none lg:w-2/12">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg ring-4 ring-slate-50 transition-transform duration-300 hover:scale-110 cursor-default ${level.color}`}>
                      {level.icon}
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Path End Marker */}
            <div className="mt-12 md:mt-16 flex justify-center relative z-10">
              <div className="bg-slate-900 text-white px-7 py-6 rounded-[1.75rem] flex flex-col items-center shadow-xl animate-finish">
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
      <section className="py-20 md:py-24 bg-[#BB2A31] overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-7 animate-float" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold text-white mb-8 leading-tight">Bé sẵn sàng đồng hành cùng HappyShine chưa nào?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/enroll" className="bg-white text-red-600 font-bold text-lg md:text-xl px-8 md:px-12 py-5 rounded-full shadow-2xl hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-700 active:scale-[0.98] transition-all text-center">
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
