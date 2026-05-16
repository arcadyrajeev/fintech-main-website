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
  const topTrace = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);

  // BOTTOM TRACE
  const bottomTrace = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  /*
    =========================
    BOTTOM OPACITY
    =========================
  */

  const bottomOpacity = useTransform(scrollYProgress, [0.35, 0.351], [0, 1]);

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
        className="absolute top-[1720px] left-[70px] w-full opacity-90"
        viewBox="0 0 1783 3692"
        fill="none"
      >
        {/* =========================
            BASE PATHS
        ========================= */}

        {/* TOP BASE */}
        <path
          d="M1782.5 15.9044H157.977C111.513 12.4887 18.5855 29.2255 18.5855 123.498C18.5855 217.77 18.5855 800.035 18.5855 1194.2C13.1192 1261.15 40.7242 1395.05 194.875 1395.05C349.025 1395.05 1066.07 1395.05 1420.69 1395.05"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* BOTTOM BASE */}
        <path
          d="M15.5009 3610C15.5009 3561.84 15.5 2664.81 15.5 2573C15.5 2481.18 70.8466 2424.42 154.891 2424.42C540.61 2424.42 1339.92 2424.42 1451.44 2424.42C1562.95 2424.42 1590.15 2308.28 1589.8 2250.22C1589.8 1972.87 1589.8 1709.01 1589.8 1559C1589.8 1408.98 1485.26 1395.05 1420.69 1395.05"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* =========================
            ACTIVE TRACES
        ========================= */}

        {/* TOP TRACE */}
        <motion.path
          d="M1782.5 15.9044H157.977C111.513 12.4887 18.5855 29.2255 18.5855 123.498C18.5855 217.77 18.5855 800.035 18.5855 1194.2C13.1192 1261.15 40.7242 1395.05 194.875 1395.05C349.025 1395.05 1066.07 1395.05 1420.69 1395.05"
          stroke="url(#traceGradient)"
          strokeWidth="24"
          strokeLinecap="round"
          style={{
            pathLength: smoothTop,
          }}
        />

        {/* BOTTOM TRACE */}
        <motion.path
          d="M1420.69 1395.05C1485.26 1395.05 1589.8 1408.98 1589.8 1559C1589.8 1709.01 1589.8 1972.87 1589.8 2250.22C1590.15 2308.28 1562.95 2424.42 1451.44 2424.42C1339.92 2424.42 540.61 2424.42 154.891 2424.42C70.8466 2424.42 15.5 2481.18 15.5 2573C15.5 2664.81 15.5009 3561.84 15.5009 3610"
          stroke="url(#traceGradient)"
          strokeWidth="24"
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

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="1783" height="3610" viewBox="0 0 1783 3610" fill="none">
<path d="M1420.69 1395.05C1066.07 1395.05 349.025 1395.05 194.875 1395.05C40.7242 1395.05 13.1192 1261.15 18.5855 1194.2C18.5855 800.035 18.5855 217.77 18.5855 123.498C18.5855 29.2255 111.513 12.4887 157.977 15.9044H1782.5" stroke="url(#paint0_linear_1494_58)" stroke-width="31"/>
<path d="M15.5009 3610C15.5009 3561.84 15.5 2664.81 15.5 2573C15.5 2481.18 70.8466 2424.42 154.891 2424.42C540.61 2424.42 1339.92 2424.42 1451.44 2424.42C1562.95 2424.42 1590.15 2308.28 1589.8 2250.22C1589.8 1972.87 1589.8 1709.01 1589.8 1559C1589.8 1408.98 1485.26 1395.05 1420.69 1395.05" stroke="url(#paint1_linear_1494_58)" stroke-width="31"/>
<defs> */
}
