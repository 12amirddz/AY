import React, { useState } from 'react';
import { X, Mail, Lock, Heart, ArrowRight } from 'lucide-react';

interface LoginFlowProps {
  onClose: () => void;
  isRTL: boolean;
  onLoginSuccess: (role: 'patient' | 'doctor') => void;
}

export default function LoginFlow({ onClose, isRTL, onLoginSuccess }: LoginFlowProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '1' && password === '1') {
      onLoginSuccess('patient');
    } else if (email === '2' && password === '2') {
      onLoginSuccess('doctor');
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 sm:p-6 transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[2.5rem] shadow-2xl dark:shadow-slate-900/50 overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-in fade-in zoom-in-95 duration-300 border border-transparent dark:border-slate-800">

        
        {/* Left Side (Image/Branding) */}
        <div className="hidden md:flex md:w-5/12 bg-emerald-600 relative overflow-hidden flex-col justify-between p-10 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          
          <div className="relative z-10 flex items-center gap-3">
             <div className="w-10 h-10 bg-white dark:bg-slate-900/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
             </div>
             <div>
                <span className="text-xl font-black tracking-tight block">أتهلا في صحتك</span>
             </div>
          </div>

          <div className="relative z-10" dir="rtl">
            <h2 className="text-4xl font-black mb-4 leading-tight">مرحباً بعودتك!</h2>
            <p className="text-emerald-100 font-medium leading-relaxed">
              سجل دخولك لمتابعة مواعيدك، واستشاراتك الطبية بكل سهولة وأمان وخصوصية تامة.
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-7/12 p-8 md:p-12 relative flex flex-col justify-center bg-slate-50 dark:bg-slate-900">
          <button onClick={onClose} className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-300 rounded-full transition-colors`}>
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-md w-full mx-auto space-y-8">
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'} space-y-2`}>
              <h3 className="text-3xl font-black text-slate-800 dark:text-white">تسجيل الدخول</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">أدخل بياناتك للوصول إلى حسابك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 flex items-center gap-2">
                  <X className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-slate-400`} />
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white dark:placeholder-slate-500`}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">كلمة المرور</label>
                  <div className="relative">
                    <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-slate-400`} />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white dark:placeholder-slate-500`}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:ring-emerald-500" />
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400">تذكرني</span>
                </label>
                <button type="button" className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">نسيت كلمة المرور؟</button>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 dark:bg-emerald-50 dark:bg-emerald-900/300 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-xl py-4 font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none flex items-center justify-center gap-2"
              >
                تسجيل الدخول
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
