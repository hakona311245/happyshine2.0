import React from 'react';
import { Award, ShieldCheck, BadgeCheck, FileText } from 'lucide-react';

type CertificationItem = {
  title: string;
  description: string;
  issuer: string;
  year: string;
  image?: string;
  imageAlt?: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const certifications: CertificationItem[] = [
  {
    title: 'Authorized English Training Center',
    description: 'Accredited for safe operations and quality teaching.',
    issuer: 'Local Education Authority',
    year: '2024',
    Icon: ShieldCheck,
  },
  {
    title: 'Teaching Excellence Program',
    description: 'Recognizes strong curriculum and teacher growth.',
    issuer: 'Academic Quality Council',
    year: '2023',
    Icon: BadgeCheck,
  },
  {
    title: 'Learning Services Quality Mark',
    description: 'Quality mark for learner-first service standards.',
    issuer: 'Education Standards Board',
    year: '2022',
    Icon: Award,
  },
];

const Certificate: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-100 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>Certification & Accreditation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold text-slate-900 mb-4">
            Trusted standards for confident learning
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Our center follows recognized education standards to ensure safe, structured, and
            measurable progress for every learner.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={`${certification.title}-${certification.year}`}
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-6 md:p-7">
                <div className="h-40 md:h-44 w-full rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden flex items-center justify-center">
                  {certification.image ? (
                    <img
                      src={certification.image}
                      alt={certification.imageAlt ?? certification.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-slate-400">
                      <FileText className="w-8 h-8" />
                      <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest">
                        Certificate image
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                    <certification.Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {certification.year}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-fredoka font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {certification.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{certification.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {certification.issuer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
