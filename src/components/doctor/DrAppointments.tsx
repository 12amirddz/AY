import React from 'react';
import { Calendar, Search, Filter, MoreVertical, Stethoscope, Video, Phone, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function DrAppointments() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">إدارة المواعيد</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">عرض وإدارة الحجوزات القادمة والسابقة</p>
        </div>
        <button className="bg-[#117676] hover:bg-[#0c5c5c] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-[#117676]/20 transition-all">
          <Calendar className="w-5 h-5" />
          إضافة موعد جديد
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input type="text" placeholder="بحث باسم المريض..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676]" />
            </div>
            <button className="p-2 border border-slate-200 text-slate-500 rounded-xl hover:bg-slate-50">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
             <button className="flex-1 sm:flex-none px-6 py-1.5 bg-white text-[#117676] font-bold rounded-lg shadow-sm text-sm">القادمة</button>
             <button className="flex-1 sm:flex-none px-6 py-1.5 text-slate-500 hover:text-slate-700 font-bold rounded-lg text-sm">السابقة</button>
             <button className="flex-1 sm:flex-none px-6 py-1.5 text-slate-500 hover:text-slate-700 font-bold rounded-lg text-sm">الملغاة</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-wider font-bold">
                <th className="px-6 py-4 font-bold">المريض</th>
                <th className="px-6 py-4 font-bold">التاريخ والوقت</th>
                <th className="px-6 py-4 font-bold">النوع</th>
                <th className="px-6 py-4 font-bold">الحالة</th>
                <th className="px-6 py-4 font-bold text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'أحمد خالد', date: 'اليوم، 10:00 ص', type: 'عيادة', status: 'مؤكد', icon: Stethoscope, color: 'blue' },
                { name: 'سارة عبد الله', date: 'اليوم، 11:30 ص', type: 'فيديو', status: 'في الانتظار', icon: Video, color: 'purple', pending: true },
                { name: 'عمر فاروق', date: 'غداً، 09:00 ص', type: 'صوتية', status: 'مؤكد', icon: Phone, color: 'amber' },
                { name: 'ياسين محمد', date: 'الخميس، 02:00 م', type: 'عيادة', status: 'مؤكد', icon: Stethoscope, color: 'blue' }
              ].map((apt, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                        {apt.name.charAt(0)}
                      </div>
                      <p className="font-bold text-sm text-slate-800">{apt.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-600">{apt.date}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1.5 text-xs font-bold text-${apt.color}-600 bg-${apt.color}-50 px-3 py-1.5 rounded-lg w-fit`}>
                      <apt.icon className="w-3.5 h-3.5" /> استشارة {apt.type}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {apt.pending ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-lg w-fit">
                        <Clock className="w-3 h-3" /> {apt.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg w-fit">
                        <CheckCircle className="w-3 h-3" /> {apt.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center border-none">
                    <div className="flex justify-center flex-row gap-2">
                       <button className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"><CheckCircle className="w-4 h-4" /></button>
                       <button className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"><XCircle className="w-4 h-4" /></button>
                       <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
