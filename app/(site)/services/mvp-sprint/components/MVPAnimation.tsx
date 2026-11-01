type StageItem = {
  title: string;
  detail: string;
  y: number;
};

const inputs: StageItem[] = [
  { title: "User problem", detail: "What needs to be solved", y: 150 },
  { title: "Product idea", detail: "The initial concept", y: 250 },
  { title: "Core features", detail: "What matters first", y: 350 },
  { title: "User needs", detail: "Who we're building for", y: 450 },
];

const outputs: StageItem[] = [
  { title: "Interactive prototype", detail: "Test the experience", y: 150 },
  { title: "Core functionality", detail: "Build what matters", y: 280 },
  { title: "Launch-ready product", detail: "Ready for real users", y: 410 },
];

function InputIcon({ index }: { index: number }) {
  return (
    <g
      fill="none"
      stroke="#D9E9F8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {index === 0 && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v5l3 2" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="9" />
        </>
      )}
      {index === 2 && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="m8 12 3 3 5-6" />
        </>
      )}
      {index === 3 && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </>
      )}
    </g>
  );
}

function OutputIcon({ index }: { index: number }) {
  return (
    <g
      fill="none"
      stroke="#1769B2"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {index === 0 && (
        <>
          <rect x="2" y="3" width="20" height="15" rx="2" />
          <path d="M8 21h8M12 18v3M7 8h10M7 12h6" />
        </>
      )}
      {index === 1 && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 8h10M7 12h10M7 16h6" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M5 19V9l7-5 7 5v10" />
          <path d="M2 19h20M9 19v-5h6v5" />
        </>
      )}
    </g>
  );
}

export default function MVPAnimation() {
  return (
    <svg
      viewBox="0 0 1200 650"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="An MVP journey from user problems and product ideas through design and development to a launch-ready product"
    >
      <defs>
        <linearGradient id="mvpBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F5F9FE" />
          <stop offset="100%" stopColor="#EAF3FC" />
        </linearGradient>

        <pattern
          id="mvpGrid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.8" fill="#C9DDF1" />
        </pattern>

        <linearGradient id="mvpInput" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#203B58" />
          <stop offset="100%" stopColor="#0D1D30" />
        </linearGradient>

        <linearGradient id="mvpCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>

        <linearGradient id="mvpLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1769B2" />
          <stop offset="50%" stopColor="#45A8F4" />
          <stop offset="100%" stopColor="#1769B2" />
        </linearGradient>

        <linearGradient id="mvpAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#39B7F5" />
          <stop offset="100%" stopColor="#174BBE" />
        </linearGradient>

        <filter id="mvpShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
          <feOffset dy="7" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.13" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="mvpGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <style>{`
        .mvp-input,
        .mvp-output,
        .mvp-core {
          opacity: 0;
          animation: mvpReveal .8s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .mvp-input:nth-of-type(1) { animation-delay: .2s; }
        .mvp-input:nth-of-type(2) { animation-delay: .4s; }
        .mvp-input:nth-of-type(3) { animation-delay: .6s; }
        .mvp-input:nth-of-type(4) { animation-delay: .8s; }

        .mvp-core {
          animation-delay: 1.3s;
        }

        .mvp-output:nth-of-type(1) { animation-delay: 2.1s; }
        .mvp-output:nth-of-type(2) { animation-delay: 2.4s; }
        .mvp-output:nth-of-type(3) { animation-delay: 2.7s; }

        .mvp-path {
          fill: none;
          stroke: url(#mvpLine);
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: mvpDraw 1.8s cubic-bezier(.65,0,.35,1) forwards;
        }

        .mvp-path-left-1 { animation-delay: .8s; }
        .mvp-path-left-2 { animation-delay: 1s; }
        .mvp-path-left-3 { animation-delay: 1.2s; }
        .mvp-path-left-4 { animation-delay: 1.4s; }

        .mvp-path-right-1 { animation-delay: 2s; }
        .mvp-path-right-2 { animation-delay: 2.2s; }
        .mvp-path-right-3 { animation-delay: 2.4s; }

        .mvp-flow {
          opacity: 0;
          animation: mvpFlow 2.4s ease-in-out infinite;
        }

        .mvp-core-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: mvpPulse 4s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        .mvp-screen {
          animation: mvpScreen 5s ease-in-out infinite;
          animation-delay: 2.8s;
        }

        .mvp-progress {
          transform-origin: left;
          animation: mvpProgress 2.5s ease-out forwards;
          animation-delay: 2.7s;
        }

        @keyframes mvpReveal {
          from {
            opacity: 0;
            transform: translateY(16px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mvpDraw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes mvpFlow {
          0% { opacity: 0; transform: scale(.6); }
          30% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.2); }
        }

        @keyframes mvpPulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.025); }
        }

        @keyframes mvpScreen {
          0%, 100% { opacity: .65; }
          50% { opacity: 1; }
        }

        @keyframes mvpProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mvp-input,
          .mvp-output,
          .mvp-core,
          .mvp-path,
          .mvp-flow,
          .mvp-core-glow,
          .mvp-screen,
          .mvp-progress {
            animation: none !important;
            opacity: 1;
            transform: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <rect width="1200" height="650" fill="url(#mvpBg)" />
      <rect width="1200" height="650" fill="url(#mvpGrid)" />

      {/* SECTION LABELS */}
      <g
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="2"
        fill="#315577"
      >
        <text x="40" y="45">
          PRODUCT DISCOVERY
        </text>
        <text x="465" y="45">
          DESIGN & PROTOTYPING
        </text>
        <text x="920" y="45">
          DEVELOPMENT & LAUNCH
        </text>
      </g>

      <g fontFamily="Arial, sans-serif" fontSize="12" fill="#8299B2">
        <text x="40" y="67">
          Start with the right questions
        </text>
        <text x="465" y="67">
          Shape the product experience
        </text>
        <text x="920" y="67">
          Build the first working version
        </text>
      </g>

      {/* CONNECTOR LINES */}
      {inputs.map((item, index) => (
        <path
          key={`left-${item.title}`}
          className={`mvp-path mvp-path-left-${index + 1}`}
          d={`M270 ${item.y + 32} C360 ${item.y + 32}, 370 325, 445 325`}
        />
      ))}

      {outputs.map((item, index) => (
        <path
          key={`right-${item.title}`}
          className={`mvp-path mvp-path-right-${index + 1}`}
          d={`M755 325 C825 325, 825 ${item.y + 32}, 900 ${item.y + 32}`}
        />
      ))}

      {/* FLOWING PARTICLES */}
      {inputs.map((item, index) => (
        <circle
          key={`input-flow-${index}`}
          className="mvp-flow"
          r="6"
          fill="#FFFFFF"
          stroke="#1769B2"
          strokeWidth="3"
          style={{ animationDelay: `${1.5 + index * 0.3}s` }}
        >
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            begin={`${1.5 + index * 0.3}s`}
            path={`M270 ${item.y + 32} C360 ${item.y + 32}, 370 325, 445 325`}
          />
        </circle>
      ))}

      {outputs.map((item, index) => (
        <circle
          key={`output-flow-${index}`}
          className="mvp-flow"
          r="6"
          fill="#FFFFFF"
          stroke="#1769B2"
          strokeWidth="3"
        >
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            begin={`${2.8 + index * 0.3}s`}
            path={`M755 325 C825 325, 825 ${item.y + 32}, 900 ${item.y + 32}`}
          />
        </circle>
      ))}

      {/* INPUT CARDS */}
      {inputs.map((item, index) => (
        <g key={item.title} className="mvp-input">
          <rect
            x="40"
            y={item.y}
            width="230"
            height="65"
            rx="12"
            fill="url(#mvpInput)"
            stroke="#344F6B"
            strokeWidth="1.4"
          />

          <rect
            x="52"
            y={item.y + 10}
            width="44"
            height="44"
            rx="10"
            fill="#FFFFFF"
            fillOpacity=".08"
          />

          <g transform={`translate(62 ${item.y + 20})`}>
            <InputIcon index={index} />
          </g>

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

      {/* CENTRAL DESIGN / PROTOTYPE PANEL */}
      <g className="mvp-core" filter="url(#mvpShadow)">
        <rect
          className="mvp-core-glow"
          x="423"
          y="175"
          width="354"
          height="300"
          rx="28"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="3"
        />

        <rect
          x="435"
          y="187"
          width="330"
          height="276"
          rx="22"
          fill="url(#mvpCore)"
          stroke="#B5D5F1"
          strokeWidth="1.6"
        />

        {/* Window bar */}
        <rect x="435" y="187" width="330" height="38" rx="22" fill="#EDF5FD" />
        <path d="M435 225h330" stroke="#D9E7F5" />

        <circle cx="456" cy="206" r="4" fill="#F59E0B" />
        <circle cx="470" cy="206" r="4" fill="#60A5FA" />
        <circle cx="484" cy="206" r="4" fill="#94A3B8" />

        <text
          x="600"
          y="210"
          fontSize="11"
          textAnchor="middle"
          fill="#71859D"
          fontWeight="600"
        >
          PRODUCT PREVIEW
        </text>

        {/* Sidebar */}
        <rect x="451" y="241" width="70" height="203" rx="8" fill="#EAF2FA" />

        <rect x="462" y="256" width="45" height="7" rx="3" fill="#1769B2" />
        <rect x="462" y="278" width="37" height="5" rx="2" fill="#A6BCD2" />
        <rect x="462" y="294" width="42" height="5" rx="2" fill="#A6BCD2" />
        <rect x="462" y="310" width="32" height="5" rx="2" fill="#A6BCD2" />
        <rect x="462" y="342" width="42" height="5" rx="2" fill="#A6BCD2" />
        <rect x="462" y="358" width="35" height="5" rx="2" fill="#A6BCD2" />

        {/* Main dashboard */}
        <g className="mvp-screen">
          <text x="540" y="257" fill="#26384F" fontSize="12" fontWeight="700">
            Dashboard overview
          </text>

          <rect
            x="539"
            y="270"
            width="205"
            height="60"
            rx="8"
            fill="#FFFFFF"
            stroke="#DCE8F5"
          />

          <text x="551" y="288" fill="#8BA0B5" fontSize="9">
            PRODUCT ACTIVITY
          </text>
          <text x="551" y="313" fill="#1769B2" fontSize="21" fontWeight="700">
            1,284
          </text>

          <path
            d="M650 313 L668 300 L682 306 L699 287 L715 292 L732 278"
            fill="none"
            stroke="#2695E8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <rect
            x="539"
            y="341"
            width="97"
            height="80"
            rx="8"
            fill="#FFFFFF"
            stroke="#DCE8F5"
          />

          <rect
            x="646"
            y="341"
            width="98"
            height="80"
            rx="8"
            fill="#FFFFFF"
            stroke="#DCE8F5"
          />

          <text x="550" y="358" fill="#8BA0B5" fontSize="8">
            TASKS
          </text>
          <rect x="550" y="370" width="67" height="6" rx="3" fill="#DCE8F5" />
          <rect x="550" y="370" width="48" height="6" rx="3" fill="#2695E8" />
          <rect x="550" y="386" width="57" height="5" rx="2" fill="#E7EEF6" />
          <rect x="550" y="399" width="47" height="5" rx="2" fill="#E7EEF6" />

          <text x="657" y="358" fill="#8BA0B5" fontSize="8">
            COMPLETION
          </text>
          <circle
            cx="695"
            cy="389"
            r="17"
            fill="none"
            stroke="#DCE8F5"
            strokeWidth="5"
          />
          <circle
            cx="695"
            cy="389"
            r="17"
            fill="none"
            stroke="#2695E8"
            strokeWidth="5"
            strokeDasharray="80 107"
            strokeLinecap="round"
            transform="rotate(-90 695 389)"
          />
        </g>
      </g>

      {/* OUTPUT CARDS */}
      {outputs.map((item, index) => (
        <g key={item.title} className="mvp-output">
          <rect
            x="900"
            y={item.y}
            width="260"
            height="65"
            rx="12"
            fill="#FFFFFF"
            stroke="#C5DDF5"
            strokeWidth="1.5"
          />

          <rect
            x="912"
            y={item.y + 10}
            width="44"
            height="44"
            rx="10"
            fill="#E7F2FE"
          />

          <g transform={`translate(922 ${item.y + 20})`}>
            <OutputIcon index={index} />
          </g>

          <text
            x="970"
            y={item.y + 29}
            fill="#14283E"
            fontSize="15"
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
            r="10"
            fill="#F0F7FF"
            stroke="#C5DDF5"
          />

          <path
            d={`M1131 ${item.y + 32}l3 3 5-6`}
            fill="none"
            stroke="#1769B2"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* BOTTOM PROGRESS LINE */}
      <rect x="40" y="590" width="1120" height="3" rx="2" fill="#DCE8F5" />
      <rect
        className="mvp-progress"
        x="40"
        y="590"
        width="1120"
        height="3"
        rx="2"
        fill="url(#mvpAccent)"
      />

      <g
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#54718E"
      >
        <text x="40" y="620">
          IDEA
        </text>
        <text x="600" y="620" textAnchor="middle">
          PRODUCT
        </text>
        <text x="1160" y="620" textAnchor="end">
          LAUNCH
        </text>
      </g>
    </svg>
  );
}
