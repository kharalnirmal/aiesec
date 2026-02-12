import connectDB from "@/lib/db";
import { CarouselPlugin } from "@/modules/home/components/carousel";
import Explore from "@/modules/home/components/Explore";
import Hero from "@/modules/home/components/Hero";
import Partners from "@/modules/home/components/Partners";
import ValueDrivenLeaders from "@/modules/home/components/ValueDrivenLeaders";

export default function Home() {
  connectDB();
  return (
    <div>
      <Hero />
      <Explore />
      <ValueDrivenLeaders />
      <CarouselPlugin />
      <Partners />
    </div>
  );
}
