
import React from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { Sun, Star, BookOpen, MessageCircle, Briefcase, GraduationCap, Map, ArrowRight, Smile } from 'lucide-react';

const Courses: React.FC = () => {
  const levels = [
    {
      id: 'L1',
      title: 'Rising Sun',
      subtitle: 'Beginner Foundations',
      description: 'The journey begins! Perfect for kids and absolute beginners to build basic vocabulary and confidence.',
      icon: <Smile className="w-8 h-8" />,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      tag: 'A1 - A2'
    },
    {
      id: 'L2',
      title: 'Bright Morning',
      subtitle: 'Intermediate Flow',
      description: 'Strengthen grammar and start having real conversations. Express opinions and share stories with ease.',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-700 border-orange-200',
      tag: 'B1 - B2'
    },
    {
      id: 'L3',
      title: 'Golden Noon',
      subtitle: 'Advanced Mastery',
      description: 'Complex structures and nuanced language. Ideal for university prep and advanced communication.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-red-100 text-red-700 border-red-200',
      tag: 'C1 - C2'
    },
    {
      id: 'L4',
      title: 'Infinite Shine',
      subtitle: 'Professional & Exams',
      description: 'IELTS, Business English, and Public Speaking. Polish your skills for the global stage.',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-slate-100 text-slate-700 border-slate-200',
      tag: 'IELTS 7.5+'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold mb-4">
            Curriculum Roadmap
          </div>
          <h1 className="text-4xl lg:text-6xl font-fredoka font-bold text-slate-900 mb-6">Your Path to <span className="text-red-600">Fluent Brilliance</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Follow our structured "Sunshine Path" from first words to professional fluency.</p>
        </div>
      </section>

      {/* Progression Map */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Line for Desktop */}
        <div className="absolute top-[300px] left-0 right-0 h-4 bg-red-100/50 hidden lg:block z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {levels.map((level, index) => (
              <div key={level.id} className="group flex flex-col items-center">
                {/* Visual Step Marker */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-xl mb-12 z-10 transition-transform group-hover:scale-110 ${level.color}`}>
                  {level.icon}
                </div>
                
                {/* Course Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-red-600 w-full hover:shadow-2xl transition-all h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-red-600/10 font-fredoka">{level.id}</span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{level.tag}</span>
                  </div>
                  <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-1">{level.title}</h3>
                  <h4 className="text-red-600 font-bold text-sm uppercase mb-4">{level.subtitle}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-3">{level.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {['Small Classes (max 8)', 'Native Mentorship', 'Weekly Progress Reports'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500 font-medium">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>

                {/* Connector Arrow for Mobile */}
                {index < levels.length - 1 && (
                    <div className="lg:hidden my-6">
                        <ArrowRight className="w-8 h-8 text-red-300 rotate-90" />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Courses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl font-fredoka font-bold mb-4">Specialized Shine Programs</h2>
              <p className="text-xl text-slate-600">Tailored learning for specific goals and age groups.</p>
            </div>
            <button className="hidden lg:block border-2 border-red-600 text-red-600 font-bold px-8 py-3 rounded-full hover:bg-red-50">
              View All 15+ Programs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-[2.5rem] bg-slate-50 relative aspect-[4/5] border-4 border-white shadow-xl transition-all hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Kids" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">Popular</span>
                <h3 className="text-3xl font-fredoka font-bold mb-2">Kids Sunshine Academy</h3>
                <p className="text-red-100 text-sm mb-4">Ages 4-12. Fun, games, and natural acquisition.</p>
                <Link to="#" className="font-bold flex items-center gap-2">Join Class <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[2.5rem] bg-slate-50 relative aspect-[4/5] border-4 border-white shadow-xl transition-all hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="IELTS" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">High Intensity</span>
                <h3 className="text-3xl font-fredoka font-bold mb-2">IELTS Power Prep</h3>
                <p className="text-red-100 text-sm mb-4">Guaranteed 7.0+ score. Mock tests and intensive feedback.</p>
                <Link to="#" className="font-bold flex items-center gap-2">Join Class <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[2.5rem] bg-slate-50 relative aspect-[4/5] border-4 border-white shadow-xl transition-all hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Business" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">Executive</span>
                <h3 className="text-3xl font-fredoka font-bold mb-2">Global Business English</h3>
                <p className="text-red-100 text-sm mb-4">Negotiations, presentations, and corporate networking.</p>
                <Link to="#" className="font-bold flex items-center gap-2">Join Class <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Call to action */}
      <section className="py-24 bg-red-600 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <GraduationCap className="w-20 h-20 text-white mx-auto mb-8 animate-float" />
          <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-white mb-8">Ready to Start Your Success Story?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:bg-slate-50 transition-all">
              Enroll Today
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-white/10 transition-all">
              Talk to a Consultant
            </button>
          </div>
        </div>
        {/* Sun decor */}
        <div className="absolute -bottom-20 -left-20 text-white/5">
          <Sun className="w-80 h-80" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
