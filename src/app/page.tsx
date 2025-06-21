import Profile from "./components/Profile";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import DesignProjects from "./components/DesignProjects";
import Insydpage from "./components/Insydpage";
import JobPage from "./components/JobPage";
import GennextPage from "./components/GennextPage";
import Cradlepage from "./components/Cradlepage";

const companyDetails = [
  {
    logo: "/insyd-logo.png",
    job: "Founder, Designer & Full-Stack App Developer",
    text: [
      "As the creator of Insyd, I led the product from concept to launch,handling end-to-end design, development, and strategy. I designed the UI/UX to deliver a sleek, nightlife-focused experience and built the app using React Native and Firebase for a smooth,cross-platform performance.",
      "I also handled branding, marketing strategy, and user feedback loops to guide iterations. Insyd was built to bridge the gap between partygoers and nightlife venues, creating a dynamic clubbing ecosystem.",
    ],
    client: "Insyd",
    techStack: ["React Native", "JavaScript"],
  },
  {
    logo: "/gennext-logo.png",
    job: "Designer & Front-End App Developer",
    text: [
      "At Gennext IT, I was responsible for designing the frontend of the company’s official website. I created a modern, responsive focusing on clear user flows and intuitive navigation to enhance user engagement.",
      "I led the UI/UX design process from wireframes to final implementation, ensuring the brand’s professionalism and services were effectively communicated. My work helped establish a strong digital presence for Gennext IT and improved user trust through thoughtful design and seamless performance.",
    ],
    client: "Gennext IT",
    techStack: ["React.js", "JavaScript", "Framer"],
  },
  {
    logo: "/cradle-logo.png",
    job: "Full Stack Developer & Designer",
    text: [
      "For Cradle, I handled the entire digital presence of the brand, from designing the user experience in Figma to developing the full-stack e-commerce website. I crafted a bold, athletic aesthetic that matched the brand's identity, focusing on a smooth shopping experience and strong visual appeal. ",
      "On the development side, I implemented product listings, cart and checkout functionality, and admin tools using modern web technologies. The result was a fully responsive, performance-optimized site that blended strong branding with seamless usability.",
    ],
    client: "Cradle",
    techStack: ["React.js", "CSS", "Javascript"],
  },
];

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

        <section id="insyd-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[0]} />
          <Insydpage />
        </section>

        <section id="gennext-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[1]} />
          <GennextPage />
        </section>

        <section id="cradle-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[2]} />
          <Cradlepage />
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
