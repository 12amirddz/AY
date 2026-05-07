import React, { useState } from 'react';
import { 
  Search, Bell, MessageSquare, Home, Calendar, Stethoscope, 
  Heart, FileText, FileBarChart, BookOpen, Settings, 
  Headset, CalendarCheck, ShieldCheck, Clock, Users, Menu, X, LogOut, Moon, Sun, Globe, User as UserIcon
} from 'lucide-react';
import BookAppointment from './BookAppointment';
import BookConsultation from './BookConsultation';
import { DICT, Lang } from '../lib/i18n';

type Theme = 'light' | 'dark';

interface PatientDashboardProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  onLogout?: () => void;
}

export default function PatientDashboard({ lang, setLang, theme, setTheme, onLogout }: PatientDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const t = DICT[lang].dashboard;
  const brand = DICT[lang].brand;

  const navItems = [
    { id: 'home', icon: Home, label: t.nav.home },
    { id: 'appointments', icon: Calendar, label: t.nav.appointments },
    { id: 'consultations', icon: Stethoscope, label: t.nav.consultations },
    { id: 'favorites', icon: Heart, label: t.nav.favorites },
    { id: 'prescriptions', icon: FileText, label: t.nav.prescriptions },
    { id: 'articles', icon: BookOpen, label: t.nav.articles },
    { id: 'notifications', icon: Bell, label: t.nav.notifications },
    { id: 'settings', icon: Settings, label: t.nav.settings },
  ];

  const isFullScreenView = activeTab === 'appointments' || activeTab === 'consultations' || activeTab === 'settings';

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-slate-900' : 'bg-slate-50';
  const textClass = isDark ? 'text-slate-100' : 'text-slate-900';
  const cardBgClass = isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100';
  const borderClass = isDark ? 'border-slate-800' : 'border-slate-100';
  const sidebarBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100';
  const headerBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100';

  if (isFullScreenView) {
    return (
      <div className={`min-h-screen ${bgClass} ${textClass} relative overflow-y-auto font-sans`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-full p-4 lg:p-10">
          {activeTab === 'appointments' ? (
            <BookAppointment lang={lang} theme={theme} onBack={() => setActiveTab('home')} />
          ) : activeTab === 'consultations' ? (
            <BookConsultation lang={lang} theme={theme} onBack={() => setActiveTab('home')} />
          ) : activeTab === 'settings' ? (
            <div className={`max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500`}>
              <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${cardBgClass} p-6 lg:p-8 rounded-[2rem] border shadow-sm`}>
                <div>
                  <h2 className="text-3xl font-black mb-2">{t.settings.title}</h2>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span onClick={() => setActiveTab('home')} className="text-emerald-600 hover:text-emerald-700 cursor-pointer">{t.nav.home}</span>
                    <span>/</span>
                    <span className="text-slate-400">{t.nav.settings}</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#e8f6f3] rounded-2xl flex items-center justify-center shrink-0">
                  <Settings className="w-8 h-8 text-[#117676]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Section */}
                <div className={`md:col-span-2 ${cardBgClass} p-8 rounded-[2.5rem] border shadow-sm`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <UserIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{t.settings.profile}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 pb-6 border-b border-slate-200/50">
                       <img src="https://ui-avatars.com/api/?name=Ahmed&background=f8fafc&color=0f172a&rounded=true&bold=true" alt="Ahmed" className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-700" />
                       <div>
                         <h4 className="text-2xl font-black mb-1">أحمد</h4>
                         <p className="text-slate-500 font-medium mb-3">ahmed@example.com</p>
                         <button className="text-sm font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-xl border border-emerald-100 dark:border-emerald-800 hover:bg-emerald-100 transition-colors">
                           {t.settings.changePhoto}
                         </button>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">{t.settings.firstName}</label>
                        <input type="text" defaultValue="أحمد" className={`w-full ${isDark ? 'bg-slate-700/50 text-white' : 'bg-slate-50'} border ${isDark ? 'border-slate-600' : 'border-slate-200'} rounded-xl px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-emerald-500`} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">{t.settings.lastName}</label>
                        <input type="text" defaultValue="" className={`w-full ${isDark ? 'bg-slate-700/50 text-white' : 'bg-slate-50'} border ${isDark ? 'border-slate-600' : 'border-slate-200'} rounded-xl px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-emerald-500`} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">{t.settings.phone}</label>
                        <input type="tel" defaultValue="+213 555 123 456" className={`w-full ${isDark ? 'bg-slate-700/50 text-white' : 'bg-slate-50'} border ${isDark ? 'border-slate-600' : 'border-slate-200'} rounded-xl px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-emerald-500`} dir="ltr" />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-emerald-600/20">
                        {t.settings.saveChanges}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-8">
                  <div className={`${cardBgClass} p-8 rounded-[2.5rem] border shadow-sm`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center">
                        <Moon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold">{t.settings.appearance}</h3>
                    </div>
                    
                    <div className="flex bg-slate-100 dark:bg-slate-700/50 p-1 rounded-xl">
                      <button 
                        onClick={() => setTheme('light')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm transition-all ${!isDark ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        <Sun className="w-4 h-4" /> {t.settings.light}
                      </button>
                      <button 
                        onClick={() => setTheme('dark')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm transition-all ${isDark ? 'bg-slate-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        <Moon className="w-4 h-4" /> {t.settings.dark}
                      </button>
                    </div>
                  </div>

                  <div className={`${cardBgClass} p-8 rounded-[2.5rem] border shadow-sm`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold">{t.settings.language}</h3>
                    </div>
                    
                    <div className="space-y-2">
                       {(['ar', 'fr', 'en'] as Lang[]).map(l => (
                         <button 
                           key={l}
                           onClick={() => setLang(l)}
                           className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${lang === l ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold' : `${isDark ? 'border-slate-700 hover:bg-slate-700/50 text-slate-300' : 'border-slate-200 hover:bg-slate-50 text-slate-600'} font-medium`}`}
                         >
                           {l === 'ar' ? t.settings.ar : l === 'fr' ? t.settings.fr : t.settings.en}
                           {lang === l && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                         </button>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} flex font-sans transition-colors duration-300`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 ${lang === 'ar' ? 'right-0' : 'left-0'} z-50 w-72 ${sidebarBg} flex flex-col border-x ${borderClass} transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : (lang === 'ar' ? 'translate-x-full' : '-translate-x-full')} lg:translate-x-0 shadow-2xl lg:shadow-none`}>
        {/* Logo */}
        <div className={`h-20 border-b ${borderClass} flex items-center justify-between px-6 shrink-0`}>
             <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-emerald-600 tracking-tight block">{brand}</span>
                <span className="text-[10px] font-bold text-slate-500"></span>
              </div>
            </div>
            <button className="lg:hidden text-slate-400 hover:text-slate-600" onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          {navItems.map((item, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${activeTab === item.id ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : `text-slate-500 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} hover:text-emerald-600 dark:hover:text-emerald-400`}`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Need Help / Logout Card */}
        <div className={`p-6 mt-auto shrink-0 border-t ${borderClass} space-y-4`}>
          <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-3xl p-5 border border-emerald-100/50 dark:border-emerald-800/30 text-center">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600 dark:text-emerald-400">
              <Headset className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-1 text-sm text-slate-800 dark:text-slate-200">{t.needHelp}</h4>
            <p className="text-xs text-slate-500 font-medium pb-4">{t.supportReady}</p>
            <button className={`w-full py-2.5 ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} rounded-xl text-sm font-bold hover:border-emerald-300 hover:text-emerald-600 transition-colors shadow-sm`}>
              {t.contactUs}
            </button>
          </div>
          
          <button onClick={onLogout} className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all dark:hover:bg-red-900/20 dark:hover:text-red-400">
            <LogOut className="w-5 h-5 text-slate-400 dark:text-slate-500" />
            <span className="text-sm">{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col min-w-0`}>
        {/* Top Header */}
        <header className={`h-20 ${headerBg} border-b ${borderClass} flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40 shrink-0`}>
          <div className="flex items-center gap-4">
            <button className={`lg:hidden p-2 text-slate-400 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-lg`} onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block w-96">
              <Search className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5`} />
              <input 
                type="text"
                placeholder={t.searchPlaceholder}
                className={`w-full ${isDark ? 'bg-slate-800 border-slate-700 text-white focus:bg-slate-900' : 'bg-slate-50/80 border-slate-200/60 text-slate-700 focus:bg-white'} border rounded-2xl py-3 ${lang === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400`}
              />
            </div>
          </div>

          <div className="flex flex-1 md:hidden ml-4">
            <button className={`p-2 text-slate-400 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl`}>
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            {/* Theme & Lang Actions */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 text-slate-600 dark:text-slate-400 hover:${isDark ? 'bg-slate-800 text-emerald-400' : 'bg-slate-50 text-emerald-600'} rounded-xl transition-colors`}
            >
               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative group">
              <button 
                className={`flex items-center gap-2 p-2 text-slate-600 dark:text-slate-400 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl transition-colors uppercase text-xs font-bold`}
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">{lang}</span>
              </button>
              {/* Simple dropdown hover approach for lang */}
              <div className={`absolute top-full px-2 py-2 mt-2 w-32 ${cardBgClass} border rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all`}>
                {(['ar', 'fr', 'en'] as Lang[]).map(l => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-[13px] font-bold py-2.5 px-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors text-center ${lang === l ? 'text-emerald-600 bg-emerald-50/50 dark:text-emerald-400 dark:bg-emerald-900/20' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                     {l === 'ar' ? t.settings.ar : l === 'fr' ? t.settings.fr : t.settings.en}
                  </button>
                ))}
              </div>
            </div>

            <div className={`h-8 w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'} mx-1 hidden sm:block`}></div>

            <button className={`relative p-2 text-slate-600 dark:text-slate-400 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl transition-colors`}>
              <MessageSquare className="w-6 h-6" />
              <span className={`absolute top-1.5 ${lang === 'ar' ? 'right-1.5' : 'left-1.5'} w-2 h-2 bg-emerald-500 border-2 ${isDark ? 'border-slate-900' : 'border-white'} rounded-full box-content`}></span>
            </button>
            <button className={`relative p-2 text-slate-600 dark:text-slate-400 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl transition-colors`}>
              <Bell className="w-6 h-6" />
              <span className={`absolute top-1 ${lang === 'ar' ? 'right-1' : 'left-1'} w-4 h-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center border-2 ${isDark ? 'border-slate-900' : 'border-white'} rounded-full box-content`}>3</span>
            </button>
            
            <button className={`flex items-center gap-3 hover:${isDark ? 'bg-slate-800' : 'bg-slate-50'} p-1.5 rounded-2xl transition-colors ${lang === 'ar' ? 'pr-3' : 'pl-3'}`}>
              <img src="https://ui-avatars.com/api/?name=Ahmed&background=f8fafc&color=0f172a&rounded=true&bold=true" alt="Ahmed" className={`w-10 h-10 rounded-full border-2 ${borderClass}`} />
              <div className="hidden sm:block px-2">
                <p className={`text-sm font-black mb-0.5 leading-none ${isDark ? 'text-white' : 'text-slate-800'}`}>أحمد</p>
                <p className={`text-[10px] text-slate-500 font-bold ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100'} px-2 py-0.5 rounded-md inline-block mt-0.5`}>{t.patient}</p>
              </div>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {activeTab === 'home' ? (
          <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Hero Section */}
            <div className={`bg-[#e8f6f3] dark:bg-emerald-900/20 rounded-[2.5rem] overflow-hidden relative border border-emerald-100/50 dark:border-emerald-800/30`}>
              <div className={`absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 dark:from-emerald-900/10 via-transparent to-transparent ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
              {/* Decorative dots */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'right-1/3' : 'left-1/3'} grid grid-cols-5 gap-2 opacity-10`}>
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-emerald-900 dark:bg-emerald-400"></div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-14 lg:p-16 items-center min-h-[360px]">
                <div className="space-y-6 z-10 w-full max-w-xl mx-auto md:mx-0">
                  <h1 className="text-4xl lg:text-5xl font-black text-[#0f5152] dark:text-emerald-400 leading-[1.3]">
                    {t.hero.title}
                  </h1>
                  <p className={`text-[15px] font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600/90'}`}>
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setActiveTab('appointments')}
                      className="bg-[#117676] hover:bg-[#0c5c5c] text-white px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-emerald-900/10 transition-all hover:-translate-y-1"
                    >
                      {t.hero.bookAppt}
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveTab('consultations')}
                      className={`bg-white hover:bg-emerald-50 text-[#117676] border ${isDark ? 'border-transparent' : 'border-emerald-100'} px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3 transition-all hover:-translate-y-1`}
                    >
                      {t.hero.bookCons}
                      <Stethoscope className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Doctor Image Container */}
                <div className={`absolute bottom-0 w-[400px] hidden md:block ${lang === 'ar' ? 'left-10' : 'right-10'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&bg=transparent" 
                    alt="Doctor" 
                    className={`w-full h-auto object-contain drop-shadow-2xl ${isDark ? 'opacity-90 grayscale-[0.2]' : ''}`}
                    style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 100%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="pt-4">
              <h3 className={`text-2xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-800'}`}>{t.currentServices}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Service 1: Consultation */}
                <div className={`${cardBgClass} p-8 lg:p-10 rounded-[2.5rem] border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all flex flex-col group justify-between`}>
                   <div className="flex justify-between items-start mb-6">
                     <div className="flex-1 px-4">
                       <h4 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{t.services.consultation.title}</h4>
                       <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                         {t.services.consultation.desc}
                       </p>
                     </div>
                     <div className="w-14 h-14 bg-[#e8f6f3] dark:bg-[#117676]/20 rounded-2xl flex items-center justify-center shrink-0">
                       <Stethoscope className="w-7 h-7 text-[#117676] dark:text-[#4fd1c5]" />
                     </div>
                   </div>
                   
                   <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-4">
                      <button 
                        onClick={() => setActiveTab('consultations')}
                        className={`w-full sm:w-auto flex-1 bg-transparent hover:${isDark ? 'bg-slate-700' : 'bg-slate-50'} text-[#117676] dark:text-[#4fd1c5] border ${isDark ? 'border-slate-600' : 'border-slate-200'} py-3.5 px-6 rounded-2xl font-bold transition-colors`}
                      >
                        {t.services.consultation.cta}
                      </button>
                      <div className={`w-28 h-28 ${isDark ? 'bg-slate-700' : 'bg-slate-50'} rounded-2xl flex shrink-0 overflow-hidden relative items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                         {/* Mockup Phone Illustration */}
                         <div className="w-20 h-28 bg-slate-800 rounded-xl relative border-2 border-slate-800 shadow-inner flex flex-col overflow-hidden">
                           <div className="h-3 w-10 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
                           <img src="https://ui-avatars.com/api/?name=Dr&background=f8fafc&color=0f172a" className="w-full h-full object-cover" />
                           <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                             <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-slate-800"></div>
                             <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-800"></div>
                           </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Service 2: Checkup */}
                <div className={`${cardBgClass} p-8 lg:p-10 rounded-[2.5rem] border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none transition-all flex flex-col group justify-between`}>
                   <div className="flex justify-between items-start mb-6">
                     <div className="flex-1 px-4">
                       <h4 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{t.services.appointment.title}</h4>
                       <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                         {t.services.appointment.desc}
                       </p>
                     </div>
                     <div className="w-14 h-14 bg-[#e8f6f3] dark:bg-[#117676]/20 rounded-2xl flex items-center justify-center shrink-0">
                       <CalendarCheck className="w-7 h-7 text-[#117676] dark:text-[#4fd1c5]" />
                     </div>
                   </div>

                   <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-4">
                      <button 
                        onClick={() => setActiveTab('appointments')}
                        className={`w-full sm:w-auto flex-1 bg-transparent hover:${isDark ? 'bg-slate-700' : 'bg-slate-50'} text-[#117676] dark:text-[#4fd1c5] border ${isDark ? 'border-slate-600' : 'border-slate-200'} py-3.5 px-6 rounded-2xl font-bold transition-colors`}
                      >
                        {t.services.appointment.cta}
                      </button>
                      <div className={`w-28 h-28 ${isDark ? 'bg-slate-700' : 'bg-slate-50'} rounded-2xl flex shrink-0 items-center justify-center relative group-hover:scale-105 transition-transform duration-500`}>
                         {/* Mockup Calendar Illustration */}
                         <div className="w-20 h-20 bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col relative overflow-hidden">
                           <div className="h-5 flex justify-around bg-[#117676] px-2 pt-1">
                             <div className="w-1.5 h-3 bg-white rounded-full -mt-2 shadow-sm"></div>
                             <div className="w-1.5 h-3 bg-white rounded-full -mt-2 shadow-sm"></div>
                             <div className="w-1.5 h-3 bg-white rounded-full -mt-2 shadow-sm"></div>
                           </div>
                           <div className="grid grid-cols-3 gap-1 p-2 flex-1">
                             <div className="bg-slate-100 dark:bg-slate-700 rounded"></div>
                             <div className="bg-slate-100 dark:bg-slate-700 rounded"></div>
                             <div className="bg-[#117676]/20 rounded relative"><Heart className="w-2 h-2 text-[#117676] dark:text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /></div>
                             <div className="bg-slate-100 dark:bg-slate-700 rounded"></div>
                             <div className="bg-slate-100 dark:bg-slate-700 rounded"></div>
                             <div className="bg-slate-100 dark:bg-slate-700 rounded"></div>
                           </div>
                           <div className={`absolute -bottom-2 -left-2 w-8 h-8 rounded-full ${isDark ? 'bg-slate-700' : 'bg-white'} border ${isDark ? 'border-slate-600' : 'border-slate-200'} shadow-sm flex items-center justify-center ${isDark ? 'text-slate-200' : 'text-slate-800'} text-[8px] font-bold`}>14:00</div>
                         </div>
                      </div>
                   </div>
                </div>

              </div>
            </div>

            {/* Trust Features */}
            <div className={`w-full mt-12 py-4 border-t ${borderClass}`}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className={`w-12 h-12 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-full flex items-center justify-center group-hover:bg-[#e8f6f3] dark:group-hover:bg-emerald-900/30 transition-colors text-slate-400 group-hover:text-[#117676] dark:group-hover:text-emerald-400`}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className={`font-bold text-sm mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t.trust.trustedDoctors}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{t.trust.trustedDoctorsDesc}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className={`w-12 h-12 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-full flex items-center justify-center group-hover:bg-[#e8f6f3] dark:group-hover:bg-emerald-900/30 transition-colors text-slate-400 group-hover:text-[#117676] dark:group-hover:text-emerald-400`}>
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className={`font-bold text-sm mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t.trust.easyBooking}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{t.trust.easyBookingDesc}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className={`w-12 h-12 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-full flex items-center justify-center group-hover:bg-[#e8f6f3] dark:group-hover:bg-emerald-900/30 transition-colors text-slate-400 group-hover:text-[#117676] dark:group-hover:text-emerald-400`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className={`font-bold text-sm mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t.trust.secureConsultations}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{t.trust.secureConsultationsDesc}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className={`w-12 h-12 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-full flex items-center justify-center group-hover:bg-[#e8f6f3] dark:group-hover:bg-emerald-900/30 transition-colors text-slate-400 group-hover:text-[#117676] dark:group-hover:text-emerald-400`}>
                    <Headset className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className={`font-bold text-sm mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t.trust.support}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{t.trust.supportDesc}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative">
                 <div className={`w-24 h-24 ${isDark ? 'bg-slate-800' : 'bg-slate-100'} rounded-full flex items-center justify-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                   <Clock className="w-10 h-10 animate-pulse" />
                 </div>
                 <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-8 h-8 rounded-full ${isDark ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-600'} flex items-center justify-center border-4 ${isDark ? 'border-slate-900' : 'border-white'} animate-bounce`}>
                    <Heart className="w-3 h-3" />
                 </div>
              </div>
              <div>
                <h3 className={`font-black text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.comingSoon.title}</h3>
                <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                  {t.comingSoon.desc}
                </p>
              </div>
              <button 
                onClick={() => setActiveTab('home')}
                className={`mt-4 px-6 py-2.5 rounded-full font-bold transition-all ${isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {t.comingSoon.backToHome}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
