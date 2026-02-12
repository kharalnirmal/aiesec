"use client";

import Image from "next/image";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300   mx-auto ${
        scrolled
          ? "bg-white shadow-xl backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      {/* Main Navbar */}
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 max-w-7xl h-16">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/logo.png"
            alt="AIESEC-LOGO"
            width={150}
            height={150}
            className="w-auto h-10"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-6">
          <Link
            href="/partners"
            className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
          >
            Our Partners
          </Link>
          <Link
            href="/about"
            className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/organizations"
            className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
          >
            For Organizations
          </Link>

          <SignUpButton>
            <Button variant="outline" size="sm" className="font-medium text-sm">
              Sign Up
            </Button>
          </SignUpButton>
        </div>

        {/* Mobile Toggle Button */}
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

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/partners"
              onClick={closeMobileMenu}
              className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              Our Partners
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/organizations"
              onClick={closeMobileMenu}
              className="font-semibold text-gray-900 hover:text-blue-600 text-sm transition-colors"
            >
              For Organizations
            </Link>

            <SignUpButton>
              <Button
                variant="outline"
                size="sm"
                className="w-full font-medium text-sm"
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
