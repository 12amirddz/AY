export type Lang = 'en' | 'fr' | 'ar';

export const DICT = {
  en: {
    dir: 'rtl',
    brand: 'أتهلا في صحتك',
    nav: { home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact Us', login: 'Log In', signup: 'Sign Up' },
    hero: {
      title: 'Expert Medical Care, Anytime, Anywhere.',
      subtitle: 'Book exactly the right doctor in minutes or consult via secure video right now. Your health journey simplified.',
      cta1: 'Book Appointment',
      cta2: 'Online Consultation'
    },
    search: {
      placeholder1: 'Search doctor, specialty...',
      placeholder2: 'Location (e.g. Algiers)',
      button: 'Find Doctors'
    },
    features: {
      title: 'Why Choose Us?',
      f1_title: 'Top Specialists',
      f1_desc: 'Access to hundreds of verified and highly-rated medical professionals.',
      f2_title: 'Secure Telemedicine',
      f2_desc: 'Private, encrypted video consultations from the comfort of your home.',
      f3_title: 'Instant Booking',
      f3_desc: 'Skip the wait times. See real-time availability and book 24/7.'
    },
    footer: {
      rights: '© 2026 Take Care of Your Health. All rights reserved.',
      join: 'Join thousands of users who trust our digital health services.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    dashboard: {
      nav: {
        home: 'Home',
        appointments: 'Appointments',
        consultations: 'Consultations',
        favorites: 'Favorite Doctors',
        prescriptions: 'Prescriptions',
        articles: 'Health Articles',
        notifications: 'Notifications',
        settings: 'Settings'
      },
      needHelp: 'Need Help?',
      supportReady: 'Our support team is ready to help you',
      contactUs: 'Contact Us',
      logout: 'Log Out',
      searchPlaceholder: 'Search doctor, specialty or service...',
      patient: 'Patient',
      hero: {
        title: 'Your Health Matters',
        subtitle: 'Easily book an appointment with top doctors or get a medical consultation from various specialties anytime, anywhere.',
        bookAppt: 'Book Appointment',
        bookCons: 'Medical Consultation'
      },
      currentServices: 'Current Services',
      services: {
        consultation: {
          title: 'Medical Consultations',
          desc: 'Get medical advice from certified doctors via voice call or instant chat.',
          cta: 'Request Consultation'
        },
        appointment: {
          title: 'Book Appointments',
          desc: 'Easily book your appointments with doctors in clinics and medical centers.',
          cta: 'Book Now'
        }
      },
      trust: {
        trustedDoctors: 'Trusted Doctors',
        trustedDoctorsDesc: 'A group of the best doctors in various specialties',
        easyBooking: 'Easy & Fast Booking',
        easyBookingDesc: 'Book your appointment in minutes with simple steps',
        secureConsultations: 'Secure Consultations',
        secureConsultationsDesc: 'Your privacy and data security are 100% guaranteed',
        support: '24/7 Support',
        supportDesc: 'The support team is always available to help you'
      },
      comingSoon: {
        title: 'Coming Soon...',
        desc: 'This service will soon be available on the Take Care platform.',
        backToHome: 'Back to Home'
      },
      settings: {
        title: 'Settings',
        profile: 'Profile',
        changePhoto: 'Change Photo',
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone Number',
        saveChanges: 'Save Changes',
        appearance: 'Appearance',
        light: 'Light',
        dark: 'Dark',
        language: 'Language',
        ar: 'العربية',
        fr: 'Français',
        en: 'English'
      },
      appointments: {
        title: 'Book an Appointment',
        steps: ['Specialty & Doctor', 'Date & Time', 'Patient Info']
      },
      consultations: {
        title: 'Book a Consultation',
        steps: ['Consultation Info', 'Payment', 'Confirmation']
      }
    }
  },
  fr: {
    dir: 'rtl',
    brand: 'أتهلا في صحتك',
    nav: { home: 'Accueil', about: 'À Propos', services: 'Services', contact: 'Contact', login: 'Connexion', signup: 'S\'inscrire' },
    hero: {
      title: 'Des soins médicaux experts, à tout moment.',
      subtitle: 'Réservez le bon médecin en quelques minutes ou consultez par vidéo sécurisée dès maintenant. Votre santé simplifiée.',
      cta1: 'Prendre Rendez-vous',
      cta2: 'Consultation Vidéo'
    },
    search: {
      placeholder1: 'Médecin, spécialité...',
      placeholder2: 'Lieu (ex: Alger)',
      button: 'Trouver'
    },
    features: {
      title: 'Pourquoi Nous Choisir ?',
      f1_title: 'Les Meilleurs Spécialistes',
      f1_desc: 'Accès à des centaines de professionnels de santé vérifiés et bien notés.',
      f2_title: 'Télémedecine Sécurisée',
      f2_desc: 'Consultations vidéo privées et chiffrées depuis le confort de votre maison.',
      f3_title: 'Réservation Instantanée',
      f3_desc: 'Évitez l\'attente. Consultez les disponibilités en temps réel et réservez 24h/7j.'
    },
    footer: {
      rights: '© 2026 Prenez Soin de Votre Santé. Tous droits réservés.',
      join: 'Rejoignez des milliers d\'utilisateurs qui font confiance à nos services de santé numériques.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions Générales'
    },
    dashboard: {
      nav: {
        home: 'Accueil',
        appointments: 'Rendez-vous',
        consultations: 'Consultations',
        favorites: 'Médecins Favoris',
        prescriptions: 'Ordonnances',
        articles: 'Articles de Santé',
        notifications: 'Notifications',
        settings: 'Paramètres'
      },
      needHelp: 'Besoin d\'aide ?',
      supportReady: 'Notre équipe est prête à vous aider',
      contactUs: 'Contactez-nous',
      logout: 'Déconnexion',
      searchPlaceholder: 'Rechercher médecin, spécialité...',
      patient: 'Patient',
      hero: {
        title: 'Votre santé nous tient à cœur',
        subtitle: 'Réservez facilement avec les meilleurs médecins ou obtenez une consultation médicale à tout moment.',
        bookAppt: 'Prendre Rendez-vous',
        bookCons: 'Consultation Médicale'
      },
      currentServices: 'Services Actuels',
      services: {
        consultation: {
          title: 'Consultations Médicales',
          desc: 'Obtenez des conseils médicaux de médecins certifiés par appel vocal ou chat.',
          cta: 'Demander Consultation'
        },
        appointment: {
          title: 'Prise de Rendez-vous',
          desc: 'Réservez facilement vos rendez-vous avec des médecins dans les cliniques.',
          cta: 'Réserver Maintenant'
        }
      },
      trust: {
        trustedDoctors: 'Médecins de Confiance',
        trustedDoctorsDesc: 'Un groupe des meilleurs médecins dans diverses spécialités',
        easyBooking: 'Réservation Facile et Rapide',
        easyBookingDesc: 'Réservez votre rendez-vous en quelques minutes',
        secureConsultations: 'Consultations Sécurisées',
        secureConsultationsDesc: 'Votre vie privée et la sécurité de vos données sont garanties à 100%',
        support: 'Support 24/7',
        supportDesc: 'L\'équipe de support est toujours disponible pour vous aider'
      },
      comingSoon: {
        title: 'Bientôt...',
        desc: 'Ce service sera bientôt disponible sur la plateforme Prenez Soin.',
        backToHome: 'Retour à l\'accueil'
      },
      settings: {
        title: 'Paramètres',
        profile: 'Profil',
        changePhoto: 'Changer la photo',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        phone: 'Numéro de téléphone',
        saveChanges: 'Enregistrer',
        appearance: 'Apparence',
        light: 'Clair',
        dark: 'Sombre',
        language: 'Langue',
        ar: 'العربية',
        fr: 'Français',
        en: 'English'
      },
      appointments: {
        title: 'Prendre un Rendez-vous',
        steps: ['Spécialité & Médecin', 'Date & Heure', 'Info Patient']
      },
      consultations: {
        title: 'Consultation Médicale',
        steps: ['Info Consultation', 'Paiement', 'Confirmation']
      }
    }
  },
  ar: {
    dir: 'rtl',
    brand: 'أتهلا في صحتك',
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', contact: 'اتصل بنا', login: 'تسجيل الدخول', signup: 'حساب جديد' },
    hero: {
      title: 'رعاية طبية متخصصة، في أي وقت ومكان.',
      subtitle: 'احجز موعدك مع أفضل الأطباء في دقائق أو احصل على استشارة طبية عبر الفيديو بكل أمان. صحتك بين يديك.',
      cta1: 'احجز موعداً',
      cta2: 'استشارة عن بعد'
    },
    search: {
      placeholder1: 'ابحث عن طبيب أو تخصص...',
      placeholder2: 'الموقع (مثل: الجزائر)',
      button: 'ابحث عن طبيب'
    },
    features: {
      title: 'لماذا تختارنا؟',
      f1_title: 'نخبة الأطباء',
      f1_desc: 'اختيار من بين مئات الأطباء المعتمدين والمقيّمين من قبل المرضى.',
      f2_title: 'تطبيب آمن عن بعد',
      f2_desc: 'استشارات فيديو خاصة ومحكمة التشفير من راحة منزلك.',
      f3_title: 'حجز فوري',
      f3_desc: 'تجاوز أوقات الانتظار. اطلع على المواعيد المتاحة واحجز طوال 24 ساعة.'
    },
    footer: {
      rights: '© 2026 أتهلا في صحتك. جميع الحقوق محفوظة.',
      join: 'انضم إلى آلاف المستخدمين الذين يثقون بخدماتنا الصحية الرقمية.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    },
    dashboard: {
      nav: {
        home: 'الرئيسية',
        appointments: 'حجز المواعيد',
        consultations: 'استشارات طبية',
        favorites: 'أطبائي المفضلون',
        prescriptions: 'الوصفات الطبية',
        articles: 'المقالات الصحية',
        notifications: 'الإشعارات',
        settings: 'الإعدادات'
      },
      needHelp: 'تحتاج مساعدة؟',
      supportReady: 'فريق الدعم جاهز لمساعدتك',
      contactUs: 'تواصل معنا',
      logout: 'تسجيل خروج',
      searchPlaceholder: 'ابحث عن طبيب، تخصص أو خدمة...',
      patient: 'مريض',
      hero: {
        title: 'صحتك تهمنا',
        subtitle: 'احجز موعدك بسهولة مع أفضل الأطباء أو احصل على استشارة طبية من تخصصات مختلفة في أي وقت ومن أي مكان.',
        bookAppt: 'حجز المواعيد',
        bookCons: 'استشارات طبية'
      },
      currentServices: 'الخدمات الحالية',
      services: {
        consultation: {
          title: 'استشارات طبية',
          desc: 'احصل على استشارة طبية من أطباء معتمدين عبر مكالمة صوتية أو محادثة فورية.',
          cta: 'طلب استشارة'
        },
        appointment: {
          title: 'حجز المواعيد',
          desc: 'احجز موعدك بسهولة مع الأطباء في العيادات والمراكز الطبية.',
          cta: 'احجز موعدك الآن'
        }
      },
      trust: {
        trustedDoctors: 'أطباء موثوقون',
        trustedDoctorsDesc: 'مجموعة من أفضل الأطباء في مختلف التخصصات',
        easyBooking: 'حجز سهل وسريع',
        easyBookingDesc: 'احجز موعدك في دقائق وبخطوات بسيطة',
        secureConsultations: 'استشارات آمنة',
        secureConsultationsDesc: 'خصوصيتك وسرية بياناتك مضمونة 100%',
        support: 'دعم على مدار الساعة',
        supportDesc: 'فريق الدعم متاح دائما لمساعدتك'
      },
      comingSoon: {
        title: 'قريباً...',
        desc: 'قريبًا ستتوفر هذه الخدمة داخل منصة أتهلا في صحتك.',
        backToHome: 'العودة للرئيسية'
      },
      settings: {
        title: 'الإعدادات',
        profile: 'الملف الشخصي',
        changePhoto: 'تغيير الصورة',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        phone: 'رقم الهاتف',
        saveChanges: 'حفظ التغييرات',
        appearance: 'المظهر',
        light: 'فاتح',
        dark: 'داكن',
        language: 'اللغة',
        ar: 'العربية',
        fr: 'Français',
        en: 'English'
      },
      appointments: {
        title: 'حجز موعد طبي',
        steps: ['التخصص والطبيب', 'التاريخ والوقت', 'بيانات المريض']
      },
      consultations: {
        title: 'حجز استشارة طبية',
        steps: ['بيانات الاستشارة', 'الدفع', 'تأكيد']
      }
    }
  }
};
