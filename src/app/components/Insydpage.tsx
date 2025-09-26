"use client";
import Image from "next/image";

export default function Insydpage() {
  return (
    <div className="relative w-full mt-30 h-60 mb-70">
      {/* Pink Bar */}
      <div className="absolute inset-0 bg-pink-800 blur-3xl h-60 z-0" />

      {/* Images placed ABOVE the pink bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-8 z-10">
        <Image 
          src="/insyd1.png" 
          alt="insyd1" 
          width={220} 
          height={413}
          className="rounded-lg"
        />
        <Image 
          src="/insyd2.png" 
          alt="insyd2" 
          width={220} 
          height={413}
          className="rounded-lg"
        />
        <Image 
          src="/insyd3.png" 
          alt="insyd3" 
          width={220} 
          height={413}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
