import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative">
        <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-xl opacity-50"></div>
        <div className="w-24 h-24 bg-[#e8f6f3] text-[#117676] rounded-3xl flex items-center justify-center mb-8 shadow-sm relative z-10 rotate-3 hover:rotate-0 transition-transform">
          <Clock className="w-10 h-10" />
          <Sparkles className="w-5 h-5 absolute -top-2 -right-2 text-amber-400" />
        </div>
      </div>
      
      <h2 className="text-3xl font-black text-slate-800 mb-4 text-center">{title}</h2>
      <p className="text-slate-500 text-lg font-medium text-center max-w-md leading-relaxed bg-slate-50 py-4 px-6 rounded-2xl border border-slate-100">
        قريبًا ستتوفر هذه الخدمة داخل منصة أتهلا في صحتك.
      </p>
    </div>
  );
}
