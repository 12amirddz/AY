import React from 'react';
import { User, Lock, Bell, Globe, CreditCard, Shield } from 'lucide-react';

export default function DrSettings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">الإعدادات</h2>
        <p className="text-slate-500 text-sm font-medium mt-1">إدارة حسابك، الإشعارات، وتفضيلات العيادة</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Settings Navigation */}
        <div className="w-full lg:w-64 shrink-0">
           <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-2 space-y-1">
             {[
               { id: 'profile', icon: User, label: 'الملف الشخصي', active: true },
               { id: 'security', icon: Lock, label: 'الأمان وكلمة المرور' },
               { id: 'notifications', icon: Bell, label: 'الإشعارات' },
               { id: 'clinic', icon: Shield, label: 'إعدادات العيادة' },
               { id: 'billing', icon: CreditCard, label: 'الفواتير والاشتراك' },
             ].map((item) => (
                <button key={item.id} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm ${item.active ? 'bg-[#e8f6f3] text-[#117676]' : 'text-slate-600 hover:bg-slate-50'}`}>
                   <item.icon className="w-4 h-4" />
                   {item.label}
                </button>
             ))}
           </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8">
           <h3 className="text-xl font-black text-slate-800 mb-6">الملف الشخصي</h3>
           
           <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
              <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200">
                 <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                 <button className="bg-[#117676] hover:bg-[#0c5c5c] text-white px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#117676]/20 mb-2">
                   تغيير الصورة
                 </button>
                 <p className="text-xs text-slate-500 font-medium tracking-wide">SVG, PNG أو JPG (الحد الأقصى 2MB)</p>
              </div>
           </div>

           <form className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الأول</label>
                    <input type="text" defaultValue="محمد" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] font-medium" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الأخير</label>
                    <input type="text" defaultValue="يوسف" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] font-medium" />
                 </div>
              </div>
              
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                 <input type="email" defaultValue="dr.mohamed@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] font-medium" />
              </div>

              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">التخصص</label>
                 <input type="text" defaultValue="أخصائي أمراض القلب" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] font-medium" />
              </div>

              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">نبذة عن الطبيب</label>
                 <textarea rows={4} defaultValue="طبيب مختص في أمراض القلب والشرايين بخبرة تزيد عن 15 عاماً..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] font-medium resize-none"></textarea>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                 <button type="button" className="bg-[#117676] hover:bg-[#0c5c5c] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#117676]/20 transition-all">
                   حفظ التغييرات
                 </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
}
