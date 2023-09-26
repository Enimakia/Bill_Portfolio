// import { AiFillAppstore } from "react-icons/ai";
import {
  FaBriefcase,
  FaCode,
  FaTasks,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business & Entrepreneurship"
            des="Embrace the entrepreneurial spirit and embark on a journey to turn your passion into a thriving business venture. From crafting a solid business plan to navigating the dynamic business landscape with adaptability and innovation, unlock boundless opportunities for success."
            icon={<FaBriefcase />}
          />
          <Card
            title=" Algorithm and Programming "
            des="Enter the world of algorithms and programming, where innovation meets problem-solving. Dive deep into the intricate world of code, mastering programming languages and algorithms to create elegant solutions that optimize processes and shape the digital landscape."
            icon={<FaCode />}
          />
          <Card
            title="Leadership"
            des="Step into your role as a leader and inspire others to achieve greatness. Develop essential leadership skills such as effective communication, strategic thinking, and empowering team management, creating a culture of collaboration and innovation."
            icon={<SiProgress />}
          />
          <Card
            title="Project Management"
            des="Be the driving force behind successful projects as you master the art of project management. From meticulous planning and efficient execution to seamless monitoring and stakeholder satisfaction, deliver projects on time, within budget, and beyond expectations."
            icon={<FaTasks />}
          />
          <Card
            title="Graphic Design"
            des="Let your imagination soar as you create visually stunning designs that leave a lasting impression. With a keen eye for aesthetics and a mastery of design principles, transform ideas into captivating visuals that bring your brand's story to life."
            icon={<FaPalette />}
          />
          <Card
            title="Digital Marketing"
            des="Reach new heights in your digital marketing efforts with data-driven strategies that unlock your brand's online potential. From targeted ads and optimized campaigns to social media engagement, master the art of reaching and captivating your target audience."
            icon={<FaChartLine />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
