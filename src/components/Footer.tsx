import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div>
          <span className="text-3xl font-bold text-skyblue">BILL N.</span>
          <span className="text-3xl font-bold"> AGHA</span>
        </div>

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
      {/* <div className="w-full h-full flex flex-col justify-between">
  <div>
    <h3 className="text-xl uppercase text-designColor tracking-wider">
      Quick Link
    </h3>
    <ul className="flex  gap-5 font-titleFont font-medium py-20 ">
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
          About
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
          Resume
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
         Projects
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
        Testimonial
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
       Contact
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
      <li>
        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
         Home
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-y-[0%] group-hover:translate-y-1 transition-transform duration-300"></span>
        </span>
      </li>
    </ul>
  </div>
</div> */}
    </FadeIn>
  );
};

export default Footer;
