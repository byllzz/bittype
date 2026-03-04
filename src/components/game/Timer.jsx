import { TimerIcon } from "lucide-react";

export default function Timer({ timeLeft }) {
  const maxTime = 60;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (timeLeft / maxTime) * circumference;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
      <span className="group flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest pb-3">
        Typing Timer :
      </span>
      <div className="w-55 h-21.25 bg-black rounded-[2.8rem] border-2 border-zinc-900 shadow-xl flex overflow-hidden">
        {/* left side */}
        <div className="flex-[1.4] flex flex-col justify-center pl-5 relative left-5">
          <span className="text-zinc-500 font-bold uppercase tracking-tighter text-[12px]">
            Timer
          </span>
          <div
            className={`text-3xl font-black tabular-nums tracking-tighter leading-tight transition-colors ${
              timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'
            }`}
          >
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 bg-blue-600 flex items-center justify-center relative">
          <svg className="w-14 h-14 transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="5"
              fill="transparent"
              className="text-white/5"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#fff"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: offset }}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-linear"
            />
          </svg>

          {/* a icon for UI.. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center border border-white/5">
              <TimerIcon size={12} className="text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-12 h-0.5 bg-black mt-2 rounded-full opacity-10" />
    </div>
  );
}
