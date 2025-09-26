export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 font-mono">
      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <div className="pt-8">
          <h3 className="text-2xl font-semibold text-white mb-8">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-blue-950/20 hover:to-zinc-900/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  User Interface Design
                </h4>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Creating beautiful, responsive user interfaces using Figma,
                  Adobe Creative Suite, and modern design systems that deliver
                  exceptional visual experiences.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800 rounded-xl p-6 hover:border-green-500/30 hover:bg-gradient-to-br hover:from-green-950/20 hover:to-zinc-900/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  User Experience Design
                </h4>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Crafting intuitive user experiences through research, wireframing,
                  prototyping, and usability testing to create user-centered
                  design solutions.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-950/20 hover:to-zinc-900/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Visual Design
                </h4>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Creating compelling visual designs and brand identities using
                  Adobe Creative Suite, Figma, and design systems that establish
                  strong brand presence.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/30 hover:bg-gradient-to-br hover:from-orange-950/20 hover:to-zinc-900/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Design Systems & Prototyping
                </h4>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Building comprehensive design systems and creating interactive
                  prototypes using Figma, Principle, and other tools to bring
                  designs to life and validate user flows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
