"use client";
import Image from "next/image";

export default function Cradlepage() {
  return (
    <div className="relative w-full mt-46 h-60 mb-70">
      {/* Bar */}
      <div className="absolute inset-0 h-60 z-0">
        <Image
          src="/bg-image.jpg"
          alt="cradle-bg"
          objectFit="cover"
          layout="fill"
          className="blur-xl"
        />
      </div>
      {/* Images placed ABOVE the pink bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-30 z-10">
        <Image
          src="/cradle-laptop.png"
          alt="insyd1"
          width={693.375}
          height={430}
        />
        <Image src="/cradle-phone.png" alt="insyd2" width={220} height={413} />
      </div>
    </div>
  );
}
