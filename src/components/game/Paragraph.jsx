export default function Paragraph({ paragraph, input, mode, wordCount, fontSize }) {
  let displayText = paragraph;
  if (mode === "words") {
    displayText = paragraph.split(" ").slice(0, wordCount).join(" ");
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* main glass container..*/}
      <div className="relative h-35 md:h-50 overflow-hidden bg-black backdrop-blur-md  rounded-3xl  p-6">

        <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent pointer-events-none" />

        {/* text wrapper*/}
        <div className="relative h-full overflow-y-auto no-scrollbar flex flex-wrap content-start gap-x-px select-none">
          {displayText.split("").map((char, index) => {
            let color = "text-zinc-400";
            let bg = "";

            if (index < input.length) {
              const isCorrect = char === input[index];
              color = isCorrect ? 'text-violet-600 font-bold' : 'text-white';
              bg = isCorrect ? '' : 'bg-red-500 rounded-[4px] px-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]';
            }

            //  character indicator (Cursor)
            const isCurrent = index === input.length;

            return (
              <span
                key={index}
                style={{ fontSize: `${fontSize}px` }}
                className={`transition-all duration-100 leading-relaxed font-mono ${color} ${bg} ${
                  isCurrent ? "bg-violet-200 ring-2 ring-violet-500 rounded-sm animate-pulse" : ""
                }`}
              >
                {char === " " && !bg ? "\u00A0" : char}
              </span>
            );
          })}
        </div>

        {/* percentage label */}
        <div className="absolute bottom-3 right-5 text-[10px] font-black uppercase tracking-tighter text-black bg-white px-2 py-0.5 rounded-full border">
          Progress: {Math.round((input.length / displayText.length) * 100)}%
        </div>
      </div>
    </div>
  );
}
