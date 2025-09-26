"use client";
import Image from "next/image";

export default function Unmesapage() {
  return (
    <div className="flex justify-center items-center gap-20 bg-black relative pb-20">
      {/* Laptop Section */}
      <div className="relative w-[600px] h-[400px] flex items-center justify-center">
        {/* Background with heavy blur */}
        <div 
          className="absolute w-[500px] h-[390px] rounded-full z-0 blur-3xl"
          style={{
            background: 'linear-gradient(90deg, #BFD4FD 0%, #2B71FA 100%)'
          }}
        />
        {/* Image */}
        <Image
          src="/unmesa/Unmesa-laptop.png"
          alt="unmesa-laptop"
          width={554.6}
          height={370}
          className="z-10"
        />
      </div>

      {/* Posts Section */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="relative w-[220px] h-[200px] flex items-center justify-center">
            {/* Background blur for post 1 */}
            <div 
              className="absolute w-[180px] h-[160px] rounded-full z-0 blur-2xl"
              style={{
                background: 'linear-gradient(90deg, #BFD4FD 0%, #2B71FA 100%)'
              }}
            />
            <Image
              src="/unmesa/Post 1.png"
              alt="unmesa-post1"
              width={180}
              height={160}
              className="rounded-lg z-10"
            />
          </div>
          <div className="relative w-[220px] h-[200px] flex items-center justify-center">
            {/* Background blur for post 2 */}
            <div 
              className="absolute w-[180px] h-[160px] rounded-full z-0 blur-2xl"
              style={{
                background: 'linear-gradient(90deg, #BFD4FD 0%, #2B71FA 100%)'
              }}
            />
            <Image
              src="/unmesa/Post 2.png"
              alt="unmesa-post2"
              width={180}
              height={160}
              className="rounded-lg z-10"
            />
          </div>
        </div>
        <div className="relative w-[220px] h-[413px] flex items-center justify-center">
          {/* Background blur for post 3 */}
          <div 
            className="absolute w-[180px] h-[380px] rounded-full z-0 blur-2xl"
            style={{
              background: 'linear-gradient(90deg, #BFD4FD 0%, #2B71FA 100%)'
            }}
          />
          <Image
            src="/unmesa/Post3.png"
            alt="unmesa-post3"
            width={180}
            height={380}
            className="rounded-lg z-10"
          />
        </div>
      </div>
    </div>
  );
}
