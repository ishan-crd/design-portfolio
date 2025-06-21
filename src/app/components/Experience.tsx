const experiences = [
  {
    company: "Gennext IT",
    role: "Full Stack Developer - Intern",
    type: "Full Time",
    duration: "Ongoing",
    period: "May 2025 - Now",
    description:
      "Developing scalable web applications and architecting solutions.",
  },
  {
    company: "Insyd",
    role: "App Developer - Owner",
    type: "Full Time",
    duration: "Ongoing",
    period: "March 2025 - Ongoing",
    description: "Built mobile app along with backend and front end designing.",
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-mono mb-26">
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
