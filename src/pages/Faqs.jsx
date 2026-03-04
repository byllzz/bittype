import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link , useNavigate } from "react-router-dom";
import { faqs } from '../data/faqs';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const handleRestart = () => navigate('/'); // this goes to (back to home)
  return (
    <>
      <div className="max-w-4xl w-full mx-auto py-20 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
        <nav className="mb-12">
          <Link
            to="/"
            className="group flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </nav>

        {/* header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <HelpCircle size={12} fill="currentColor" className="text-blue-900" />
            Questions Center
          </div>
          <h1 className="text-6xl font-black text-zinc-900 tracking-tighter mb-6">
            Common <span className="text-blue-600 italic">Queries.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            Deep dives into our scoring algorithms, mechanics, and system configuration.
          </p>
        </section>

        {/* all faqs here */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-500 rounded-4xl border ${
                  isOpen
                    ? 'bg-white border-blue-100 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)] shadow-blue-500/10'
                    : 'bg-white border-transparent hover:border-zinc-200 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xs font-black tabular-nums transition-colors ${isOpen ? 'text-blue-600' : 'text-zinc-300 group-hover:text-zinc-500'}`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-zinc-900' : 'text-zinc-600'}`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-zinc-200/50 text-zinc-400 group-hover:bg-zinc-200'}`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pl-22 pr-12 text-zinc-500 leading-relaxed font-medium">
                      <div className="pt-2 border-t border-zinc-50">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* support area */}
        <div className="mt-20 p-10 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-zinc-800">
          <div className="relative z-10">
            <h3 className="text-2xl font-black tracking-tight mb-2">Hope you love my project?</h3>
            <p className="text-zinc-400 text-sm font-medium">
              Check out! my other projcets on{' '}
              <a href="https://github.com/byllzz" target="_blank">
                Github.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
            <button
              onClick={handleRestart}
              className="w-45 group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-black font-black uppercase tracking-tighter transition-all active:scale-95 bg-white"
            >
              <RefreshCw
                size={22}
                className="group-hover:rotate-180 transition-transform duration-700"
              />
               New Test
            </button>
          </div>

          {/* subtle glow bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
        </div>
      </div>
    </>
  );
}
