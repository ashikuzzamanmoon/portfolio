"use client";
import React, { useState } from "react";
import ProjectCard from "./Shared/ProjectCard";
import Lightbox from "./Shared/LightBox";
import { imagesList, projectList } from "@/Utlits/projectList";

const categoryList = [
  {
    id: 1,
    categoryName: "All",
    value: "all",
  },
  {
    id: 2,
    categoryName: "Full Stack",
    value: "fullstack",
  },
  {
    id: 3,
    categoryName: "Frontend",
    value: "frontend",
  },
  {
    id: 4,
    categoryName: "Backend",
    value: "backend",
  },
  {
    id: 5,
    categoryName: "E-commerce",
    value: "ecommerce",
  },
  {
    id: 6,
    categoryName: "Landing Page",
    value: "landing_page",
  },
  {
    id: 7,
    categoryName: "WordPress",
    value: "wordpress",
  },
];
const PortfolioTab = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  // ---------- Filer project by category
  const filterProject =
    currentCategory === "all"
      ? projectList
      : projectList.filter((project) =>
          project.category.includes(currentCategory)
        );

  const openLightbox = (index) => {
    // Find the original index from the main projectList to show correct image in lightbox
    const originalIndex = projectList.findIndex(
      (p) => p.id === filterProject[index].id
    );
    setCurrentId(originalIndex);
    setLightboxOpen(true);
  };

  return (
    <section className="pb-120">
      <div className="container">
        <div>
          <div
            className="border border-clr_cusborder p-[10px] rounded-lg max-w-fit mx-auto md:mb-[60px] mb-10"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <ul className="flex items-center md:flex-nowrap flex-wrap md:justify-normal justify-center md:gap-0 gap-[5px]">
              {categoryList.map(({ id, categoryName, value }, index) => (
                <li
                  key={id}
                  className={`md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder ${
                    index < categoryList.length - 1
                      ? "md:border-r md:border-r-clr_cusborder"
                      : "md:border-r-0"
                  }`}
                >
                  <button
                    className={`border-none text-center text-lg md:py-4 md:px-4 lg:px-6 py-[11px] px-5 rounded-[5px] whitespace-nowrap ${
                      currentCategory === value
                        ? "bg-clr_base text-clr_title rounded-[5px]"
                        : "text-clr_pra bg-transparent"
                    }`}
                    onClick={() => setCurrentCategory(value)}
                  >
                    {categoryName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]">
            {filterProject.map(({ heading, id, image, subHeading }, index) => (
              <ProjectCard
                key={id}
                image={image}
                heading={heading}
                subHeading={subHeading}
                openLightbox={openLightbox}
                index={index}
                navigate={`/portfolio-details/${id}`}
              />
            ))}
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};

export default PortfolioTab;
