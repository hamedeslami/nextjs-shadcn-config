import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialSeconds: number;
  setReset: (reset: boolean) => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds, setReset }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
    setReset(true);
  }, [seconds, setReset]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <p>{formatTime(seconds)}</p>;
};

export default CountdownTimer;