"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import ProductMVPSprintModal from "./modals/ProductMVPSprintModal";
import ProductTransformationModal from "./modals/ProductTransformationModal";
import Link from "next/link";

const HomeHero = () => {
  const [mvpModalOpen, setMvpModalOpen] = useState(false);
  const [transformationModalOpen, setTransformationModalOpen] = useState(false);

  return (
    <div className="w-full px-4 py-6 portrait:lg:py-16 landscape:lg:py-24 lg:px-24">
      <p className="body-font mt-22 mb-3 px-4 text-xs font-medium text-slate-600 md:text-base lg:mt-16">
        <span className="font-semibold text-orange-600">PRODUCT CLARITY</span>,{" "}
        <span className="font-semibold text-orange-600">NARRATIVE</span>, and{" "}
        <span className="font-semibold text-orange-600">TRUST</span> for
        operational platforms
      </p>

      {/* Existing Heading */}
      <h1 className="heading w-full px-3 text-5xl text-primary-text md:text-6xl lg:w-[70%] lg:text-[7vw] portrait:w-[80%] landscape:w-[80%]">
        Make your business legible to{" "}
        <span className="italic text-accent">Capital</span>
      </h1>

      {/* Existing Subheading */}
      <h1 className="heading mt-6 px-3 text-md text-slate-600 portrait:w-[80%] portrait:md:w-[65%] landscape:w-[60%] lg:mt-12 lg:w-[50%] lg:text-2xl">
        We structure onboarding, workflows, interfaces, and product narrative so
        operational systems become easier to trust, navigate, and scale.
      </h1>

      {/* Existing Hero Line */}
      <div className="relative left-1/2 right-1/2 -ml-[50.5vw] w-screen portrait:md:-mt-[4vw] lg:-mt-20 xl:-mt-[6vw]">
        <Image
          className="h-auto w-full"
          src="/hero-line12.svg"
          alt="hero-line"
          height={20}
          width={1920}
          unoptimized
        />

        {/* Pulsing Node */}
        <div className="absolute -top-2 right-10 md:-top-4 md:right-30 xl:-top-4 xl:right-50">
          <span className="relative flex h-[8vw] w-[8vw] md:h-[6vw] md:w-[6vw]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />

            <span className="relative inline-flex h-[8vw] w-[8vw] items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white body-font md:h-[6vw] md:w-[6vw] md:text-5xl xl:text-6xl">
              $
            </span>
          </span>
        </div>
      </div>

      {/* Existing statement */}
      <div className="flex w-full justify-end">
        <h1 className="heading p-4 text-right text-2xl font-light tracking-tight text-primary-text/90 portrait:md:-mt-[6vw] landscape:xl:-mt-[7vw] lg:text-4xl lg:leading-[1.2]">
          Metrics improve, <br />
          But capital doesn&apos;t follow?
        </h1>
      </div>

      {/* =========================================================
          NEW HERO SERVICE CARDS
      ========================================================= */}

      <section className="w-full relative px-2 border-2 border-slate-300 bg-gray-200/80 rounded-3xl py-8 md:py-10 lg:px-10 mt-14 lg:py-12 ">
        <div className="mb-7 flex items-end justify-between px-1 md:mb-9">
          <div>
            <p className="heading text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 md:text-sm">
              Start here
            </p>

            <h2 className="heading mt-2 text-2xl tracking-[-0.03em] text-primary-text md:text-3xl lg:text-4xl">
              Choose where you are
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* =====================================================
    MVP SPRINT
===================================================== */}
          <div
            onClick={() => setMvpModalOpen(true)}
            className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    cursor-pointer
    border
    border-[#d9e0eb]
    bg-[#081125]
    p-6
    text-white
    transition-all
    duration-500
    hover:-translate-y-1
    hover:border-blue-400/40
    hover:shadow-[0_30px_80px_rgba(15,35,80,0.18)]
    md:px-6
    lg:px-8
  "
          >
            {/* =====================================================
      ANIMATED VISUAL SYSTEM
  ===================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* Ambient blue atmosphere */}
              <motion.div
                className="
        absolute
        -right-24
        -top-24
        h-[340px]
        w-[340px]
        rounded-full
        bg-blue-500/20
        blur-[100px]
      "
                animate={{
                  x: [0, -30, 20, -10, 0],
                  y: [0, 25, -20, 15, 0],
                  scale: [1, 1.12, 0.92, 1.08, 1],
                  opacity: [0.45, 0.6, 0.4, 0.55, 0.45],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main flowing blob */}
              <motion.div
                className="
        absolute
        right-[5%]
        bottom-[-8%]
        h-[280px]
        w-[380px]
        rounded-[45%_55%_60%_40%]
        bg-gradient-to-br
        from-blue-400/20
        via-blue-500/10
        to-cyan-300/5
        blur-[45px]
      "
                animate={{
                  x: [0, -35, 20, -15, 0],
                  y: [0, -20, 15, -10, 0],
                  rotate: [0, 5, -4, 3, 0],
                  scale: [1, 1.08, 0.95, 1.05, 1],
                  borderRadius: [
                    "45% 55% 60% 40%",
                    "55% 45% 45% 55%",
                    "40% 60% 55% 45%",
                    "60% 40% 50% 50%",
                    "45% 55% 60% 40%",
                  ],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glass panels */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 right-[5%] z-10 flex gap-4">
                  {/* Panel 1 */}
                  <div
                    className="
                    h-[140%]
                    w-16
                    border-l-2
                    border-white/20
                    -translate-y-[10%]
                    rotate-[8deg]
                    bg-gradient-to-r
                    from-white/20
                    via-white/8
                    to-transparent
                    backdrop-blur-[2px]
                  "
                  />

                  {/* Panel 2 */}
                  <div
                    className="
                    h-[140%]
                    w-16
                    border-l-2
                    border-white/20
                    -translate-y-[10%]
                    rotate-[8deg]
                    bg-gradient-to-r
                    from-white/16
                    via-white/6
                    to-transparent
                    backdrop-blur-[2px]
                  "
                  />

                  {/* Panel 3 */}
                  <div
                    className="
                    h-[140%]
                    w-16
                    border-l-2
                    border-white/15
                    -translate-y-[10%]
                    rotate-[8deg]
                    bg-gradient-to-r
                    from-white/14
                    via-white/5
                    to-transparent
                    backdrop-blur-[2px]
                  "
                  />

                  {/* Panel 4 */}
                  <div
                    className="
                    h-[140%]
                    w-16
                    border-l-2
                    border-white/15
                    -translate-y-[10%]
                    rotate-[8deg]
                    bg-gradient-to-r
                    from-white/12
                    via-white/4
                    to-transparent
                    backdrop-blur-[2px]
                  "
                  />

                  {/* Panel 5 */}
                  <div
                    className="
                    h-[140%]
                    w-16
                    border-l-2
                    border-white/15
                    -translate-y-[10%]
                    rotate-[10deg]
                    bg-gradient-to-r
                    from-white/10
                    via-white/3
                    to-transparent
                    backdrop-blur-[2px]
                      "
                  />
                </div>
              </div>

              {/* Animated light blobs */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Blue blob */}
                <motion.div
                  className="
                  absolute
                
                  top-[35%]
                  h-[260px]
                  w-[340px]
                  rounded-full
                  blur-[55px]
                  mix-blend-screen
                   "
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(70,130,255,0.95) 0%, rgba(40,90,255,0.75) 22%, rgba(30,70,255,0.4) 48%, transparent 75%)",
                  }}
                  animate={{
                    x: [-20, 35, 70, 20, -35, -20],
                    y: [10, -20, 25, 55, 20, 10],
                    scale: [1, 1.12, 0.9, 1.15, 0.94, 1],
                    rotate: [-8, 12, 22, 5, -15, -8],
                    borderRadius: [
                      "45% 55% 60% 40%",
                      "60% 40% 45% 55%",
                      "40% 60% 55% 45%",
                      "55% 45% 40% 60%",
                      "40% 60% 50% 50%",
                      "45% 55% 60% 40%",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />

                {/* Orange blob */}
                <motion.div
                  className="
    absolute
    left-[30%]
    top-[55%]
    h-[230px]
    w-[310px]
    rounded-full
    blur-[60px]
    mix-blend-screen
  "
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,140,40,0.95) 0%, rgba(255,100,20,0.75) 22%, rgba(255,70,10,0.4) 48%, transparent 75%)",
                  }}
                  animate={{
                    x: [15, -25, -55, -10, 40, 15],
                    y: [-10, 25, -15, -45, 15, -10],
                    scale: [0.95, 1.1, 0.88, 1.15, 0.96, 0.95],
                    rotate: [-5, 15, 25, -5, -18, -5],
                    borderRadius: [
                      "50% 50% 45% 55%",
                      "60% 40% 55% 45%",
                      "40% 60% 45% 55%",
                      "55% 45% 60% 40%",
                      "45% 55% 40% 60%",
                      "50% 50% 45% 55%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Moving reflection */}
              <motion.div
                className="
                absolute
                
                top-[-80%]
                h-[180%]
                w-[14%]
                rotate-[22deg]
                bg-gradient-to-r
                from-transparent
                via-white/[0.10]
                to-transparent
                blur-md
              "
                animate={{
                  x: ["0%", "850%"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 4,
                  repeat: Infinity,
                  repeatDelay: 9,
                  ease: "easeInOut",
                }}
              />

              {/* Very subtle grain-like light */}
              <motion.div
                className="
        absolute
        right-[8%]
        bottom-[8%]
        h-1
        w-24
        rounded-full
        bg-blue-300/20
        blur-[2px]
      "
                animate={{
                  width: [96, 150, 80, 130, 96],
                  opacity: [0.2, 0.5, 0.25, 0.45, 0.2],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* =====================================================
      CONTENT
  ===================================================== */}

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-blue-300
                  "
                  >
                    01 / New product
                  </span>

                  <Link
                    href="/services/product-mvp-sprint"
                    className="
                  flex
                  h-10
                  px-4
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  transition-all
                  duration-300
                  group-hover:border-blue-300/40
                  group-hover:bg-blue-400/10
          "
                  >
                    <span className="text-xs pr-2">Explore </span> ↗
                  </Link>
                </div>

                <h3
                  className="
          heading
          mt-4
          max-w-[440px]
          text-3xl
          leading-[0.95]
          tracking-[-0.04em]
          md:text-5xl
        "
                >
                  Product MVP Sprint
                </h3>

                <p
                  className=" hidden md:block
          mt-5
          
          max-w-md
          text-sm
          leading-6
          text-slate-200
        "
                >
                  Turn an idea into a structured product, from strategy through
                  design and development without wasting months building the
                  wrong thing.
                </p>
              </div>

              <div className="flex mt-5 flex-wrap gap-2">
                {[
                  "Product strategy",
                  "UX / UI design",
                  "Prototype",
                  "Design + development",
                ].map((item) => (
                  <span
                    key={item}
                    className="
            rounded-full
            border
            border-white/40
            bg-white/20
            px-3
            py-1.5
            text-[10px]
            text-white
          "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              PRODUCT TRANSFORMATION
          ===================================================== */}
          <div
            onClick={() => setTransformationModalOpen(true)}
            className="
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-[28px]
              border
              border-[#d9e0eb]
              bg-[#eef4fb]
              p-6
              text-[#081125]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-blue-400/50
              hover:shadow-[0_30px_80px_rgba(15,35,80,0.14)]
           
              md:px-6
        
              lg:px-8
            "
          >
            {/* Transformation visual */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* Ambient blue light */}
              <motion.div
                className="
      absolute
      right-[0%]
      top-[20%]
      h-[240px]
      w-[320px]
      rounded-full
      blur-[75px]
    "
                style={{
                  background:
                    "radial-gradient(circle, rgba(50,130,255,0.28) 0%, rgba(60,140,255,0.12) 42%, transparent 72%)",
                }}
                animate={{
                  x: [0, -20, 12, 0],
                  y: [0, 18, -12, 0],
                  scale: [1, 1.08, 0.96, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 3D glass scene */}
              <div
                className="
      absolute
      right-[-1%]
      top-[5%]
      h-full
      w-[62%]
    "
                style={{
                  perspective: "650px",
                  perspectiveOrigin: "65% 50%",
                }}
              >
                {/* Back glass */}
                <motion.div
                  className="
        absolute
        right-[0%]
        top-[8%]
        h-[155px]
        w-[235px]
        rounded-[20px]
        border
        border-white/80
        bg-blue-900/60
        shadow-[0_18px_55px_rgba(30,90,180,0.14)]
        backdrop-blur-[5px]
      "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: [-24, -17, -27, -24],
                    rotateX: [7, 11, 4, 7],
                    translateZ: [0, 18, -5, 0],
                    x: [0, 6, -4, 0],
                    y: [0, -4, 4, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Abstract UI */}
                  <div className="absolute inset-5 opacity-[0.3]">
                    <div className="h-2 w-16 rounded-full bg-blue-900" />

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-lg border border-white/50 bg-white/50" />
                      <div className="h-12 rounded-lg border border-white/50 bg-white/20" />
                    </div>

                    <div className="mt-2 h-8 rounded-lg border border-white/40 bg-white/20" />
                  </div>
                </motion.div>

                {/* Middle glass */}
                <motion.div
                  className="
        absolute
        right-[13%]
        top-[25%]
        h-[155px]
        w-[235px]
        rounded-[20px]
        border
        border-white/90
        bg-slate-300/[0.30]
        shadow-[0_20px_60px_rgba(30,90,180,0.17)]
        backdrop-blur-[6px]
      "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: [-17, -10, -20, -17],
                    rotateX: [5, 9, 2, 5],
                    translateZ: [25, 40, 15, 25],
                    x: [0, -5, 4, 0],
                    y: [0, 4, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Dashboard impression */}
                  <div className="absolute inset-5 opacity-[0.22]">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded-full bg-slate-700/40" />

                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-slate-600/30" />
                        <span className="h-2 w-2 rounded-full bg-slate-600/20" />
                      </div>
                    </div>

                    {/* Cards */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-8 rounded-md bg-white/30" />
                      <div className="h-8 rounded-md bg-white/25" />
                      <div className="h-8 rounded-md bg-blue-500/20" />
                    </div>

                    {/* Content */}
                    <div className="mt-2 rounded-lg border border-white/40 bg-white/20 p-2">
                      <div className="h-1 w-12 rounded-full bg-slate-600/30" />

                      <div className="mt-3 space-y-2">
                        <div className="h-1 rounded-full bg-slate-600/20" />
                        <div className="h-1 w-[75%] rounded-full bg-slate-600/20" />
                        <div className="h-1 w-[55%] rounded-full bg-slate-600/15" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Front glass */}
                <motion.div
                  className="
        absolute
        right-[27%]
        top-[43%]
        h-[145px]
        w-[225px]
        overflow-hidden
        rounded-[20px]
        border
        border-white
        bg-slate-200/[0.38]
        shadow-[0_25px_65px_rgba(20,80,170,0.20)]
        backdrop-blur-[8px]
      "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: [-10, -3, -13, -10],
                    rotateX: [3, 7, -1, 3],
                    translateZ: [50, 70, 40, 50],
                    x: [0, 4, -3, 0],
                    y: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Subtle UI impression */}
                  <div className="absolute inset-4 scale-[0.85] origin-top-left opacity-[0.4]">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-blue-500/50" />

                        <div className="space-y-1">
                          <div className="h-1 w-12 rounded-full bg-slate-700/40" />
                          <div className="h-[3px] w-7 rounded-full bg-slate-500/30" />
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600/35" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600/20" />
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mt-4 grid grid-cols-3 gap-1.5">
                      <div className="h-7 rounded-md border border-white/40 bg-white/20" />

                      <div className="h-7 rounded-md border border-white/40 bg-white/20">
                        <div className="m-2 h-1 w-6 rounded-full bg-blue-500/40" />
                      </div>

                      <div className="h-7 rounded-md border border-white/40 bg-white/20" />
                    </div>

                    {/* Workflow */}
                    <div className="mt-2 rounded-md border border-white/40 bg-white/15 p-2">
                      <div className="mb-2 h-1 w-14 rounded-full bg-slate-600/30" />

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
                          <div className="h-1 flex-1 rounded-full bg-slate-600/20" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                          <div className="h-1 w-[75%] rounded-full bg-slate-600/20" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-500/30" />
                          <div className="h-1 w-[55%] rounded-full bg-slate-600/15" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reflection inside front glass */}
                  <motion.div
                    className="
          absolute
          -left-[30%]
          top-[-30%]
          h-[170%]
          w-[10%]
          rotate-[22deg]
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          blur-md
        "
                    animate={{
                      x: ["0%", "800%"],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 7,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Very subtle edge highlight */}
                <motion.div
                  className="
        absolute
        right-[26.5%]
        top-[42.5%]
        h-[145px]
        w-[225px]
        rounded-[20px]
        border
        border-cyan-100/20
      "
                  animate={{
                    opacity: [0.25, 0.55, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Reflection across glass composition */}
                <motion.div
                  className="
        absolute
        right-[-8%]
        top-[-25%]
        h-[170%]
        w-[6%]
        rotate-[25deg]
        bg-gradient-to-r
        from-transparent
        via-white/[0.30]
        to-transparent
        blur-md
      "
                  animate={{
                    x: ["0%", "-850%"],
                    opacity: [0, 0.65, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 3,
                    repeat: Infinity,
                    repeatDelay: 7,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                    02 / Existing product
                  </span>

                  <Link
                    href="/services/product-mvp-sprint"
                    className="flex h-10 px-4 items-center justify-center rounded-full border border-[#b9cce3] bg-white text-lg text-[#081125] transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50"
                  >
                    <span className="text-xs font-semibold pr-2">Explore </span>{" "}
                    ↗
                  </Link>
                </div>

                <h3
                  className="
          heading
          mt-4
          max-w-[440px]
          text-3xl
          leading-[0.95]
          tracking-[-0.04em]
          md:text-[45px]
        "
                >
                  Product Transformation
                </h3>

                <p
                  className=" hidden md:block
          mt-5
          
          max-w-md
          text-sm
          leading-6
          text-slate-800
        "
                >
                  Restructure an existing product when complexity, weak
                  workflows, or fragmented experiences start holding growth
                  back.
                </p>
              </div>

              <div className="flex mt-5 flex-wrap gap-2">
                {[
                  "Product audit",
                  "UX / UI restructuring",
                  "Workflow redesign",
                  "Design + development",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[10px] text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductMVPSprintModal
        open={mvpModalOpen}
        onClose={() => setMvpModalOpen(false)}
      />
      <ProductTransformationModal
        open={transformationModalOpen}
        onClose={() => setTransformationModalOpen(false)}
      />
    </div>
  );
};

export default HomeHero;
