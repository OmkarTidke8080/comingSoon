import React, { useEffect, useState } from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className="flex justify-center items-center space-x-6 font-mono">
      <div>
        <p className="lg:text-8xl md:text-6xl text-lg ">{days}</p>
        <p className="text-sm lg:text-2xl md:text-xl">Days</p>
        <hr className=" border-purple-600 border-2" />
      </div>
      <div className="text-xl md:text-2xl lg:text-5xl">:</div>
      <div>
        <p className="lg:text-8xl md:text-6xl text-lg ">{hours}</p>
        <p className="text-sm lg:text-2xl md:text-xl">Hours</p>
        <hr className=" border-purple-600 border-2" />
      </div>
      <div className="text-xl md:text-2xl lg:text-5xl">:</div>
      <div>
        <p className="lg:text-8xl md:text-6xl text-lg ">{minutes}</p>
        <p className="text-sm lg:text-2xl md:text-xl">Minutes</p>
        <hr className=" border-purple-600 border-2" />
      </div>
      <div className="text-xl md:text-2xl lg:text-5xl">:</div>
      <div>
        <p className="lg:text-8xl md:text-6xl text-lg ">{seconds}</p>
        <p className="text-sm lg:text-2xl md:text-xl">Seconds</p>
        <hr className=" border-purple-600 border-2" />
      </div>
    </div>
  );
}

export default Timer;
