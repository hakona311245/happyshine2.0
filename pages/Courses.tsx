
import React from 'react';
import { Link } from 'react-router-dom';
// Added Award to the lucide-react import list
import { Sun, Star, BookOpen, MessageCircle, Briefcase, GraduationCap, ArrowRight, Smile, Rocket, Wind, Key, CheckCircle, Lightbulb, Award } from 'lucide-react';

const Courses: React.FC = () => {
  const levels = [
    {
      id: '01',
      title: 'Kids',
      subtitle: 'Early Explorers',
      description: 'The fun begins! Using games, songs, and physical activities to introduce English naturally to our youngest learners (Ages 4-6).',
      icon: <Smile className="w-8 h-8" />,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      tag: 'Pre-A1'
    },
    {
      id: '02',
      title: 'Starters',
      subtitle: 'First Steps',
      description: 'Building a solid foundation in reading, writing, and speaking through interactive Cambridge-aligned materials.',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-700 border-orange-200',
      tag: 'Pre-A1 (Cambridge)'
    },
    {
      id: '03',
      title: 'Movers',
      subtitle: 'Active Learners',
      description: 'Developing practical communication skills. Students begin to understand basic instructions and take part in simple conversations.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'bg-red-100 text-red-700 border-red-200',
      tag: 'A1 (Cambridge)'
    },
    {
      id: '04',
      title: 'Flyers',
      subtitle: 'Confident Speakers',
      description: 'The bridge to intermediate English. Mastery of everyday written and spoken English at a basic level.',
      icon: <Wind className="w-8 h-8" />,
      color: 'bg-pink-100 text-pink-700 border-pink-200',
      tag: 'A2 (Cambridge)'
    },
    {
      id: '05',
      title: 'KET',
      subtitle: 'Key Foundations',
      description: 'A basic-level qualification that shows you can use English to communicate in simple situations.',
      icon: <Key className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      tag: 'A2 (Key)'
    },
    {
      id: '06',
      title: 'PET',
      subtitle: 'Intermediate Bridge',
      description: 'Developing the ability to communicate in English for practical tasks and situations at an intermediate level.',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      tag: 'B1 (Preliminary)'
    },
    {
      id: '07',
      title: 'IELTS',
      subtitle: 'Global Success',
      description: 'Advanced preparation for higher education and global migration. Mastering academic and professional English.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'bg-slate-900 text-white border-slate-700',
      tag: 'B2 - C1+'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Sun className="w-64 h-64 animate-spin-slow" style={{ animationDuration: '40s' }} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold mb-4">
            The Happy Shine Roadmap
          </div>
          <h1 className="text-4xl lg:text-6xl font-fredoka font-bold text-slate-900 mb-6">Your Path to <span className="text-red-600">Fluent Brilliance</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">From your very first word to international certification, we guide you every step of the way.</p>
        </div>
      </section>

      {/* Progression Map */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Path for Desktop */}
        <div className="absolute top-[300px] left-0 right-0 h-2 bg-red-100 hidden lg:block z-0"></div>
        <div className="absolute top-[800px] left-0 right-0 h-2 bg-red-100 hidden lg:block z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {levels.slice(0, 4).map((level, index) => (
              <div key={level.id} className="group flex flex-col items-center">
                {/* Visual Step Marker */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-xl mb-12 z-10 transition-transform group-hover:scale-110 ${level.color}`}>
                  {level.icon}
                </div>
                
                {/* Course Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-red-600 w-full hover:shadow-2xl transition-all h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-red-600/10 font-fredoka">{level.id}</span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{level.tag}</span>
                  </div>
                  <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-1">{level.title}</h3>
                  <h4 className="text-red-600 font-bold text-sm uppercase mb-4">{level.subtitle}</h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{level.description}</p>
                  
                  <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {levels.slice(4).map((level) => (
              <div key={level.id} className="group flex flex-col items-center">
                {/* Visual Step Marker */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-xl mb-12 z-10 transition-transform group-hover:scale-110 ${level.color}`}>
                  {level.icon}
                </div>
                
                {/* Course Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-red-600 w-full hover:shadow-2xl transition-all h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-red-600/10 font-fredoka">{level.id}</span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{level.tag}</span>
                  </div>
                  <h3 className="text-2xl font-fredoka font-bold text-slate-900 mb-1">{level.title}</h3>
                  <h4 className="text-red-600 font-bold text-sm uppercase mb-4">{level.subtitle}</h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{level.description}</p>
                  
                  <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Curriculum? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-slate-900 mb-4">Why the Happy Shine Path?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Lightbulb className="w-10 h-10 text-red-600" />,
                title: "Scientifically Structured",
                desc: "Our curriculum is mapped to the Common European Framework of Reference for Languages (CEFR)."
              },
              {
                icon: <MessageCircle className="w-10 h-10 text-red-600" />,
                title: "Communication First",
                desc: "We focus 70% of class time on active speaking and real-world communication scenarios."
              },
              {
                icon: <Award className="w-10 h-10 text-red-600" />,
                title: "Certified Success",
                desc: "100% of our IELTS students reach their target band within their first two attempts."
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="bg-red-50 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Call to Action */}
      <section className="py-24 bg-red-600 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <GraduationCap className="w-20 h-20 text-white mx-auto mb-8 animate-float" />
          <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-white mb-8">Ready to Shine on the World Stage?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all">
              Book a Placement Test
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-white/10 transition-all">
              Consult a Teacher
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 text-white/5">
          <Sun className="w-80 h-80" />
        </div>
        <div className="absolute top-10 right-10 text-white/5">
          <Star className="w-40 h-40 animate-pulse" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
