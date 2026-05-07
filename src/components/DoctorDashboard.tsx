import React, { useState } from 'react';
import { 
  Home, Calendar, Users, Stethoscope, FileText, BarChart2, 
  Settings, LogOut, Search, Bell, MessageSquare, 
  TrendingUp, Clock, Video, ShieldCheck, Plus, 
  HeartPulse, Activity, UserPlus, Phone, CalendarCheck, Moon, Sun
} from 'lucide-react';
import DrAppointments from './doctor/DrAppointments';
import DrPatients from './doctor/DrPatients';
import DrConsultations from './doctor/DrConsultations';
import DrReports from './doctor/DrReports';
import DrPrescriptions from './doctor/DrPrescriptions';
import DrSettings from './doctor/DrSettings';

type Theme = 'light' | 'dark';

interface DoctorDashboardProps {
  onLogout?: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function DoctorDashboard({ onLogout, theme, setTheme }: DoctorDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'appointments', icon: Calendar, label: 'المواعيد' },
    { id: 'patients', icon: Users, label: 'المرضى' },
    { id: 'consultations', icon: Stethoscope, label: 'الاستشارات' },
    { id: 'prescriptions', icon: FileText, label: 'الوصفات الطبية' },
    { id: 'reports', icon: BarChart2, label: 'التقارير والإحصائيات' },
    { id: 'settings', icon: Settings, label: 'الإعدادات' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 flex font-sans text-slate-800 dark:text-slate-100" dir="rtl">
      
      {/* Sidebar (Right) */}
      <aside className="fixed inset-y-0 right-0 z-50 w-72 bg-white dark:bg-slate-900 flex flex-col border-l border-slate-100 dark:border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.02)]">
        {/* Logo */}
        <div className="h-24 flex items-center px-8 border-b border-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#117676] rounded-xl flex items-center justify-center shadow-lg shadow-[#117676]/20">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black text-[#117676] tracking-tight block leading-none mb-1">أتهلا في صحتك</span>
              <span className="text-[10px] font-bold text-slate-400">منصتك الذكية للعناية بصحتك</span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2 scrollbar-hide">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-[#e8f6f3]/80 text-[#117676] shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-950 hover:text-[#117676]'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-[#117676]' : 'text-slate-400'}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="p-6 mt-auto border-t border-slate-50">
          <button 
            onClick={onLogout} 
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-slate-500 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-5 h-5 text-slate-400" />
            <span className="text-sm">تسجيل خروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mr-72 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-24 bg-white dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-10 sticky top-0 z-40">
          
          <div className="relative w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="ابحث عن مريض، موعد أو تقرير..."
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/60 rounded-2xl py-3.5 pr-12 pl-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#117676]/20 focus:border-[#117676] transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-5">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2.5 text-slate-400 hover:bg-slate-50 dark:bg-slate-950 hover:text-[#117676] dark:hover:text-[#2dd4bf] rounded-xl transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 dark:bg-slate-950 rounded-xl transition-colors">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#117676] border-2 border-white rounded-full box-content"></span>
            </button>
            <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 dark:bg-slate-950 rounded-xl transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full box-content text-[8px] flex items-center justify-center text-white font-bold leading-none"></span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <button className="flex items-center gap-3 hover:bg-slate-50 dark:bg-slate-950 p-2 rounded-2xl transition-colors pr-3 group">
              <div className="text-left">
                <p className="text-sm font-black mb-0.5 text-slate-800 dark:text-slate-100">د. محمد يوسف</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-md inline-block">أخصائي أمراض القلب</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80" 
                alt="Dr. Mohamed" 
                className="w-11 h-11 rounded-xl object-cover border border-slate-200 dark:border-slate-700/60 shadow-sm group-hover:border-[#117676]/30 transition-colors" 
              />
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 lg:p-10 flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'home' && (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-in fade-in duration-500">
                {/* Middle Column (Main Dashboard Content) */}
                <div className="xl:col-span-2 space-y-8">
                  {/* Hero Section */}
                  <div className="relative bg-gradient-to-r from-[#117676] to-[#1a9393] rounded-[2.5rem] p-8 md:p-10 overflow-hidden shadow-xl shadow-[#117676]/20 flex items-center justify-between">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white dark:bg-slate-900/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 text-white">
                      <h1 className="text-3xl md:text-4xl font-black mb-3 drop-shadow-sm flex items-center gap-3">
                        مرحباً بك مجدداً، د. محمد <span className="inline-block animate-bounce origin-bottom text-2xl">⚡️</span>
                      </h1>
                      <p className="text-emerald-50 text-lg font-medium opacity-90 max-w-lg leading-relaxed">
                        لديك اليوم 18 موعداً مجدولاً و 7 استشارات عن بُعد. نتمنى لك يوماً مثمراً ومليئاً بالنجاح!
                      </p>
                    </div>
                    
                    <div className="hidden md:block relative z-10 shrink-0">
                       <div className="w-32 h-32 bg-white dark:bg-slate-900/10 rounded-[2rem] backdrop-blur-md border border-white/20 p-4 flex flex-col items-center justify-center transform hover:rotate-6 transition-all shadow-2xl">
                          <span className="text-4xl font-black text-white">18</span>
                          <span className="text-xs font-bold text-emerald-100 mt-1">المواعيد اليوم</span>
                       </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Stat 1 */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col justify-between group hover:-translate-y-1 transition-transform relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                          <Users className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 px-2 py-1 rounded-lg">
                          <TrendingUp className="w-3 h-3" /> 12%
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-1">1,284</h4>
                        <p className="text-xs font-bold text-slate-400">إجمالي المرضى</p>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col justify-between group hover:-translate-y-1 transition-transform relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                          <Video className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 px-2 py-1 rounded-lg">
                          <TrendingUp className="w-3 h-3" /> 5%
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-1">291</h4>
                        <p className="text-xs font-bold text-slate-400">الاستشارات الشهرية</p>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-[#1e293b] p-6 rounded-[2rem] shadow-xl shadow-slate-800/10 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -translate-x-10 -translate-y-10"></div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 bg-slate-700/50 text-white rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-slate-600">
                          <Clock className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="relative z-10 text-white">
                        <h4 className="text-3xl font-black mb-1">04:30</h4>
                        <p className="text-xs font-medium text-slate-400">ساعات العمل المتبقية</p>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Appointments Table */}
                  <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50 dark:bg-slate-950/30">
                      <div>
                        <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">قائمة المهام اليومية</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">لديك 5 مواعيد متبقية اليوم</p>
                      </div>
                      <button onClick={() => setActiveTab('appointments')} className="text-sm font-bold text-[#117676] bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors">عرض الجدول</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-right border-collapse">
                        <thead>
                          <tr className="bg-white dark:bg-slate-900 text-slate-400 text-[10px] uppercase tracking-widest font-black border-y border-slate-50">
                            <th className="px-8 py-3">المريض</th>
                            <th className="px-4 py-3">الوقت</th>
                            <th className="px-4 py-3">النوع</th>
                            <th className="px-8 py-3">الحالة</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          <tr className="hover:bg-slate-50 dark:bg-slate-950/50 transition-colors group">
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-3">
                                <img src="https://ui-avatars.com/api/?name=Ahmed+K&background=f8fafc&color=0f172a" className="w-10 h-10 rounded-2xl border border-slate-100 dark:border-slate-800" />
                                <div>
                                  <p className="font-bold text-sm text-slate-800 dark:text-slate-100">أحمد خالد</p>
                                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">متابعة دواء</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-5 text-sm font-bold text-slate-800 dark:text-slate-100">10:00 ص</td>
                            <td className="px-4 py-5">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg w-fit border border-blue-100">
                                <Stethoscope className="w-3.5 h-3.5" /> عيادة
                              </div>
                            </td>
                            <td className="px-8 py-5">
                              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 px-3 py-1 rounded-md uppercase tracking-wider">مؤكد</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:bg-slate-950/50 transition-colors group">
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-3">
                                <img src="https://ui-avatars.com/api/?name=Sara+A&background=f1f5f9&color=0f172a" className="w-10 h-10 rounded-2xl border border-slate-100 dark:border-slate-800" />
                                <div>
                                  <p className="font-bold text-sm text-slate-800 dark:text-slate-100">سارة عبد الله</p>
                                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">نتائج التحاليل</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-5 text-sm font-bold text-slate-800 dark:text-slate-100">11:30 ص</td>
                            <td className="px-4 py-5">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg w-fit border border-purple-100">
                                <Video className="w-3.5 h-3.5" /> فيديو
                              </div>
                            </td>
                            <td className="px-8 py-5">
                              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 px-3 py-1 rounded-md uppercase tracking-wider">مؤكد</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:bg-slate-950/50 transition-colors group">
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-3">
                                <img src="https://ui-avatars.com/api/?name=Omar+F&background=f8fafc&color=0f172a" className="w-10 h-10 rounded-2xl border border-slate-100 dark:border-slate-800" />
                                <div>
                                  <p className="font-bold text-sm text-slate-800 dark:text-slate-100">عمر فاروق</p>
                                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">ألم في الصدر</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-5 text-sm font-bold text-slate-800 dark:text-slate-100">01:00 م</td>
                            <td className="px-4 py-5">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg w-fit border border-amber-100">
                                <Phone className="w-3.5 h-3.5" /> صوت
                              </div>
                            </td>
                            <td className="px-8 py-5">
                              <span className="text-[10px] font-black text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-md uppercase tracking-wider">انتظار</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Left Column (Right side of screen in LTR, Left in RTL) */}
                <div className="space-y-6">
                  {/* Digital Clock & Date */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/30 rounded-full blur-3xl -mt-10 -mr-10"></div>
                    <div className="relative z-10">
                      <p className="text-sm font-bold text-emerald-600 mb-2">الأحد، 26 مايو 2024</p>
                      <h2 className="text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight font-mono">10:45<span className="text-2xl text-slate-400 ml-1">ص</span></h2>
                      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl">
                        <Activity className="w-4 h-4 text-emerald-500" />
                        العيادة مفتوحة
                      </div>
                    </div>
                  </div>

                  {/* Schedule Timeline */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative">
                    <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6">الجدول الزمني</h3>
                    
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-slate-100 before:z-0">
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="w-4 h-4 rounded-full bg-[#117676] border-4 border-white shadow-sm mt-1 shrink-0"></div>
                        <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 flex-1">
                          <p className="text-xs font-bold text-slate-400 mb-1">09:00 ص - 10:00 ص</p>
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">جولة الحالات الحرجة</p>
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm mt-1 shrink-0"></div>
                        <div className="bg-blue-50 rounded-2xl p-4 flex-1 border border-blue-100">
                          <p className="text-xs font-bold text-blue-400 mb-1">10:00 ص - 01:00 م</p>
                          <p className="text-sm font-bold text-blue-900">الاستشارات والمواعيد</p>
                          <div className="mt-3 flex -space-x-2 space-x-reverse">
                            <img src="https://ui-avatars.com/api/?name=A&background=fff&color=000" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
                            <img src="https://ui-avatars.com/api/?name=S&background=fff&color=000" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 text-[8px] font-bold flex items-center justify-center">+3</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex items-start gap-4 opacity-50 grayscale">
                        <div className="w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm mt-1 shrink-0"></div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex-1">
                          <p className="text-xs font-bold text-slate-400 mb-1">01:00 م - 02:00 م</p>
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">استراحة الغداء</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && <DrAppointments />}
            {activeTab === 'patients' && <DrPatients />}
            {activeTab === 'consultations' && <DrConsultations />}
            {activeTab === 'reports' && <DrReports />}
            {activeTab === 'prescriptions' && <DrPrescriptions />}
            {activeTab === 'settings' && <DrSettings />}
          </div>
        </div>
      </main>

    </div>
  );
}
