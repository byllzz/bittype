import { useLocation, useNavigate , Link } from "react-router-dom";
import { RefreshCw, Target, Zap, Activity, Clock, ShieldCheck, ArrowLeft } from 'lucide-react';
import SessionReport from "../components/game/SessionReport";
import Reward from "../components/game/Reward";
export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleRestart = () => navigate("/"); // this goes to (back to home)
  // all vars...
  const {
    wpm,
    accuracy,
    reward,
    totalErrors,
    timeTaken,
    totalChars
  } = location.state || {
    wpm: 0,
    accuracy: 0,
    reward: "No Data",
    totalErrors: 0,
    timeTaken: 0,
    totalChars: 0
  };

  return (
    <>
      <div className="w-full flex items-center justify-between relative pt-2 overflow-hidden scale-90 ">
        <section className="w-full max-w-362.5 mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* main dashboard container */}
          <div className="overflow-hidden relative">
            <div className="flex flex-col lg:flex-row">
              {/* left side : main stats */}
              <div className="flex-1 p-8 md:p-16 border-r-2 border-black border-dashed relative top-8">
                <header className="mb-12  relative">
                  {/* back navigation  */}
                  <nav className="mb-8">
                    <Link
                      to="/"
                      className="group flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest"
                    >
                      <ArrowLeft
                        size={14}
                        className="group-hover:-translate-x-1 transition-transform"
                      />
                      Back to Home
                    </Link>
                  </nav>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-black uppercase tracking-wider mb-4">
                    <Activity size={14} />
                    Performance Analyzed
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">
                    THE <br /> <span className="text-blue-600 italic">VERDICT.</span>
                  </h1>

                  <Reward reward={reward} />
                </header>

                <div className="space-y-12">
                  {/* wmp */}
                  <div>
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Zap size={18} />
                      <span className="font-bold uppercase tracking-widest text-xs">
                        Gross Typing Speed
                      </span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10rem] font-black leading-none tracking-tighter text-black tabular-nums">
                        {wpm}
                      </span>
                      <span className="text-4xl font-black text-blue-600 italic uppercase">
                        Wpm
                      </span>
                    </div>
                  </div>
                  {/* accuracy & others */}
                  <div className="flex items-center gap-12 pt-8 border-t-2 border-dashed border-zinc-200">
                    <DetailSmallStat
                      icon={<Target className="text-emerald-500" />}
                      label="Accuracy"
                      value={`${accuracy}%`}
                    />
                    <DetailSmallStat
                      icon={<Clock className="text-purple-500" />}
                      label="Time Spent"
                      value={`${timeTaken}s`}
                    />
                    <DetailSmallStat
                      icon={<ShieldCheck className="text-orange-500" />}
                      label="Consistency"
                      value="High"
                    />
                  </div>
                </div>
              </div>

              {/* right side : extras results... */}
              <div className="w-full lg:w-150 p-8 md:p-12 flex flex-col justify-between relative top-15">
                {/* action button :: return to home again to start testing.. */}
                <div className="mt-12 space-y-4">
                  <button
                    onClick={handleRestart}
                    className="w-full group flex items-center justify-center gap-3 px-8 py-6 rounded-full text-white font-black uppercase tracking-lose transition-all active:scale-95 bg-black"
                  >
                    <RefreshCw
                      size={22}
                      className="group-hover:rotate-180 transition-transform duration-700"
                    />
                    Start New Test
                  </button>

                  {/* extra results comp.. */}
                  <SessionReport
                    reward={reward}
                    wpm={wpm}
                    accuracy={accuracy}
                    totalErrors={totalErrors}
                    timeTaken={timeTaken}
                    totalChars={totalChars}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function DetailSmallStat({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 uppercase tracking-tighter font-black text-[10px] text-zinc-400">
        {icon}
        {label}
      </div>
      <span className="text-2xl font-black text-black">{value}</span>
    </div>
  );
}
