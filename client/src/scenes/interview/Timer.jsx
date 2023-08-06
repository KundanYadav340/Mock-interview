import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer({duration, id, next}) {
    const [timing, setTiming] = useState(0);
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ timing, onExpire: () => {next(duration)} });
    useEffect(()=>{
        const time = new Date();
        // setTiming(time.setSeconds(time.getSeconds() + (duration)));
        restart(time.setSeconds(time.getSeconds() + duration));
        console.log("t",timing)
    },[duration, id])
    
  return (
    <div style={{textAlign: 'center'}}>
      {/* <h1>react-timer-hook </h1>
      <p>Timer Demo</p> */}
      <div style={{fontSize:'16px',width:"120px"}}>
        {/* <span>{days}</span>:<span>{hours} */}
        {/* </span>: */}
        <span>{minutes} min {seconds} sec</span>
        {/* {totalSeconds} */}
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}