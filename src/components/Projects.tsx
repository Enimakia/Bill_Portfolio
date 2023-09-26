import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="The TiC Startup Accelerator Program (SAP)"
            des="An initiative that seeks to accelerate the growth of early-stage tech startups in Cameroon. Entrepreneurs gain knowledge, guidance, and support from experienced mentors and investors who have been there and done it."
            src={projectOne}
          />
          <ProjectsCard
            title="The TiC Bootcamp"
            des=" A training camp that equips young Cameroonians with vital skills necessary to build a career in technology Participants learn about web development, graphic design, programming, design thinking, and more.
            "
            src={projectTwo}
          />
          <ProjectsCard
            title="The TiC Summit"
            des="  A tech innovation challenge for young innovators in secondary schools across Cameroon. Students are challenged to come up with creative solutions for real-world problems using technology"
            src={projectThree}
          />
          <ProjectsCard
            title="TiC HuB"
            des="A collaborative space for technology talent, creatives, educators, and Startups.
            "
            src={projectThree}
          />
          <ProjectsCard
            title="TiC Hackathon"
            des="The hackathon provides a platform for young people to develop and showcase their technological skills and ideas. Participants compete in teams to build innovative solutions to real-world problems.
            "
            src={projectOne}
          />
          <ProjectsCard
            title="TIC"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
