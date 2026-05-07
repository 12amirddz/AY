import React from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';
import { Lang } from '../lib/i18n';

export default function ContactUs({ lang, isRTL }: { lang: Lang; isRTL: boolean }) {
  const content = {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا لمساعدتك. تواصل معنا لأي استفسار.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      infoTitle: 'معلومات التواصل',
      infoDesc: 'يسعدنا الرد على جميع استفساراتكم خلال أوقات العمل الرسمية من الأحد إلى الخميس.',
      address: 'العنوان',
      addressText: 'البليدة ـ الجزائر',
      phone: 'الهاتف',
      emailLabel: 'البريد',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to help. Reach out to us for any inquiries.',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      infoTitle: 'Contact Information',
      infoDesc: 'We are happy to answer all your inquiries during official working hours from Sunday to Thursday.',
      address: 'Address',
      addressText: 'Blida, Algeria',
      phone: 'Phone',
      emailLabel: 'Email',
    },
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour vous aider. Contactez-nous pour toute question.',
      name: 'Nom Complet',
      email: 'Adresse E-mail',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      infoTitle: 'Informations de Contact',
      infoDesc: 'Nous sommes ravis de répondre à toutes vos questions pendant les heures de travail officielles, du dimanche au jeudi.',
      address: 'Adresse',
      addressText: 'Blida, Algérie',
      phone: 'Téléphone',
      emailLabel: 'E-mail',
    }
  };

  const t = content[lang];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-emerald-600 dark:bg-emerald-800 text-white p-8 rounded-3xl shadow-xl shadow-emerald-200 dark:shadow-none h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">{t.infoTitle}</h3>
              <p className="text-emerald-100 mb-10 leading-relaxed font-medium relative z-10">{t.infoDesc}</p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.address}</h4>
                    <p className="text-emerald-100">{t.addressText}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.phone}</h4>
                    <p className="text-emerald-100" dir="ltr">+213 555 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.emailLabel}</h4>
                    <p className="text-emerald-100" dir="ltr">contact@atahala.dz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.name}</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.email}</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.subject}</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.message}</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none flex items-center justify-center gap-3">
                  {t.send}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
