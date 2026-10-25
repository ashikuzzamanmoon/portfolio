import React from "react";
import dynamic from "next/dynamic";
import { marqueeText1, marqueeText2 } from "../Utlits/marqueeItems"; 
import About from "../Components/About/About";
import Skills from "@/Components/About/Skills";

const MarqueeWapper = dynamic(() => import("../Components/Shared/MarqueeWapper"), { ssr: false });
const Projects = dynamic(() => import("../Components/Projects"));
const Metting = dynamic(() => import("../Components/Metting"));
const Services = dynamic(() => import("../Components/Services/Services"));
const WorkeProcess = dynamic(() => import("../Components/WorkeProcess/WorkeProcess"));
const Testimonial = dynamic(() => import("../Components/Testimonial"), { ssr: false });
const Blogs = dynamic(() => import("../Components/Blogs/Blogs"));


const Home = () => {
  return (
    <>
      <MarqueeWapper direction="left" items={marqueeText1} />
      <About />
      <MarqueeWapper direction="right" items={marqueeText2} />
      <Skills />
      {/* <Awards /> */}
      <Projects />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      <Testimonial />
      <Blogs />
    </>
  );
};

export default Home;
