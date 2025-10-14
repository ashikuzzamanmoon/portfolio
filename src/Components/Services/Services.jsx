import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";

const serviceList = [
  {
    id: "01",
    heading: "Full-Stack Development",
    subHeading: "End-to-End Solutions",
    para: "Building complete, scalable web applications from the ground up, covering both responsive front-end and robust back-end.",
  },
  {
    id: "02",
    heading: "Frontend Development",
    subHeading: "Interactive User Interfaces",
    para: "Crafting beautiful and dynamic user interfaces with modern technologies like React.js and Next.js for a seamless user experience.",
  },
  {
    id: "03",
    heading: "Backend & API Development",
    subHeading: "Robust Server-Side Logic",
    para: "Developing secure RESTful APIs and efficient server-side logic using Node.js, Express.js, and modern databases.",
  },
  {
    id: "04",
    heading: "WordPress Development",
    subHeading: "Custom Themes & Pages",
    para: "Creating custom WordPress themes and high-converting landing pages tailored to your specific business needs and brand identity.",
  },
  {
    id: "05",
    heading: "Website Maintenance",
    subHeading: "Ongoing Support",
    para: "Providing continuous support, bug fixes, and feature enhancements to ensure your website remains up-to-date and runs smoothly.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`${isHeading && "pt_120"}  pb_120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Crafting Digital Solutions for Your Business"
            sortTitle="Services That i Provide"
          />
        )}

        <div>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
