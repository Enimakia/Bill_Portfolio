import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 "
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Bamenda (2016 - 2019)"
            result="3.15/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="High School Education"
            subTitle="Government Bilingual Practicing High School Yaoundé (2014 - 2016)"
            result="Success"
            des="Higher education is tertiary education leading to award of a Higher education, also called Advance Level."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="GBPSS Yaoundé (2009 - 2014)"
            result="Success"
            des="Higher education is tertiary education leading to award of  Ordinary Level"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Training
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certified Project Manager by IBM and IPMA (November 2022 - December 2022)"
            subTitle=" By IBM and IPMA (2022)"
            result="Yaounde"
            des="I completed an exceptional project management training program offered by IBM and the International Project Management Association (IPMA)."
          />
          <ResumeCard
            title="Entrepreneurship training"
            subTitle="Y-Combinator Startup School (April 2021 - February 2022)"
            result="Yaounde"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Certified Adobe Visual Designer Training from Adobe (April - June 2022)"
            subTitle="Adobe"
            result="Success"
            des="I recently completed the Adobe Visual Design Training offered by Adobe, and it has been a transformative experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
