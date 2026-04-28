"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

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
          bg-neutral-50/50
          backdrop-blur-lg
          border border-neutral-50
          rounded-full
          p-[1vw] lg:p-1
        "
      >
        {links.map((link) => {
          const active = isActive(link.path);

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  block
                  rounded-full
                  px-[2.5vw] md:px-4 py-[1.4vw] md:py-2 lg:px-6
                  text-[3.5vw] sm:text-xs md:text-md  lg:text-base
                  font-medium
                  transition-colors duration-200
                  ${
                    active
                      ? "bg-secondary-text text-white"
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
