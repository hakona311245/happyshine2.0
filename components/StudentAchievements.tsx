
import React, { useRef } from 'react';
import { Smile, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const students = [
  { name: "Liam Nguyen", level: "IELTS 8.5", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600" },
  { name: "Sarah Jenkins", level: "PET Graduate", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" },
  { name: "Toby Miller", level: "Flyers Master", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
  { name: "Mia Sofia", level: "KET Honors", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" },
  { name: "Oliver Brown", level: "Starters Grad", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" },
  { name: "Chloe Park", level: "Kids Shining Star", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600" },
  { name: "Ethan James", level: "Movers Champ", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" },
  { name: "Sophia Chen", level: "IELTS 7.5", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
];

const StudentAchievements: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstChild = container.children[0] as HTMLElement;
      if (!firstChild) return;

      const cardWidth = firstChild.offsetWidth;
      const gap = 24; // Reduced gap for a tighter look
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-4">Our Shining Graduates</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">Every smile represents a journey of hard work. Meet the bright minds who found their light at Happy Shine.</p>
        </div>

        {/* Horizontal Scroller Container */}
        <div className="relative group max-w-6xl mx-auto">
          {/* Scroll Buttons - Positioned at the sides of the cards */}
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
            {students.map((student, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] snap-start"
              >
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-red-400 transition-all duration-500 shadow-md hover:shadow-xl h-full">
                  {/* Image Container - Height shrunk from 450 to 320/380 */}
                  <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Level Tag */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-red-600 px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {student.level}
                      </div>
                    </div>

                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-md border border-white/50 group-hover:rotate-12 transition-transform">
                      <Smile className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Content Area - Padding shrunk from 10 to 6 */}
                  <div className="p-6 text-center bg-white relative">
                    <h4 className="text-xl md:text-2xl font-fredoka font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {student.name}
                    </h4>
                    <p className="text-slate-500 text-sm mt-1">Graduate Class of 2024</p>
                    
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
