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
    <div>
      <div className="flex gap-25">
        <div className="ml-50">
          <Image src={logo} alt="logo" width={110} height={40} />
          <p
            style={{ fontFamily: "Minecraft" }}
            className="text-white text-xl mt-4 mb-5 font-ligh ml-1"
          >
            {job}
          </p>
          <div
            style={{ fontFamily: "Montserrat" }}
            className="text-zinc-300 w-225"
          >
            <p className="mb-5">{text[0]}</p>
            <p>{text[1]}</p>
          </div>
        </div>

        <div className="text-white" style={{ fontFamily: "Montserrat" }}>
          <p className="font-black">CLIENT</p>
          <p className="mb-5 font-extralight">{client}</p>

          <p className="font-black">TECH STACK</p>
          {techStack.map((tech, index) => (
            <p key={index} className="font-extralight">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
