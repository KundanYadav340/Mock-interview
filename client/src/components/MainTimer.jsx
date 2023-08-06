import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function MainTimer({ duration, finalSubmit }) {
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
  } = useTimer({
    timing,
    onExpire: () => {
      finalSubmit();
    },
  });
  useEffect(() => {
    const time = new Date();
    // setTiming(time.setSeconds(time.getSeconds() + (duration)));
    restart(time.setSeconds(time.getSeconds() + duration));
    console.log("t", timing);
  }, [duration]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "16px", width: "120px" }}>
        <span>
          {hours}h {minutes}m {seconds}s
        </span>
      </div>
    </div>
  );
}
