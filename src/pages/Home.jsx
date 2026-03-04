import Timer from '../components/game/Timer';
import Paragraph from '../components/game/Paragraph';
import Keyboard from '../components/keyboard/Keyboard';
import useTypingEngine from '../hooks/useTypingEngine';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameControls from '../components/game/GameControls';
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
    <div className="flex flex-col items-center justify-center relative w-full h-screen overflow-hidden p-0 m-0">
      <div className="absolute right-20 top-40">
        <Timer timeLeft={timeLeft} />
      </div>
      <div className="relative top-7">
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
      </div>
      <div className=" ">
        <Paragraph paragraph={paragraph} input={input} mode={mode} fontSize={fontSize} />
      </div>
      <div className="relative top-10">
        <Keyboard pressedKey={pressedKey} />
      </div>
    </div>
  );
}
