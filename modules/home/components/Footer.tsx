import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 max-w-7xl">
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base">Youth</h3>
            <ul className="space-y-2 mt-3 text-blue-100 text-xs sm:text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Global Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Global Teacher
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Global Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Youth Speak
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Youth for Global Goals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base">Organization</h3>
            <ul className="space-y-2 mt-3 text-blue-100 text-xs sm:text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Global Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Global Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Global Teacher
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2 mt-3 text-blue-100 text-xs sm:text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Annual Report
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hate Speech Policies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 mt-3 text-blue-100 text-xs sm:text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mt-8 pt-6 border-white/20 border-t text-blue-100 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <Link href="#" className="hover:text-white">
              Terms & Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Manage Cookies
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span>Language</span>
            <select className="bg-blue-600 px-2 py-1 border border-white/30 rounded-md focus:outline-none text-white text-xs sm:text-sm">
              <option>English</option>
              <option>Nepal</option>
            </select>
          </div>
        </div>

        <p className="mt-6 text-[10px] text-blue-100 sm:text-xs text-center">
          AIESEC is a non-political, independent, not-for-profit organization
          run by students and recent graduates of institutions of higher
          education.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
