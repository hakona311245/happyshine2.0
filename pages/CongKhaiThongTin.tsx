import React from 'react';
import { FileText, Shield, Scale, Briefcase, Landmark, CheckSquare, Download, Sun, ArrowLeft, ExternalLink, Users, ArrowLeftRight, BadgeCheck, SquareChartGantt, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ttchungvecosogiaoducq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_TTCHUNGVE_COSO_GIAODUC(Q6).pdf';
import ttchungvecosogiaoducq7 from '../media/giayto/thongtincongkhai/CKHAI_THONGTIN_CHUNG_COSO.pdf';
import ttthuchiq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_TT_THU_CHI_TAICHINH(Q6).pdf';
import ttthuchiq7 from '../media/giayto/thongtincongkhai/CKHAI_TT_THU_CHI_TAICHINH.pdf';
import dambaochatluongq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_DAMBAO_CHATLUONG(Q6).pdf';
import dambaochatluongq7 from '../media/giayto/thongtincongkhai/CKHAI_DAMBAO_CHATLUONG.pdf';
import kquakehoachgiaoducq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_KEHOACH_KQUA_HOATDONG(Q6).pdf';
import kquakehoachgiaoducq7 from '../media/giayto/thongtincongkhai/CKHAI_KEHOACH_HOATDONG.pdf';
import danhsachnhanvienq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_DSNV(Q6)_2026.pdf';
import danhsachnhanvienq7 from '../media/giayto/thongtincongkhai/CKHAI_DS_NV_2026.pdf';
import danhsachgiaovienq6 from '../media/giayto/thongtincongkhai/quan6/CKHAI_DS_GV(Q6)_2026.pdf';
import danhsachgiaovienq7 from '../media/giayto/thongtincongkhai/CKHAI_DS_GV_2026.pdf';
import businessRegistrationPdf from '../media/giayto/hosophaply/giay_chungnhan_dky_doanhnghiep.pdf';
import centerEstablishmentPdf from '../media/giayto/hosophaply/quyetdinh_thanhlap_trungtam.pdf';

type LegalDocument = {
  name: string;
  file?: string;
};

type DocumentCategory = {
  title: string;
  icon: React.ReactNode;
  docs: LegalDocument[];
};

const CongKhaiThongTin: React.FC = () => {
  const documentCategories: DocumentCategory[] = [
        {
      title: "Công khai thông tin chung về cơ sở giáo dục",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: ttchungvecosogiaoducq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: ttchungvecosogiaoducq7 },
      ]
    },
    {
      title: "Công khai thông tin thu, chi tài chính",
      icon: <ArrowLeftRight className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: ttthuchiq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: ttthuchiq7 },
      ]
    },
    {
      title: "Công khai điều kiện bảo đảm chất lượng hoạt động giáo dục thường xuyên",
      icon: <BadgeCheck className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: dambaochatluongq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: dambaochatluongq7 },
      ]
    },
    {
      title: "Công khai kế hoạch và kết quả hoạt động giáo dục thường xuyên",
      icon: <SquareChartGantt className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: kquakehoachgiaoducq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: kquakehoachgiaoducq7 },
      ]
    },
    {
      title: "Công khai danh sách nhân viên",
      icon: <Users className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: danhsachnhanvienq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: danhsachnhanvienq7 },
      ]
    },
        {
      title: "Công khai danh sách giáo viên",
      icon: <GraduationCap className="w-8 h-8 text-red-600" />,
      docs: [
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc", file: danhsachgiaovienq6 },
        { name: "Trung tâm Anh ngữ Tỏa Sáng Hạnh Phúc 1", file: danhsachgiaovienq7 },
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
          <h1 className="text-4xl lg:text-6xl font-fredoka font-bold mb-4 text-center lg:text-left">Công Khai Thông Tin</h1>
          <p className="text-xl text-red-100 max-w-2xl text-center lg:text-left">
            Công khai theo Thông tư 09/2024/TT-BGDĐT ngày 03 tháng 6 năm 2024 và các quy định liên quan.
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
                      </div>
                    </div>
                    {doc.file ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={doc.file}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-red-600 shadow-sm transition-all hover:bg-red-600 hover:text-white"
                          title="View PDF"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </a>
                        <a
                          href={doc.file}
                          download
                          className="p-2.5 bg-white rounded-xl text-red-600 shadow-sm hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
                          title="Download PDF"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    ) : (
                      <span className="rounded-xl bg-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Unavailable
                      </span>
                    )}
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
          <h3 className="text-2xl font-fredoka font-bold mb-4">Thông Tin Minh Bạch</h3>
          <p className="text-slate-600 leading-relaxed">
            Tất cả các tài liệu được liệt kê ở trên đều đã được xác minh bởi cơ quan chức năng có liên quan.
            Để giải đáp các thắc mắc cụ thể về quy định, vui lòng đến Cơ sở chính của Happy Shine trong giờ hành chính hoặc liên hệ với bộ phận tuân thủ.
            <span className="font-bold text-red-600"> happyshineenglish@gmail.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CongKhaiThongTin;
