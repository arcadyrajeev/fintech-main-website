type IconType =
  | "database"
  | "users"
  | "message"
  | "chart"
  | "workflow"
  | "layers";

const inputs: {
  title: string;
  detail: string;
  y: number;
  icon: IconType;
}[] = [
  {
    title: "Data systems",
    detail: "Scattered information",
    y: 100,
    icon: "database",
  },
  {
    title: "User management",
    detail: "Roles and permissions",
    y: 205,
    icon: "users",
  },
  {
    title: "Communication",
    detail: "Disconnected channels",
    y: 310,
    icon: "message",
  },
  { title: "Analytics", detail: "Siloed reporting", y: 415, icon: "chart" },
  {
    title: "Multiple workflows",
    detail: "Overlapping processes",
    y: 520,
    icon: "workflow",
  },
];

const outputs: {
  title: string;
  detail: string;
  y: number;
  icon: IconType;
}[] = [
  {
    title: "Role-based system",
    detail: "Clear access and permissions",
    y: 125,
    icon: "users",
  },
  {
    title: "Centralized data",
    detail: "One source of truth",
    y: 255,
    icon: "database",
  },
  {
    title: "Integrated workflows",
    detail: "Connected operations",
    y: 385,
    icon: "workflow",
  },
  {
    title: "Unified experience",
    detail: "Simpler product interactions",
    y: 515,
    icon: "layers",
  },
];

function ArchitectureIcon({
  type,
  x,
  y,
  color = "#D7E4F1",
}: {
  type: IconType;
  x: number;
  y: number;
  color?: string;
}) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "database" && (
        <>
          <ellipse cx="12" cy="5" rx="10" ry="4" />
          <path d="M2 5v14c0 5 20 5 20 0V5" />
          <path d="M2 12c0 5 20 5 20 0" />
        </>
      )}

      {type === "users" && (
        <>
          <circle cx="9" cy="7" r="4" />
          <path d="M1 21v-2a8 8 0 0 1 16 0v2" />
          <path d="M17 4a4 4 0 0 1 0 8M20 14a7 7 0 0 1 3 6" />
        </>
      )}

      {type === "message" && (
        <>
          <path d="M3 4h18v13H11l-6 4v-4H3z" />
          <path d="M7 9h10M7 13h7" />
        </>
      )}

      {type === "chart" && (
        <>
          <path d="M3 21V12h5v9M10 21V5h5v16M17 21V2h5v19" />
        </>
      )}

      {type === "workflow" && (
        <>
          <rect x="1" y="2" width="8" height="7" rx="2" />
          <rect x="15" y="2" width="8" height="7" rx="2" />
          <rect x="8" y="16" width="8" height="7" rx="2" />
          <path d="M5 9v3h14V9M12 12v4" />
        </>
      )}

      {type === "layers" && (
        <>
          <path d="m12 2 10 5-10 5L2 7z" />
          <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
        </>
      )}
    </g>
  );
}

export default function ArchitectureAnimation() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fragmented product systems converging into a unified operational platform"
    >
      <defs>
        {/* Background */}
        <linearGradient id="backgroundGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F5F9FE" />
          <stop offset="100%" stopColor="#EAF3FC" />
        </linearGradient>

        <pattern
          id="architectureGrid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.8" fill="#C9DDF1" />
        </pattern>

        {/* Input cards */}
        <linearGradient id="inputGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B3047" />
          <stop offset="100%" stopColor="#0C1929" />
        </linearGradient>

        {/* Central hub */}
        <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#318EE8" />
          <stop offset="45%" stopColor="#1769B2" />
          <stop offset="100%" stopColor="#073B82" />
        </linearGradient>

        {/* Connection lines */}
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1769B2" />
          <stop offset="50%" stopColor="#49A8F5" />
          <stop offset="100%" stopColor="#1056A4" />
        </linearGradient>

        {/* Output cards */}
        <linearGradient id="outputGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F2F8FF" />
        </linearGradient>

        {/* Cube surfaces */}
        <linearGradient id="cubeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B9DEFF" stopOpacity="0.12" />
        </linearGradient>

        <filter id="coreShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="14" />
          <feOffset dy="8" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="lineGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <style>{`
        .connector {
          fill: none;
          stroke: url(#lineGradient);
          stroke-width: 4.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: drawLine 2s cubic-bezier(.65,0,.35,1) forwards;
        }

        .connector-glow {
        fill: none;
        stroke: #2D91EA;
        stroke-width: 11;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0;
        filter: url(#lineGlow);
        animation: revealGlow 0.7s ease-out forwards;
        }

        @keyframes revealGlow {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.4;
        }
        }

        .input-card,
        .output-card,
        .core {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: reveal 0.7s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .core {
          animation-delay: 1.7s;
        }

        .core-glow {
          opacity: 0;
          animation: glowIn 1.2s ease forwards;
          animation-delay: 1.9s;
        }

        .core-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: pulse 4s ease-in-out infinite;
          animation-delay: 3s;
        }

        .flow-dot {
          fill: #FFFFFF;
          stroke: #1769B2;
          stroke-width: 3;
          opacity: 0;
          animation: revealDot .4s ease forwards;
        }

        .cube {
          transform-box: fill-box;
          transform-origin: center;
          animation: cubeFloat 4s ease-in-out infinite;
          animation-delay: 3s;
        }

        .output-icon-bg {
          fill: #E7F2FE;
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(14px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes revealDot {
          to { opacity: 1; }
        }

        @keyframes glowIn {
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: .3;
            transform: scale(1);
          }
          50% {
            opacity: .8;
            transform: scale(1.025);
          }
        }

        @keyframes cubeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .connector,
          .input-card,
          .output-card,
          .core,
          .core-glow,
          .core-pulse,
          .flow-dot,
          .cube {
            animation: none;
            opacity: 1;
            stroke-dashoffset: 0;
            transform: none;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <rect width="1200" height="700" fill="url(#backgroundGradient)" />
      <rect width="1200" height="700" fill="url(#architectureGrid)" />

      {/* SECTION LABELS */}
      <g
        fontFamily="Arial, sans-serif"
        fill="#315577"
        fontSize="15"
        fontWeight="700"
        letterSpacing="2"
      >
        <text x="40" y="42">
          FRAGMENTED INPUTS
        </text>
        <text x="480" y="42">
          TRANSFORMATION
        </text>
        <text x="900" y="42">
          UNIFIED OUTPUT
        </text>
      </g>

      <g fontFamily="Arial, sans-serif" fill="#8299B2" fontSize="12">
        <text x="40" y="64">
          Multiple systems. Disconnected experiences.
        </text>
        <text x="480" y="64">
          Architecture · UX · Integration · Development
        </text>
        <text x="900" y="64">
          Simpler operations. Better outcomes.
        </text>
      </g>

      {/* INPUT CONNECTIONS */}
      {inputs.map((item, index) => (
        <g key={`input-line-${index}`}>
          <path
            className="connector"
            style={{ animationDelay: `${0.7 + index * 0.15}s` }}
            d={`M270 ${item.y + 32} C365 ${item.y + 32}, 390 350, 470 350`}
          />
          <circle
            className="flow-dot"
            cx="270"
            cy={item.y + 32}
            r="6"
            style={{ animationDelay: `${1.2 + index * 0.15}s` }}
          />
        </g>
      ))}

      {/* OUTPUT CONNECTIONS */}
      {outputs.map((item, index) => (
        <g key={`output-line-${index}`}>
          <path
            className="connector"
            style={{ animationDelay: `${2.2 + index * 0.15}s` }}
            d={`M730 350 C805 350, 820 ${item.y + 32}, 900 ${item.y + 32}`}
          />
          <circle
            className="flow-dot"
            cx="900"
            cy={item.y + 32}
            r="6"
            style={{ animationDelay: `${3 + index * 0.15}s` }}
          />
        </g>
      ))}

      {/* INPUT CARDS */}
      {inputs.map((item, index) => (
        <g
          key={item.title}
          className="input-card"
          style={{ animationDelay: `${0.1 + index * 0.15}s` }}
        >
          <rect
            x="40"
            y={item.y}
            width="230"
            height="65"
            rx="12"
            fill="url(#inputGradient)"
            stroke="#344F6B"
            strokeWidth="1.5"
          />

          <rect
            x="52"
            y={item.y + 10}
            width="44"
            height="44"
            rx="10"
            fill="#FFFFFF"
            fillOpacity="0.08"
          />

          <ArchitectureIcon
            type={item.icon}
            x={63}
            y={item.y + 20}
            color="#D7E4F1"
          />

          <text
            x="108"
            y={item.y + 29}
            fill="#F8FAFC"
            fontSize="16"
            fontWeight="600"
          >
            {item.title}
          </text>

          <text x="108" y={item.y + 49} fill="#AFC1D5" fontSize="12">
            {item.detail}
          </text>
        </g>
      ))}

      {/* CENTRAL SYSTEM */}
      <g className="core">
        {/* Outer animated halo */}
        <rect
          className="core-pulse"
          x="458"
          y="238"
          width="284"
          height="224"
          rx="30"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="2.5"
        />

        {/* Secondary border */}
        <rect
          x="448"
          y="228"
          width="304"
          height="244"
          rx="34"
          fill="none"
          stroke="#BFDBFE"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Central white surface */}
        <rect
          x="470"
          y="250"
          width="260"
          height="200"
          rx="24"
          fill="#FFFFFF"
          stroke="#B5D5F1"
          strokeWidth="1.5"
        />

        {/* Cube SVG from public folder */}
        <image
          href="/images/icons/cube-geometry.svg"
          x="560"
          y="275"
          width="80"
          height="80"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Main title */}
        <text
          x="600"
          y="390"
          fill="#14283E"
          fontSize="25"
          fontWeight="700"
          textAnchor="middle"
        >
          Unified Product
        </text>

        {/* Supporting text */}
        <text x="600" y="418" fill="#71859D" fontSize="15" textAnchor="middle">
          One coherent system
        </text>

        {/* Subtle divider */}
        <rect x="530" y="434" width="140" height="1" fill="#DCE8F5" />
      </g>

      {/* OUTPUT CARDS */}
      {outputs.map((item, index) => (
        <g
          key={item.title}
          className="output-card"
          style={{ animationDelay: `${2.5 + index * 0.2}s` }}
        >
          <rect
            x="900"
            y={item.y}
            width="260"
            height="65"
            rx="12"
            fill="url(#outputGradient)"
            stroke="#C5DDF5"
            strokeWidth="1.5"
          />

          <rect
            className="output-icon-bg"
            x="912"
            y={item.y + 10}
            width="44"
            height="44"
            rx="10"
          />

          <ArchitectureIcon
            type={item.icon}
            x={923}
            y={item.y + 20}
            color="#1769B2"
          />

          <text
            x="970"
            y={item.y + 29}
            fill="#14283E"
            fontSize="16"
            fontWeight="600"
          >
            {item.title}
          </text>

          <text x="970" y={item.y + 49} fill="#71859D" fontSize="12">
            {item.detail}
          </text>

          <circle
            cx="1135"
            cy={item.y + 32}
            r="11"
            fill="#FFFFFF"
            stroke="#C5DDF5"
          />

          <path
            d={`M1133 ${item.y + 28} L1137 ${item.y + 32} L1133 ${item.y + 36}`}
            fill="none"
            stroke="#1769B2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}
