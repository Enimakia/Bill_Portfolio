import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Federal Assistance Award "
            subTitle="Federal Assistance Award Sep 2022"
            result="Success"
            des="My team and I applied and received funding from the US Embassy Yaounde, which helped us to execute an accelerator program. During the project, 100 Selected startups from across the national territory went through our 6+ months online tested and proven successful acceleration framework program."
          />
          <ResumeCard
            title="Second-best digital innovation project "
            subTitle="Second-best digital innovation project of the year 2020 and 2022 (August 2020, March 2022)"
            result="Success"
            des="I emerged second-best digital innovation project organized by the Ministry of Post and Telecommunications in 2020 and 2022. The project I presented was an EdTech digital platform that facilitates the learning of Cameroon local languages, Basically the Duolingo for Cameroon local languages. I won an award worth 10 Million XAF."
          />
          <ResumeCard
            title="Cameroon Cultural Blend Festival Delegate"
            subTitle="Cameroon Cultural Blend Festival Delegate"
            result="Success"
            des="Cameroon Cultural Blend Festival Delegate"
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MCW Young Leader Fellow 2022 "
            subTitle="MCW Young Leader Fellow 2022 (August 2022 - September 2023)"
            result="Success"
            des="Out of a very tight selection process, I was awarded as one of the MCW young leaders in the world. As part of the award, I had access to various training, mentorship, and funding opportunities. I learned vision planning, community assessment, and leadership concepts during the training."
          />
          <ResumeCard
            title="Microsoft Office Specialist National Champion"
            subTitle="Microsoft Office Specialist National Champion(May 2018, May 2019)"
            result="Success"
            des="Out of 2000 contestants nationwide, I emerged winner in the Microsoft Excel specialist track. First in 2018 and 2019."
          />
          <ResumeCard
            title="MIT Hacking Healthcare Hackathon third prize Winner "
            subTitle="MIT Hacking Healthcare Hackathon third prize Winner "
            result="Success"
            des="MIT Hacking Healthcare Hackathon third prize Winner "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
