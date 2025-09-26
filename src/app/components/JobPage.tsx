"use client";
import Image from "next/image";

type Company = {
  logo: string;
  job: string;
  text: string[];
  client: string;
  techStack: string[];
};

type Props = {
  company: Company;
};

export default function JobPage({ company }: Props) {
  const { logo, job, text, client, techStack } = company;

  return (
    <div className="w-full px-16 lg:px-32 xl:px-48 2xl:px-64 py-16 max-w-screen-2xl mx-auto">
      <div className="flex gap-20 items-start justify-between">
        {/* Left: Logo & Description */}
        <div className="flex-1">
          <Image 
            src={logo} 
            alt="logo" 
            width={client === "Unmesa.ai" ? 150 : 110} 
            height={client === "Unmesa.ai" ? 50 : 40} 
          />
          <p className="text-white text-3xl xl:text-3xl mt-6 mb-6 font-bold font-mono">
            {job}
          </p>
          <div
            style={{ fontFamily: "Montserrat" }}
            className="text-zinc-300 text-base xl:text-lg max-w-3xl leading-relaxed"
          >
            <p className="mb-5">{text[0]}</p>
            <p>{text[1]}</p>
          </div>
        </div>

        {/* Right: Client & Tech Stack */}
        <div
          className="min-w-[200px] max-w-xs text-white text-sm xl:text-base"
          style={{ fontFamily: "Montserrat" }}
        >
          <p className="font-black mb-1">CLIENT</p>
          <p className="mb-6 font-extralight">{client}</p>

          <p className="font-black mb-1">TOOLS</p>
          <div className="space-y-1">
            {techStack.map((tech, index) => (
              <p key={index} className="font-extralight">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
