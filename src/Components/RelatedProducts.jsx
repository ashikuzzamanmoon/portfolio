"use client";
import React, { useState } from "react";
import Title from "./Shared/Title";
import { projectList, imagesList } from "@/Utlits/projectList";
import Lightbox from "./Shared/LightBox";
import ProjectCard from "./Shared/ProjectCard";

const RelatedProducts = ({currentProjectId}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const filteredProjects = projectList.filter(
    (project) => project.id !== currentProjectId
  );

  const randomProjects = [...filteredProjects]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <Title mainTitle={"Related Work"} sortTitle={"Portfolio"} />

        <div className="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]">
          {randomProjects
            .map(({ heading, id, image, subHeading }, index) => (
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

export default RelatedProducts;
