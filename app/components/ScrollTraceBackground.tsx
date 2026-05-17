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
  const topTrace = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

  // BOTTOM TRACE
  const bottomTrace = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);

  /*
    =========================
    BOTTOM OPACITY
    =========================
  */

  const bottomOpacity = useTransform(scrollYProgress, [0.18, 0.181], [0, 1]);

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
    <div className="hidden lg:block absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <svg
        className="absolute top-[2160px] left-[70px] w-full opacity-90"
        viewBox="0 0 1783 3692"
        fill="none"
      >
        {/* =========================
            BASE PATHS
        ========================= */}

        {/* TOP BASE */}
        <path
          d="M1893.5 15.9024H157.976C111.513 12.4868 18.5849 29.2235 18.5849 123.496C18.5849 217.768 18.5846 868.734 18.5846 1262.9C13.1182 1329.85 40.7232 1463.74 194.874 1463.74C349.024 1463.74 1066.07 1463.74 1420.69 1463.74"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* BOTTOM BASE */}
        <path
          d="M1420.69 1463.4C1485.26 1463.4 1589.8 1477.34 1589.8 1627.35C1589.8 1777.37 1589.8 2063.27 1589.8 2340.62C1590.15 2398.69 1562.95 2514.82 1451.44 2514.82C1339.92 2514.82 540.61 2514.82 154.891 2514.82C70.8466 2514.82 15.5 2571.59 15.5 2663.4C15.5 2755.22 15.5 4045.9 15.5 3866.35"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* =========================
            ACTIVE TRACES
        ========================= */}

        {/* TOP TRACE */}
        <motion.path
          d="M1893.5 15.9024H157.976C111.513 12.4868 18.5849 29.2235 18.5849 123.496C18.5849 217.768 18.5846 868.734 18.5846 1262.9C13.1182 1329.85 40.7232 1463.74 194.874 1463.74C349.024 1463.74 1066.07 1463.74 1420.69 1463.74"
          stroke="url(#traceGradient)"
          strokeWidth="24"
          strokeLinecap="round"
          style={{
            pathLength: smoothTop,
          }}
        />

        {/* BOTTOM TRACE */}
        <motion.path
          d="M1420.69 1463.4C1485.26 1463.4 1589.8 1477.34 1589.8 1627.35C1589.8 1777.37 1589.8 2063.27 1589.8 2340.62C1590.15 2398.69 1562.95 2514.82 1451.44 2514.82C1339.92 2514.82 540.61 2514.82 154.891 2514.82C70.8466 2514.82 15.5 2571.59 15.5 2663.4C15.5 2755.22 15.5 4045.9 15.5 3866.35"
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
  /*
   <path d="M1420.69 1556.84C1066.07 1556.84 349.025 1556.84 194.875 1556.84C40.7242 1556.84 13.1192 1422.95 18.5855 1356C18.5855 961.829 18.5859 217.768 18.5859 123.496C18.5859 29.2235 111.514 12.4868 157.977 15.9024H1893.5" stroke="url(#paint0_linear_1552_430)" stroke-width="31"/>
<path d="M15.5009 3959.45C15.5009 3911.29 15.5 3014.26 15.5 2922.45C15.5 2830.63 70.8466 2773.87 154.891 2773.87C540.61 2773.87 1339.92 2773.87 1451.44 2773.87C1562.95 2773.87 1590.15 2657.73 1589.8 2599.67C1589.8 2322.32 1589.8 1870.47 1589.8 1720.45C1589.8 1570.43 1485.26 1556.5 1420.69 1556.5" stroke="url(#paint1_linear_1552_430)" stroke-width="31"/> */
}
