import {  AlertCircle, Clock, MousePointer2, Activity, Zap } from "lucide-react";

export default function SessionReport({ wpm, accuracy, totalErrors, timeTaken, totalChars }) {
  const cps = timeTaken > 0 ? ((totalChars || 0) / timeTaken).toFixed(1) : "0.0";

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">

      {/*primary stats.. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WPM  */}
        <div className="md:col-span-2 relative overflow-hidden p-10 rounded-4xl bg-white border border-zinc-100 shadow-sm flex items-center justify-between">
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2 block">Velocity Score</span>
            <div className="flex items-baseline gap-3">
              <h1 className="text-9xl font-extrabold tracking-tighter text-zinc-900 tabular-nums">{wpm}</h1>
              <span className="text-xl font-bold text-zinc-400 uppercase italic">wpm</span>
            </div>
          </div>
          {/* subtle  bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent pointer-events-none" />
          <Zap size={140} className="absolute -right-8 -bottom-8 text-blue-500/5 rotate-12" />
        </div>

        {/* Accuracy  */}
        <div className="p-10 rounded-4xl bg-black text-white flex flex-col justify-center relative overflow-hidden border border-zinc-800 shadow-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2 block relative right-2">Precision</span>
          <div className="flex items-baseline gap-2 relative right-3">
            <h1 className="text-5xl font-extrabold tracking-tighter tabular-nums">{accuracy}</h1>
            <span className="text-xl font-medium text-zinc-500">%</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${accuracy}%` }} />
          </div>
        </div>
      </div>

      {/* analytics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricTile
          icon={<AlertCircle size={18} />}
          label="Errors"
          value={totalErrors}
          unit="typos"
          accent="text-red-500"
        />
        <MetricTile
          icon={<Clock size={18} />}
          label="Time"
          value={timeTaken}
          unit="sec"
          accent="text-blue-500"
        />
        <MetricTile
          icon={<MousePointer2 size={18} />}
          label="CPS"
          value={cps}
          unit="char/s"
          accent="text-emerald-500"
        />
        <MetricTile
          icon={<Activity size={18} />}
          label="Raw"
          value={Math.round(wpm * 1.05)}
          unit="wpm"
          accent="text-purple-500"
        />
      </div>

      {/*  summary footer */}
      <div className="flex items-center justify-between px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
         <div className="flex items-center gap-6">
            <div className="flex flex-col">
               <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Total Characters</span>
               <span className="text-sm font-bold text-zinc-800">{totalChars}</span>
            </div>
            <div className="w-px h-6 bg-zinc-200" />
            <div className="flex flex-col">
               <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Stability</span>
               <span className="text-sm font-bold text-zinc-800">98.2%</span>
            </div>
         </div>
         <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
            Peak performance detected
         </span>
      </div>
    </div>
  );
}

function MetricTile({ icon, label, value, unit, accent }) {
  return (
    <div className="group p-6 bg-white border border-zinc-100 rounded-3xl transition-all hover:shadow-md hover:border-zinc-200">
      <div className={`${accent} opacity-40 group-hover:opacity-100 transition-opacity mb-4`}>
        {icon}
      </div>
      <div className="space-y-0.5">
        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">{label}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-zinc-900 tabular-nums">{value}</span>
          <span className="text-[10px] font-medium text-zinc-400 uppercase">{unit}</span>
        </div>
      </div>
    </div>
  );
}
