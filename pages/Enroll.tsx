
import React from 'react';
import { Sun, Smile, CheckCircle, User, Phone, Mail, BookOpen, Send, Sparkles, Heart } from 'lucide-react';

const Enroll: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Sun className="w-80 h-80 animate-spin-slow" style={{ animationDuration: '40s' }} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Journey</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">Join the <span className="text-yellow-300">Happy Shine</span> Family</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Take the first step towards your child's bright future. Fill in the form below and we'll reach out to schedule a free placement test.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Benefits Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
                <h2 className="text-3xl font-fredoka font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Smile className="text-red-600 w-10 h-10" /> Why Enroll?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Personalized Roadmap", desc: "Every child receives a learning path tailored to their speed and style.", icon: <CheckCircle className="text-green-500" /> },
                    { title: "Native Speaker Interaction", desc: "Build confidence by learning from masters of the language.", icon: <CheckCircle className="text-green-500" /> },
                    { title: "Engaging Curriculum", desc: "Songs, games, and projects that make learning feel like playing.", icon: <CheckCircle className="text-green-500" /> },
                    { title: "Continuous Support", desc: "Regular progress reports and 1-on-1 feedback sessions with parents.", icon: <CheckCircle className="text-green-500" /> }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <Heart className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-fredoka font-bold mb-2">Our Promise</h3>
                  <p className="text-red-100 leading-relaxed">
                    "We promise to nurture every child's curiosity and ensure they leave every class with a smile and a new skill."
                  </p>
                </div>
                <Sun className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10" />
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(239,68,68,0.1)] border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                
                <h2 className="text-3xl font-fredoka font-bold text-slate-900 mb-2">Enrollment Form</h2>
                <p className="text-slate-500 mb-10">This is a placeholder form. Please fill in the details and our consultants will call you shortly.</p>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Parent/Guardian Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Contact Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="email" placeholder="email@example.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Student's Age</label>
                      <input type="number" placeholder="Ages 4-18" min="4" max="18" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-2">Preferred Level</label>
                      <div className="relative">
                        <BookOpen className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        <select className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                          <option>Select Level</option>
                          <option>Kids (4-6)</option>
                          <option>Starters/Movers/Flyers</option>
                          <option>KET/PET</option>
                          <option>IELTS Preparation</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Additional Information</label>
                    <textarea placeholder="Tell us about your child's current English level or goals..." rows={4} className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-red-600 focus:bg-white transition-all outline-none resize-none"></textarea>
                  </div>

                  <button className="w-full group bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-5 rounded-2xl shadow-xl shadow-red-100 transition-all flex items-center justify-center gap-3 active:scale-95 overflow-hidden relative">
                    <span className="relative z-10">Request Free Placement Test</span>
                    <Send className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>

                <p className="mt-8 text-center text-xs text-slate-400 font-medium">
                  By clicking submit, you agree to be contacted by our admission team via phone or email for educational purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Smile Footer Icon */}
      <div className="flex justify-center py-16 bg-white">
        <div className="bg-red-50 p-6 rounded-full animate-bounce-slow">
          <Smile className="w-16 h-16 text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Enroll;
