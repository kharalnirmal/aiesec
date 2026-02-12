import Image from "next/image";
import Link from "next/link";
import React from "react";

const ValueDrivenLeaders = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 px-0 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="relative mx-auto w-full">
        <div className="relative flex flex-row items-center">
          {/* LEFT SIDE - Hexagonal Icons */}
          <div className="relative flex justify-end items-center -ml-12 sm:-ml-8 md:ml-0 w-1/3">
            <div className="relative w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
              <Image
                src="/partners/side1.webp"
                alt="Leadership Values"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* MIDDLE - Content */}
          <div className="z-10 relative flex justify-center items-center px-2 sm:px-4 md:px-6 w-1/3 text-center">
            {/* Hexagon/Diamond Container - Height matches icons */}
            <div
              className="relative flex justify-center items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
              style={{
                clipPath:
                  "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
              }}
            >
              {/* Content */}
              <div className="z-10 relative px-2 sm:px-4">
                <h2 className="font-semibold text-gray-900 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                  We create value-driven leaders.
                </h2>

                <p className="mx-auto mt-2 sm:mt-3 md:mt-4 max-w-2xl text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  AIESEC enables you to develop the values we believe leaders
                  should live by.{" "}
                  <Link
                    href="/about"
                    className="font-semibold text-blue-600 hover:text-blue-700 decoration-blue-600/30 hover:decoration-blue-700 underline underline-offset-2 transition-colors"
                  >
                    Learn more →
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Hexagonal Icons */}
          <div className="relative flex justify-start items-center -mr-12 sm:-mr-8 md:mr-0 w-1/3">
            <div className="relative w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
              <Image
                src="/partners/side2.webp"
                alt="Leadership Qualities"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueDrivenLeaders;
