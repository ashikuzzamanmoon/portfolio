import React from "react";
import AboutCard from "./AboutCard";

const Experience = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${
        isTabActive === "experience"
          ? "z-10 opacity-100 translate-y-0"
          : "translate-y-20 -z-10 opacity-0 absolute  top-0 "
      } `}
    >
      <AboutCard
        title={"My Experience"}
        para={
          "With experience as a full-time Frontend Developer and impactful internships as a Full Stack Developer, I have a proven track record of enhancing application stability, building features from scratch, and contributing to dynamic web solutions in collaborative environments."
        }
        info={[
          {
            date: "Sept 2024 - Present",
            position: "Frontend Developer (Full-time)",
            instition: "eBitans Limited, Dhaka",
          },
          {
            date: "Nov 2023 - Jan 2024",
            position: "Full Stack Developer Intern",
            instition: "Euphoria genX, Kolkata",
          },
          {
            date: "Sept 2023 - Dec 2023",
            position: "Full Stack Developer Intern",
            instition: "Salegully Pvt. Ltd., New Delhi",
          },
        ]}
      />
    </div>
  );
};

export default Experience;
