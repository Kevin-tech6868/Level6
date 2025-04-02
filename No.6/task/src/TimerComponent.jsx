import { useEffect } from "react";

const TimerComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Logging message every second");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cleanup: Timer cleared");
    };
  }, []);

  return <div>Check the console for messages!</div>;
};

export default TimerComponent;