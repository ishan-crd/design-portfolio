import Image from "next/image";

interface TechIconProps {
  name: string;
  image: string;
}

export default function TechIcon({ name, image }: TechIconProps) {
  return (
    <div className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors relative overflow-hidden">
        <Image
          src={image}
          alt={`${name} logo`}
          width={24}
          height={24}
          className="object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-200"
        />
      </div>
      <span className="text-xs text-zinc-400 group-hover:text-white transition-colors text-center">
        {name}
      </span>
    </div>
  );
}
