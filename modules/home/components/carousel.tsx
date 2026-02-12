"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  // review
  const testimonials = [
    {
      id: 1,
      title: "A Home after Home",
      content:
        "AIESEC has been more than just an organization for me; it's been a home away from home. The friendships I've forged and the experiences I've had have shaped me into the person I am today. It's a place where I've found support, growth, and a sense of belonging.",
      entity: "AIESEC Alumni",
      image: "/v3.webp",
    },
    {
      id: 2,
      title: "Growth Beyond Comfort",
      content:
        "Joining AIESEC pushed me beyond my comfort zone. From leading projects to working with diverse teams, every challenge helped me grow personally and professionally. It taught me resilience and confidence.",
      entity: "AIESEC Exchange Participant",
      image: "/v2.webp",
    },
    {
      id: 3,
      title: "Leadership Redefined",
      content:
        "AIESEC redefined leadership for me. It’s not just about managing tasks but inspiring people and creating impact. The exposure and responsibility I received helped me discover my true potential.",
      entity: "AIESEC Local Committee President",
      image: "/v1.webp",
    },
    {
      id: 4,
      title: "Global Connections",
      content:
        "Through AIESEC, I connected with people from different cultures and backgrounds. These global friendships opened my mind and helped me see the world from new perspectives.",
      entity: "AIESEC Global Volunteer",
      image: "/4.webp",
    },
    {
      id: 5,
      title: "Learning by Doing",
      content:
        "What I loved most about AIESEC was the hands-on learning. Real responsibilities, real deadlines, and real impact. It prepared me for the professional world better than any classroom could.",
      entity: "AIESEC Team Leader",
      image: "/5.webp",
    },
    {
      id: 6,
      title: "Impact that Matters",
      content:
        "Being part of AIESEC allowed me to contribute to something bigger than myself. The projects we ran created meaningful change in communities and gave me a deep sense of purpose.",
      entity: "AIESEC Member",
      image: "/6.webp",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="bg-gray-100 mx-auto w-full max-w-7xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className="flex items-center gap-8 p-4 w-full">
              <div className="relative rounded-xl w-1/3 h-64 overflow-hidden">
                <Image
                  alt="review"
                  src={testimonial.image}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                  {testimonial.title}{" "}
                </h3>{" "}
                <p className="mx-auto mt-2 sm:mt-3 md:mt-4 max-w-2xl text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  {" "}
                  {testimonial.content}{" "}
                </p>{" "}
                <p className="mt-4 font-medium text-gray-900 text-sm">
                  {" "}
                  - {testimonial.entity}{" "}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
