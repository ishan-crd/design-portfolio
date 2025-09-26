const experiences = [
  {
    company: "Edwance.ai",
    role: "UI/UX Designer - Intern",
    type: "Full Time",
    duration: "Ongoing",
    period: "July 2025 - Ongoing",
    description: "Leading the end-to-end UI/UX design of Edwance.ai's landing page and dashboard, creating intuitive user experiences and beautiful interfaces that drive product growth from concept to a fully scaled service.",
  },
  {
    company: "Tangle",
    role: "UI/UX Designer",
    type: "Freelance",
    duration: "Ongoing",
    period: "July 2025 - Ongoing",
    description: "Designing the complete user experience for Tangle's MVP, from initial wireframes to high-fidelity prototypes for a funded startup, focusing on creating seamless cross-platform user journeys.",
  },
  {
    company: "Gennext IT",
    role: "UI/UX Designer - Intern",
    type: "Full Time",
    duration: "Completed",
    period: "April 2025 - July 2025",
    description:
      "Designing user-centered digital solutions for Gennext IT, creating modern, responsive interfaces and user experiences that enhance client engagement and brand presence.",
  },
  {
    company: "Insyd",
    role: "UI/UX Designer - Founder",
    type: "Full Time",
    duration: "Completed",
    period: "March 2025 - June 2025",
    description: "Designed the complete user experience and visual identity for the Insyd app from concept to launch, creating a sleek, nightlife-focused design that prioritizes user engagement and brand recognition.",
  },
  
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-mono mb-10">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-zinc-800 pl-6 relative">
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-zinc-500">{exp.period}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="text-zinc-300">{exp.role}</span>
                <span className="hidden sm:block text-zinc-600">•</span>
                <span className="text-zinc-500">
                  {exp.type} · {exp.duration}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
