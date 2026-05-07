import React, { useState, useEffect, useMemo } from 'react';
import { X, User, Stethoscope, ShieldCheck, Check, Eye, EyeOff, RefreshCw, AlertCircle, FileText, Upload } from 'lucide-react';

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

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const PRIVACY_POLICY = `
# سياسة الخصوصية – منصة أتهلا في صحتك

آخر تحديث: 2026

مرحبًا بكم في منصة **أتهلا في صحتك**، المنصة الصحية الرقمية الجزائرية المخصصة لتسهيل الوصول إلى خدمات حجز المواعيد والاستشارات الطبية عن بُعد.

نحن نلتزم بحماية خصوصية المستخدمين واحترام سرية بياناتهم الشخصية والصحية وفقًا للتشريعات والقوانين المعمول بها في الجمهورية الجزائرية الديمقراطية الشعبية.

---

## 1. المعلومات التي نقوم بجمعها
* **معلومات الحساب:** الاسم الكامل، رقم الهاتف، البريد الإلكتروني، كلمة المرور المشفرة.
* **المعلومات الصحية:** معلومات الملف الصحي، المواعيد الطبية، الاستشارات الطبية، الوصفات أو التحاليل المضافة.
* **معلومات تقنية:** نوع الجهاز والمتصفح، عنوان IP، بيانات الاستخدام والتصفح داخل المنصة.

## 2. كيفية استخدام المعلومات
تُستخدم البيانات من أجل:
* إنشاء وإدارة حساب المستخدم وحجز المواعيد الطبية.
* تقديم الاستشارات الطبية الرقمية وتحسين جودة الخدمات.
* إرسال الإشعارات والتنبيهات وحماية الحسابات.

## 3. حماية البيانات
تتخذ المنصة تدابير مثل تشفير كلمات المرور، حماية الاتصالات عبر (HTTPS/SSL)، تقييد الوصول، وأنظمة حماية ضد الاختراقات.

## 4. سرية المعلومات الطبية
تُعتبر سرية للغاية، ولا يطلع عليها إلا المستخدم، الطبيب المعني، أو الجهات المخولة قانونيًا. لا يتم بيعها لأي جهة تجارية.

## 5. مشاركة البيانات
لا تشارك البيانات إلا بموافقة صريحة، أو لتنفيذ التزام قانوني، أو لحماية أمن المنصة.

## 6. حقوق المستخدم
يحق للمستخدم الاطلاع، التعديل، حذف الحساب، سحب الموافقة، وتصحيح البيانات.

## 7. ملفات تعريف الارتباط (Cookies)
تُستخدم لتحسين التجربة. يمكن التحكم بها عبر إعدادات المتصفح.

## 8. الاحتفاظ بالبيانات
يتم الاحتفاظ بالبيانات للمدة الضرورية فقط أو حسب ما تقتضيه القوانين الجزائرية.

## 9. التزامات المستخدم
تقديم معلومات صحيحة، الحفاظ على سرية الدخول، وعدم الاستخدام لأغراض غير قانونية.

## 10. التعديلات والتواصل
تحتفظ المنصة بحق تعديل السياسة.
البريد: contact@ahfishehtk.dz | الهاتف: +213 XXX XX XX XX
`;

interface SignupFlowProps {
  isOpen: boolean;
  onClose: () => void;
  isRTL: boolean;
  onSuccess?: () => void;
}

export default function SignupFlow({ isOpen, onClose, isRTL, onSuccess }: SignupFlowProps) {
  const [step, setStep] = useState<'type_selection' | 'patient_form' | 'doctor_form' | 'success' | 'doctor_success'>('type_selection');
  
  // Form State
  const [formData, setFormData] = useState({
    firstNameAr: '', lastNameAr: '',
    firstNameFr: '', lastNameFr: '',
    dob: '',
    gender: '',
    bloodType: '',
    wilaya: '',
    baladiya: '',
    addressAr: '', addressFr: '',
    phone: '', confirmPhone: '',
    email: '', confirmEmail: '',
    password: '', confirmPassword: '',
    captchaInput: '',
    acceptedPrivacy: false,
    specialty: '',
    licenseFile: null as File | null,
    doctorateFile: null as File | null,
    idCardFile: null as File | null
  });

  const [captchaCode, setCaptchaCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [wilayaSearch, setWilayaSearch] = useState('');
  const [showWilayaDropdown, setShowWilayaDropdown] = useState(false);
  const [doctorUnavailable, setDoctorUnavailable] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep('type_selection');
      generateCaptcha();
    }
  }, [isOpen]);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = Math.floor(Math.random() * 3) + 4; // 4 to 6 chars
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  const calculateAge = (dobString: string) => {
    if (!dobString) return '';
    const today = new Date();
    const birthDate = new Date(dobString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [fieldName]: e.target.files![0] }));
    }
  };

  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score; // 0 to 4
  };

  const strengthScore = getPasswordStrength(formData.password);
  const strengthLabels = ['ضعيفة جداً', 'ضعيفة', 'متوسطة', 'قوية', 'قوية جداً'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-50 dark:bg-emerald-900/300', 'bg-emerald-700'];

  // Validations
  const age = calculateAge(formData.dob);
  const isLegalAge = age !== '' && (age as number) >= 19;
  const isPhoneMatch = formData.phone && formData.phone === formData.confirmPhone;
  const isEmailMatch = formData.email && formData.email === formData.confirmEmail;
  const isPasswordMatch = formData.password && formData.password === formData.confirmPassword;
  const isPhoneValid = /^\\d{10}$/.test(formData.phone);
  const isCaptchaMatch = formData.captchaInput.toUpperCase() === captchaCode.toUpperCase();
  
  const canSubmit = 
    formData.firstNameAr && formData.lastNameAr &&
    formData.firstNameFr && formData.lastNameFr &&
    formData.dob && isLegalAge && formData.gender && formData.bloodType &&
    formData.wilaya && formData.baladiya &&
    formData.addressAr && formData.addressFr &&
    isPhoneValid && isPhoneMatch &&
    formData.email && isEmailMatch &&
    strengthScore >= 2 && isPasswordMatch &&
    formData.acceptedPrivacy && isCaptchaMatch &&
    (step === 'doctor_form' ? (
      formData.specialty && formData.licenseFile && formData.doctorateFile && formData.idCardFile
    ) : true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      if (step === 'doctor_form') {
        setStep('doctor_success');
      } else {
        setStep('success');
      }
    }
  };

  const filteredWilayas = useMemo(() => {
    return WILAYAS.filter(w => w.includes(wilayaSearch));
  }, [wilayaSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {step === 'type_selection' && 'إنشاء حساب جديد'}
            {step === 'patient_form' && 'تسجيل حساب مريض'}
            {step === 'doctor_form' && 'تسجيل حساب طبيب'}
            {(step === 'success' || step === 'doctor_success') && 'تم التسجيل بنجاح'}
          </h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50 dark:bg-slate-950">
          
          {/* Step 1: Type Selection */}
          {step === 'type_selection' && (
            <div className="flex flex-col items-center justify-center py-10 space-y-8 animate-in slide-in-from-bottom-4">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400">أهلاً بك في منصة أتهلا في صحتك</h3>
                <p className="text-slate-500 dark:text-slate-400">يرجى تحديد نوع الحساب الذي ترغب بإنشائه</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <button 
                  onClick={() => setStep('patient_form')}
                  className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 border-2 border-emerald-100 rounded-3xl hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <User className="w-10 h-10 text-emerald-600" />
                  </div>
                  <span className="text-xl font-black text-slate-800 dark:text-slate-100">حساب مريض</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2">احجز مواعيدك واستشر الأطباء عن بعد بكل سهولة</p>
                </button>

                <button 
                  type="button"
                  onClick={() => setStep('doctor_form')}
                  className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 border-2 border-emerald-100 rounded-3xl hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
                >
                  <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-10 h-10 text-emerald-600" />
                  </div>
                  <span className="text-xl font-black text-slate-800 dark:text-slate-100">حساب طبيب</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2">قدم استشاراتك وأدر مواعيد مرضاك باحترافية</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Form */}
          {(step === 'patient_form' || step === 'doctor_form') && (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-right-8" dir="rtl">
              
              {/* Section 1: Personal Info */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <h4 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-b border-emerald-50 pb-2">
                  <User className="w-5 h-5" /> 1. المعلومات الشخصية
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">الاسم (بالعربية)</label>
                    <input type="text" name="firstNameAr" value={formData.firstNameAr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">اللقب (بالعربية)</label>
                    <input type="text" name="lastNameAr" value={formData.lastNameAr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">الاسم (بالفرنسية)</label>
                    <input type="text" name="firstNameFr" value={formData.firstNameFr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">اللقب (بالفرنسية)</label>
                    <input type="text" name="lastNameFr" value={formData.lastNameFr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left" dir="ltr" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">تاريخ الميلاد</label>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4 items-center">
                        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                        <div className="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 text-emerald-800 rounded-xl font-bold min-w-[80px] text-center">
                          {formData.dob ? `${age} سنة` : 'العمر'}
                        </div>
                      </div>
                      {formData.dob && !isLegalAge && (
                        <p className="text-sm font-bold text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          لا يمكنك انشاء حساب، عمرك أقل من السن القانوني (19 سنة)
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">النوع</label>
                    <div className="flex gap-4 h-[48px]">
                      <label className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 has-[:checked]:bg-emerald-100 has-[:checked]:border-emerald-500 transition-all">
                        <input type="radio" name="gender" value="male" className="hidden" onChange={handleInputChange} />
                        <span className="font-bold text-slate-700 dark:text-slate-200">ذكر</span>
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 has-[:checked]:bg-emerald-100 has-[:checked]:border-emerald-500 transition-all">
                        <input type="radio" name="gender" value="female" className="hidden" onChange={handleInputChange} />
                        <span className="font-bold text-slate-700 dark:text-slate-200">أنثى</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">زمرة الدم</label>
                   <div className="flex flex-wrap gap-2">
                     {BLOOD_TYPES.map(bt => (
                       <label key={bt} className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-red-50 hover:border-red-200 has-[:checked]:bg-red-500 has-[:checked]:border-red-500 has-[:checked]:text-white transition-all font-bold text-slate-700 dark:text-slate-200 select-none">
                         <input type="radio" name="bloodType" value={bt} className="hidden" onChange={handleInputChange} />
                         <span dir="ltr">{bt}</span>
                       </label>
                     ))}
                   </div>
                </div>
              </div>

              {/* Section 2: Address Info */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <h4 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-b border-emerald-50 pb-2">
                  <span className="text-xl">📍</span> 2. {step === 'doctor_form' ? 'معلومات العمل' : 'معلومات الإقامة'}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">{step === 'doctor_form' ? 'ولاية العمل' : 'ولاية الإقامة'}</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="ابحث برقم أو اسم الولاية..."
                        value={showWilayaDropdown ? wilayaSearch : formData.wilaya}
                        onChange={(e) => {
                          setWilayaSearch(e.target.value);
                          setShowWilayaDropdown(true);
                        }}
                        onFocus={() => setShowWilayaDropdown(true)}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none"
                      />
                      {showWilayaDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl max-h-48 overflow-y-auto">
                          {filteredWilayas.map(w => (
                            <div 
                              key={w} 
                              className="px-4 py-2 hover:bg-emerald-50 dark:bg-emerald-900/30 cursor-pointer font-medium"
                              onClick={() => {
                                setFormData(prev => ({...prev, wilaya: w}));
                                setWilayaSearch('');
                                setShowWilayaDropdown(false);
                              }}
                            >
                              {w}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">{step === 'doctor_form' ? 'بلدية العمل' : 'بلدية الإقامة'}</label>
                    <input type="text" name="baladiya" value={formData.baladiya} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">العنوان الكامل (بالعربية)</label>
                    <input type="text" name="addressAr" value={formData.addressAr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">العنوان الكامل (بالفرنسية)</label>
                    <input type="text" name="addressFr" value={formData.addressFr} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left" dir="ltr" />
                  </div>
                </div>
              </div>

              {/* Only for Doctor: Profession details */}
              {step === 'doctor_form' && (
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                  <h4 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-b border-emerald-50 pb-2">
                    <Stethoscope className="w-5 h-5" /> 3. المعلومات المهنية والمستندات
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">التخصص</label>
                    <input type="text" name="specialty" value={formData.specialty} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-50 mt-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">رخصة مزاولة المهنة</label>
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 hover:border-emerald-400 transition-colors">
                         <Upload className="w-8 h-8 text-emerald-500 mb-2" />
                         <span className="text-sm text-slate-500 dark:text-slate-400 font-bold text-center">تحميل الملف</span>
                         {formData.licenseFile && <span className="text-xs text-emerald-600 mt-2 font-medium truncate max-w-full"><Check className="inline w-3 h-3 ml-1" /> {formData.licenseFile.name}</span>}
                         <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e, 'licenseFile')} />
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">شهادة الدكتوراه</label>
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 hover:border-emerald-400 transition-colors">
                         <Upload className="w-8 h-8 text-emerald-500 mb-2" />
                         <span className="text-sm text-slate-500 dark:text-slate-400 font-bold text-center">تحميل الملف</span>
                         {formData.doctorateFile && <span className="text-xs text-emerald-600 mt-2 font-medium truncate max-w-full"><Check className="inline w-3 h-3 ml-1" /> {formData.doctorateFile.name}</span>}
                         <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e, 'doctorateFile')} />
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">بطاقة التعريف الوطنية</label>
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-emerald-50 dark:bg-emerald-900/30 hover:border-emerald-400 transition-colors">
                         <Upload className="w-8 h-8 text-emerald-500 mb-2" />
                         <span className="text-sm text-slate-500 dark:text-slate-400 font-bold text-center">تحميل الملف</span>
                         {formData.idCardFile && <span className="text-xs text-emerald-600 mt-2 font-medium truncate max-w-full"><Check className="inline w-3 h-3 ml-1" /> {formData.idCardFile.name}</span>}
                         <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e, 'idCardFile')} />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 4: Contact & Security */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <h4 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-b border-emerald-50 pb-2">
                  <ShieldCheck className="w-5 h-5" /> {step === 'doctor_form' ? '4' : '3'}. الاتصال والأمان
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">رقم الهاتف (10 أرقام)</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        maxLength={10}
                        required 
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border ${formData.phone && !isPhoneValid ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left`} 
                        dir="ltr" 
                        placeholder="05..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">تأكيد رقم الهاتف</label>
                      <input 
                        type="tel" 
                        name="confirmPhone" 
                        value={formData.confirmPhone} 
                        onChange={handleInputChange} 
                        maxLength={10}
                        required 
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border ${formData.confirmPhone && !isPhoneMatch ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left`} 
                        dir="ltr" 
                      />
                      {formData.confirmPhone && !isPhoneMatch && <p className="text-red-500 text-xs font-bold mt-1">الرقم غير متطابق</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left" 
                        dir="ltr" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">تأكيد البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        name="confirmEmail" 
                        value={formData.confirmEmail} 
                        onChange={handleInputChange} 
                        required 
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border ${formData.confirmEmail && !isEmailMatch ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left`} 
                        dir="ltr" 
                      />
                      {formData.confirmEmail && !isEmailMatch && <p className="text-red-500 text-xs font-bold mt-1">البريد غير متطابق</p>}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-4 md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">كلمة المرور</label>
                        <div className="relative">
                          <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            required 
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left pl-12" 
                            dir="ltr" 
                          />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-300">
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {formData.password && (
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden flex">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className={`flex-1 border-r border-white last:border-0 ${i < Math.max(1, strengthScore) ? strengthColors[strengthScore] : 'bg-transparent'}`} />
                              ))}
                            </div>
                            <span className={`text-xs font-bold ${strengthColors[strengthScore].replace('bg-', 'text-')}`}>
                              {strengthLabels[strengthScore]}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">تأكيد كلمة المرور</label>
                        <input 
                          type={showPassword ? "text" : "password"} 
                          name="confirmPassword" 
                          value={formData.confirmPassword} 
                          onChange={handleInputChange} 
                          required 
                          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border ${formData.confirmPassword && !isPasswordMatch ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 ring-emerald-500 outline-none text-left`} 
                          dir="ltr" 
                        />
                         {formData.confirmPassword && !isPasswordMatch && <p className="text-red-500 text-xs font-bold mt-1">كلمة المرور غير متطابقة</p>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Section 5: Privacy & Captcha */}
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center space-y-6">
                
                {/* Privacy Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <div className="relative flex items-center justify-center w-6 h-6 border-2 border-emerald-500 rounded-md bg-white dark:bg-slate-900 mt-0.5 group-hover:bg-emerald-50 dark:bg-emerald-900/30 transition-colors">
                    <input 
                      type="checkbox" 
                      name="acceptedPrivacy"
                      checked={formData.acceptedPrivacy}
                      onChange={(e) => setFormData(prev => ({...prev, acceptedPrivacy: e.target.checked}))}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    {formData.acceptedPrivacy && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">قرأت وأوافق على </span>
                    <button type="button" onClick={() => setShowPrivacyModal(true)} className="text-emerald-700 font-bold underline underline-offset-4 hover:text-emerald-800">
                      سياسة الخصوصية
                    </button>
                  </div>
                </label>

                {/* Captcha */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 w-full max-w-sm flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 text-right">أنا لست برنامج روبوت (أدخل الرمز)</label>
                    <input 
                      type="text" 
                      name="captchaInput" 
                      value={formData.captchaInput} 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 ring-emerald-500 outline-none text-center font-mono font-bold tracking-widest uppercase"
                      dir="ltr"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div 
                      className="px-4 py-2 bg-slate-800 text-emerald-400 font-mono font-black text-xl rounded-lg tracking-[0.25em] select-none shadow-inner"
                      style={{ textDecoration: 'line-through decoration-slate-600 decoration-2' }}
                    >
                      {captchaCode}
                    </div>
                    <button type="button" onClick={generateCaptcha} className="text-xs text-slate-400 hover:text-slate-700 dark:text-slate-200 flex items-center gap-1 font-bold">
                      <RefreshCw className="w-3 h-3" /> تحديث الرمز
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={!canSubmit}
                  className="w-full max-w-sm bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-200"
                >
                  تسجيل الحساب
                </button>
                
                {!canSubmit && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> يرجى إكمال جميع الحقول بشكل صحيح والموافقة على سياسة الخصوصية
                  </p>
                )}

              </div>
            </form>
          )}

          {/* Patient Success */}
          {step === 'success' && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-in zoom-in-95">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                <Check className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-400 text-center">
                مرحبًا بك في أتهلا في صحتك 👋
              </h3>
              <p className="text-xl font-bold text-slate-600 dark:text-slate-300 text-center">
                تم إنشاء حسابك بنجاح.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl border border-emerald-100 max-w-md text-center mt-4">
                <p className="text-emerald-800 font-medium leading-relaxed">
                  يمكنك الآن حجز المواعيد والاستفادة من الاستشارات الطبية بسهولة وأمان 💚
                </p>
              </div>
              <button 
                onClick={onSuccess || onClose}
                className="mt-8 px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg"
              >
                الذهاب للوحة التحكم
              </button>
            </div>
          )}

          {/* Doctor Success */}
          {step === 'doctor_success' && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-in zoom-in-95">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                <Stethoscope className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-400 text-center">
                مرحبًا بك دكتور 👨‍⚕️
              </h3>
              <p className="text-xl font-bold text-slate-600 dark:text-slate-300 text-center">
                شكرًا لانضمامك إلى منصة “أتهلا في صحتك”، معًا نحو رعاية صحية رقمية أفضل.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl border border-emerald-100 max-w-md text-center mt-4">
                <p className="text-emerald-800 font-medium leading-relaxed">
                  سيقوم فريقنا بمراجعة مستنداتك وتفعيل حسابك قريبًا.
                </p>
              </div>
              <button 
                onClick={onSuccess || onClose}
                className="mt-8 px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg"
              >
                الذهاب للوحة التحكم
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-400">سياسة الخصوصية</h2>
              <button onClick={() => setShowPrivacyModal(false)} className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-200 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50 dark:bg-slate-950 text-right" dir="rtl">
              <div className="max-w-3xl mx-auto space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
                
                {step === 'doctor_form' ? (
                  <>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl border border-emerald-100">
                      <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 mb-2">سياسة الخصوصية للطبيب</h3>
                      <h4 className="text-lg font-bold text-emerald-800 mt-2">منصة “أتهلا في صحتك”</h4>
                      <p className="mt-4 font-medium text-slate-700 dark:text-slate-200">
                      نحن في منصة “أتهلا في صحتك” نلتزم بحماية خصوصية الأطباء وضمان سرية المعلومات المهنية والشخصية وفقًا للقوانين الجزائرية المتعلقة بحماية البيانات الرقمية والصحية.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">1. المعلومات التي نقوم بجمعها</h4>
                        <p className="mb-2">عند تسجيل الطبيب في المنصة قد نقوم بجمع المعلومات التالية:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>الاسم الكامل</li>
                          <li>رقم الهاتف</li>
                          <li>البريد الإلكتروني</li>
                          <li>التخصص الطبي</li>
                          <li>رقم اعتماد أو ترخيص مزاولة المهنة</li>
                          <li>الولاية ومكان العمل</li>
                          <li>صورة الملف الشخصي (اختياري)</li>
                          <li>أوقات العمل والاستشارات</li>
                          <li>معلومات الحساب وكلمة المرور المشفرة</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">2. كيفية استخدام المعلومات</h4>
                        <p className="mb-2">يتم استخدام بيانات الطبيب من أجل:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>إنشاء الحساب الطبي وإدارته</li>
                          <li>تمكين المرضى من حجز المواعيد</li>
                          <li>عرض التخصص والخدمات الطبية داخل المنصة</li>
                          <li>تحسين تجربة الاستخدام والخدمات الصحية الرقمية</li>
                          <li>التواصل مع الطبيب بخصوص التحديثات أو الإشعارات المهمة</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">3. حماية البيانات</h4>
                        <p className="mb-2">نلتزم باتخاذ إجراءات تقنية وأمنية لحماية بيانات الأطباء من:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>الوصول غير المصرح به</li>
                          <li>التعديل أو التسريب</li>
                          <li>الاستخدام غير القانوني للبيانات</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">4. مشاركة المعلومات</h4>
                        <p className="mb-2">لا يتم بيع أو مشاركة بيانات الطبيب مع أي جهة خارجية إلا في الحالات التالية:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>بموافقة الطبيب</li>
                          <li>عند وجود التزام قانوني</li>
                          <li>لحماية أمن المنصة وحقوق المستخدمين</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">5. مسؤولية الطبيب</h4>
                        <p className="mb-2">يتحمل الطبيب مسؤولية:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>صحة المعلومات المقدمة</li>
                          <li>الحفاظ على سرية بيانات تسجيل الدخول</li>
                          <li>احترام أخلاقيات المهنة والقوانين المعمول بها</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">6. حقوق الطبيب</h4>
                        <p className="mb-2">يحق للطبيب:</p>
                        <ul className="space-y-2 list-disc pr-6 list-inside">
                          <li>تعديل بياناته الشخصية</li>
                          <li>طلب حذف الحساب</li>
                          <li>الاطلاع على معلوماته المخزنة داخل المنصة</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">7. التعديلات على السياسة</h4>
                        <p>قد يتم تحديث سياسة الخصوصية عند تطوير خدمات المنصة، وسيتم إشعار المستخدمين بأي تغييرات مهمة.</p>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-3 text-emerald-700">8. التواصل معنا</h4>
                        <p>في حال وجود أي استفسار بخصوص الخصوصية أو حماية البيانات يمكن التواصل مع إدارة منصة “أتهلا في صحتك”.</p>
                      </section>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Patient / General Privacy Policy */}
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl border border-emerald-100">
                      <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 mb-2">سياسة الخصوصية – منصة أتهلا في صحتك</h3>
                      <p className="text-sm font-bold text-emerald-700 opacity-80">آخر تحديث: 2026</p>
                      <p className="mt-4 font-medium text-slate-700 dark:text-slate-200">
                        مرحبًا بكم في منصة <span className="font-bold text-emerald-800">أتهلا في صحتك</span>، المنصة الصحية الرقمية الجزائرية المخصصة لتسهيل الوصول إلى خدمات حجز المواعيد والاستشارات الطبية عن بُعد.
                      </p>
                      <p className="mt-2 text-sm">
                        نحن نلتزم بحماية خصوصية المستخدمين واحترام سرية بياناتهم الشخصية والصحية وفقًا للتشريعات والقوانين المعمول بها في الجمهورية الجزائرية الديمقراطية الشعبية.
                      </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6">
                      <section>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">1</span>
                          المعلومات التي نقوم بجمعها
                        </h4>
                        <ul className="space-y-2 list-none pr-8">
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full">
                            <span className="font-bold text-slate-700 dark:text-slate-200">معلومات الحساب:</span> الاسم الكامل، رقم الهاتف، البريد الإلكتروني، كلمة المرور المشفرة.
                          </li>
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full">
                            <span className="font-bold text-slate-700 dark:text-slate-200">المعلومات الصحية:</span> معلومات الملف الصحي، المواعيد الطبية، الاستشارات الطبية، الوصفات أو التحاليل المضافة.
                          </li>
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full">
                             <span className="font-bold text-slate-700 dark:text-slate-200">معلومات تقنية:</span> نوع الجهاز والمتصفح، عنوان IP، بيانات الاستخدام والتصفح داخل المنصة.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">2</span>
                          كيفية استخدام المعلومات
                        </h4>
                        <p className="mb-2">تُستخدم البيانات من أجل:</p>
                        <ul className="space-y-2 list-none pr-8">
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-slate-300 before:rounded-full">إنشاء وإدارة حساب المستخدم وحجز المواعيد الطبية.</li>
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-slate-300 before:rounded-full">تقديم الاستشارات الطبية الرقمية وتحسين جودة الخدمات.</li>
                          <li className="relative before:content-[''] before:absolute before:-right-5 before:top-2 before:w-2 before:h-2 before:bg-slate-300 before:rounded-full">إرسال الإشعارات والتنبيهات وحماية الحسابات.</li>
                        </ul>
                      </section>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h4 className="text-md font-black text-slate-800 dark:text-slate-100 mb-2">3. حماية البيانات</h4>
                          <p className="text-sm">تتخذ المنصة تدابير مثل تشفير كلمات المرور، حماية الاتصالات عبر (HTTPS/SSL)، تقييد الوصول، وأنظمة حماية ضد الاختراقات.</p>
                        </section>
                        <section className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h4 className="text-md font-black text-slate-800 dark:text-slate-100 mb-2">4. سرية المعلومات الطبية</h4>
                          <p className="text-sm">تُعتبر سرية للغاية، ولا يطلع عليها إلا المستخدم، الطبيب المعني، أو الجهات المخولة قانونيًا. لا يتم بيعها لأي جهة تجارية.</p>
                        </section>
                        <section className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h4 className="text-md font-black text-slate-800 dark:text-slate-100 mb-2">5. مشاركة البيانات</h4>
                          <p className="text-sm">لا تشارك البيانات إلا بموافقة صريحة، أو لتنفيذ التزام قانوني، أو لحماية أمن المنصة.</p>
                        </section>
                        <section className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h4 className="text-md font-black text-slate-800 dark:text-slate-100 mb-2">6. حقوق المستخدم</h4>
                          <p className="text-sm">يحق للمستخدم الاطلاع، التعديل، حذف الحساب، سحب الموافقة، وتصحيح البيانات.</p>
                        </section>
                      </div>

                      <section>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-2 mt-6">7. ملفات تعريف الارتباط (Cookies)</h4>
                        <p>تُستخدم لتحسين التجربة. يمكن التحكم بها عبر إعدادات المتصفح.</p>
                      </section>

                      <section>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-2">8. الاحتفاظ بالبيانات</h4>
                        <p>يتم الاحتفاظ بالبيانات للمدة الضرورية فقط أو حسب ما تقتضيه القوانين الجزائرية.</p>
                      </section>

                      <section>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-2">9. التزامات المستخدم</h4>
                        <p>تقديم معلومات صحيحة، الحفاظ على سرية الدخول، وعدم الاستخدام لأغراض غير قانونية.</p>
                      </section>
                      
                      <section className="bg-slate-800 text-slate-300 p-6 rounded-2xl mt-8">
                        <h4 className="text-lg font-black text-white mb-2">10. التعديلات والتواصل</h4>
                        <p className="mb-4 text-sm">تحتفظ المنصة بحق تعديل السياسة.</p>
                        <div className="flex flex-col gap-2 text-sm font-mono" dir="ltr">
                          <span className="text-emerald-400 text-right">contact@ahfishehtk.dz :البريد</span>
                          <span className="text-emerald-400 text-right">+213 XXX XX XX XX :الهاتف</span>
                        </div>
                      </section>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
               <button 
                onClick={() => {
                  setFormData(prev => ({...prev, acceptedPrivacy: true}));
                  setShowPrivacyModal(false);
                }}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all"
              >
                موافق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
