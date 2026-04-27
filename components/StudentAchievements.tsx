
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Award, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

{/* URL HÌNH HỌC SINH */}
import phamnhutkhanhimg from "@/media/img/students/movers/phamnhutkhanh.jpg";
import chaungockienimg from "@/media/img/students/movers/chaungockien.jpg";
import nhuthaoimg from "@/media/img/students/movers/daongocnhuthao.jpg";
import lucviimg from "@/media/img/students/movers/tranlucvi.jpg";

const categories = ["All", "Kids", "Starters", "Movers", "Flyers", "KET", "PET", "IELTS"] as const;

type AchievementCategory = (typeof categories)[number];

type StudentAchievement = {
  name: string;
  level: string;
  category: Exclude<AchievementCategory, "All">;
  image: string;
};

const students: StudentAchievement[] = [
  { name: "Phạm Nhựt Khanh", level: "Movers Champ", category: "Movers", image: phamnhutkhanhimg },
  { name: "Châu Ngọc Kiên", level: "Movers Champ", category: "Movers", image: chaungockienimg },
  { name: "Đào Ngọc Như Thảo", level: "Movers Champ", category: "Movers", image: nhuthaoimg },
  { name: "Trần Lục Vi", level: "Movers Champ", category: "Movers", image: lucviimg },
];

interface StudentAchievementsProps {
  defaultFilter?: string;
}

const StudentAchievements: React.FC<StudentAchievementsProps> = ({ defaultFilter = "All" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  useEffect(() => {
    setActiveFilter(defaultFilter);
  }, [defaultFilter]);

  useEffect(() => {
    setCurrentScrollIndex(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [activeFilter]);

  const filteredStudents = useMemo(() => {
    if (activeFilter === "All") return students;
    return students.filter(s => s.category === activeFilter);
  }, [activeFilter]);

  const getCarouselMetrics = useCallback(() => {
    const container = scrollRef.current;
    const firstChild = container?.children[0] as HTMLElement | undefined;

    if (!container || !firstChild) return null;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const step = firstChild.offsetWidth + gap;
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
    const maxIndex = step > 0 ? Math.ceil(maxScroll / step) : 0;

    return { container, step, maxIndex };
  }, []);

  const updateScrollIndex = useCallback(() => {
    const metrics = getCarouselMetrics();
    if (!metrics) return;

    const { container, step, maxIndex } = metrics;
    const nextIndex = step > 0
      ? Math.min(maxIndex, Math.max(0, Math.round(container.scrollLeft / step)))
      : 0;

    setCurrentScrollIndex(nextIndex);
  }, [getCarouselMetrics]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId: number | null = null;
    const handleScroll = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateScrollIndex);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filteredStudents.length, updateScrollIndex]);

  const scroll = (direction: 'left' | 'right') => {
    const metrics = getCarouselMetrics();
    if (!metrics) return;

    const { container, step, maxIndex } = metrics;
    const currentIndex = step > 0
      ? Math.min(maxIndex, Math.max(0, Math.round(container.scrollLeft / step)))
      : currentScrollIndex;
    const nextIndex = direction === 'right'
      ? currentIndex >= maxIndex ? 0 : currentIndex + 1
      : currentIndex <= 0 ? maxIndex : currentIndex - 1;

    setCurrentScrollIndex(nextIndex);
    container.scrollTo({
      left: nextIndex >= maxIndex ? container.scrollWidth : nextIndex * step,
      behavior: 'smooth',
    });
  };

  const hasAchievements = filteredStudents.length > 0;

  const arrowClassName = "inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-100 bg-white text-red-600 shadow-md shadow-red-100/70 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95 md:h-12 md:w-12";

  const filterButtonClassName = (isActive: boolean) => {
    const baseClassName = "rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 md:px-5";

    if (isActive) {
      return `${baseClassName} bg-red-600 text-white shadow-lg shadow-red-200 scale-105`;
    }

    return `${baseClassName} bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-red-600`;
  };

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-100 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>Our Shining Stars</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-4">Những ngôi sao sáng của trung tâm</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">Khám phá những học viên tiêu biểu của Happy Shine. Mỗi học viên là một câu chuyện nỗ lực và thành tựu.</p>
        </div>

        {/* Filter Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={filterButtonClassName(activeFilter === cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroller Container */}
        <div className="relative group max-w-6xl mx-auto">
          {hasAchievements ? (
            <>
              {/* Scroll Buttons */}
              <div className="mb-5 flex items-center justify-center gap-3 md:justify-end">
                <button 
                  type="button"
                  onClick={() => scroll('left')}
                  className={arrowClassName}
                  aria-label="Show previous student achievement"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  type="button"
                  onClick={() => scroll('right')}
                  className={arrowClassName}
                  aria-label="Show next student achievement"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-5 pb-8 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth md:gap-6"
              >
                {filteredStudents.map((student, index) => (
                  <article 
                    key={`${student.name}-${index}`} 
                    className="flex-shrink-0 w-full snap-start md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
                  >
                    <div className="group bg-white rounded-[1.75rem] overflow-hidden border border-slate-100 hover:border-red-400 transition-all duration-500 shadow-md hover:shadow-xl h-full">
                      {/* Image Container */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                        <img 
                          src={student.image} 
                          alt={student.name} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-red-900/20">
                            <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                            {student.level}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-5 text-center bg-white relative md:p-6">
                        <h4 className="text-xl md:text-2xl font-fredoka font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                          {student.name}
                        </h4>
                        <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-slate-500">
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
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <Award className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Các bé level {activeFilter} sẽ được giới thiệu ngay đây</p>
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
