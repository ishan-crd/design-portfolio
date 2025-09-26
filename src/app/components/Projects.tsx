import Image from "next/image";
const projects = [
  {
    title: "Cradle Clothing",
    desc: "Complete UI/UX design for a modern e-commerce platform specializing in gym apparel, featuring intuitive user flows and a bold athletic aesthetic.",
    image: "/cradle.png",
    tech: ["Figma", "Blender", "Adobe Illustrator"],
  },
  {
    title: "Insyd",
    desc: "Revolutionary clubbing access app design making nightlife more inclusive and accessible, with user-centered interface design and real-time venue information.",
    image: "/insyd-black.png",
    tech: ["Figma", "Adobe Illustrator"],
  },
  {
    title: "Tangle",
    desc: "Led the complete UI/UX design of Tangle's MVP, transforming the concept from initial wireframes to high-fidelity prototypes and user-ready design system.",
    image: "/tangle-des.png",
    tech: ["Figma", "InVision", "Sketch"],
  },
  {
    title: "Edwance.ai",
    desc: "End-to-end UI/UX design of Edwance.ai's landing page and dashboard, creating intuitive user experiences that drive product growth from concept to scale.",
    image: "/edwance-landing.png",
    tech: ["Figma", "Adobe Illustrator"],
  },
  {
    title: "Unmesa.ai",
    desc: "Designed the end-to-end user experience for an AI-powered productivity platform, including landing page, mobile and web application, and social media creatives with a cohesive blue gradient design system.",
    image: "/unmesa/Unmesa-laptop.png",
    tech: ["Figma", "Adobe Illustrator", "Sketch"],
  },
  {
    title: "Gennext IT",
    desc: "Designed the complete user experience of the company's official website, creating a modern, responsive interface with clear user flows and intuitive navigation to enhance user engagement.",
    image: "/gennext1.png",
    tech: ["Figma", "Sketch"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mb-10">
      <h2
        style={{ fontFamily: "Montserrat" }}
        className="text-2xl font-bold text-white mb-10 text-center"
      >
        Design Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {/* Project Image */}
            <div className="aspect-video bg-zinc-800 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
