import type { FC } from "react";

const HeroLandscape: FC = () => {
  const treeXs: number[] = [50, 120, 200, 290, 370, 450, 800, 870, 960, 1060, 1160, 1270, 1380];
  const fenceXs: number[] = [430, 480, 530, 580, 630, 680, 730, 780, 830, 880];
  const leftRows: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const rightRows: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <svg
      className="hero-svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9bbccc" />
          <stop offset="100%" stopColor="#d4b870" />
        </linearGradient>
        <linearGradient id="hField" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8a848" />
          <stop offset="100%" stopColor="#7c4010" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#hSky)" />

      {/* Clouds */}
      <ellipse cx="180" cy="130" rx="110" ry="36" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="250" cy="112" rx="85" ry="28" fill="rgba(255,255,255,0.16)" />
      <ellipse cx="920" cy="95" rx="130" ry="40" fill="rgba(255,255,255,0.18)" />
      <ellipse cx="1010" cy="78" rx="95" ry="30" fill="rgba(255,255,255,0.14)" />
      <ellipse cx="1300" cy="150" rx="115" ry="34" fill="rgba(255,255,255,0.16)" />

      {/* Tree line base */}
      <rect x="0" y="380" width="1440" height="60" fill="#2e4225" />

      {/* Individual trees */}
      {treeXs.map((x: number, i: number) => (
        <ellipse
          key={i}
          cx={x}
          cy={375 + (i % 3) * 5}
          rx={30 + (i % 4) * 6}
          ry={40 + (i % 3) * 8}
          fill={i % 2 === 0 ? "#283820" : "#344a28"}
        />
      ))}

      {/* Field */}
      <path
        d="M0 430 Q360 405 720 445 Q1080 485 1440 438 L1440 900 L0 900 Z"
        fill="url(#hField)"
      />

      {/* Crop rows - left field */}
      <g opacity="0.28" stroke="#6a3c10" strokeWidth="1.5">
        {leftRows.map((i: number) => (
          <line key={`ll${i}`} x1="0" y1={490 + i * 20} x2="480" y2={505 + i * 20} />
        ))}
      </g>

      {/* Crop rows - right field */}
      <g opacity="0.28" stroke="#6a3c10" strokeWidth="1.5">
        {rightRows.map((i: number) => (
          <line key={`rl${i}`} x1="960" y1={475 + i * 20} x2="1440" y2={490 + i * 20} />
        ))}
      </g>

      {/* Barn complex */}
      <g transform="translate(1060,338)">
        <rect x="0" y="58" width="110" height="85" fill="#3c2408" rx="1" />
        <polygon points="-8,58 55,12 118,58" fill="#2c1805" />
        <rect x="40" y="100" width="30" height="43" fill="#221004" rx="1" />
        <rect x="113" y="68" width="26" height="75" fill="#4a2c10" rx="1" />
        <ellipse cx="126" cy="68" rx="13" ry="5" fill="#3c2408" />
      </g>

      {/* Fence */}
      <g stroke="#5a3418" strokeWidth="1.8" opacity="0.4">
        {fenceXs.map((x: number, i: number) => (
          <line key={i} x1={x} y1={460 + i * 0.5} x2={x} y2={488 + i * 0.5} />
        ))}
        <path d="M430 472 Q655 465 880 478" fill="none" />
        <path d="M430 483 Q655 476 880 489" fill="none" />
      </g>

      {/* Horizon glow */}
      <ellipse cx="720" cy="420" rx="360" ry="55" fill="rgba(255,200,80,0.08)" />

      {/* Ground shadow */}
      <rect x="0" y="680" width="1440" height="220" fill="rgba(30,12,3,0.45)" />
    </svg>
  );
};

export default HeroLandscape;
