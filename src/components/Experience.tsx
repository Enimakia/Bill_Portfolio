import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science Teacher"
            subTitle="Ministry of Secondary Education - (2019 - Present)"
            result="YAOUNDE"
            des="As a computer science teacher, I am responsible for teaching students computer and programming knowledge and skills. I help students understand how computers work, covering scientific and mathematical concepts behind them and their hardware and software components."
          />
          <ResumeCard
            title="Founder and President of Tech Innovation Center - TiC  Foundation"
            subTitle="CEO - ( 2020 - Present)"
            result="YOUNDE"
            des="As the President of TiC Foundation, I am responsible for leading and managing the organization's vision of inspiring and empowering the next generation of tech entrepreneurs and leaders. "
          />
          <ResumeCard
            title="Tech Lead and Coordinator at Open Dreams Yaounde"
            subTitle="Open Dreams - (2017 - Present)"
            result="YAOUNDE"
            des="At Open Dreams Yaounde, my role is highly dynamic and multifaceted. I organized the fundraising for the Aviva Day to help children born with neo-natal problems."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mentor and Judge at Technovation International"
            subTitle="Technovation International (2020 - Present)"
            result="YAOUNDE"
            des="As a member of the Cameroon Toastmasters International Club, I have undergone professional training to enhance my communication and leadership skills."
          />
          <ResumeCard
            title="Volunteer at Cameroon Radio and Television station NorthWest"
            subTitle="Radio and Television station (Sep 2017 - Dec 2019)"
            result="NorthWest"
            des="As a Volunteer at the Cameroon Radio and Television station on a Youth Forum program; A program where we inspired and educated the youths on 21st-century opportunities and challenges. I ensured the smooth functioning of the station; and participated in assisting the staff in conducting interviews and gathering news reports."
          />
          <ResumeCard
            title="Member of the Cameroon Toast Master International Club"
            subTitle="Toast Master International Club( September 2020 - Present)"
            result="CAMEROON"
            des="As a member of the Cameroon Toastmasters International Club, I have undergone professional training to enhance my communication and leadership skills. This organization provides a supportive environment for individuals to develop public speaking abilities, build confidence, and refine leadership capabilities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
