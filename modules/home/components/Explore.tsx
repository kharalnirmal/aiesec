import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1️⃣ TYPESCRIPT: Define the shape of a program card
interface ProgramCard {
  id: number;
  title: string;
  duration: string;
  image: string;
  bgColor: string; // Background color class
  textColor: string; // Text color class
  link: string;
}

const Explore = () => {
  // 2️⃣ Programs data array
  const programs: ProgramCard[] = [
    {
      id: 1,
      title: "Explore Volunteering",
      duration: "4 month",
      image: "/v2.webp",
      bgColor: "bg-secondary", // Coral/Salmon
      textColor: "text-white",
      link: "/programs/volunteering",
    },
    {
      id: 2,
      title: "Explore Internships",
      duration: "6 month - 1 year",
      image: "/v3.webp",
      bgColor: "bg-tertiary", // Teal/Cyan
      textColor: "text-white",
      link: "/programs/internships",
    },
    {
      id: 3,
      title: "Explore Teaching",
      duration: "6 month - 1 year",
      image: "/4.webp",
      bgColor: "bg-quaternary", // Orange
      textColor: "text-white",
      link: "/programs/teaching",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
      {/* Section Header */}
      <div className="mx-auto mb-8 md:mb-12 max-w-7xl">
        <h2 className="mb-2 md:mb-3 font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Explore with these programs
        </h2>
        <p className="font-medium text-primary text-base sm:text-lg md:text-xl">
          We develop young leaders through these programs.
        </p>
      </div>

      {/* 3️⃣ Program Cards Grid */}
      <div className="gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-12 md:mb-16 lg:mb-20 max-w-7xl">
        {programs.map((program) => (
          <Link key={program.id} href={program.link} className="group block">
            <div
              className={`
                ${program.bgColor} 
                rounded-xl sm:rounded-2xl overflow-hidden 
                shadow-lg hover:shadow-2xl 
                transition-all duration-300 
                hover:scale-105
                h-full
              `}
            >
              {/* Image Container */}
              <div className="relative flex justify-center px-2 sm:px-3 md:px-3.5 py-2 sm:py-2.5 w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  height={600}
                  width={700}
                  className="rounded-lg object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className={`p-4 sm:p-5 md:p-6 ${program.textColor}`}>
                <h3 className="mb-2 font-bold text-lg sm:text-xl md:text-2xl">
                  {program.title}
                </h3>

                {/* Duration with Clock Icon */}
                <div className="flex items-center gap-2 opacity-90 text-sm sm:text-base">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>{program.duration}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 5️⃣ Join AIESEC Section (Blue Banner) */}
      <div className="mx-auto px-2 sm:px-4 max-w-7xl">
        <h2 className="mt-6 sm:mt-9 mb-4 sm:mb-6 px-4 font-medium text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
          Join AIESEC and create your journey
        </h2>
        <div className="relative shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh]">
            <Image
              src="/6.webp"
              alt="Join AIESEC"
              fill
              className="object-cover"
            />

            {/* 6️⃣ Blue Gradient Overlay */}
            <div className="top-0 left-0 absolute bg-gradient-to-b from-primary/90 via-primary/70 to-primary/0 w-full h-1/2" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center sm:justify-between items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-8 pb-6 sm:pb-8 text-center">
            <p className="mb-6 sm:mb-8 max-w-3xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Join a local chapter and grow through hands-on experiences in the
              world's largest youth-led organization.
            </p>

            {/* Become a Member Button */}
            <Link href="/join" className="w-full sm:w-auto">
              <Button className="bg-white hover:bg-gray-100 shadow-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl w-full sm:w-auto font-semibold text-primary text-base sm:text-lg md:text-xl transition-colors duration-200">
                Become a member
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
