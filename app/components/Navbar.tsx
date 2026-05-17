"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
  ];

  const services = [
    {
      name: "Onboarding & KYC",
      path: "/services/onboarding",
    },

    {
      name: "Brand Perception & Trust",
      path: "/services/brand",
    },

    {
      name: "Product Design Systems",
      path: "/services/product",
    },

    {
      name: "Website Positioning",
      path: "/services/website",
    },

    {
      name: "Product Narrative",
      path: "/services/narrative",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="
        fixed z-50 w-full
        flex justify-center md:justify-between
        items-center
        px-2 sm:px-4 md:px-10 lg:px-[7.5rem]
        py-6 lg:py-8
      "
    >
      {/* Logo */}
      <div className="hidden md:flex">
        <Link href="/" aria-label="Home">
          <Image src="/logo-black.svg" alt="Logo" width={48} height={48} />
        </Link>
      </div>

      {/* Navigation */}
      <ul
        className="
          flex gap-2 md:gap-4 lg:gap-4
          backdrop-blur-lg
          border border-white
          bg-white/20
          rounded-full
          p-[1vw] lg:p-1
        "
      >
        {/* Home */}
        {links.slice(0, 1).map((link) => {
          const active = isActive(link.path);

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  block rounded-full
                  px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
                  text-[3.5vw] sm:text-xs md:text-md lg:text-base
                  font-medium transition-colors duration-200
                  ${
                    active
                      ? "bg-accent-dark text-white"
                      : "text-secondary-text hover:bg-accent hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* Services Dropdown */}
        <li
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            onClick={() => setServicesOpen((prev) => !prev)}
            className={`
              flex items-center gap-1
              rounded-full
              px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
              text-[3.5vw] sm:text-xs md:text-md lg:text-base
              font-medium
              transition-colors duration-200
              ${
                pathname.startsWith("/services")
                  ? "bg-accent-dark text-white"
                  : "text-secondary-text hover:bg-accent hover:text-white"
              }
            `}
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          <div
            className={`
              absolute top-[120%] left-1/2 -translate-x-1/2
              w-[240px]
              rounded-2xl
              border border-neutral-200
              bg-white
              shadow-2xl
              overflow-hidden
              transition-all duration-300
              ${
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }
            `}
          >
            <div className="flex flex-col p-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.path}
                  onClick={() => setServicesOpen(false)}
                  className="
                    rounded-xl
                    px-4 py-3
                    text-sm
                    bodyfont font-medium
                    text-secondary-text
                    hover:bg-accent-dark
                    hover:text-white
                    transition-colors
                  "
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </li>

        {/* Remaining Links */}
        {links.slice(1).map((link) => {
          const active = isActive(link.path);

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  block rounded-full
                  px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
                  text-[3.5vw] sm:text-xs md:text-md lg:text-base
                  font-medium transition-colors duration-200
                  ${
                    active
                      ? "bg-accent-dark text-white"
                      : "text-secondary-text hover:bg-accent hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
