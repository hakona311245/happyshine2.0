
import React from 'react';
import { Sun, Target, Rocket, Heart, Award, Smile, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Sun className="w-96 h-96 animate-spin-slow" style={{ animationDuration: '60s' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-fredoka font-bold mb-6">The Happy Shine Story</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">Founded on the belief that language learning should be as natural and joyful as a child's smile.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-12 bg-red-600"></div>
                <span className="text-red-600 font-bold uppercase tracking-widest">Our DNA</span>
              </div>
              <h2 className="text-4xl font-fredoka font-bold text-slate-900 mb-8">Illuminating Minds Through Joyful Education</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-red-50 p-4 rounded-2xl h-fit">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-slate-600 text-lg">To create a world where language barriers are dissolved by the power of confidence and the warmth of a smile.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-red-50 p-4 rounded-2xl h-fit">
                    <Rocket className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-slate-600 text-lg">To be the global leader in emotionally intelligent English education, preparing students for an interconnected world.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/400/500?random=10" className="rounded-3xl shadow-xl mt-12" alt="Center" />
                <img src="https://picsum.photos/400/500?random=11" className="rounded-3xl shadow-xl" alt="Students" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl">
                 <Smile className="w-16 h-16 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-slate-900">A Decade of Shining</h2>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 -translate-x-1/2 hidden md:block"></div>
            {[
              { year: '2012', title: 'The First Spark', desc: 'Happy Shine was founded with a small classroom of 5 students and 1 teacher.' },
              { year: '2015', title: 'Growing Brightly', desc: 'Expansion to our second campus and introducing the "Smile Curriculum".' },
              { year: '2018', title: 'Global Recognition', desc: 'Voted "Most Innovative English Center" by the International Education Board.' },
              { year: '2022', title: 'Digital Dawn', desc: 'Launched our high-end digital learning platform reaching students globally.' },
              { year: '2024', title: 'The Sunshine Hub', desc: 'Opening our state-of-the-art mega campus in the city center.' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 bg-white rounded-3xl shadow-lg border-b-4 border-red-600 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-3xl font-bold text-red-600 mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-600" />, title: "Student-First", desc: "Every decision we make starts with the student's well-being." },
              { icon: <ShieldCheck className="text-red-600" />, title: "Integrity", desc: "Honest feedback and transparent results for every learner." },
              { icon: <Award className="text-red-600" />, title: "Excellence", desc: "Striving for the highest academic standards in everything we do." },
              { icon: <Sun className="text-red-600" />, title: "Positivity", desc: "Maintaining an environment that encourages and inspires." },
            ].map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
