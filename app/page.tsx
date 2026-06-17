import Profile from "../component/Profile";
import About from "../component/About";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import EmploymentHistory from "../component/EmploymentHistory";
import Skills from "../component/Skills";

export default function Home() {
  return (
    <main>
      <Profile />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="projects">
        <EmploymentHistory />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
