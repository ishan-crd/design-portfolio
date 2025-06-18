import Profile from "./components/Profile";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import DesignProjects from "./components/DesignProjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-mono">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-semibold text-lg font-mono">
              Ishan Gupta
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
              <a
                href="#about"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#tech"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#experience"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="dev projects">
          <Projects />
        </section>

        <section id="des projects">
          <DesignProjects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
