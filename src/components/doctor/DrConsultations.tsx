import React from 'react';
import { Video, Phone, CheckCircle, Search, MessageSquare, Clock } from 'lucide-react';

export default function DrConsultations() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">الاستشارات عن بُعد</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">إدارة استشارات الفيديو والصوت والمحادثات النصية</p>
        </div>
        <button className="bg-[#117676] hover:bg-[#0c5c5c] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-[#117676]/20 transition-all">
          <Video className="w-5 h-5" />
          بدء استشارة فورية
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active/Pending Consultations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6">
             <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                في الانتظار الآن (2)
             </h3>
             
             <div className="space-y-4">
                {/* Consultation Card 1 */}
                <div className="border border-emerald-100 bg-emerald-50/30 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 justify-between items-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
                   <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center p-1 relative">
                         <img src="https://ui-avatars.com/api/?name=Sara+A&background=f1f5f9&color=0f172a" className="w-full h-full rounded-lg" />
                         <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center border-2 border-white">
                           <Video className="w-3 h-3" />
                         </div>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-800">سارة عبد الله</h4>
                         <p className="text-xs text-slate-500 mt-1">تنتظر منذ 5 دقائق • استشارة فيديو</p>
                      </div>
                   </div>
                   <button className="w-full sm:w-auto px-8 py-3 bg-[#117676] hover:bg-[#0c5c5c] text-white rounded-xl font-bold shadow-lg shadow-[#117676]/20 transition-all flex items-center justify-center gap-2">
                     <Video className="w-4 h-4" /> انضمام
                   </button>
                </div>

                {/* Consultation Card 2 */}
                <div className="border border-amber-100 bg-amber-50/30 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 justify-between items-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-2 h-full bg-amber-400"></div>
                   <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-amber-100 flex items-center justify-center p-1 relative">
                         <img src="https://ui-avatars.com/api/?name=Omar+F&background=f8fafc&color=0f172a" className="w-full h-full rounded-lg" />
                         <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center border-2 border-white">
                           <Phone className="w-3 h-3" />
                         </div>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-800">عمر فاروق</h4>
                         <p className="text-xs text-slate-500 mt-1">مُجدولة الآن • استشارة صوتية</p>
                      </div>
                   </div>
                   <button className="w-full sm:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
                     <Phone className="w-4 h-4" /> اتصال
                   </button>
                </div>
             </div>
          </div>
          
          {/* Scheduled Consultations Table */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
             <div className="p-6 border-b border-slate-50">
                <h3 className="text-lg font-black text-slate-800">الاستشارات المجدولة</h3>
             </div>
             <table className="w-full text-right">
                <tbody className="divide-y divide-slate-50">
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                               <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                               <p className="font-bold text-sm text-slate-800">مريض {item}</p>
                               <p className="text-[11px] text-slate-400">اليوم، 04:00 م • دردشة نصية</p>
                            </div>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                         <button className="text-[#117676] bg-[#e8f6f3] px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-[#117676] hover:text-white transition-colors">
                           فتح المحادثة
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        </div>

        {/* Sidebar for Messages/Recent */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col h-[600px]">
          <h3 className="text-lg font-black text-slate-800 mb-4">الرسائل الأخيرة</h3>
          <div className="relative mb-6">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="بحث في الرسائل..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676]" />
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
             {[
               {name: 'خالد إبراهيم', msg: 'دكتور، هل يمكنني تناول الدواء...', time: 'منذ 10 د'},
               {name: 'منى علي', msg: 'شكراً لك دكتور، أشعر بتحسن كبير', time: 'منذ 1 س'},
               {name: 'ياسين محمد', msg: 'نتيجة التحليل مرفقة', time: 'أمس'},
             ].map((msg, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-100">
                   <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                         <p className="text-sm font-bold text-slate-800 truncate">{msg.name}</p>
                         <span className="text-[10px] font-bold text-slate-400 shrink-0">{msg.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{msg.msg}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
