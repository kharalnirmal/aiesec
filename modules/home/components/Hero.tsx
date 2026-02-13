"use client";

import { Button } from "@/components/ui/button";
import { Globe, Handshake, Plane } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { use } from "react";

const Hero = () => {
  // for animation

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.in" } });
    tl.from(".left", { x: -100, opacity: 0, duration: 0.8 })
      .from(".right", { y: -100, opacity: 0, duration: 0.8 }, "-=0.3")
      .from(".bottom", { y: 50, opacity: 0, stagger: 0.8, duration: 0.5 }, "<");
  }, []);

  //dummy data for stats
  const data = [
    {
      image: <Globe size={35} />,
      numbers: "100+",
      title: "Countries & Territories",
    },
    {
      image: <Plane size={35} />,
      numbers: "5000+",
      title: "Partner Organizations",
    },
    {
      image: <Handshake size={35} />,
      numbers: "100+",
      title: "Experiences every year",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 min-h-[90vh]">
      <div className="relative flex md:flex-row flex-col items-stretch gap-3 sm:gap-4 mx-auto max-w-7xl">
        {/* LEFT SIDE */}
        <div className="left relative shadow-xl rounded-lg w-full md:w-2/3 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden">
          <Image
            src="/v1.webp"
            alt="Hero Image"
            width={1200}
            height={900}
            className="grayscale w-full h-full object-cover"
          />

          <div className="right-2 sm:right-4 bottom-2 sm:bottom-4 left-2 sm:left-4 absolute flex sm:flex-row flex-col justify-between items-start sm:items-center gap-3 sm:gap-4 bg-white shadow-md p-3 sm:p-4 rounded-lg">
            <h1 className="font-medium text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Lead. Grow <br />
              Make an <span className="text-primary">Impact</span>
            </h1>

            <Button className="bg-primary hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-lg text-white text-sm sm:text-base whitespace-nowrap transition-colors">
              Get Started
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-1/3">
          {/* TOP IMAGE */}
          <div className="right relative flex-2 shadow-lg rounded-2xl min-h-[200px] sm:min-h-[250px] md:min-h-0 overflow-hidden">
            <Image
              src="/5.webp"
              alt="About Us Image"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM STATS */}
          <div className="bottom flex sm:flex-row md:flex-row flex-col flex-1 justify-between items-stretch gap-3 sm:gap-4 bg-gray-300 shadow-lg backdrop-blur-md p-4 sm:p-6 rounded-2xl">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-row sm:flex-col justify-start sm:justify-center items-center gap-3 sm:gap-2 bg-white shadow-md px-4 py-4 sm:py-6 rounded-xl w-full text-center"
              >
                <div className="text-primary text-3xl md:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl">
                  {item.image}
                </div>

                <div className="flex-1 sm:flex-none text-left sm:text-center">
                  <h3 className="font-bold text-xl md:text-xl sm:text-2xl lg:text-2xl">
                    {item.numbers}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-xs sm:text-sm lg:text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
