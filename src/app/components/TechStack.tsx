import TechIcon from "./TechIcon";

export default function TechStack() {
  const primarySkills = [
    { name: "React", image: "/icons/react.png" },
    { name: "Next.js", image: "/icons/next-js.svg" },
    { name: "TypeScript", image: "/icons/typescript.png" },
    { name: "JavaScript", image: "/icons/JavaScript.png" },
    { name: "Tailwind CSS", image: "/icons/tailwind.png" },
    { name: "Node.js", image: "/icons/Nodejs.png" },
    { name: "Python", image: "/icons/python.png" },
    { name: "PostgreSQL", image: "/icons/postgresql.png" },
    { name: "MongoDB", image: "/icons/mongodb.svg" },
    { name: "Git", image: "/icons/git.png" },
    { name: "Figma", image: "/icons/figma.svg" },
    { name: "React Native", image: "/icons/react.png" },
  ];

  const otherSkills = [
    { name: "AWS", image: "/icons/aws.png" },
    { name: "Vercel", image: "/icons/vercel.svg" },
    { name: "Firebase", image: "/icons/firebase.png" },
    { name: "Prisma", image: "/icons/prisma.png" },
    { name: "Express", image: "/icons/expressjs.png" },
    { name: "Vue.js", image: "/icons/vue.png" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>

      {/* Primary Skills */}
      <div className="mb-12">
        <h3 className="text-lg font-medium text-zinc-300 mb-6">
          Area of expertise:
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
          Other Skills & Tech:
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
