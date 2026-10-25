import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";

const serviceList = [
  {
    id: "01",
    heading: "Full-Stack Web Applications",
    subHeading: "End-to-End Solutions",
    para: "Complete apps from idea to deployment: responsive front-end, robust back-end, database and auth.",
  },
  {
    id: "02",
    heading: "eCommerce Development",
    subHeading: "Fast & Scalable Storefronts",
    para: "Fast, SEO-friendly storefronts with Next.js: search, product comparison, dashboards and checkout-ready architecture.",
  },
  {
    id: "03",
    heading: "Front-End Development",
    subHeading: "Interactive User Interfaces",
    para: "Modern, dynamic interfaces with React.js and Next.js for a seamless user experience.",
  },
  {
    id: "04",
    heading: "Back-End & APIs",
    subHeading: "Robust Server-Side Logic",
    para: "Secure RESTful APIs and server-side logic with Node.js, Express.js and MongoDB / PostgreSQL.",
  },
  {
    id: "05",
    heading: "Maintenance & Support",
    subHeading: "Ongoing Support & Updates",
    para: "Bug fixes, performance improvements and feature updates to keep your site fast and up to date.",
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
