"use client";
import Image from "next/image";

export default function Resandcafe() {
  return (
    <div className="relative w-full h-[600px] mb-20 flex justify-center items-center bg-black overflow-hidden">
      {/* Blurred glowing background */}
      <div className="absolute w-full h-full z-0 flex justify-center gap-10 items-center">
        {/* Left glow */}
        <div className="w-72 h-72 bg-orange-500 opacity-70 blur-[80px] rounded-full" />
        {/* Center glow */}
        <div className="w-96 h-96 bg-orange-400 opacity-70 blur-[80px] rounded-full" />
        {/* Right glow */}
        <div className="w-72 h-72 bg-orange-500 opacity-70 blur-[80px] rounded-full" />
      </div>

      {/* Phone images */}
      <div className="relative z-10 flex gap-32">
        <Image src="/Res1.png" alt="screen1" width={240} height={450} />
        <Image src="/Res2.png" alt="screen2" width={240} height={450} />
        <Image src="/Res3.png" alt="screen3" width={240} height={450} />
      </div>
    </div>
  );
}
