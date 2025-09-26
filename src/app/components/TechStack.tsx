import TechIcon from "./TechIcon";

export default function TechStack() {
  const primarySkills = [
    { name: "Figma", image: "/icons/figma.svg" },
    { name: "Illustrator", image: "/icons/figma.svg" },
    { name: "Photoshop", image: "/icons/figma.svg" },
    { name: "InVision", image: "/icons/figma.svg" },
    { name: "Framer", image: "/icons/figma.svg" },
    { name: "Adobe XD", image: "/icons/figma.svg" },
  ];

  const otherSkills = [
    { name: "Blender", image: "/icons/figma.svg" },
    { name: "Unity", image: "/icons/figma.svg" },
    { name: "React", image: "/icons/react.png" },
    { name: "Next.js", image: "/icons/next-js.svg" },
    { name: "TypeScript", image: "/icons/typescript.png" },
    { name: "Tailwind", image: "/icons/tailwind.png" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Design Tools</h2>

      {/* Primary Skills */}
      <div className="mb-12">
        <h3 className="text-lg font-medium text-zinc-300 mb-6">
          Design Tools:
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {primarySkills.map((skill) => (
            <TechIcon key={skill.name} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div>
        <h3 className="text-lg font-medium text-zinc-300 mb-6">
          Additional Skills:
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {otherSkills.map((skill) => (
            <TechIcon key={skill.name} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
