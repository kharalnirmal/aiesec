import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners = [
    {
      src: "/partners/electrolux-professional-group.avif",
      alt: "Electrolux Professional Group",
    },
    { src: "/partners/terrawind.jpg", alt: "TerraWind Global Protection" },
    { src: "/partners/Schneider  Electric.jpeg", alt: "Schneider Electric" },
    { src: "/partners/henkel-logo.png", alt: "Henkel" },
    { src: "/partners/pwc.png", alt: "PwC" },
    { src: "/partners/international sos.png", alt: "International SOS" },
    { src: "/partners/husqvarna group.png", alt: "Husqvarna Group" },
    { src: "/partners/infosys.jpg", alt: "Infosys" },
    { src: "/partners/Eaton.png", alt: "Eaton" },
    { src: "/partners/Nexans.png", alt: "Nexans" },
    { src: "/partners/DHL.webp", alt: "DHL" },
    { src: "/partners/Alfa.png", alt: "Alfa" },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl text-center">
          Our Global Premium Partners
        </h2>

        <div className="place-items-center gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-6 sm:mt-8">
          {partners.map((partner) => (
            <div
              key={partner.src}
              className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-10 sm:h-12 md:h-14"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
