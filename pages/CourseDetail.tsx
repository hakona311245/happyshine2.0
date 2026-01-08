
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Sun, CheckCircle2, BookOpen, Target, Sparkles, 
  ArrowLeft, HelpCircle, ChevronDown, MessageCircle, 
  Zap, Lightbulb, Users 
} from 'lucide-react';
import StudentAchievements from '../components/StudentAchievements';
import { courseData } from './Courses';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  const courseInfo = useMemo(() => {
    const base = courseData.find(c => c.id === courseId);
    if (!base) return null;

    // Extend base data with striking content
    return {
      ...base,
      results: [
        "Natural pronunciation and fluency",
        "Confident public speaking abilities",
        "Cambridge Certificate readiness",
        "Expanded vocabulary for daily use",
        "Strong foundation in grammar structures"
      ],
      learningPoints: [
        { title: "Interactive Projects", desc: "Collaborative tasks that spark creativity.", icon: <Sparkles className="w-6 h-6" /> },
        { title: "Digital Literacy", desc: "Using modern tools to master English.", icon: <Zap className="w-6 h-6" /> },
        { title: "Cultural Insights", desc: "Understanding the world through language.", icon: <Target className="w-6 h-6" /> },
        { title: "Critical Thinking", desc: "Solving problems using English logic.", icon: <Lightbulb className="w-6 h-6" /> }
      ],
      faqs: [
        { q: "How long is each session?", a: "Each class runs for 90 minutes with a short 'Smile Break'." },
        { q: "Are the teachers native speakers?", a: "Yes, 100% of our lead teachers are native English speakers from UK, US, or Australia." },
        { q: "Is there homework?", a: "We provide 'Discovery Tasks' - fun, optional activities to do at home." }
      ]
    };
  }, [courseId]);

  if (!courseInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found. <Link to="/courses" className="text-red-600">Back to courses</Link></p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Course Hero */}
      <section className={`${courseInfo.color} py-20 relative overflow-hidden`}>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-8 font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to The Path
          </Link>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4">
                Level {courseInfo.num}: {courseInfo.tag}
              </span>
              <h1 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">{courseInfo.title} Course</h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                {courseInfo.description}
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl rotate-2">
                <img 
                  src={`https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800`} 
                  alt={courseInfo.title} 
                  className="rounded-[2rem] w-full object-cover h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Sun className="absolute -top-20 -right-20 w-96 h-96 text-white/10 animate-spin-slow" />
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-slate-900 mb-4">Bright Results</h2>
            <p className="text-slate-500">What your child will achieve upon completion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseInfo.results.map((res, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-red-600">
                <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                <span className="text-lg font-bold text-slate-800">{res}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-24 bg-red-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-fredoka font-bold text-slate-900 mb-8">What are they learning?</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {courseInfo.learningPoints.map((point, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:translate-y-[-5px] transition-all">
                      <div className="text-red-600 mb-4">{point.icon}</div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" alt="Learning" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-8 rounded-[2rem] shadow-xl text-white font-bold animate-bounce-slow">
                  <Users className="w-10 h-10 mb-2" />
                  <p>Small Groups</p>
                  <p className="text-xs uppercase">Max 10 Students</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reused Student Achievement filtered by level */}
      <StudentAchievements defaultFilter={courseInfo.title} />

      {/* Animated Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-red-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-fredoka font-bold mb-6">Find Your Child's Shine Level!</h2>
              <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                Not sure if this is the right level? Join our free 1-on-1 assessment and let our experts guide you.
              </p>
              <button className="group relative bg-white text-red-600 font-black text-2xl px-12 py-6 rounded-full shadow-xl hover:scale-105 transition-all overflow-hidden">
                <span className="relative z-10">Sign Up for Free Test</span>
                <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
              </button>
            </div>
            {/* Background sparkle icons */}
            <Sparkles className="absolute top-10 left-10 w-12 h-12 text-white/20 animate-pulse" />
            <Sparkles className="absolute bottom-10 right-10 w-12 h-12 text-white/20 animate-pulse" />
            <Sun className="absolute -bottom-20 -left-20 w-64 h-64 text-white/5" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-fredoka font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {courseInfo.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-slate-800 hover:text-red-600 transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
