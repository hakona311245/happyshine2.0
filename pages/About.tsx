
import React from 'react';
import { Sun, Target, Rocket, Heart, Award, Smile, ShieldCheck } from 'lucide-react';
import StudentAchievements from '../components/StudentAchievements';
import studentraisinghand from '@/media/img/gallery/studentraisinghand.jpg';
import studentplayinggame from '@/media/img/gallery/studentplayinggame.jpg';
import Certificate from '@/components/certificate';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Sun className="w-96 h-96 animate-spin-slow" style={{ animationDuration: '60s' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-fredoka font-bold mb-6">Câu Chuyện của Happy Shine</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">Happy Shine được thành lập với niềm tin rằng việc học ngôn ngữ nên tự nhiên và mang lại niềm vui, như chính nụ cười của trẻ.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-red-50/60">
        <div className="container mx-auto px-6">
          <div className="relative bg-white border-2 border-red-200 rounded-[2.5rem] p-8 shadow-md">
            <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 text-center">Sứ Mệnh & Tầm Nhìn</h2>
          </div>
        </div>
        <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 auto-rows-[150px] gap-6 mt-12">

          <div className="col-span-4 row-span-1 bg-red-300 rounded-2xl p-6 shadow relative">
            <div className="absolute top-6 left-0 bg-red-500 text-white px-32 py-10 rounded-r-3xl shadow-md">
            Sứ mệnh của HappyShine
          </div>
          </div>

          <div className="col-span-2 row-span-3 bg-red-100 rounded-2xl p-6">
              Top Right
          </div>

          <div className="col-span-2 row-span-2 bg-red-200 rounded-2xl p-6">
              Small 1
          </div>

          <div className="col-span-2 row-span-1 bg-red-300 rounded-2xl p-6">
              Small 2
          </div>

        </div>
      </div>
        
      </section>
      {/* History Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-fredoka font-bold text-slate-900">Hành Trình Vươn Lên Của Happy Shine</h2>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 -translate-x-1/2 hidden md:block"></div>
            {[
              { year: '2012', title: 'Ánh nắng đầu tiên', desc: 'Happy Shine là một lớp học nho nhỏ với vài bé học sinh và các thầy cô tận tâm' },
              { year: '2015', title: 'Bắt đầu tỏa sáng', desc: 'Happy Shine bắt đầu mở rộng tiếp đón nhiều bé hơn' },
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

      {/* Student Achievements */}
      <StudentAchievements />

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-600" />, title: "Student-First", desc: "Phát triển với các bé được đặt lên hàng đầu." },
              { icon: <ShieldCheck className="text-red-600" />, title: "Minh Bạch", desc: "Minh bạch trong mọi quy trình giảng dạy và kết quả của các bé." },
              { icon: <Award className="text-red-600" />, title: "Chất Lượng", desc: "Hướng các bé tới kết quả học tốt nhất có thể." },
              { icon: <Sun className="text-red-600" />, title: "Tích Cực", desc: "Cho các bé môi trường học tập tích cực và gần gũi với thầy cô nhấ." },
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
      {/* <Certificate /> */}
      <Certificate/>
    </div>
  );
};

export default About;
