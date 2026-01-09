
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Award, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

{/* URL HÌNH HỌC SINH */}
import phamnhutkhanhimg from "@/media/img/students/movers/phamnhutkhanh.jpg";
import chaungockienimg from "@/media/img/students/movers/chaungockien.jpg";

const students = [
  { name: "Liam Nguyen", level: "IELTS 8.5", category: "IELTS", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600" },
  { name: "Sarah Jenkins", level: "KET Graduate", category: "KET", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" },
  { name: "Toby Miller", level: "Flyers Master", category: "Flyers", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
  { name: "Mia Sofia", level: "Kids Honors", category: "Kids", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" },
  { name: "Oliver Brown", level: "Starters Grad", category: "Starters", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" },
  { name: "Chloe Park", level: "Kids Star", category: "Kids", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600" },
  { name: "Phạm Nhựt Khanh", level: "Movers Champ", category: "Movers", image:phamnhutkhanhimg},
  { name: "Châu Ngọc Kiên", level: "Movers Champ", category: "Movers", image:chaungockienimg},
  { name: "Sophia Chen", level: "PET Excellence", category: "PET", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
];

const categories = ["All", "Kids", "Starters", "Movers", "Flyers", "KET", "PET", "IELTS"];

interface StudentAchievementsProps {
  defaultFilter?: string;
}

const StudentAchievements: React.FC<StudentAchievementsProps> = ({ defaultFilter = "All" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  useEffect(() => {
    setActiveFilter(defaultFilter);
  }, [defaultFilter]);

  const filteredStudents = useMemo(() => {
    if (activeFilter === "All") return students;
    return students.filter(s => s.category === activeFilter);
  }, [activeFilter]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstChild = container.children[0] as HTMLElement;
      if (!firstChild) return;

      const cardWidth = firstChild.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-100 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>Our Shining Stars</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-4">Các Bé Tự Hào</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">Khám phá những học viên tiêu biểu của Happy Shine. Mỗi học viên là một câu chuyện nỗ lực và thành tựu.</p>
        </div>

        {/* Filter Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === cat 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105' 
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroller Container */}
        <div className="relative group max-w-6xl mx-auto">
          {filteredStudents.length > 0 ? (
            <>
              {/* Scroll Buttons */}
              <div className="absolute left-[-15px] md:left-[-30px] top-1/2 -translate-y-1/2 z-20 pointer-events-none w-[calc(100%+30px)] md:w-[calc(100%+60px)] flex justify-between">
                <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-95 pointer-events-auto"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-95 pointer-events-auto"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
              >
                {filteredStudents.map((student, index) => (
                  <div 
                    key={`${student.name}-${index}`} 
                    className="flex-shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] snap-start"
                  >
                    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-red-400 transition-all duration-500 shadow-md hover:shadow-xl h-full">
                      {/* Image Container */}
                      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                        <img 
                          src={student.image} 
                          alt={student.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/*
                        {/* Floating Level Tag 
                        <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-red-600 px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {student.level}
                          </div>
                        </div>
                         */}
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-6 text-center bg-white relative">
                        <h4 className="text-xl md:text-2xl font-fredoka font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                          {student.name}
                        </h4>
                        <div className="flex items-center justify-center gap-1.5 mt-1 text-slate-500 text-sm">
                           <Check className="w-4 h-4 text-green-500" />
                           <span>Đã xuất sắc vượt qua level</span>
                        </div>
                        
                        {/* Decorative element */}
                        <div className="mt-4 flex justify-center space-x-1.5 opacity-10 group-hover:opacity-100 transition-opacity">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <Award className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">New graduates in the {activeFilter} level are coming soon!</p>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default StudentAchievements;
