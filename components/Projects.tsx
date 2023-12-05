import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/images/amazonClone.webp";
import cyberBlog from "../public/images/cyberBlog.webp";
import mShop from "../public/images/mShop.webp";
import dynamicPortfolio from "../public/images/dynamicPortfolio.png";
import reactBD from "../public/images/reactBD.png";
import dashboard from "../public/images/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={reactBD.src}
          title="Cyber Security"
          link="https://reactbd.com/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Cyber Security"
          link="https://blog.reactbd.com/"
        />
        <ProjectCard
          img={mShop.src}
          title="Noor Shopping"
          link="https://orebishopping.reactbd.com/"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Dynamic Portfolio"
          link="https://amazonclone.reactbd.com/"
        />

        <ProjectCard
          img={dashboard.src}
          title="Dashboard"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;