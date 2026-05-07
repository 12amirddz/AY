import React from 'react';
import { Calendar, Video, FileText, Pill, Bell, ArrowRight, ArrowLeft } from 'lucide-react';
import { Lang } from '../lib/i18n';

export default function Services({ lang, isRTL }: { lang: Lang; isRTL: boolean }) {
  const content = {
    ar: {
      title: 'خدماتنا',
      subtitle: 'مجموعة متكاملة من الخدمات الصحية الرقمية',
      bookTitle: 'حجز المواعيد',
      bookDesc: 'احجز موعداً مع أفضل الأطباء في عياداتهم بطريقة سهلة وسريعة دون الحاجة للانتظار طويلاً.',
      videoTitle: 'استشارات طبية بالفيديو',
      videoDesc: 'تواصل مع طبيبك عبر اتصال فيديو آمن ومشفّر من أي مكان في العالم للحصول على استشارة فورية.',
      recordsTitle: 'الملف الطبي الإلكتروني',
      recordsDesc: 'احتفظ بجميع تقاريرك الطبية وتحاليلك في مكان واحد آمن وسهل الوصول إليه.',
      rxTitle: 'الوصفات الطبية الرقمية',
      rxDesc: 'استلم وصفاتك الطبية مباشرة عبر التطبيق واعرضها على أي صيدلية بسهولة تامة.',
      remindersTitle: 'تذكير بالمواعيد',
      remindersDesc: 'نظام إشعارات ذكي يذكرك بمواعيدك الطبية المهمة وموعد تناول أدويتك.',
      action: 'اكتشف المزيد'
    },
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive Digital Healthcare Solutions',
      bookTitle: 'Appointment Booking',
      bookDesc: 'Book appointments with top doctors avoiding long waiting room queues.',
      videoTitle: 'Video Consultations',
      videoDesc: 'Connect with healthcare professionals through secure video calls from anywhere.',
      recordsTitle: 'Digital Health Records',
      recordsDesc: 'Keep all your medical reports and test results safe in one accessible place.',
      rxTitle: 'Digital Prescriptions',
      rxDesc: 'Receive and present your medical prescriptions digitally to any pharmacy.',
      remindersTitle: 'Smart Reminders',
      remindersDesc: 'Intelligent notification system for your upcoming appointments and medications.',
      action: 'Learn More'
    },
    fr: {
      title: 'Nos Services',
      subtitle: 'Une gamme complète de solutions de santé numériques',
      bookTitle: 'Prise de Rendez-vous',
      bookDesc: 'Prenez rendez-vous avec les meilleurs médecins sans longues attentes.',
      videoTitle: 'Consultations Vidéo',
      videoDesc: 'Consultez votre médecin via un appel vidéo sécurisé et chiffré depuis n\'importe où.',
      recordsTitle: 'Dossier Médical Numérique',
      recordsDesc: 'Conservez tous vos rapports médicaux dans un espace unique et sécurisé.',
      rxTitle: 'Ordonnances Numériques',
      rxDesc: 'Recevez vos ordonnances directement sur l\'application pour toute pharmacie.',
      remindersTitle: 'Rappels Intelligents',
      remindersDesc: 'Système de notification pour vos rendez-vous et prises de médicaments.',
      action: 'En Savoir Plus'
    }
  };

  const t = content[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const servicesList = [
    { icon: <Calendar className="w-8 h-8" />, title: t.bookTitle, desc: t.bookDesc, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
    { icon: <Video className="w-8 h-8" />, title: t.videoTitle, desc: t.videoDesc, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
    { icon: <FileText className="w-8 h-8" />, title: t.recordsTitle, desc: t.recordsDesc, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/30' },
    { icon: <Pill className="w-8 h-8" />, title: t.rxTitle, desc: t.rxDesc, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/30' },
    { icon: <Bell className="w-8 h-8" />, title: t.remindersTitle, desc: t.remindersDesc, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/30' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{service.desc}</p>
              
              <button className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                <span>{t.action}</span>
                <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
