import Profile from "./components/Profile";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
// import DesignProjects from "./components/DesignProjects";
import Insydpage from "./components/Insydpage";
import JobPage from "./components/JobPage";
import GennextPage from "./components/GennextPage";
import Cradlepage from "./components/Cradlepage";
import Resandcafe from "./components/Resandcafe";
import Unmesapage from "./components/Unmesapage";

const companyDetails = [
  {
    logo: "/cradle-logo.png",
    job: "UI/UX Designer",
    text: [
      "For Cradle, I designed the entire digital design presence of the brand, from designing the user experience in Figma to creating the visual design system. I crafted a bold, athletic aesthetic that matched the brand's identity, focusing on a smooth shopping experience and strong visual appeal.",
      "I designed the complete user journey from product discovery to checkout, creating wireframes, prototypes, and high-fidelity designs. The result was a comprehensive design system that blended strong branding with seamless usability across all touchpoints.",
    ],
    client: "Cradle",
    techStack: ["Figma", "Blender", "Adobe Illustrator"],
  },
  {
    logo: "/insyd-logo.png",
    job: "Founder & UI/UX Designer",
    text: [
      "As the creator of Insyd, I led the product from concept to launch, handling end-to-end UI/UX design, branding, and strategy. I designed the complete user experience to deliver a sleek, nightlife-focused interface that prioritizes user engagement and brand recognition.",
      "I also handled visual identity design, marketing strategy, and user feedback loops to guide design iterations. Insyd was designed to bridge the gap between partygoers and nightlife venues, creating a dynamic clubbing ecosystem through thoughtful UX design.",
    ],
    client: "Insyd",
    techStack: ["Figma", "Adobe Illustrator"],
  },
  {
    logo: "/gennext-logo.png",
    job: "UI/UX Designer",
    text: [
      "At Gennext IT, I designed the complete user experience of the company's official website. I designed a modern, responsive interface focusing on clear user flows and intuitive navigation to enhance user engagement.",
      "I designed the UI/UX design process from wireframes to final implementation, ensuring the brand's professionalism and services were effectively communicated. My design work helped establish a strong digital presence for Gennext IT and improved user trust through thoughtful design and seamless user experience.",
    ],
    client: "Gennext IT",
    techStack: ["Figma", "Sketch"],
  },
  {
    logo: "/unmesa/unmesa-logo.svg",
    job: "UI/UX Designer",
    text: [
      "At Unmesa.ai, I designed the end-to-end user experience for their AI-powered productivity platform, including the landing page, mobile and web application, and social media creatives. Using Figma and Adobe Creative Suite, I designed a cohesive design system featuring a sleek blue gradient aesthetic that reflects the brand's modern and intelligent identity.",
      "My design work focused on creating user-friendly dashboards, task management flows, and productivity tools that feel intuitive and engaging. I designed clean layouts, smooth navigation, and visually appealing elements that make the app both functional and delightful. Additionally, I designed for consistency across digital platforms, from the product interface to social media presence, strengthening Unmesa.ai's overall brand identity.",
    ],
    client: "Unmesa.ai",
    techStack: ["Figma", "Adobe Illustrator", "Sketch"],
  },
  {
    logo: "/res&cafe-logo.png",
    job: "UI/UX Designer",
    text: [
      "At Res&Cafe, I designed the UI/UX design for a digital restaurant menu and ordering app, focused on streamlining the dining experience. Using Figma, I designed an intuitive, visually appealing interface that allowed customers to easily browse the menu, customize orders, and place them seamlessly.",
      "I designed for ease of use, responsiveness across devices, and a smooth user journey from selection to checkout, tailored for both dine-in and takeaway experiences. I designed wireframes, prototypes, and final designs that enhanced the overall dining experience.",
    ],
    client: "Res&Cafe",
    techStack: ["Figma", "InVision"],
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
            <a
              href="/IshanGupta_Resume.pdf"
              download
              className="md:hidden lg:hidden ml-10 relative flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 px-3 py-1.5 rounded-md hover:bg-zinc-800 font-mono"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>

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
                Design Tools
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

        <section id="cradle-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[0]} />
          <Cradlepage />
        </section>

        <section id="insyd-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[1]} />
          <Insydpage />
        </section>

        <section id="gennext-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[2]} />
          <GennextPage />
        </section>

        <section id="unmesa-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[3]} />
          <Unmesapage />
        </section>

        <section id="resandcafe-project" className="hidden md:block lg:block">
          <JobPage company={companyDetails[4]} />
          <Resandcafe />
        </section>

        <section id="design projects">
          <Projects />
        </section>

        {/* <section id="des projects">
          <DesignProjects />
        </section> */}

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
