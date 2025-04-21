import Section from "./Section";
import { curve } from "../assets";
import { BottomLine, Gradient } from "./design/About";
import SectionWrapper from "../hoc";

const About = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            {`Hello I am`}{" "}
            <span className="inline-block relative">
              {"P2T Trainee"}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Bridging Frontend and Backend: Your Go-To Full-Stack Developer
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 xl:mt-[8rem]">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="rounded-b-[0.9rem] overflow-hidden p-5">
                <p className="mb-2">{`My expertise spans a diverse range of programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, and Python. I thrive in collaborative environments, working closely with designers, product managers, and other developers to deliver high-quality solutions that meet user needs and business objectives.`}</p>
                <p className="mb-2">{`Throughout my career, I've tackled complex projects, from building scalable e-commerce platforms to developing intuitive user interfaces. My commitment to continuous learning ensures I stay updated with the latest industry trends and best practices, enabling me to provide cutting-edge solutions.`}</p>
                <p>{`Whether it's optimizing existing systems or creating new applications from scratch, I approach each project with enthusiasm, creativity, and a keen eye for detail. Let's work together to transform your vision into reality!`}</p>
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default SectionWrapper(About, "about");
