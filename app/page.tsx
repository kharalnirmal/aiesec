import connectDB from "@/lib/db";
import Navbar from "@/modules/home/components/Navbar";
import Image from "next/image";

export default function Home() {
  connectDB();
  return (
    <div>
      <Navbar />
    </div>
  );
}
