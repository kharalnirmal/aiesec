import connectDB from "@/lib/db";
import Explore from "@/modules/home/components/Explore";
import Hero from "@/modules/home/components/Hero";
import ValueDrivenLeaders from "@/modules/home/components/ValueDrivenLeaders";

import Image from "next/image";

export default function Home() {
  connectDB();
  return (
    <div>
      <Hero />
      <Explore />
      <ValueDrivenLeaders />
    </div>
  );
}
