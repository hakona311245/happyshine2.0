
import React from 'react';
import { Sun, Star, CheckCircle, ArrowRight, Play, Users, Award, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-50 rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] opacity-60 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-bounce-slow">
              <Star className="w-4 h-4 fill-red-600" />
              <span>Rated #1 English Center in the Region</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-fredoka font-bold text-slate-900 leading-[1.1] mb-6">
              Light Up Your Future with <span className="text-red-600">English Confidence</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              At Happy Shine, we don't just teach English. We cultivate smiles, spark curiosity, and build the foundation for a global future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl shadow-red-200 flex items-center justify-center transition-all hover:scale-105">
                Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="bg-white border-2 border-slate-200 text-slate-800 text-lg font-bold px-8 py-4 rounded-full flex items-center justify-center hover:bg-slate-50 transition-all">
                <Play className="mr-2 w-5 h-5 fill-slate-800" /> Watch Our Story
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="Student" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-600 font-medium">Join 2,500+ happy learners</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-red-100 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=1200" alt="Students Learning" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 z-20 animate-float">
              <Sun className="w-12 h-12 text-yellow-500 mb-2" />
              <span className="text-2xl font-bold text-red-600">98%</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest text-center">Success Rate</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-52 h-24 bg-white rounded-2xl shadow-xl flex items-center space-x-4 p-4 z-20">
              <div className="bg-green-100 p-2 rounded-full">
                <Smile className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Learn to Shine</p>
                <p className="text-xs text-slate-500">Happiness is key</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-red-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-white mb-4">The Happy Shine Difference</h2>
            <p className="text-red-100 text-xl max-w-2xl mx-auto">We provide a nurturing environment where language skills flourish naturally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Native Tutors",
                desc: "Learn from the best educators from across the globe who are passionate about teaching."
              },
              {
                icon: <Smile className="w-10 h-10" />,
                title: "Fun-First Learning",
                desc: "We believe that happy students learn faster. Our curriculum is gamified and interactive."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Global Certification",
                desc: "Earn certificates recognized by top universities and employers worldwide."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl hover:translate-y-[-10px] transition-all duration-300">
                <div className="text-red-600 mb-6 bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">12k+</p>
              <p className="text-slate-600 font-semibold">Total Graduates</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">50+</p>
              <p className="text-slate-600 font-semibold">Native Teachers</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">15+</p>
              <p className="text-slate-600 font-semibold">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">99%</p>
              <p className="text-slate-600 font-semibold">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between border-4 border-red-600/5">
            <div className="relative z-10 text-center lg:text-left lg:max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-slate-900">Start Your Journey with <span className="text-red-600">Free Assessment!</span></h2>
              <p className="text-xl text-slate-600 mb-8">Take a 15-minute test and get a personalized learning path from our consultants. No strings attached.</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-xl shadow-red-200 transition-all hover:scale-105">
                Book a Free Slot
              </button>
            </div>
            <div className="mt-12 lg:mt-0 relative z-10">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" alt="Consultation" className="rounded-3xl shadow-2xl border-8 border-white w-full max-w-sm rotate-3" />
            </div>
            {/* Background elements */}
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-red-50 rounded-full z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
