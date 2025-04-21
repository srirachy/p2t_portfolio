import ButtonGradient from "./assets/svg/ButtonGradient";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <ButtonGradient />
    </>
  );
}