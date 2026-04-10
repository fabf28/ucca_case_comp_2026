import type { FC } from "react";
import type { FarmLandscapeProps } from "../types";

const FarmLandscape: FC<FarmLandscapeProps> = ({ seed = 0 }) => {
  const id: string = `s${seed}`;
  const leftRows: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  const rightRows: number[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <svg
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8cfd8" />
          <stop offset="100%" stopColor="#d4bc78" />
        </linearGradient>
        <linearGradient id={`field${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8a848" />
          <stop offset="100%" stopColor="#7c4c18" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="600" height="220" fill={`url(#sky${id})`} />

      {/* Clouds */}
      <ellipse cx="120" cy="55" rx="70" ry="22" fill="rgba(255,255,255,0.18)" />
      <ellipse cx="160" cy="44" rx="55" ry="18" fill="rgba(255,255,255,0.14)" />
      <ellipse cx="450" cy="40" rx="80" ry="24" fill="rgba(255,255,255,0.16)" />

      {/* Tree line */}
      <rect x="0" y="120" width="600" height="20" fill="#3a5030" />
      <ellipse cx="40" cy="120" rx="25" ry="32" fill="#2e4225" />
      <ellipse cx="95" cy="118" rx="20" ry="28" fill="#3a5030" />
      <ellipse cx="160" cy="120" rx="22" ry="30" fill="#2e4225" />
      <ellipse cx="450" cy="119" rx="24" ry="32" fill="#3a5030" />
      <ellipse cx="520" cy="117" rx="20" ry="28" fill="#2e4225" />
      <ellipse cx="575" cy="120" rx="22" ry="30" fill="#3a5030" />

      {/* Field */}
      <path
        d="M0 135 Q150 122 300 138 Q450 154 600 138 L600 220 L0 220 Z"
        fill={`url(#field${id})`}
      />

      {/* Crop rows - left */}
      <g opacity="0.3" stroke="#6a3c10" strokeWidth="1">
        {leftRows.map((i: number) => (
          <line key={`l${i}`} x1="0" y1={150 + i * 9} x2="250" y2={160 + i * 9} />
        ))}
      </g>

      {/* Crop rows - right */}
      <g opacity="0.3" stroke="#6a3c10" strokeWidth="1">
        {rightRows.map((i: number) => (
          <line key={`r${i}`} x1="350" y1={148 + i * 9} x2="600" y2={155 + i * 9} />
        ))}
      </g>

      {/* Barn */}
      <rect x="270" y="98" width="50" height="38" fill="#3a2008" rx="1" />
      <polygon points="262,98 295,76 328,98" fill="#2e1a05" />
      <rect x="322" y="106" width="14" height="30" fill="#4a2c10" rx="1" />

      {/* Ground shadow */}
      <rect x="0" y="180" width="600" height="40" fill="rgba(26,12,3,0.35)" />
    </svg>
  );
};

export default FarmLandscape;
