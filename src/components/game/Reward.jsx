import {Award} from 'lucide-react'

export default function Reward({reward}) {
  return (
    <div className="absolute right-0 top-80 rotate-10 w-80 p-6 rounded-3xl border-[3px] text-white bg-black border-zinc-100">
      <div className="absolute top-2 right-4 opacity-100 group-hover:opacity-20 transition-opacity">
        <Award size={80} strokeWidth={1} />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-700 p-2 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Award className="text-white" size={24} />
        </div>
        <h3 className="text-black font-black uppercase tracking-[0.2em] text-[10px]">
          Rank Awarded
        </h3>
      </div>
      <p className="text-3xl relative top-2 font-black italic uppercase leading-none text-white tracking-tighter">
        {reward || 'Speed Demon'}
      </p>

      <div className="mt-6 pt-6 border-t-2 border-dashed border-zinc-200">
        <p className="text-[11px] leading-relaxed text-white font-medium italic">
          "Subject demonstrates superior cognitive-motor synchronization and high-velocity output."
        </p>
      </div>

      <div className="absolute -bottom-5 -right-2 w-16 h-16 border-[3px] border-blue-600/30 rounded-full flex flex-col items-center justify-center text-white font-black text-[8px] rotate-12 bg-white/50 backdrop-blur-sm">
        <span className="leading-none">VERIFIED</span>
        <span className="leading-none text-[6px]">#{Math.floor(Math.random() * 9999)}</span>
      </div>
    </div>
  );
}
