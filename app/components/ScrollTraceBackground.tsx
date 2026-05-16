"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ScrollTraceBackground = () => {
  const { scrollYProgress } = useScroll();

  /*
    =========================
    TRACE SPEEDS
    =========================
  */

  // TOP TRACE
  const topTrace = useTransform(scrollYProgress, [0.08, 0.4], [0, 1]);

  // BOTTOM TRACE
  const bottomTrace = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  /*
    =========================
    BOTTOM OPACITY
    =========================
  */

  const bottomOpacity = useTransform(scrollYProgress, [0.4, 0.401], [0, 1]);

  /*
    =========================
    SPRINGS
    =========================
  */

  const smoothTop = useSpring(topTrace, {
    stiffness: 140,
    damping: 26,
  });

  const smoothBottom = useSpring(bottomTrace, {
    stiffness: 120,
    damping: 24,
  });

  const smoothBottomOpacity = useSpring(bottomOpacity, {
    stiffness: 120,
    damping: 24,
  });

  return (
    <div className="hidden xl:block absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <svg
        className="absolute top-[1930px] left-[70px] w-full opacity-90"
        viewBox="0 0 868 1996"
        fill="none"
      >
        {/* =========================
            BASE PATHS
        ========================= */}

        {/* TOP BASE */}
        <path
          d="M868.004 6.19732H75.5038C52.8372 4.53066 7.50383 12.6973 7.50383 58.6973C7.50383 104.697 7.50383 500.865 7.50383 693.199C4.83716 725.866 18.3038 791.199 93.5038 791.199C168.704 791.199 518.501 791.199 691.5 791.199"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* BOTTOM BASE */}
        <path
          d="M691.5 791.199C723 791.199 774 797.999 774 871.199C774 944.399 774 1218.37 774 1353.7C774.167 1382.03 760.9 1438.7 706.5 1438.7C652.1 1438.7 262.167 1438.7 74 1438.7C33 1438.7 6 1466.4 6 1511.2C6 1556 6 1972.2 6 1995.7"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* =========================
            ACTIVE TRACES
        ========================= */}

        {/* TOP TRACE */}
        <motion.path
          d="M868.004 6.19732H75.5038C52.8372 4.53066 7.50383 12.6973 7.50383 58.6973C7.50383 104.697 7.50383 500.865 7.50383 693.199C4.83716 725.866 18.3038 791.199 93.5038 791.199C168.704 791.199 518.501 791.199 691.5 791.199"
          stroke="url(#traceGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          style={{
            pathLength: smoothTop,
          }}
        />

        {/* BOTTOM TRACE */}
        <motion.path
          d="M691.5 791.199C723 791.199 774 797.999 774 871.199C774 944.399 774 1218.37 774 1353.7C774.167 1382.03 760.9 1438.7 706.5 1438.7C652.1 1438.7 262.167 1438.7 74 1438.7C33 1438.7 6 1466.4 6 1511.2C6 1556 6 1972.2 6 1995.7"
          stroke="url(#traceGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          style={{
            pathLength: smoothBottom,
            opacity: smoothBottomOpacity,
          }}
        />

        {/* =========================
            GRADIENT
        ========================= */}

        <defs>
          <linearGradient id="traceGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2156DB" />
            <stop offset="100%" stopColor="#0D1738" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollTraceBackground;
