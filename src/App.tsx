import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Video, 
  Calendar, 
  Search, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  Heart, 
  ShieldCheck, 
  User, 
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  HeartPulse,
  Clock,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Sun,
  Moon
} from 'lucide-react';
import SignupFlow from './components/SignupFlow';
import LoginFlow from './components/LoginFlow';
import PatientDashboard from './components/PatientDashboard';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import DoctorDashboard from './components/DoctorDashboard';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { DICT, Lang } from './lib/i18n';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const WILAYAS = [
  "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة", "06 - بجاية",
  "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة", "11 - تمنراست", "12 - تبسة",
  "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو", "16 - الجزائر", "17 - الجلفة", "18 - جيجل",
  "19 - سطيف", "20 - سعيدة", "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة",
  "25 - قسنطينة", "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
  "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس", "36 - الطارف",
  "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة", "41 - سوق أهراس", "42 - تيبازة",
  "43 - ميلة", "44 - عين الدفلى", "45 - النعامة", "46 - عين تموشنت", "47 - غرداية", "48 - غليزان",
  "49 - تيميمون", "50 - برج باجي مختار", "51 - أولاد جلال", "52 - بني عباس", "53 - إن صالح",
  "54 - إن قزام", "55 - تقرت", "56 - جانت", "57 - المغير", "58 - المنيعة"
];

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [view, setView] = useState<'landing' | 'patient_dashboard' | 'doctor_dashboard' | 'login' | 'about' | 'services' | 'contact'>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [wilayaSearch, setWilayaSearch] = useState('');
  const [showWilayaDropdown, setShowWilayaDropdown] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  const filteredWilayas = WILAYAS.filter(w => w.includes(wilayaSearch));
  
  const t = DICT[lang];
  const isRTL = t.dir === 'rtl';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [lang, t.dir, theme]);

  const toggleLang = () => {
    if (lang === 'ar') setLang('en');
    else if (lang === 'en') setLang('fr');
    else setLang('ar');
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  if (showSplash) {
    return (
      <div className={`min-h-screen bg-emerald-600 dark:bg-emerald-950 flex flex-col items-center justify-center text-white transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>
        <div className="animate-bounce mb-8 shadow-[0_0_40px_rgba(255,255,255,0.4)] dark:shadow-[0_0_40px_rgba(16,185,129,0.3)] bg-white/20 dark:bg-emerald-800/40 p-8 rounded-[3rem] backdrop-blur-md">
          <Heart className="w-24 h-24 text-white drop-shadow-xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-2xl animate-pulse text-center px-4">
          {t.brand}
        </h1>
      </div>
    );
  }

  if (view === 'patient_dashboard') {
    return <PatientDashboard lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogout={() => setView('landing')} />;
  }

  if (view === 'doctor_dashboard') {
    return <DoctorDashboard theme={theme} setTheme={setTheme} onLogout={() => setView('landing')} />;
  }

  if (view === 'login') {
    return (
      <LoginFlow
        onClose={() => setView('landing')}
        isRTL={isRTL}
        onLoginSuccess={(role) => {
          if (role === 'doctor') {
            setView('doctor_dashboard');
          } else {
            setView('patient_dashboard');
          }
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
      <SignupFlow 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        isRTL={isRTL} 
        onSuccess={() => {
          setIsSignupOpen(false);
          setView('patient_dashboard');
        }}
      />
      
      <TermsAndConditions
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        lang={lang}
      />
      
      <PrivacyPolicy
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
        lang={lang}
      />
      
      {/* Prototype Banner */}
      <div className="bg-amber-100 dark:bg-amber-900/60 border-b border-amber-200 dark:border-amber-700/50 py-2.5 px-4 z-50 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-900 dark:text-amber-200 text-sm md:text-base font-bold flex items-center justify-center">
            <span className="hidden md:inline ml-2 text-xl">🚀</span>
            النسخة الحالية تمثل نموذجًا أوليًا (Prototype) لمنصة أتهلا في صحتك، تم تطويره لعرض الفكرة الأساسية وتجربة أهم الخدمات الصحية الرقمية.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Brand */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('landing')}>
              <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-800 rounded-lg flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)] dark:shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-glow-pulse group-hover:scale-105">
                <Heart className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              </div>
              <span className={`text-2xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tight transition-all duration-300 [text-shadow:0_0_15px_rgba(16,185,129,0.4)] dark:[text-shadow:0_0_15px_rgba(16,185,129,0.5)] group-hover:[text-shadow:0_0_20px_rgba(16,185,129,0.7)] font-arabic`}>
                أتهلا في صحتك
              </span>
            </div>

            {/* Desktop Nav Links (Centered) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 text-base font-semibold text-slate-600 dark:text-slate-300">
              <button onClick={() => setView('landing')} className={`${view === 'landing' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'} font-bold px-4 py-2 rounded-xl transition-colors`}>{t.nav.home}</button>
              <button onClick={() => setView('about')} className={`${view === 'about' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'} font-bold px-4 py-2 rounded-xl transition-colors`}>{t.nav.about}</button>
              <button onClick={() => setView('services')} className={`${view === 'services' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'} font-bold px-4 py-2 rounded-xl transition-colors`}>{t.nav.services}</button>
              <button onClick={() => setView('contact')} className={`${view === 'contact' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'} font-bold px-4 py-2 rounded-xl transition-colors`}>{t.nav.contact}</button>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className={`flex items-center gap-4 border-slate-200 dark:border-slate-700 transition-colors ${isRTL ? 'border-r pr-6' : 'border-l pl-6'}`}>
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center justify-center w-8 h-8 rounded-full text-slate-400 dark:text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button 
                  onClick={toggleLang}
                  className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-widest"
                >
                  <Globe className="w-4 h-4" />
                  <span>{lang}</span>
                </button>
                <button 
                  onClick={() => setView('login')}
                  className="px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  {t.nav.login}
                </button>
                <button 
                  onClick={() => setIsSignupOpen(true)}
                  className="px-6 py-2 bg-emerald-600 dark:bg-emerald-800 text-white text-sm font-bold rounded-full animate-glow-pulse hover:bg-emerald-700 dark:hover:bg-emerald-700 transition-all duration-300 hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  <span className="relative">{t.nav.signup}</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center w-8 h-8 rounded-full text-slate-400 dark:text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleLang} className="uppercase text-sm font-medium text-slate-600 dark:text-slate-400">
                {lang}
              </button>
              <button 
                className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-2 transition-colors duration-300">
            <button onClick={() => { setView('landing'); setMobileMenuOpen(false); }} className={`font-bold px-4 py-3 rounded-xl text-start ${view === 'landing' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{t.nav.home}</button>
            <button onClick={() => { setView('about'); setMobileMenuOpen(false); }} className={`font-bold px-4 py-3 rounded-xl text-start ${view === 'about' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{t.nav.about}</button>
            <button onClick={() => { setView('services'); setMobileMenuOpen(false); }} className={`font-bold px-4 py-3 rounded-xl text-start ${view === 'services' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{t.nav.services}</button>
            <button onClick={() => { setView('contact'); setMobileMenuOpen(false); }} className={`font-bold px-4 py-3 rounded-xl text-start ${view === 'contact' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{t.nav.contact}</button>
            <hr className="border-slate-100 dark:border-slate-800 my-2" />
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setView('login');
                }}
                className="text-emerald-700 dark:text-emerald-400 py-2 border border-emerald-100 dark:border-emerald-800/50 rounded-lg font-medium"
              >
                {t.nav.login}
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSignupOpen(true);
                }}
                className="bg-emerald-600 text-white py-2 rounded-lg font-medium"
              >
                {t.nav.signup}
              </button>
            </div>
          </div>
        )}
      </nav>

      {view === 'landing' && (
        <>
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Background Decorative Pattern */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-12 pt-16 pb-24 md:pt-24 md:pb-32 lg:flex lg:gap-12 lg:items-center relative z-10">
          
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold mb-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-50 dark:bg-emerald-900/300 animate-pulse"></span>
                {t.features.f2_title}
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight transition-colors">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium transition-colors">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-50 dark:bg-emerald-900/300 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none hover:-translate-y-0.5">
                <Calendar className="w-5 h-5" />
                {t.hero.cta1}
              </button>
              <button className="flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5">
                <Video className="w-5 h-5" />
                {t.hero.cta2}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 relative animate-float">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-500/20 dark:shadow-none aspect-[4/3] bg-emerald-50 dark:bg-emerald-900/30 border-[12px] border-white/80 dark:border-slate-800/80 group transform transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80" 
                alt="Doctor consulting patient" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Background Blob */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? '-left-8' : '-right-8'} w-full h-full bg-emerald-200 rounded-full blur-3xl opacity-30 -z-10`} />
          </div>

        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 md:-mt-8 relative z-20 pb-20">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-2xl shadow-slate-200 dark:shadow-black/40 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-4 transition-colors duration-300">
          <div className="flex-1 w-full relative flex items-center">
            <Search className={`absolute ${isRTL ? 'right-6' : 'left-6'} text-emerald-600 dark:text-emerald-500 w-5 h-5`} />
            <input 
              type="text" 
              placeholder={t.search.placeholder1}
              className={`w-full bg-transparent py-4 text-lg ${isRTL ? 'pr-14 pl-6' : 'pl-14 pr-6'} rounded-2xl outline-none focus:ring-2 ring-emerald-500 font-bold text-slate-800 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 dark:text-slate-300 block`} 
            />
          </div>
          
          <div className="w-full h-px md:w-px md:h-12 bg-slate-100 dark:bg-slate-800 my-2 md:my-0"></div>
          
          <div className="flex-1 w-full relative">
            <div className="relative flex items-center">
              <MapPin className={`absolute ${isRTL ? 'right-6' : 'left-6'} text-emerald-600 w-5 h-5 pointer-events-none`} />
              <input 
                type="text" 
                placeholder="اختر الولاية"
                value={showWilayaDropdown ? wilayaSearch : (wilayaSearch || '')}
                onChange={(e) => {
                  setWilayaSearch(e.target.value);
                  setShowWilayaDropdown(true);
                }}
                onFocus={() => setShowWilayaDropdown(true)}
                onBlur={() => setShowWilayaDropdown(false)}
                className={`w-full bg-transparent py-4 text-lg ${isRTL ? 'pr-14 pl-12' : 'pl-14 pr-12'} rounded-2xl outline-none focus:ring-2 ring-emerald-500 font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-400`} 
              />
              <ChevronDown className={`absolute ${isRTL ? 'left-6' : 'right-6'} w-5 h-5 text-emerald-600 transition-transform pointer-events-none ${showWilayaDropdown ? 'rotate-180' : ''}`} />
            </div>

            {showWilayaDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-emerald-900/10 border border-slate-100 dark:border-slate-800 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 max-h-64 flex flex-col">
                <div className="overflow-y-auto">
                  {filteredWilayas.length > 0 ? (
                    filteredWilayas.map((w, idx) => (
                      <div 
                        key={w}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setWilayaSearch(w);
                          setShowWilayaDropdown(false);
                        }}
                        className={`px-4 py-3 cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 hover:text-emerald-700 text-slate-700 dark:text-slate-200 font-bold transition-all ${idx !== filteredWilayas.length - 1 ? 'border-b border-slate-50' : ''} ${wilayaSearch === w ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700' : ''}`}
                      >
                        {w}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center text-slate-500 dark:text-slate-400 font-medium">لا توجد ولاية بهذا الاسم</div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-10 py-4 font-bold whitespace-nowrap transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 w-full md:w-auto">
            {t.search.button}
            <ArrowIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.features.title}</h2>
            <div className="w-20 h-1.5 bg-emerald-50 dark:bg-emerald-900/300 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 mb-3">{t.features.f1_title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t.features.f1_desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 mb-3">{t.features.f2_title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t.features.f2_desc}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 mb-3">{t.features.f3_title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t.features.f3_desc}</p>
            </div>
          </div>
        </div>
      </div>
      </>
      )}

      {view === 'about' && <AboutUs lang={lang} isRTL={isRTL} />}
      {view === 'services' && <Services lang={lang} isRTL={isRTL} />}
      {view === 'contact' && <ContactUs lang={lang} isRTL={isRTL} />}

      {/* Main Footer */}
      <footer className="bg-emerald-950 text-emerald-50/70 py-16 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-emerald-900/50 pb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <HeartPulse className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-black text-white">أتهلا<span className="text-emerald-400">.</span></span>
              </div>
              <p className="font-medium text-emerald-100/80 leading-relaxed mb-6">
                منصتك الرقمية الرائدة للرعاية الصحية في الجزائر. سهولة، أمان، واهتمام فائق بصحتك.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">خدماتنا</h4>
              <ul className="space-y-4 font-medium">
                <li><button onClick={() => setView('landing')} className="hover:text-emerald-400 transition-colors">البحث عن طبيب</button></li>
                <li><button onClick={() => setView('services')} className="hover:text-emerald-400 transition-colors">الاستشارات عن بعد</button></li>
                <li><button onClick={() => setView('services')} className="hover:text-emerald-400 transition-colors">حجز المواعيد</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
              <ul className="space-y-4 font-medium">
                <li><button onClick={() => setView('about')} className="hover:text-emerald-400 transition-colors">من نحن</button></li>
                <li><button onClick={() => setView('contact')} className="hover:text-emerald-400 transition-colors">اتصل بنا</button></li>
                <li><button onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }} className="hover:text-emerald-400 transition-colors">الشروط والأحكام</button></li>
                <li><button onClick={(e) => { e.preventDefault(); setIsPrivacyPolicyOpen(true); }} className="hover:text-emerald-400 transition-colors">سياسة الخصوصية</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">تواصل معنا</h4>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400"><Clock className="w-4 h-4" /></div>
                  <span dir="ltr">contact@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400"><Phone className="w-4 h-4" /></div>
                  <span dir="ltr">0792762144</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400"><MapPin className="w-4 h-4" /></div>
                  <span>البليدة ـ الجزائر</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center justify-center text-white hover:text-emerald-400 transition-colors hover:scale-110 transform">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-emerald-400 transition-colors hover:scale-110 transform">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-emerald-400 transition-colors hover:scale-110 transform">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-emerald-400 transition-colors hover:scale-110 transform">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-emerald-400 transition-colors hover:scale-110 transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.032c0 2.128.556 4.204 1.611 6.03L.046 23.954l6.046-1.584A12.015 12.015 0 0 0 12.031 24c6.645 0 12.03-5.384 12.03-12.028C24.062 5.385 18.677 0 12.031 0zm3.593 17.202c-.544 1.528-3.09 1.942-4.225 1.574-1.396-.453-3.237-1.574-4.839-3.178-1.601-1.601-2.721-3.44-3.174-4.834-.367-1.135.048-3.681 1.58-4.225.594-.211 1.137-.042 1.488.351.464.519 1.144 1.986 1.258 2.213.116.227.18.498.051.815-.126.319-.344.593-.666.903-.319.309-.64.663-.64.663s3.155 4.382 7.026 5.86c0 0 .356-.322.665-.643.311-.324.586-.541.905-.667.319-.129.59-.064.815.051.228.115 1.696.796 2.214 1.26.392.352.56.896.349 1.489z" />
                </svg>
              </a>
            </div>
            <div className="text-center font-medium text-sm text-emerald-100/60">
              <p>جميع الحقوق محفوظة منصة أتهلا في صحتك 2026</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
