import Timer from '../components/game/Timer';
import Paragraph from '../components/game/Paragraph';
import Keyboard from '../components/game/Keyboard';
import useTypingEngine from '../hooks/useTypingEngine';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameControls from '../components/game/GameControls';
import NavBar from '../components/ui/NavBar';
export default function Home() {
  const navigate = useNavigate();
  const fontSizes = [
    { label: 'Sm', value: 16 },
    { label: 'Md', value: 20 },
    { label: 'Lg', value: 26 },
    { label: 'Xl', value: 32 },
  ];
  const [fontSize, setFontSize] = useState(22);
  const [passTime, setpassTime] = useState(30);
  const {
    pressedKey,
    input,
    timeLeft,
    isFinished,
    wpm,
    accuracy,
    paragraph,
    mode,
    setMode,
    generateParagraph,
    resetGame,
    reward,
    totalErrors,
    timeTaken,
  } = useTypingEngine(passTime);

  const totalChars = paragraph.length;

  useEffect(() => {
    resetGame();
  }, [passTime]);

   useEffect(() => {
    if (isFinished) {
      navigate('/results', {
        state: {
          wpm,
          accuracy,
          reward,
          totalErrors,
          timeTaken,
          totalChars
        },
      });
    }
  }, [isFinished, navigate, wpm, accuracy, reward, totalErrors, timeTaken, totalChars]);
  return (
    <div className="flex flex-col items-center justify-center relative h-screen bg-transparent overflow-hidden p-0 m-0 scale-98">
         <div className='fixed top-2 w-full px-7 '>
                <NavBar />
              </div>
      <div className="absolute right-10 top-40">
        <Timer timeLeft={timeLeft} />
      </div>
      <GameControls
        mode={mode}
        setMode={setMode}
        generateParagraph={generateParagraph}
        passTime={passTime}
        fontSizes={fontSizes}
        setFontSize={setFontSize}
        isFinished={isFinished}
        setpassTime={setpassTime}
      />

        <Paragraph paragraph={paragraph} input={input} mode={mode} fontSize={fontSize} />
     
      <div className="relative top-5">
        <Keyboard pressedKey={pressedKey} />
      </div>
    </div>
  );
}
