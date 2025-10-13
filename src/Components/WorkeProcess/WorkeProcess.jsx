import React from "react";
import Title from "../Shared/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Discovery",
    info: "We begin by deeply understanding your vision. This phase involves strategic planning and creating an intuitive, user-centric design.",
    list: [
      "Requirement Analysis & Strategy",
      "Wireframing & UI/UX Design (Figma)",
      "Interactive Prototyping",
    ],
  },
  {
    id: 2,
    title: "Development",
    info: "I bring the designs to life by writing clean, scalable, and robust code for both the front-end and back-end of your application.",
    list: [
      "Full-Stack Coding (MERN/Next.js)",
      "API Development & Integration",
      "Database Architecture",
    ],
  },
  {
    id: 3,
    title: "Testing & Launch",
    info: "Rigorous testing ensures a flawless user experience. After quality assurance, your project is deployed to a live environment.",
    list: [
      "Quality Assurance & Bug Fixing",
      "Performance Optimization",
      "Deployment & Go-Live Support",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px] pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle="Turning Your Vision into Reality With My Proven Workflow"
          sortTitle="Working Process"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
