import React from 'react';
import { Calendar, MapPin, Building, Stethoscope, User, Edit3, Clock, ShieldCheck, Info } from 'lucide-react';
import { DICT, Lang } from '../lib/i18n';

interface BookAppointmentProps {
  lang: Lang;
  theme: 'light' | 'dark';
  onBack?: () => void;
}

export default function BookAppointment({ lang, theme, onBack }: BookAppointmentProps) {
  const isDark = theme === 'dark';
  const t = DICT[lang].dashboard;
  const isAR = lang === 'ar';

  const cardBg = isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100';
  const inputBg = isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${cardBg} p-6 lg:p-8 rounded-[2rem] border shadow-sm`}>
        <div>
          <h2 className="text-3xl font-black mb-2">{t.appointments.title}</h2>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span onClick={onBack} className="text-emerald-600 hover:text-emerald-700 cursor-pointer">{t.nav.home}</span>
            <span>/</span>
            <span className="text-emerald-600 hover:text-emerald-700 cursor-pointer">{t.nav.appointments}</span>
            <span>/</span>
            <span className="text-slate-400">{t.appointments.title}</span>
          </div>
        </div>
        <div className="w-16 h-16 bg-[#e8f6f3] dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center shrink-0">
          <Calendar className="w-8 h-8 text-[#117676] dark:text-emerald-400" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-6">
          <div className={`${isDark ? 'bg-emerald-900/20 border-emerald-800/30' : 'bg-[#e8f6f3] border-emerald-100/50'} p-8 rounded-[2rem] border flex flex-col items-center justify-center text-center`}>
            <div className={`w-16 h-16 ${isDark ? 'bg-slate-800' : 'bg-white dark:bg-slate-900'} rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <ShieldCheck className="w-8 h-8 text-[#117676] dark:text-emerald-400" />
            </div>
            <h4 className={`text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>{t.trust.secureConsultations}</h4>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.trust.secureConsultationsDesc}
            </p>
          </div>
        </div>

        <div className={`lg:w-2/3 ${cardBg} p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">1</span>
                  {isAR ? 'اختيار الولاية' : 'Wilaya / State'}
                </label>
                <div className="relative">
                  <MapPin className={`absolute top-1/2 -translate-y-1/2 ${'right-4'} w-5 h-5 text-slate-400`} />
                  <select defaultValue="" className={`w-full appearance-none ${inputBg} rounded-2xl py-4 ${'pr-12 pl-4'} outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all cursor-pointer`}>
                    <option value="" disabled>{isAR ? 'ولاية الجزائر' : 'Algiers'}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">2</span>
                  {isAR ? 'اختيار البلدية' : 'Municipality'}
                </label>
                <div className="relative">
                  <Building className={`absolute top-1/2 -translate-y-1/2 ${'right-4'} w-5 h-5 text-slate-400`} />
                  <select defaultValue="" className={`w-full appearance-none ${inputBg} rounded-2xl py-4 ${'pr-12 pl-4'} outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all cursor-pointer`}>
                    <option value="" disabled>{isAR ? 'الجزائر الوسطى' : 'Algiers Center'}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">3</span>
                  {isAR ? 'اختيار التخصص' : 'Specialty'}
                </label>
                <div className="relative">
                  <Stethoscope className={`absolute top-1/2 -translate-y-1/2 ${'right-4'} w-5 h-5 text-slate-400`} />
                  <select defaultValue="" className={`w-full appearance-none ${inputBg} rounded-2xl py-4 ${'pr-12 pl-4'} outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all cursor-pointer`}>
                    <option value="" disabled>{isAR ? 'أمراض القلب' : 'Cardiology'}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">4</span>
                  {isAR ? 'اختيار الطبيب' : 'Doctor'}
                </label>
                <div className="relative">
                  <User className={`absolute top-1/2 -translate-y-1/2 ${'right-4'} w-5 h-5 text-slate-400`} />
                  <select defaultValue="" className={`w-full appearance-none ${inputBg} rounded-2xl py-4 ${'pr-12 pl-4'} outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all cursor-pointer`}>
                    <option value="" disabled>{isAR ? 'د. محمد بوزيد' : 'Dr. Mohamed'}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="button"
                className="w-full bg-[#117676] hover:bg-[#0c5c5c] text-white rounded-2xl py-4 font-bold text-lg transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-3 hover:-translate-y-1"
              >
                {isAR ? 'تأكيد الحجز' : 'Confirm'}
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
