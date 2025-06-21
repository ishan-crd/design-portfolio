"use client";
import Image from "next/image";

export default function GennextPage() {
  return (
    <div className="flex justify-center items-center gap-20 bg-black relative pb-20">
      {/* Laptop Section */}
      <div className="relative w-[600px] h-[400px] flex items-center justify-center">
        {/* Background Circles */}
        <div className="absolute w-[500px] h-[390px] rounded-full bg-[#891415] blur-2xl z-0" />
        {/* Image */}
        <Image
          src="/gennext1.png"
          alt="laptop"
          width={554.6}
          height={370}
          className="z-10"
        />
      </div>

      {/* Phone Section */}
      <div className="relative w-[300px] h-[500px] flex items-center justify-center">
        {/* Background Circles */}
        <div className="absolute w-[220px] h-[420px] rounded-full bg-[#891415] blur-2xl z-0" />
        {/* Image */}
        <Image
          src="/gennext2.png"
          alt="phone"
          width={220}
          height={413}
          className="z-10"
        />
      </div>
    </div>
  );
}
