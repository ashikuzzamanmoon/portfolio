import React from "react";
import AboutCard from "./AboutCard";

const Education = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${
        isTabActive === "education"
          ? "z-10 opacity-100 translate-y-0"
          : "translate-y-20 -z-10 opacity-0 absolute  top-0 "
      } `}
    >
      <AboutCard
        title={"My Education"}
        para={
          "My academic background includes a Bachelor of Technology in Computer Science and Engineering, which has provided a strong theoretical and practical foundation for my career in web development."
        }
        info={[
          {
            date: "2020 - 2024",
            position: "B.Tech in Computer Science",
            instition: "Haldia Institute of Technology, India",
          },
          {
            date: "2017 - 2019",
            position: "Higher Secondary (H.S.C)",
            instition: "Govt. Azizul Haque College, Bogura",
          },
          {
            date: "Passed in 2017",
            position: "Secondary School (S.S.C)",
            instition: "Beripotol Polashbari High School, Sirajganj",
          },
        ]}
      />
    </div>
  );
};

export default Education;
