"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";

const socalList = [
  {
    id: 1,
    platfrom: "Github",
    link: "https://github.com/ashikuzzamanmoon",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    platfrom: "LinkedIn",
    link: "https://www.linkedin.com/in/ashikuzzaman-moon",
    icon: <ArrowRight />,
  },
  {
    id: 3,
    platfrom: "Facebook",
    link: "https://www.facebook.com/ashikuzzaman.moon1",
    icon: <ArrowRight />,
  },
  {
    id: 4,
    platfrom: "Twitter",
    link: "https://x.com/ashikmoon01",
    icon: <ArrowRight />,
  },
];

const Footer = () => {
    // Smooth scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="pt_120 pb-[120px]">
          <div
            className="text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get In Touch
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="basis-1/2 shrink">
              <div>
                <p className="xl:mb-[60px] lg:mb-10 mb-[10px]  lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                  Hello, I’m Ashikuzzaman Moon, a Full-Stack Web Developer
                  based in Bangladesh.
                </p>
                <Link
                  href={"mailto:ashikuzzamanmoon31@gmail.com"} 
                  className="text-white lg:text-4xl sm:text-[28px] text-lg underline"
                >
                  ashikuzzamanmoon31@gmail.com
                </Link>
              </div>
            </div>
            <div className="basis-1/2 shrink">
              <div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socalList.map(({ id, icon, platfrom, link }) => {
                    return (
                      <div key={id} >
                        <Link
                          href={link}
                          target={link.startsWith("http") ? "_blank" : "_self"} // External link new tab
                          className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                        >
                          {platfrom}
                          <i className="text-white text-[22px] duration-500 group-hover:text-clr_title">{icon}</i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-common_bg bg-no-repeat bg-center bg-cover">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between py-[34px] lg:flex-nowrap  gap-4 ">
            <p className="text-white text-lg">
              Copyright © {new Date().getFullYear()}{" "}
              <Link href={"/"} className="text-clr_base">
                Moon.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms flex gap-[38px]">
              <li>
                <Link href={"#"} className="text-lg text-white duration-500 hover:text-clr_base"> Terms & Condition </Link>
              </li>
              <li>
                <Link href={"#"} className="text-lg text-white duration-500 hover:text-clr_base"> Privacy Policy </Link>
              </li>
            </ul>
            <Link href="#home" onClick={scrollToTop} className="w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center">
              <i className="text-lg">
                <ArrowUpShort />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
