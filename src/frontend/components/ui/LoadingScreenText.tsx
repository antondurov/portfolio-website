import { useState, useEffect } from 'react';

function RotatingText() {
  const messages = [
    "Coding...",
    "Producing...",
    "Searching for a snare...",
    "Fixing bugs...",
    "EQing...",
    "Asking claude...",
    "Procrastinating...",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return <p>{messages[index]}</p>;
}

export default RotatingText;