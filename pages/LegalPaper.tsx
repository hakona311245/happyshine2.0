
import React from 'react';
import { FileText, Shield, Scale, Briefcase, Landmark, CheckSquare, Download, Sun, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalPaper: React.FC = () => {
  const documentCategories = [
    {
      title: "Business Licenses",
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Main Campus Operating License", size: "2.4 MB" },
        { name: "Smile Branch Business Registration", size: "1.8 MB" }
      ]
    },
    {
      title: "Educational Permits",
      icon: <Landmark className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "International Education Permit 2024", size: "3.1 MB" },
        { name: "Curriculum Approval Certificate", size: "2.7 MB" }
      ]
    },
    {
      title: "Safety & Fire Compliance",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Annual Fire Safety Certification", size: "1.5 MB" },
        { name: "Campus Structural Integrity Report", size: "4.2 MB" }
      ]
    },
    {
      title: "Health & Sanitation",
      icon: <Landmark className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Public Health Compliance Letter", size: "1.1 MB" },
        { name: "Campus Hygiene Standard Certificate", size: "0.9 MB" }
      ]
    },
    {
      title: "Quality Assurance",
      icon: <CheckSquare className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "ISO 9001:2015 Educational Standard", size: "2.2 MB" },
        { name: "Student Well-being Quality Seal", size: "1.6 MB" }
      ]
    },
    {
      title: "Regulatory Compliance",
      icon: <Scale className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Data Protection (GDPR) Compliance", size: "1.3 MB" },
        { name: "Educational Tax Compliance Letter", size: "1.2 MB" }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-red-600 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back Home
          </Link>
          <h1 className="text-4xl lg:text-6xl font-fredoka font-bold mb-4 text-center lg:text-left">Legal & Compliance Hub</h1>
          <p className="text-xl text-red-100 max-w-2xl text-center lg:text-left">
            We are committed to full transparency and excellence in educational standards. Access our official legal documents below.
          </p>
        </div>
        <Sun className="absolute -top-20 -right-20 w-80 h-80 text-white/10 animate-spin-slow" />
      </section>

      {/* Document Grid */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-2xl font-fredoka font-bold text-slate-900 mb-6">{category.title}</h2>
              
              <div className="space-y-4">
                {category.docs.map((doc, docIndex) => (
                  <div key={docIndex} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group/item hover:bg-red-50 hover:border-red-100 transition-all">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400 group-hover/item:text-red-600" />
                      <div>
                        <p className="text-sm font-bold text-slate-800">{doc.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{doc.size}</p>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      className="p-2.5 bg-white rounded-xl text-red-600 shadow-sm hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transparency Note */}
      <section className="container mx-auto px-6 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 text-center border-2 border-dashed border-red-200">
          <Landmark className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-fredoka font-bold mb-4">Official Verification</h3>
          <p className="text-slate-600 leading-relaxed">
            All documents listed above are verified by the local Ministry of Education and relevant municipal authorities. 
            For physically stamped copies or specific regulatory inquiries, please visit our Main Campus during business hours or contact our compliance department at 
            <span className="font-bold text-red-600"> legal@happyshine.edu</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalPaper;
