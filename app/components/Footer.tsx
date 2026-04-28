import React from "react";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-cover bg-[url(/images/footer2.png)] bg-secondary-bg text-neutral-100">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20
          flex flex-col gap-12
        "
      >
        {/* Top row */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-10 lg:gap-16
            justify-between
          "
        >
          {/* Left: Positioning */}
          <div className="max-w-xl">
            <h2 className="heading text-3xl sm:text-5xl text-neutral-100">
              Clarity over persuasion
            </h2>
            <p className="heading font-light mt-10 text-md lg:text-xl">
              In complex businesses, possibility matters more than certainty.
            </p>
          </div>

          {/* Right: Navigation */}
          <nav
            className="
              flex flex-col sm:flex-row
              gap-10 sm:gap-18
              text-sm
            "
          >
            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Navigate
              </span>
              <Link
                href="/"
                className="body-font text-neutral-200 hover:text-neutral-100"
              >
                Home
              </Link>
              <Link
                href="/case-studies"
                className="body-font text-neutral-200 hover:text-neutral-100"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="body-font text-neutral-200 hover:text-neutral-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="body-font text-neutral-200 hover:text-neutral-100"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Focus
              </span>
              <span className="body-font text-neutral-300">Fintech</span>
              <span className="body-font text-neutral-300">
                Investor Narratives
              </span>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-700/60" />

        {/* Bottom row */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-6
            justify-between
            items-start sm:items-center
          "
        >
          <p className="body-font text-neutral-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Arcady Design. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-5 text-neutral-400">
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="hover:text-neutral-100 transition"
            >
              <FaBehance size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-neutral-100 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-neutral-100 transition"
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
