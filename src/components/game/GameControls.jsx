import { Layers, Clock, Type, Sparkles } from "lucide-react";

export default function GameControls({ mode, setMode, generateParagraph, passTime, setpassTime, fontSizes, setFontSize, isFinished }) {
  if (isFinished) return null;

  return (
    <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative bottom-14">
      {/* subtle hint */}
      <div className="flex items-center gap-2 text-black group cursor-default">
        <Sparkles size={12} className="group-hover:text-blue-500 transition-colors" />
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Select your challenge
        </span>
      </div>

      {/* main glass dock */}
      <div className="flex flex-row items-center gap-8 px-8 py-3 bg-white/40 backdrop-blur-2xl rounded-4xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] ring-1 ring-black/5 transition-all hover:bg-white/50">
        {/*mode switch btns.. */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600">
            <Layers size={18} />
          </div>
          <div className="flex gap-1">
            {['words', 'numbers', 'symbols', 'mixed', 'stories', 'rWords'].map(m => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  generateParagraph(m);
                }}
                className={`relative px-3 py-1.5 text-xs font-bold transition-all rounded-full group ${
                  mode === m ? 'text-white' : 'text-zinc-500 hover:text-black hover:bg-white/60'
                }`}
              >
                <span className="relative z-10 capitalize">{m === 'rWords' ? '#Words' : m}</span>
                {mode === m && (
                  <div className="absolute inset-0 bg-black text-white rounded-full shadow-sm animate-in fade-in zoom-in-95" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="h-8 w-0.5 bg-black/10" />

        {/* time selectors.. */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-600">
            <Clock size={18} />
          </div>
          <div className="flex gap-4">
            {[15, 30, 60, 120].map(time => (
              <button
                key={time}
                onClick={() => setpassTime(time)}
                className={`text-xs font-black transition-all ${
                  passTime === time
                    ? 'text-amber-600 scale-110 drop-shadow-[0_0_8px_rgba(217,119,6,0.3)]'
                    : 'text-zinc-400 hover:text-black'
                }`}
              >
                {time}s
              </button>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="h-8 w-0.5 bg-black/10" />

        {/* fonts sizes btns.. */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
            <Type size={18} />
          </div>
          <div className="flex gap-4">
            {fontSizes.map(font => (
              <button
                key={font.label}
                onClick={() => setFontSize(font.value)}
                className={`text-[10px] uppercase tracking-tighter font-black transition-all ${
                  'text-zinc-400 hover:text-black hover:scale-110'
                }`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
