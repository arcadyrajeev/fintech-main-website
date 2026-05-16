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
              Fintech Product Systems
            </p>

            <h2 className="heading text-3xl sm:text-5xl text-neutral-100 mt-4 leading-[1]">
              Clarity over persuasion
            </h2>

            <p className="heading font-light mt-8 text-sm lg:text-base text-neutral-300 leading-relaxed max-w-xl">
              We help fintech companies improve onboarding, trust, conversion,
              financial UX, and product clarity through fintech-focused product
              systems and narrative design.
            </p>

            {/* Expertise */}
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
                href="/services/onboarding-conversion"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Onboarding UX
              </Link>

              <Link
                href="/services/trust-systems"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Trust Systems
              </Link>

              <Link
                href="/services/financial-ux"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Financial UX
              </Link>

              <Link
                href="/services/product-narrative"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Product Narrative
              </Link>

              <Link
                href="/services/dashboard-ux"
                className="body-font text-neutral-200 hover:text-white transition"
              >
                Dashboard UX
              </Link>
            </div>

            {/* Fintech Focus */}
            <div className="flex flex-col gap-3">
              <span className="body-font text-neutral-400 uppercase tracking-wide text-xs">
                Fintech Focus
              </span>

              <span className="body-font text-neutral-300">Payments</span>

              <span className="body-font text-neutral-300">Lending</span>

              <span className="body-font text-neutral-300">Wealthtech</span>

              <span className="body-font text-neutral-300">
                Cross-border UX
              </span>

              <span className="body-font text-neutral-300">
                Financial Systems
              </span>
            </div>
          </div>
        </div>

        {/* SEO Supporting Text */}
        <div className="max-w-6xl">
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Fintech UX",
              "KYC Optimization",
              "Financial Dashboards",
              "Trust Systems",
              "Onboarding UX",
              "Product Narrative",
              "Wealthtech UX",
              "Payments UX",
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
            Arcady Design is a fintech-focused product strategy and UX systems
            studio helping fintech companies improve onboarding conversion,
            financial dashboard clarity, KYC UX, trust systems, product
            positioning, and user decision-making across regulated financial
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
