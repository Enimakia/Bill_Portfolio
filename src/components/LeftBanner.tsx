import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBullhorn,
} from "react-icons/fa";
import { SiFigma, SiAdobephotoshop } from "react-icons/si";
import { RiCodeLine } from "react-icons/ri";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Project Manager",
      "Graphic Designing",
      "Digital marketer",
      "Digital marketer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Bill N. Agha</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="..." cursorColor="#97F2E8" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          As the President of TiC Foundation, I am responsible for leading and
          managing the organization's vision of inspiring and empowering the
          next generation of tech entrepreneurs and leaders. I oversee various
          programs, including the TiC Bootcamp, TiC Summit, TiC Start-up
          accelerator program, TiC Hackathon, and TiC HuB. These programs have
          trained and inspired 2000+ students and startup founders, provided
          cash funding to young entrepreneurs, and created a collaborative space
          for technology talent, creatives, and startups. I ensure the
          foundation's initiatives have a positive and sustainable impact by
          overseeing strategic direction, day-to-day operations, engaging
          stakeholders, fostering partnerships, and advocating for the cause.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="#" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <RiCodeLine />
            </span>
            <span className="bannerIcon">
              <FaBullhorn />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
