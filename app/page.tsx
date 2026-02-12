import connectDB from "@/lib/db";
import Hero from "@/modules/home/components/Hero";

import Image from "next/image";

export default function Home() {
  connectDB();
  return (
    <div>
      <Hero />
    </div>
  );
}
