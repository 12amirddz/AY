import React from 'react';
import { 
  Eye, 
  Target, 
  Gem, 
  Crosshair, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  CalendarCheck, 
  Heart,
  Smile,
  Users,
  BriefcaseMedical,
  MessageSquareHeart
} from 'lucide-react';
import { Lang } from '../lib/i18n';

export default function AboutUs({ lang, isRTL }: { lang: Lang; isRTL: boolean }) {
  const content = {
    ar: {
      title: 'من نحن',
      subtitle: 'أتهلا في صحتك هي منصة صحية ذكية تهدف إلى تسهيل الوصول إلى الخدمات الصحية وتقديم تجربة موثوقة وسهلة للمستخدمين.',
      vision: { title: 'رؤيتنا', desc: 'أن نكون المنصة الصحية الرقمية الأولى في العالم العربي من حيث الثقة وسهولة الاستخدام.' },
      mission: { title: 'رسالتنا', desc: 'توفير حلول صحية رقمية مبتكرة تربط المرضى بالأطباء وتوفر لهم تجربة رعاية صحية متكاملة.' },
      values: { title: 'قيمنا', desc: 'الجودة، الأمان، الابتكار، الشفافية، الاحترام، وسهولة الوصول.' },
      goal: { title: 'هدفنا', desc: 'تحسين جودة الحياة من خلال تسهيل الوصول إلى رعاية صحية موثوقة في أي وقت ومن أي مكان.' },
      whyTitle: 'لماذا تختار أتهلا في صحتك؟',
      whyText: 'نحن نضع صحتك وراحتك في المقام الأول من خلال تقديم خدمات صحية رقمية متكاملة وآمنة.',
      features: [
        { title: 'آمنة وموثوقة', desc: 'حماية بياناتك وفق أعلى معايير الأمان والخصوصية.', icon: <ShieldCheck className="w-8 h-8" /> },
        { title: 'سهولة وسرعة', desc: 'حجز المواعيد والاستشارات بخطوات بسيطة وسريعة.', icon: <Clock className="w-8 h-8" /> },
        { title: 'أطباء معتمدون', desc: 'نخبة من الأطباء المتخصصين ذوي الخبرة والكفاءة.', icon: <UserCheck className="w-8 h-8" /> },
        { title: 'رعاية متكاملة', desc: 'مجموعة واسعة من الخدمات الصحية في مكان واحد.', icon: <Heart className="w-8 h-8" /> },
        { title: 'متاح في أي وقت', desc: 'الوصول إلى خدماتنا على مدار الساعة.', icon: <CalendarCheck className="w-8 h-8" /> },
      ],
      stats: [
        { value: '+50', label: 'تخصص طبي', icon: <BriefcaseMedical className="w-6 h-6" /> },
        { value: '+500', label: 'طبيب معتمد', icon: <UserCheck className="w-6 h-6" /> },
        { value: '+20K', label: 'مستخدم نشط', icon: <Users className="w-6 h-6" /> },
        { value: '+100K', label: 'استشارة مكتملة', icon: <MessageSquareHeart className="w-6 h-6" /> },
        { value: '+98%', label: 'نسبة رضا المستخدمين', icon: <Smile className="w-6 h-6" /> },
      ],
      bannerText: 'نحن هنا لنكون جزءاً من رحلتك نحو حياة أكثر صحة وسعادة',
      bannerSub: 'في أتهلا في صحتك، نؤمن أن الرعاية الصحية الجيدة تبدأ بسهولة الوصول والثقة والاهتمام. نحن ملتزمون بمرافقتك في كل خطوة نحو صحة أفضل.'
    },
    en: {
      title: 'About Us',
      subtitle: 'Take Care is a smart digital healthcare platform aiming to facilitate access to healthcare services securely.',
      vision: { title: 'Our Vision', desc: 'To be the leading digital healthcare platform in the Arab world in terms of trust and usability.' },
      mission: { title: 'Our Mission', desc: 'Provide innovative digital healthcare solutions connecting patients and doctors.' },
      values: { title: 'Our Values', desc: 'Quality, Security, Innovation, Transparency, Respect, and Accessibility.' },
      goal: { title: 'Our Goal', desc: 'Improve quality of life by facilitating access to reliable healthcare anywhere, anytime.' },
      whyTitle: 'Why Choose Take Care?',
      whyText: 'We put your health and comfort first by offering comprehensive and secure digital healthcare services.',
      features: [
        { title: 'Secure & Reliable', desc: 'Data protection following the highest security standards.', icon: <ShieldCheck className="w-8 h-8" /> },
        { title: 'Fast & Easy', desc: 'Book appointments and consultations in simple steps.', icon: <Clock className="w-8 h-8" /> },
        { title: 'Certified Doctors', desc: 'Elite specialized doctors with experience and competence.', icon: <UserCheck className="w-8 h-8" /> },
        { title: 'Comprehensive Care', desc: 'A wide range of healthcare services in one place.', icon: <Heart className="w-8 h-8" /> },
        { title: 'Always Available', desc: 'Access to our services around the clock.', icon: <CalendarCheck className="w-8 h-8" /> },
      ],
      stats: [
        { value: '+50', label: 'Specialties', icon: <BriefcaseMedical className="w-6 h-6" /> },
        { value: '+500', label: 'Certified Doctors', icon: <UserCheck className="w-6 h-6" /> },
        { value: '+20K', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
        { value: '+100K', label: 'Consultations', icon: <MessageSquareHeart className="w-6 h-6" /> },
        { value: '+98%', label: 'User Satisfaction', icon: <Smile className="w-6 h-6" /> },
      ],
      bannerText: 'We are here to be part of your journey towards a healthier life',
      bannerSub: 'Good healthcare begins with accessibility and trust. We commit to being with you every step of the way.'
    },
    fr: {
      title: 'À Propos',
      subtitle: 'Prenez Soin est une plateforme de santé numérique visant à faciliter l\'accès aux services de santé en toute sécurité.',
      vision: { title: 'Notre Vision', desc: 'Être la plateforme numérique leader de la santé dans le monde arabe en termes de confiance.' },
      mission: { title: 'Notre Mission', desc: 'Fournir des solutions numériques innovantes reliant les patients aux médecins.' },
      values: { title: 'Nos Valeurs', desc: 'Qualité, Sécurité, Innovation, Transparence, Respect et Accessibilité.' },
      goal: { title: 'Notre Objectif', desc: 'Améliorer la qualité de vie en facilitant l\'accès à des soins fiables.' },
      whyTitle: 'Pourquoi Choisir Prenez Soin ?',
      whyText: 'Nous mettons votre santé et votre confort en premier.',
      features: [
        { title: 'Sécurisé et Fiable', desc: 'Protection des données selon les normes de sécurité les plus strictes.', icon: <ShieldCheck className="w-8 h-8" /> },
        { title: 'Facile et Rapide', desc: 'Prenez rendez-vous en quelques clics.', icon: <Clock className="w-8 h-8" /> },
        { title: 'Médecins Certifiés', desc: 'Des médecins spécialisés d\'élite.', icon: <UserCheck className="w-8 h-8" /> },
        { title: 'Soins Complets', desc: 'Une large gamme de services en un seul endroit.', icon: <Heart className="w-8 h-8" /> },
        { title: 'Toujours Disponible', desc: 'Accès à nos services 24h/24 et 7j/7.', icon: <CalendarCheck className="w-8 h-8" /> },
      ],
      stats: [
        { value: '+50', label: 'Spécialités', icon: <BriefcaseMedical className="w-6 h-6" /> },
        { value: '+500', label: 'Médecins Certifiés', icon: <UserCheck className="w-6 h-6" /> },
        { value: '+20K', label: 'Utilisateurs Actifs', icon: <Users className="w-6 h-6" /> },
        { value: '+100K', label: 'Consultations', icon: <MessageSquareHeart className="w-6 h-6" /> },
        { value: '+98%', label: 'Satisfaction', icon: <Smile className="w-6 h-6" /> },
      ],
      bannerText: 'Nous sommes là pour vous accompagner vers une vie plus saine',
      bannerSub: 'Les bons soins de santé commencent par l\'accessibilité et la confiance.'
    }
  };

  const t = content[lang] || content.ar;

  return (
    <div className="bg-[#fafcfa] dark:bg-slate-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-12 mb-24 px-4 text-center">
          <div className="w-full max-w-4xl text-center flex flex-col items-center">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 relative inline-block">
              {t.title}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-emerald-500 rounded-full"></div>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mt-6">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* 4 Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { ...t.vision, icon: <Eye strokeWidth={1.5} /> },
            { ...t.mission, icon: <Target strokeWidth={1.5} /> },
            { ...t.values, icon: <Gem strokeWidth={1.5} /> },
            { ...t.goal, icon: <Crosshair strokeWidth={1.5} /> }
          ].map((item, index) => (
            <div key={index} className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 dark:border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 relative inline-block">
              {t.whyTitle}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-emerald-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mt-6">{t.whyText}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {t.features.map((feature, idx) => (
              <div key={idx} className={`bg-white dark:bg-slate-900 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex items-center gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]`}>
                <div className="w-14 h-14 shrink-0 bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-600 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="text-start">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Bottom Banner */}
        <div className="bg-emerald-50 border border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800/50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-start shadow-xl shadow-emerald-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto">
            {/* Logo illustration */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center shrink-0 border-4 border-emerald-100 dark:border-emerald-800">
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-emerald-600" strokeWidth={1.5} />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-emerald-900 dark:text-emerald-50 mb-4">{t.bannerText}</h2>
              <p className="text-base md:text-lg text-emerald-700 dark:text-emerald-300 font-medium max-w-2xl leading-relaxed">
                {t.bannerSub}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
