import React from 'react';
import { X, Shield, Lock, FileText, UserCheck, Stethoscope } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en' | 'fr';
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const isRTL = true;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${
          isRTL ? 'text-right' : 'text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className={`flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-arabic">سياسة الخصوصية</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 font-arabic">
          <div className="max-w-none text-slate-600 dark:text-slate-300">
            <p className="mb-8 text-lg">منصة “أتهلا في صحتك” تولي اهتماماً كبيراً بخصوصية وأمان بيانات مستخدميها. تشرح هذه السياسة كيفية جمع واستخدام وحماية بيانات المرضى والأطباء.</p>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 mb-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">أولاً: سياسة خصوصية المرضى</h3>
              </div>
              
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">1. جمع البيانات:</h4>
                  <p className="mr-8">نجمع معلوماتك الشخصية الأساسية (الاسم، العمر، معلومات الاتصال) والبيانات الطبية التي تقوم بإدخالها أو مشاركتها مع الأطباء بغرض تقديم الرعاية الصحية وتسهيل الحجوزات.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">2. استخدام البيانات:</h4>
                  <p className="mr-8">تُستخدم بياناتك فقط لتوفير الخدمات الطبية المطلوبة، إدارة مواعيدك، والتواصل معك بشأن حالتك الصحية وتحديثات المنصة.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">3. سرية السجل الطبي:</h4>
                  <p className="mr-8">كافة السجلات الطبية والاستشارات يتم تشفيرها ولا يمكن الوصول إليها إلا من قبلك ومن قبل طبيبك المعالج الذي تمنحه صلاحية الاطلاع عليها.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">4. مشاركة البيانات:</h4>
                  <p className="mr-8">لا نقوم ببيع أو مشاركة بياناتك الشخصية والصحية مع أي أطراف ثالثة لأغراض تجارية أبداً.</p>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-6 md:p-8 border border-emerald-100 dark:border-emerald-900/30 mb-8">
              <div className="flex items-center gap-3 mb-6 border-b border-emerald-200 dark:border-emerald-800 pb-4">
                <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">ثانياً: سياسة خصوصية الأطباء</h3>
              </div>
              
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">1. ملف الطبيب المهني:</h4>
                  <p className="mr-8">نجمع معلوماتك المهنية (التخصص، الشهادات، الخبرات، موقع العيادة) لعرضها للمرضى لتسهيل الحجز الموثوق.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">2. إدارة المواعيد والبيانات:</h4>
                  <p className="mr-8">المنصة تمنحك أدوات آمنة لإدارة بيانات مرضاك وجدول مواعيدك. هذه البيانات تخص مرضاك ومحمية بسرية تامة ولا يسمح باستخدامها خارج إطار الرعاية الصحية الخاصة بهم.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">3. حماية الحساب:</h4>
                  <p className="mr-8">يتحمل الطبيب مسؤولية الحفاظ على سرية معلومات الدخول الخاصة بحسابه لتجنب أي وصول غير مصرح به لسجلات المرضى.</p>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-slate-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">أمان المعلومات وحمايتها</h3>
                  <p>تستخدم المنصة أحدث تقنيات التشفير وبروتوكولات الأمان لحماية بيانات المستخدمين (المرضى والأطباء) من الوصول غير المصرح به أو الاختراق.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-slate-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">التعديلات على سياسة الخصوصية</h3>
                  <p>نحتفظ بالحق في تحديث سياسة الخصوصية في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية تطرأ على هذه السياسة من خلال المنصة.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            بياناتك آمنة ومحمية
          </p>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-200 dark:shadow-none"
          >
            موافق
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
