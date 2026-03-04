import { useEffect, useState, useRef } from "react";
import { paragraphs } from "../data/paragraphs";

export default function useTypingEngine(initialDuration = 30) {
  // all state  here...
  const [pressedKey, setPressedKey] = useState(null);
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mode, setMode] = useState('words');
  const [category, setCategory] = useState('words');
  const [paragraph, setParagraph] = useState('');
  const [isGameActive, setIsGameActive] = useState(true);
  // hidden rewards for fast type state
  const [reward, setReward] = useState(null);
  // for errors and total chars..
  const [totalErrors, setTotalErrors] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  /* all refs goes here.. */
  const isRunningRef = useRef(isRunning);
  const isFinishedRef = useRef(isFinished);
  const generatedCategoryRef = useRef(null);

  useEffect(() => {
    isRunningRef.current = isRunning;
    isFinishedRef.current = isFinished;
  }, [isRunning, isFinished]);

  /* this generates para >>> we see on screen */
  const generateParagraph = (type = 'words') => {
    if (generatedCategoryRef.current === type) return;
    const list = paragraphs[type];
    if (!list || list.length === 0) return;
    const randomText = list[Math.floor(Math.random() * list.length)];
    setParagraph(randomText);
    setCategory(type);
    setInput('');
    setIsFinished(false);
    setTimeLeft(initialDuration);
    setIsRunning(false);
    setPressedKey(null);
    generatedCategoryRef.current = type;
  };
  /* auto generates on mount */
  useEffect(() => {
    generateParagraph('words');
  }, []);

  // keyboard listerners...
  useEffect(() => {
    const handleKeyDown = e => {
      const { key } = e;
      if (isFinishedRef.current || e.ctrlKey || e.altKey) return;
      if (!isRunningRef.current && key.length === 1) {
        setIsRunning(true);
        isRunningRef.current = true;
      }
      if (key === ' ') e.preventDefault();
      // backspace Logic
      if (key === 'Backspace') {
        setInput(prev => prev.slice(0, -1));
        return;
      }

      //  character typing logic
      if (key.length === 1) {
        setInput(prev => {
          if (prev.length >= paragraph.length) return prev;
          const newInput = prev + key;
          setPressedKey(key.toLowerCase() === ' ' ? 'space' : key.toLowerCase());
          return newInput;
        });
      }
    };

    const handleKeyUp = () => setPressedKey(null);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [paragraph]); // this Adds paragraph to dependencies so the listener knows the target length

  // here controls of timer...
  useEffect(() => {
    if (!isRunning) return;
    if (isFinished) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      setIsFinished(true);
      setIsGameActive(false);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isFinished ]);

  // this will ok the (game termination logic)
  useEffect(() => {
    if (!isRunning || isFinished) return;
    if (input.length >= paragraph.length && paragraph.length > 0) {
      let correctChars = 0;
      let errors = 0;
      paragraph.split('').forEach((char, index) => {
        if (input[index] === char) {
          correctChars++;
        } else {
          errors++;
        }
      });

      const finalAcc = Math.round((correctChars / paragraph.length) * 100);
      const taken = Math.max(1, initialDuration - timeLeft);

      // here set all stats FIRST..
      setTotalErrors(errors);
      setTimeTaken(taken);

      // determine the extra special reward
      let finalReward = 'Test Complete ';
      if (timeLeft > initialDuration / 2 && finalAcc > 95) {
        finalReward = 'Speed Demon ';
      } else if (finalAcc === 100) {
        finalReward = 'Perfect Typist ';
      }
      setReward(finalReward);

      /* this will  flip the finish flags.. and
       ensures that when Home.jsx sees isFinished = true,
      the other states above are already "scheduled" or processed. */
      setIsFinished(true);
      setIsRunning(false);
      setIsGameActive(false);
    }
  }, [input, paragraph, isRunning, isFinished, initialDuration, timeLeft]);

// all calculation goes here...
  useEffect(() => {
    if (!isFinished) return;
    // WPM
    const wordsTyped = input.trim().length / 5;
    const minutes = initialDuration / 60;

    setWpm(Math.round(wordsTyped / minutes));
    // Accuracy
    let correctChars = 0;
    paragraph.split('').forEach((char, index) => {
      if (input[index] === char) {
        correctChars++;
      }
    });

    const acc = input.length ? Math.round((correctChars / input.length) * 100) : 100;
    setAccuracy(acc);
  }, [isFinished]);

  /* reseting to start... */
  const resetGame = () => {
    generateParagraph(category);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    setIsGameActive(true);
    setTimeLeft(initialDuration);
    setInput('');
  };
  // all things goes to other from this return..
  return {
    pressedKey,
    input,
    timeLeft,
    isFinished,
    wpm,
    accuracy,
    paragraph,
    mode,
    setMode,
    category,
    generateParagraph,
    resetGame,
    isGameActive,
    setIsGameActive,
    reward,

    totalErrors,
    timeTaken,
    totalChars: paragraph.length,
  };
}
