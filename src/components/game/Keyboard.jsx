import { keyboardKeys } from '../../data/keyboardKeys';
export default function RetroKeyboard({ pressedKey }) {
  const getRowStyles = rowIndex => {
    const styles = [
      { bg: '#fdf3e7', shadow: '#e5d1b8', text: '#7d6155' },
      { bg: '#ffdab9', shadow: '#e6b38a', text: '#7d6155' },
      { bg: '#f4a460', shadow: '#c47d46', text: '#fff' },
      { bg: '#8b735b', shadow: '#5d4d3d', text: '#fff' },
      { bg: '#2d2926', shadow: '#000000', text: '#fff' },
    ];
    return styles[rowIndex] || styles[4];
  };

  const getKeyWidth = text => {
    const t = text.toLowerCase();
    if (t === 'space') return 'w-[380px] rounded-[40px]';
    if (t === 'backspace' || t === 'shift') return 'w-[100px] rounded-[30px]';
    if (t === 'enter' || t === 'caps') return 'w-[90px] rounded-[30px]';
    if (t === 'tab' || t === 'ctrl' || t === 'alt') return 'w-[70px] rounded-[30px]';
    return 'w-[54px] rounded-[50%]';
  };

  return (
    <div className="flex items-center justify-center font-sans relative w-full">
      <div className="bg-[#1a1b1e] p-10 rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] border-b-18 border-[#050505] inline-block ">
        <div className="flex flex-col gap-4 z-2">
          {keyboardKeys.map((row, rowIndex) => {
            const style = getRowStyles(rowIndex);

            return (
              <div key={rowIndex} className="flex flex-row gap-2 justify-center items-center">
                {row.map((item, index) => {
                  const widthClass = getKeyWidth(item.text1);
                  const isPressed = pressedKey === item.text1.toLowerCase();

                  return (
                    <button
                      key={index}
                      className={`
                        ${widthClass}
                        relative h-13.5 flex flex-col items-center justify-center
                        font-bold transition-all duration-75
                        ${isPressed ? 'translate-y-1.5' : ''}
                      `}
                      style={{
                        backgroundColor: style.bg,
                        color: style.text,
                        boxShadow: isPressed
                          ? 'inset 0 4px 10px rgba(0,0,0,0.3)'
                          : `inset 0 4px 4px rgba(255,255,255,0.4), 0 8px 0 0 ${style.shadow}, 0 15px 20px rgba(0,0,0,0.4)`,
                      }}
                    >
                      {item.text2 && (
                        <span className="absolute top-2 right-3 text-[10px] opacity-60">
                          {item.text2}
                        </span>
                      )}

                      <span
                        className={`uppercase mt-1 font-medium ${item.text1 === 'Backspace' ? 'text-[13px]' : 'text-[18px]'} font-fira `}
                      >
                        {item.text1 === 'Space' ? 'Space' : item.text1}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
