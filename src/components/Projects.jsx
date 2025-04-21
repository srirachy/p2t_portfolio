import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "../hoc";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <span className={`${styles.sectionSubText}`}>
          My work
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </span>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {`The following projects showcase my expertise as a Full-Stack Developer. My work spans various domains, including e-commerce, social media, project management, blogging, weather forecasting, 
          online learning, fitness tracking, and real estate. Each project highlights my proficiency with different tech stacks and my ability to deliver scalable, user-centric solutions. 
          Through these projects, I've demonstrated my skills in front-end and back-end development, API integration, real-time data synchronization, and creating seamless user experiences. 
          Dive in to see how I transform ideas into functional, impactful applications.`}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
