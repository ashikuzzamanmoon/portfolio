"use client";
import React from "react";
import { PlayFill, ArrowRight, ChevronRight } from "react-bootstrap-icons";
import PageHeader from "@/Components/Shared/PageHeader";
import Accordion from "@/Components/Accordion";
import Link from "next/link";
import { serviceData } from "@/Utlits/serviceData";

const ServiceDetailsPage = ({ params }) => {
  // Find the service based on the id from the URL
  const service = serviceData.find((s) => s.id === params.id);

  // If service not found, show a message
  if (!service) {
    return (
      <div className="container text-center py-20 text-white">
        Service not found.
      </div>
    );
  }

  // Destructure the details from the found service object
  const { details } = service;

  return (
    <>
      <PageHeader heading={service.heading} page={"Service Details"} />
      <section className="pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-[66%_auto] gap-6">
            <div>
              <div>
                <div className="w-full mb-[60px]">
                  <img src={details.image1} alt={service.heading} className="w-full rounded-lg" />
                </div>
                <div
                  className="xl:mb-[60px] mb-10 "
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="block xl:text-4xl text-2xl xl:mb-[30px] font-semibold mb-5 text-white">
                    {details.aboutTitle}
                  </h3>
                  <p className="md:text-base text-sm text-clr_pra xl:mb-7 mb-4">
                    {details.about_p1}
                  </p>
                  <p className="md:text-base text-sm text-clr_pra">
                    {details.about_p2}
                  </p>
                </div>
                <div
                  className="xl:mb-[60px] mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="xl:text-4xl text-2xl font-semibold xl:mb-[30px] mb-5 text-white block">
                    {details.specializationTitle}
                  </h3>
                  <p className="md:text-base text-sm text-clr_pra">
                    {details.specialization_p}
                  </p>
                </div>
                <div className="relative w-full mb-[60px] before:absolute before:w-full before:h-full before:inset-0 before:content-[''] before:rounded-[10px] before:bg-[rgb(12_12_12)] before:bg-opacity-60">
                  <img src={details.image2} alt="Service process" className="rounded-[10px] w-full" />
                  <Link
                    href={details.videoLink || "#"}
                    target="_blank"
                    className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-20 xl:h-20 w-[60px] h-[60px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales "
                  >
                    <i className="text-clr_white text-[42px] ">
                      <PlayFill />
                    </i>
                  </Link>
                </div>
                <div>
                  <h2 className="text-white mb-[3rem] lg:text-4xl text-3xl font-semibold leading-[120%]">
                    Questions ? You're Covered
                  </h2>
                  <div>
                    {details.faqs.map(({ id, heading, para }) => (
                      <Accordion
                        key={id}
                        id={id}
                        heading={heading}
                        para={para}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="lg:mb-[30px] mb-5 xl:p-[30px] p-5 border border-clr_cusborder rounded-lg ">
                  <h3 className="text-3xl text-white mb-[30px] font-semibold">
                    Service List
                  </h3>
                  {serviceData.map((item) => (
                    <Link
                      href={`/service-details/${item.id}`}
                      key={item.id}
                      className={`lg:mb-4 mb-[10px] lg:py-7 md:py-5 py-4 lg:pr-[26px] md:pr-4 pr-3 lg:pl-5 pl-3 rounded-[10px] border flex items-center justify-between lg:text-2xl md:text-xl text-base duration-500 group ${
                        item.id === params.id 
                        ? 'bg-clr_base border-clr_base text-clr_title' 
                        : 'border-clr_cusborder text-white hover:bg-clr_base hover:border-clr_base hover:text-clr_title'
                      }`}
                    >
                      {item.heading}
                      <i className={`text-2xl duration-500 ${
                         item.id === params.id ? 'text-clr_title' : 'text-white group-hover:text-clr_title'
                      }`}>
                        <ChevronRight />
                      </i>
                    </Link>
                  ))}
                </div>
                <div className="lg:mb-[30px] mb-5 xl:p-[30px] p-5 border border-clr_cusborder rounded-lg">
                  <div className="relative w-full before:absolute before:w-full before:h-full before:inset-0 before:content-[''] before:rounded-[10px] before:bg-[rgb(12_12_12)] before:opacity-60">
                    <img
                      src={"/img/contact/ser-detialcontact.png"}
                      alt="Contact me"
                      className="w-full"
                    />
                    <Link
                      href={"/contact"}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] sm:text-lg text-base leading-[120%] capitalize bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#107a37] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                    >
                      <span className="z-10 relative duration-500 whitespace-nowrap">
                        Contact Me
                      </span>
                      <span className="z-10 relative duration-500">
                        <i>
                          <ArrowRight />
                        </i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
