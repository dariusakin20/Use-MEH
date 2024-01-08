import React, { useState, useEffect } from 'react';

export const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {

    let timer;

    if (timerRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerRunning]);


  const startTimer = () => {
    setTimerRunning(true);
  }

  const pauseTimer = () => {
    setTimerRunning((prevIsRunning) => !prevIsRunning);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setSeconds(0);
    setMinutes(0);
  }

  return (
    <div>
    
    <button onClick={startTimer}>Pomodoro</button>
    <button onClick={startTimer}>Short Break</button>
    <button onClick={startTimer}>Long Break</button>
    <h1>
      {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
    </h1>
    <button onClick={startTimer}>Start</button>
     <button onClick={pauseTimer}>{timerRunning ? 'Break Time' : 'Work Time'}</button>
    <button onClick={stopTimer}>Reset</button>
    </div>
  );
};
