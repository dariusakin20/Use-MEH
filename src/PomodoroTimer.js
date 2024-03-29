import React, { useState, useEffect } from 'react';

export const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isWorkTime, setWorkTime] = useState(false);
  const [isBreakTime, setBreakTime] = useState(false);
  const [workCount, setWorkCount] = useState(0);
  const [breakCount, setBreakCount] = useState(0);

  useEffect(() => {
    let timer;

    if (timerRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 1 && isWorkTime) {
                setWorkTime(false);
                setBreakTime(true);
                alert("BREAK TIME!");
                setWorkCount(workCount + 1)
                return 0;
              } else if (prevMinutes === 1 && isBreakTime) {
                setWorkTime(true);
                setBreakTime(false);
                alert("WORK TIME!");
                setBreakCount(breakCount + 1)
                return 0;
              } else {
                return prevMinutes + 1;
              }
            });
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerRunning, isWorkTime, isBreakTime]);

  const WorkTimerTrue = () => {
    setWorkTime(true);
    setBreakTime(false);
    setMinutes(0);
    setSeconds(0);
  };

  const BreakTimerTrue = () => {
    setWorkTime(false);
    setBreakTime(true);
    setMinutes(0);
    setSeconds(0);
  };

  const startTimer = () => {
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning((prevIsRunning) => !prevIsRunning);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div>
      <button onClick={WorkTimerTrue} className='buttons'>Work Time</button>
      <button onClick={BreakTimerTrue} className='buttonsRed'>Break Time</button>

      <h1>
        {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
      </h1>
      <button className='buttons' onClick={startTimer}>Start</button>
      <button className='buttons' onClick={pauseTimer}>{timerRunning ? 'Pause' : 'Resume'}</button>
      <button className='buttons' onClick={stopTimer}>Reset</button>


      <div>
        <p>Working Sessions: {workCount}</p>
        <p>Breaking Sessions: {breakCount}</p>
      </div>
    </div>
  );
};
