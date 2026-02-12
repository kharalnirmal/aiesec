"use client";

import Image from "next/image";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Import icons
import { useState } from "react";

const Navbar = () => {
  // 1️⃣ STATE: Track if mobile menu is open/closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2️⃣ FUNCTION: Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 3️⃣ FUNCTION: Close menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="z-50 fixed w-full">
      <div className="flex justify-between items-center bg-white/90 shadow-black/4 shadow-lg drop-shadow-2xl px-4 md:px-8 border border-white/20 h-16">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/logo.png"
            alt="AIESEC-LOGO"
            width={150}
            height={150}
            className="w-auto h-10" // Responsive logo size
          />
        </Link>

        {/* 4️⃣ DESKTOP MENU - Hidden on mobile (md:flex = show on medium screens+) */}
        <div className="hidden md:flex flex-row justify-center items-center gap-x-4">
          <Link
            href="/partners"
            className="font-semibold text-gray-900 hover:text-blue-600 dark:text-white text-sm transition-colors"
          >
            Our Partners
          </Link>
          <Link
            href="/about"
            className="font-semibold text-gray-900 hover:text-blue-600 dark:text-white text-sm transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/organizations"
            className="font-semibold text-gray-900 hover:text-blue-600 dark:text-white text-sm transition-colors"
          >
            For Organizations
          </Link>

          <SignUpButton>
            <Button
              variant="outline"
              size="sm"
              className="font-medium text-gray-900 text-sm"
            >
              Sign Up
            </Button>
          </SignUpButton>
        </div>

        {/* 5️⃣ MOBILE MENU BUTTON - Only visible on mobile (md:hidden = hide on medium screens+) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden hover:bg-gray-100 p-2 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* 6️⃣ MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-gray-200 border-t">
          <div className="flex flex-col space-y-3 px-4 py-4">
            <Link
              href="/partners"
              onClick={closeMobileMenu}
              className="py-2 font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              Our Partners
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="py-2 font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/organizations"
              onClick={closeMobileMenu}
              className="py-2 font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              For Organizations
            </Link>

            <SignUpButton>
              <Button
                variant="outline"
                size="sm"
                className="w-full font-medium text-gray-900 text-sm"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
