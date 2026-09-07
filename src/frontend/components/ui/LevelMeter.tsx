import { useEffect, useMemo, useState } from "react";

function Wavetable({ seed = 1 }: { seed?: number }) {
  const [phase, setPhase] = useState(0);

  // Generate a deterministic wavetable
  const waveform = useMemo(() => {
    const points = 3000;

    return Array.from({ length: points }, (_, i) => {
      const t = i / (points - 1);

      // Several harmonics combined to create a more interesting waveform
      const fundamental = Math.sin(t * Math.PI * 3 + seed);
      const harmonic2 = Math.sin(t * Math.PI * 4 + seed * 1.7) * 0.35;
      const harmonic3 = Math.sin(t * Math.PI * 6 + seed * 2.3) * 0.15;

      return fundamental + harmonic2 + harmonic3;
    });
  }, [seed]);

  // Subtle movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => prev + 0.08);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const width = 1800;
  const height = 200;
  const center = height / 2;
  const amplitude = 40;

  const path = waveform
    .map((value, i) => {
      const x = (i / (waveform.length - 1)) * width;

      const animatedValue =
        value * Math.cos(phase + i * 0.015) * 0.15 + value * 0.85;

      const y = center - animatedValue * amplitude;

      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div
      className="my-10 h-24 w-full opacity-80 sm:my-14"
      role="img"
      aria-label="Wavetable waveform"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Center line */}
        <line
          x1="0"
          y1={center}
          x2={width}
          y2={center}
          stroke="var(--accent-dim)"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Waveform */}
        <path
          d={path}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Glow */}
        <path
          d={path}
          fill="none"
          stroke="var(--accent-2)"
          strokeWidth="1"
          opacity="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default Wavetable;
