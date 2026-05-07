import React from 'react';
import { Heart, Users, ShieldCheck, Award } from 'lucide-react';
import { Lang } from '../lib/i18n';

export default function AboutUs({ lang, isRTL }: { lang: Lang; isRTL: boolean }) {
  const content = {
    ar: {
      title: 'من نحن',
      subtitle: 'أتهلا في صحتك: رعاية صحية ذكية وموثوقة',
      mission: 'مهمتنا هي تبسيط الوصول إلى الرعاية الصحية في الجزائر وتحسين تجربة المرضى من خلال التكنولوجيا المبتكرة.',
      vision: 'نسعى لنكون المنصة الرائدة في شمال إفريقيا التي تربط المرضى بأفضل مقدمي الرعاية الصحية بشكل فوري وآمن.',
      stats: {
        doctors: '+500 طبيب معتمد',
        patients: '10,000 مستفيد',
        specialties: '+30 تخصص طبي',
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Take Care: Smart and Reliable Healthcare',
      mission: 'Our mission is to simplify access to healthcare in Algeria and improve patient experience through innovative technology.',
      vision: 'We aim to be the leading platform in North Africa seamlessly connecting patients with top healthcare providers.',
      stats: {
        doctors: '500+ Certified Doctors',
        patients: '10,000+ Patients',
        specialties: '30+ Specialties',
      }
    },
    fr: {
      title: 'À Propos',
      subtitle: 'Prenez Soin: Santé Intelligente et Fiable',
      mission: 'Notre mission est de simplifier l\'accès aux soins de santé en Algérie et d\'améliorer l\'expérience patient.',
      vision: 'Nous visons à devenir la plateforme leader en Afrique du Nord connectant les patients aux meilleurs praticiens.',
      stats: {
        doctors: '+500 Médecins',
        patients: '+10 000 Patients',
        specialties: '+30 Spécialités',
      }
    }
  };

  const t = content[lang];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-emerald-600 dark:text-emerald-400 font-bold">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{t.mission}</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{t.vision}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-600 rounded-3xl p-8 text-center text-white flex flex-col justify-center transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-emerald-200 dark:shadow-none">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-black mb-2">{t.stats.patients.split(' ')[0]}</div>
              <div className="font-medium opacity-90">{t.stats.patients.substring(t.stats.patients.indexOf(' ') + 1)}</div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center flex flex-col justify-center border border-slate-100 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">{t.stats.doctors.split(' ')[0]}</div>
              <div className="font-medium text-slate-500">{t.stats.doctors.substring(t.stats.doctors.indexOf(' ') + 1)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
