import React from "react";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-cover bg-[url(/images/footer-bg.png)] bg-secondary-bg text-neutral-100">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20
          flex flex-col gap-14
        "
      >
        {/* Top */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-14 lg:gap-20
            justify-between
          "
        >
          {/* Left */}
          <div className="max-w-md">
            <p className="body-font uppercase tracking-[0.2em] text-xs text-neutral-400">
              Product Clarity Systems
            </p>

            <h2 className="heading text-3xl sm:text-5xl text-neutral-100 mt-4 leading-[1]">
              Clarity over persuasion
            </h2>

            <p className="heading font-light mt-8 text-sm lg:text-base text-neutral-300 leading-relaxed max-w-xl">
              We help fintech and operational platforms improve onboarding,
              trust, product clarity, and decision-making through UX systems and
              narrative strategy.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3
              gap-10 sm:gap-16
              text-sm
            "
          >
            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Navigate
              </span>

              <Link
                href="/"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/case-studies"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Contact
              </Link>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Services
              </span>

              <Link
                href="/services/onboarding"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Onboarding & KYC
              </Link>

              <Link
                href="/services/brand"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Brand Perception & Trust
              </Link>

              <Link
                href="/services/product"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Product Design Systems
              </Link>

              <Link
                href="/services/positioning"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Website Positioning
              </Link>

              <Link
                href="/services/narrative"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Product Narrative
              </Link>
            </div>

            {/* Focus Areas */}
            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Focus Areas
              </span>

              <span className="body-font text-neutral-300">
                Operational Platforms
              </span>

              <span className="body-font text-neutral-300">
                Dashboard Systems
              </span>

              <span className="body-font text-neutral-300">Onboarding UX</span>

              <span className="body-font text-neutral-300">
                Trust Architecture
              </span>

              <span className="body-font text-neutral-300">
                Product Narrative
              </span>
            </div>
          </div>
        </div>

        {/* SEO Supporting Text */}
        <div className="max-w-6xl">
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Dashboard UX",
              "Operational Platforms",
              "Trust Systems",
              "Onboarding UX",
              "Product Narrative",
              "Workflow UX",
              "Decision Systems",
              "Infrastructure UX",
            ].map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-neutral-500 text-sm leading-relaxed mt-6">
            Arcady Design is a product strategy and UX systems studio helping
            fintech and operational platforms improve onboarding clarity,
            dashboard UX, trust systems, workflow readability, product
            positioning, and user decision-making across high-complexity digital
            products.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-700/50" />

        {/* Bottom */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-6
            justify-between
            items-start sm:items-center
          "
        >
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <p className="body-font text-neutral-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Arcady Design. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
              <Link href="/privacy-policy" className="hover:text-neutral-300">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-neutral-300">
                Terms
              </Link>

              <Link href="/contact" className="hover:text-neutral-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-neutral-400">
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="hover:text-white transition"
            >
              <FaBehance size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-white transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
