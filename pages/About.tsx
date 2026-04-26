import React from 'react';
import { Sun, Target, Rocket, Heart, Award, Smile, ShieldCheck } from 'lucide-react';
import StudentAchievements from '../components/StudentAchievements';
import studentraisinghand from '@/media/img/gallery/studentraisinghand.jpg';
import studentplayinggame from '@/media/img/gallery/studentplayinggame.jpg';
import Certificate from '@/components/certificate';

const About: React.FC = () => {
  const timelineItems = [
    {
      year: '2012',
      title: 'The First Spark',
      desc: 'Happy Shine began as a small classroom with a few students and dedicated teachers.',
      image: studentraisinghand,
      imageAlt: 'Student raising a hand in class',
    },
    {
      year: '2015',
      title: 'Growing Brighter',
      desc: 'The center expanded and welcomed more young learners into a joyful English environment.',
      image: studentplayinggame,
      imageAlt: 'Students playing a classroom game',
    },
    {
      year: '2018',
      title: 'Global Recognition',
      desc: 'Happy Shine gained wider recognition for creative teaching and student-centered learning.',
      image: studentraisinghand,
      imageAlt: 'Student raising a hand in class',
    },
    {
      year: '2022',
      title: 'Digital Dawn',
      desc: 'A modern digital learning approach was introduced to support students more flexibly.',
      image: studentplayinggame,
      imageAlt: 'Students playing a classroom game',
    },
    {
      year: '2024',
      title: 'The Sunshine Hub',
      desc: 'Happy Shine stepped into a new chapter with a larger, more advanced learning space.',
      image: studentraisinghand,
      imageAlt: 'Student raising a hand in class',
    },
  ];

  const [activeTimelineIndex, setActiveTimelineIndex] = React.useState(0);
  const [timelineDirection, setTimelineDirection] = React.useState<1 | -1>(1);
  const [isTimelineAnimating, setIsTimelineAnimating] = React.useState(false);
  const timelineTimerRef = React.useRef<number | null>(null);

  const changeTimelineStage = (nextIndex: number) => {
    if (
      nextIndex < 0 ||
      nextIndex >= timelineItems.length ||
      nextIndex === activeTimelineIndex ||
      isTimelineAnimating
    ) {
      return;
    }

    setTimelineDirection(nextIndex > activeTimelineIndex ? 1 : -1);
    setIsTimelineAnimating(true);

    if (timelineTimerRef.current) {
      window.clearTimeout(timelineTimerRef.current);
    }

    timelineTimerRef.current = window.setTimeout(() => {
      setActiveTimelineIndex(nextIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTimelineAnimating(false);
        });
      });
    }, 180);
  };

  React.useEffect(() => {
    return () => {
      if (timelineTimerRef.current) {
        window.clearTimeout(timelineTimerRef.current);
      }
    };
  }, []);

  const handleTimelineKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      changeTimelineStage(activeTimelineIndex + 1);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      changeTimelineStage(activeTimelineIndex - 1);
    }
  };

  const activeTimelineItem = timelineItems[activeTimelineIndex];
  const timelineProgress =
    timelineItems.length > 1
      ? (activeTimelineIndex / (timelineItems.length - 1)) * 100
      : 0;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Sun className="w-96 h-96 animate-spin-slow" style={{ animationDuration: '60s' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-fredoka font-bold mb-6">Câu Chuyện của Happy Shine</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">Happy Shine là một tổ chức giáo dục được thành lập với niềm tin rằng việc học ngôn ngữ nên tự nhiên và mang lại niềm vui, như chính nụ cười của trẻ em.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white md:py-24">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-6xl bg-white border border-red-100 rounded-[2rem] px-6 py-8 shadow-[0_20px_60px_-34px_rgba(185,33,41,0.45)] md:px-10">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-red-600">
                <Target className="h-4 w-4" />
                Mission & Vision
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 text-center">Sứ Mệnh & Tầm Nhìn</h2>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-4 mt-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-[#BB2A31] rounded-[1.5rem] p-6 shadow-[0_20px_50px_-30px_rgba(185,33,41,0.75)] flex items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-fredoka font-black text-white tracking-wide">
                Shine Bright
              </h3>
            </div>

            <div className="col-span-1 min-h-[260px] md:min-h-[420px] lg:col-span-2 lg:row-span-2 rounded-[1.5rem] overflow-hidden shadow-sm border border-yellow-200 relative group bg-yellow-50">
              <span className="absolute top-4 right-4 z-10 w-16 h-3 bg-yellow-300 rounded-full shadow-md">
              </span>
              <img
                src={studentraisinghand}
                alt="Student raising hand"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="col-span-1 min-h-[220px] lg:col-span-2 lg:row-span-1 rounded-[1.5rem] overflow-hidden shadow-sm border border-red-100 group bg-slate-50">
              <img
                src={studentplayinggame}
                alt="Students playing a game"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="col-span-1 min-h-[220px] lg:col-span-2 lg:row-span-1 bg-yellow-400 rounded-[1.5rem] p-6 border border-yellow-300 shadow-sm flex items-center justify-center">
              <h3 className="text-center font-fredoka font-black text-white tracking-wide leading-tight break-words text-balance text-[clamp(1rem,4.8vw,2.25rem)]">HappyShine tin rằng mỗi đứa trẻ đều có tiềm năng tỏa sáng.

              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 bg-slate-50 md:py-16" onKeyDown={handleTimelineKeyDown}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-fredoka font-bold text-slate-900 md:text-4xl">Happy Shine Timeline</h2>
            <p className="sr-only">
              Move across the timeline with the side arrows, click any time mark, or use the left and right arrow keys.
            </p>
          </div>

          <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-red-100 bg-white p-4 shadow-[0_24px_70px_-32px_rgba(185,33,41,0.35)] md:p-5 lg:p-6">
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="rounded-[1.5rem] border border-red-100 bg-slate-50/80 p-3 md:p-4">
                <div className="overflow-x-auto pb-2">
                  <div className="relative mx-auto min-w-[560px] px-4 md:px-6">
                    <div className="absolute left-6 right-6 top-4 h-1 -translate-y-1/2 rounded-full bg-red-100" />
                    <div
                      className="absolute left-6 top-4 h-1 -translate-y-1/2 rounded-full bg-red-600 transition-all duration-500 ease-out"
                      style={{ width: `calc((100% - 3rem) * ${timelineProgress / 100})` }}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      {timelineItems.map((item, index) => {
                        const isActive = index === activeTimelineIndex;

                        return (
                          <button
                            key={item.year}
                            type="button"
                            onClick={() => changeTimelineStage(index)}
                            aria-label={`Go to ${item.year}`}
                            aria-pressed={isActive}
                            className="group flex w-24 shrink-0 flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          >
                            <span
                              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] text-xs font-bold transition-all duration-300 ${
                                isActive
                                  ? 'scale-110 border-red-600 bg-red-600 text-white shadow-lg shadow-red-200'
                                  : 'border-red-200 bg-white text-red-500 group-hover:border-red-400 group-hover:text-red-600'
                              }`}
                            >
                              {item.year.slice(-2)}
                            </span>
                            <span className={`mt-3 text-sm font-bold transition-colors duration-300 ${isActive ? 'text-red-600' : 'text-slate-700 group-hover:text-red-600'}`}>
                              {item.year}
                            </span>
                            <span className={`mt-1 text-sm leading-5 transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                              {item.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 md:gap-6">
                <button
                  type="button"
                  onClick={() => changeTimelineStage(activeTimelineIndex - 1)}
                  disabled={activeTimelineIndex === 0 || isTimelineAnimating}
                  aria-label="Show previous timeline milestone"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-xl font-bold text-red-600 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300 disabled:hover:bg-white md:h-14 md:w-14"
                >
                  &larr;
                </button>

                <div
                  tabIndex={0}
                  role="region"
                  aria-live="polite"
                  aria-label={`Timeline stage ${activeTimelineIndex + 1}: ${activeTimelineItem.year} ${activeTimelineItem.title}`}
                  className="flex-1 rounded-[1.5rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-white p-4 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 md:min-h-[220px] md:p-5 lg:p-6"
                >
                  <div
                    className={`transition-all duration-300 ease-out ${
                      isTimelineAnimating
                        ? timelineDirection === 1
                          ? 'translate-x-8 opacity-0'
                          : '-translate-x-8 opacity-0'
                        : 'translate-x-0 opacity-100'
                    }`}
                  >
                    <div className="grid h-full items-center gap-5 text-center md:grid-cols-[minmax(180px,0.9fr)_minmax(0,1fr)] md:gap-6 md:text-left">
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-red-100 bg-white shadow-md md:aspect-[4/3]">
                        <img
                          src={activeTimelineItem.image}
                          alt={activeTimelineItem.imageAlt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-sm font-bold tracking-[0.2em] text-red-600">
                          {activeTimelineItem.year}
                        </span>
                        <h3 className="mt-3 text-2xl font-fredoka font-bold text-slate-900 md:text-3xl">
                          {activeTimelineItem.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                          {activeTimelineItem.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => changeTimelineStage(activeTimelineIndex + 1)}
                  disabled={activeTimelineIndex === timelineItems.length - 1 || isTimelineAnimating}
                  aria-label="Show next timeline milestone"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-xl font-bold text-red-600 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300 disabled:hover:bg-white md:h-14 md:w-14"
                >
                  &rarr;
                </button>
              </div>

              <p className="text-center text-xs font-medium text-slate-500 md:text-sm">
                Milestone {activeTimelineIndex + 1} of {timelineItems.length}
              </p>
            </div>
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
              { icon: <Heart className="text-red-600" />, title: "Student-First", desc: "PhÃ¡t triá»ƒn vá»›i cÃ¡c bÃ© Ä‘Æ°á»£c Ä‘áº·t lÃªn hÃ ng Ä‘áº§u." },
              { icon: <ShieldCheck className="text-red-600" />, title: "Minh Báº¡ch", desc: "Minh báº¡ch trong má»i quy trÃ¬nh giáº£ng dáº¡y vÃ  káº¿t quáº£ cá»§a cÃ¡c bÃ©." },
              { icon: <Award className="text-red-600" />, title: "Cháº¥t LÆ°á»£ng", desc: "HÆ°á»›ng cÃ¡c bÃ© tá»›i káº¿t quáº£ há»c tá»‘t nháº¥t cÃ³ thá»ƒ." },
              { icon: <Sun className="text-red-600" />, title: "TÃ­ch Cá»±c", desc: "Cho cÃ¡c bÃ© mÃ´i trÆ°á»ng há»c táº­p tÃ­ch cá»±c vÃ  gáº§n gÅ©i vá»›i tháº§y cÃ´ nháº¥." },
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
      <Certificate />
    </div>
  );
};

export default About;
