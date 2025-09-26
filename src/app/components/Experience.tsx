const experiences = [
  {
    company: "Edwance.ai",
    role: "UI/UX Designer - Intern",
    type: "Full Time",
    duration: "Ongoing",
    period: "January 2025 - Ongoing",
    description: "Leading the end-to-end UI/UX design of Edwance.ai's landing page and dashboard, creating intuitive user experiences and beautiful interfaces that drive product growth from concept to a fully scaled service.",
  },
  {
    company: "Tangle",
    role: "UI/UX Designer",
    type: "Freelance",
    duration: "Ongoing",
    period: "October 2024 - Ongoing",
    description: "Designing the complete user experience for Tangle's MVP, from initial wireframes to high-fidelity prototypes for a funded startup, focusing on creating seamless cross-platform user journeys.",
  },
  {
    company: "Insyd",
    role: "UI/UX Designer - Founder",
    type: "Freelance",
    duration: "Completed",
    period: "January 2024 - April 2024",
    description: "Designed the complete user experience and visual identity for the Insyd app from concept to launch, creating a sleek, nightlife-focused design that prioritizes user engagement and brand recognition.",
  },
  {
    company: "Cradle",
    role: "UI/UX Designer",
    type: "Freelance",
    duration: "Completed",
    period: "June 2022 - November 2022",
    description: "Designed the complete digital design presence for Cradle's e-commerce platform, creating a bold athletic aesthetic and comprehensive design system that enhanced the brand's online presence.",
  },
  {
    company: "Res&Cafe",
    role: "UI/UX Designer",
    type: "Freelance",
    duration: "Completed",
    period: "September 2021 - February 2022",
    description: "Designed the UI/UX for Res&Cafe's digital restaurant menu and ordering app, creating an intuitive interface that streamlined the dining experience for both dine-in and takeaway customers.",
  },
  {
    company: "Unmesa.ai",
    role: "UI/UX Designer - Founder",
    type: "Freelance",
    duration: "Completed",
    period: "March 2021 - August 2021",
    description: "Designed the end-to-end user experience for Unmesa.ai's AI-powered productivity platform, including landing page, mobile and web application, and social media creatives with a cohesive blue gradient design system.",
  },
  {
    company: "DesignCraft Studio",
    role: "UI/UX Designer - Intern",
    type: "Internship",
    duration: "Completed",
    period: "August 2020 - January 2021",
    description: "Designed user interfaces and user experiences for various client projects at DesignCraft Studio, gaining foundational experience in wireframing, prototyping, and creating responsive designs across different industries.",
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
