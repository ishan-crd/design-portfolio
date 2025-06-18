import Image from "next/image";
export default function Links({ link }: { link: string }) {
  return (
    <div className="outline border-zinc-100 w-6 h-6 rounded-full relative overflow-hidden">
      <Image src={link} alt="xlogo" layout="fill" objectFit="cover" />
    </div>
  );
}
