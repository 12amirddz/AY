import React from 'react';
import { X } from 'lucide-react';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en' | 'fr';
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose, lang }) => {
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
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-arabic">الشروط والأحكام</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 font-arabic">
          <div className="max-w-none text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">منصة “أتهلا في صحتك”</h2>
            <p className="mb-8">مرحبًا بك في منصة “أتهلا في صحتك”. باستخدامك للمنصة فإنك توافق على الالتزام بالشروط والأحكام التالية، لذا يرجى قراءتها بعناية.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">1. التعريف بالمنصة</h3>
            <p className="mb-6">“أتهلا في صحتك” هي منصة صحية رقمية تهدف إلى تسهيل حجز المواعيد الطبية والاستشارات الصحية بين المرضى والأطباء بطريقة إلكترونية آمنة وسهلة.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">2. قبول الشروط</h3>
            <p className="mb-6">عند إنشاء حساب أو استخدام خدمات المنصة، فإنك توافق على جميع الشروط والأحكام وسياسة الخصوصية الخاصة بالمنصة.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">3. إنشاء الحساب</h3>
            <p className="mb-2">يلتزم المستخدم بما يلي:</p>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li>تقديم معلومات صحيحة ودقيقة وحديثة</li>
              <li>الحفاظ على سرية معلومات تسجيل الدخول</li>
              <li>عدم مشاركة الحساب مع أي شخص آخر</li>
            </ul>
            <p className="mb-6">ويحق للمنصة تعليق أو حذف أي حساب يحتوي على معلومات غير صحيحة أو يستخدم بشكل مخالف.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">4. استخدام المنصة</h3>
            <p className="mb-2">يُمنع استخدام المنصة في:</p>
            <ul className="list-disc pr-6 mb-6 space-y-2">
              <li>أي نشاط غير قانوني</li>
              <li>انتحال شخصية الغير</li>
              <li>نشر معلومات مضللة أو مسيئة</li>
              <li>إساءة استخدام خدمات الاستشارات الطبية</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">5. المواعيد والاستشارات</h3>
            <ul className="list-disc pr-6 mb-6 space-y-2">
              <li>توفر المنصة خدمة حجز المواعيد والاستشارات الطبية فقط</li>
              <li>يتحمل الطبيب مسؤولية المحتوى الطبي والاستشارات المقدمة</li>
              <li>قد يتم تعديل أو إلغاء بعض المواعيد حسب ظروف الطبيب أو المريض</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">6. المسؤولية الطبية</h3>
            <p className="mb-6">المنصة تُعد وسيطًا رقميًا بين المريض والطبيب، ولا تتحمل مسؤولية التشخيص أو القرارات الطبية الناتجة عن الاستشارات.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">7. حماية البيانات</h3>
            <p className="mb-6">تلتزم المنصة بحماية بيانات المستخدمين وعدم مشاركتها مع أي طرف خارجي إلا وفقًا للقانون أو بموافقة المستخدم.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">8. الملكية الفكرية</h3>
            <p className="mb-2">جميع عناصر المنصة من:</p>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li>التصميم</li>
              <li>الشعار</li>
              <li>المحتوى</li>
              <li>الواجهة البرمجية</li>
            </ul>
            <p className="mb-6">هي ملك لمنصة “أتهلا في صحتك” ولا يجوز نسخها أو استخدامها دون إذن.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">9. التعديلات</h3>
            <p className="mb-6">يحق لإدارة المنصة تعديل الشروط والأحكام في أي وقت، ويتم نشر التحديثات داخل المنصة.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">10. إيقاف الخدمة</h3>
            <p className="mb-6">يحق للمنصة تعليق أو إيقاف أي حساب يخالف هذه الشروط دون إشعار مسبق.</p>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">11. التواصل</h3>
            <p className="mb-6">لأي استفسار أو ملاحظة يمكن التواصل مع إدارة منصة “أتهلا في صحتك” عبر وسائل التواصل المتاحة داخل المنصة.</p>
          </div>
        </div>
        
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
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

export default TermsAndConditions;
