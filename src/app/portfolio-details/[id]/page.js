import PageHeader from "@/Components/Shared/PageHeader";
import RelatedProducts from "@/Components/RelatedProducts";
import { projectList } from "@/Utlits/projectList";
import { socialIcons } from "@/Utlits/socilIcons";
import Link from "next/link";
import React from "react";

// --- Dynamic Metadata Function ---
export async function generateMetadata({ params }) {
  const project = projectList.find((p) => p.id === parseInt(params.id));
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }
  return {
    title: `${project.heading} - Ashikuzzaman Moon's Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.heading} - Project Details`,
      description: project.description,
      images: [
        {
          url: `https://moon-bd.com${project.image}`, // Always use absolute URL for OG images
          width: 1200,
          height: 630,
          alt: project.heading,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.heading} - Project Details`,
      description: project.description,
      images: [`https://moon-bd.com${project.image}`],
    },
  };
}


const PortfolioDetailsPage = ({ params }) => {
  // Find the project based on the id from the URL
  const project = projectList.find((p) => p.id === parseInt(params.id));

  // If project not found, show a message
  if (!project) {
    return (
      <div className="container text-center py-20 text-white">
        Project not found.
      </div>
    );
  }

  // Destructure the new details object
  const { detailsContent } = project;

  return (
    <>
      <PageHeader heading={project.subHeading} page={project.heading} />
      <section className="pb_120">
        <div className="container">
          {/* Main Project Image and Info Box */}
          <div
            className="lg:mb-[60px] mb-[50px] w-full relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={project.image}
              alt={project.heading}
              className="w-full rounded-t-lg lg:rounded-lg"
            />
            <div className="bg-[rgb(18_18_18)] rounded-tr-[30px] xl:p-[45px] lg:p-6 py-5 px-[12px] lg:absolute static bottom-0 left-0 w-full lg:w-auto">
              <h3 className="text-white xl:mb-8 mb-6 capitalize sm:text-[32px] text-[26px] leading-[120%] font-semibold">
                Project Info
              </h3>
              <div className="flex lg:gap-[100px] gap-5 xl:mb-9 mb-[22px]">
                <div>
                  <div className="xl:mb-[30px] mb-[14px] ">
                    <h5 className="font-medium text-white xl:mb-[10px] lg:mb-[5px] mb-[10px] capitalize text-xl leading-[130%]">
                      Clients
                    </h5>
                    <p className="text-clr_pra lg:text-base text-sm">
                      {project.clientName}
                    </p>
                  </div>
                  <div className="xl:mb-[30px] mb-[14px]">
                    <h5 className="font-medium text-white xl:mb-[10px] lg:mb-[5px] mb-[10px] capitalize text-xl leading-[130%]">
                      Date
                    </h5>
                    <p className="text-clr_pra lg:text-base text-sm">
                      {project.projectDate}
                    </p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="xl:mb-[30px] mb-[14px] ">
                    <h5 className="font-medium text-white xl:mb-[10px] lg:mb-[5px] mb-[10px] capitalize text-xl leading-[130%]">
                      Category
                    </h5>
                    <p className="text-clr_pra lg:text-base text-sm capitalize">
                      {project.category.filter((c) => c !== "all").join(", ")}
                    </p>
                  </div>
                  <div className="xl:mb-[30px] mb-[14px]">
                    <h5 className="font-medium text-white xl:mb-[10px] lg:mb-[5px] mb-[10px] capitalize text-xl leading-[130%]">
                      Live Site
                    </h5>
                    <Link
                      href={project.liveSite}
                      target="_blank"
                      className="text-clr_pra lg:text-base text-sm hover:text-clr_base"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="flex gap-4">
                {socialIcons.map(({ icon, id, link }) => (
                  <li key={id}>
                    <Link
                      href={link}
                      target="_blank"
                      className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center hover:bg-clr_base duration-500 group"
                    >
                      <i className="text-clr_title text-lg group-hover:text-white">
                        {icon}
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Details Section */}
          <div>
            {/* --- Brief Description --- */}
            <div
              className="xl:mb-[60px] mb-10"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="xl:mb-7 mb-[15px] text-clr_pra text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* --- Objective/Description --- */}
            <div
              className="xl:mb-[60px] mb-10"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <h3 className="xl:text-[32px] xl:mb-[30px] mb-5 text-[26px] text-white capitalize font-semibold">
                Objective
              </h3>
              <p className="text-clr_pra text-lg leading-relaxed">
                {detailsContent.objective}
              </p>
            </div>

            {/* --- Technologies Used --- */}
            <div
              className="xl:mb-[60px] mb-10"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3 className="xl:text-[32px] xl:mb-[30px] mb-5 text-[26px] text-white capitalize font-semibold">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {detailsContent.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#1D1D1D] text-clr_pra py-2 px-4 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* --- Features --- */}
            <div
              className="xl:mb-[60px] mb-10"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="xl:text-[32px] xl:mb-[30px] mb-5 text-[26px] text-white capitalize font-semibold">
                Key Features
              </h3>
              <ul>
                {detailsContent.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-[10px] relative text-base text-clr_pra sm:pl-4 mb-4"
                  >
                    <span className="min-w-[8px] h-[8px] rounded-full bg-clr_base mt-2"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Challenges & Solution --- */}
            <div
              className="xl:mb-[60px] mb-10"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <h3 className="xl:text-[32px] xl:mb-[30px] mb-5 text-[26px] text-white capitalize font-semibold">
                Challenge & Solution
              </h3>
              <p className="text-clr_pra text-lg leading-relaxed mb-4">
                <strong className="text-white">Challenge:</strong>{" "}
                {detailsContent.challenges}
              </p>
              <p className="text-clr_pra text-lg leading-relaxed">
                <strong className="text-white">Solution:</strong>{" "}
                {detailsContent.solution}
              </p>
            </div>

            {/* --- Detail Images --- */}
            <div
              className="flex items-center xl:gap-[30px] sm:gap-5 gap-[14px] flex-wrap sm:flex-nowrap"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {project.detailsImages.map((img, index) => (
                <div className="w-full" key={index}>
                  <img
                    src={img}
                    alt={`${project.heading} detail ${index + 1}`}
                    className="rounded-lg w-full"
                  />
                </div>
              ))}
            </div>

            {/* --- Repository Links --- */}
            <div
              className="flex flex-wrap gap-4 mt-10"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              {project.clientRepo !== "#" && (
                <Link
                  href={project.clientRepo}
                  target="_blank"
                  className="py-3 px-6 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-all"
                >
                  Client Repository
                </Link>
              )}
              {project.serverRepo !== "#" && (
                <Link
                  href={project.serverRepo}
                  target="_blank"
                  className="py-3 px-6 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-all"
                >
                  Server Repository
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts currentProjectId={project.id} />
    </>
  );
};

export default PortfolioDetailsPage;
