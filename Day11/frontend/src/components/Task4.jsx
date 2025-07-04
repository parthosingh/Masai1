// Stopwatch.jsx
import React, { useEffect, useState } from "react";

// Optional: Free sound URL (you can replace with your own)
const BEEP_SOUND_URL = "https://www.soundjay.com/button/sounds/beep-07.mp3";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // useEffect to start/stop interval
  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup
    return () => clearInterval(interval);
  }, [running]);

  // useEffect to detect when 10 seconds are reached
  useEffect(() => {
    if (seconds === 10) {
      const audio = new Audio(BEEP_SOUND_URL);
      audio.play().catch(() => {
        console.log("⏰ Reached 10 seconds!");
      });
    }
  }, [seconds]);

  // Reset function (optional)
  const reset = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div style={containerStyle}>
      <h2>⏱ Stopwatch</h2>
      <p style={{ fontSize: "2rem" }}>{seconds} seconds</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

// Simple styles
const containerStyle = {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "Arial",
};

export default Stopwatch;
