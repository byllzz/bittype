import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Shield, Rocket, Cpu, ArrowLeft, RefreshCw } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const handleRestart = () => navigate('/'); // this goes to (back to home)

  return (
    <>

      <div className="max-w-5xl w-full mx-auto py-20 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
        {/* back navigation  */}
        <nav className="mb-12">
          <Link
            to="/"
            className="group flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </nav>

        {/* hero section */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={12} fill="currentColor" className='text-blue-900' />
            Project Overview
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8">
            Pure focus. <br />
            <span className="text-blue-600 italic">Zero friction.</span>
          </h1>
          <p className="max-w-2xl text-xl text-zinc-500 leading-relaxed font-medium">
            A high-performance typing environment designed to refine your motor skills through
            <span className="text-zinc-900"> minimalism, precision, and real-time telemetry.</span>
          </p>
        </section>

        {/* grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h2 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight">
              The Philosophy
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              Most typing tools are cluttered with noise. We believe in <strong>Zen-Mode</strong>.
              By stripping away distractions, we force the brain to focus entirely on the rhythm of
              the tactile feedback and visual accuracy.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white shadow-2xl relative overflow-hidden">
            <div className="w-12 h-12 bg-white/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              <Rocket size={24} />
            </div>
            <h2 className="text-2xl font-black mb-4 tracking-tight">Core Capabilities</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Adaptive Word & Story
                Engines
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Real-time WPM/CPS
                Telemetry
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Dynamic Visual Keyboard
                Reactivity
              </li>
            </ul>
            {/* Subtle Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* tech used */}
        <section className="mt-24 pt-12 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Cpu size={20} className="text-zinc-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                Infrastructure
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 font-bold text-zinc-300">
              <span className="hover:text-zinc-900 transition-colors cursor-default">React 18</span>
              <span className="hover:text-zinc-900 transition-colors cursor-default">
                Tailwind v4
              </span>
              <span className="hover:text-zinc-900 transition-colors cursor-default">
                Vite Alpha
              </span>
              <span className="hover:text-zinc-900 transition-colors cursor-default">
                JavaScript
              </span>
              <span className="hover:text-zinc-900 transition-colors cursor-default">
                Lucide Icons
              </span>
            </div>
          </div>
        </section>

        {/* cta..*/}
        <div className="mt-24 flex justify-center">
          <button
            onClick={handleRestart}
            className="w-80 group flex items-center justify-center gap-3 px-8 py-6 rounded-full text-white font-black uppercase tracking-lose transition-all active:scale-95 bg-black"
          >
            <RefreshCw
              size={22}
              className="group-hover:rotate-180 transition-transform duration-700"
            />
            Start New Test
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
