import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  Github,
} from "react-bootstrap-icons";
import Link from "next/link";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "smofficial0528@gmail.com",
    link: "mailto:ashikuzzamanmoon31@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+88 01712714334",
    link: "tel:+8801712714334",
  },
  {
    id: 3,
    system: "Address",
    contact: "Sirajganj, Bangladesh",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      {
        id: 1,
        link: "https://github.com/ashikuzzaman-moon",
        icon: <Github />,
      },
      {
        id: 2,
        link: "https://www.linkedin.com/in/ashikuzzaman-moon/",
        icon: <Linkedin />,
      },
      {
        id: 3,
        link: "https://ashikuzzaman-moon.vercel.app/",
        icon: <Globe />,
      },
      {
        id: 4,
        link: "#", // এখানে আপনার ফেসবুক লিঙ্ক দিন
        icon: <Facebook />,
      },
      {
        id: 5,
        link: "#", // এখানে আপনার টুইটার লিঙ্ক দিন
        icon: <Twitter />,
      },
      {
        id: 6,
        link: "#", // এখানে আপনার ইন্সটাগ্রাম লিঙ্ক দিন
        icon: <Instagram />,
      },
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${
        isTabActive === "about"
          ? "z-10 opacity-100 translate-y-0"
          : "translate-y-20 -z-10 opacity-0 absolute  top-0 "
      } `}
    >
      <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
          <div>
            <div className="w-full" data-aos="zoom-in" data-aos-duration="500">
              <img
                src={"/img/about/personal-infothumb.png"}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="lg:pl-10 pl-0">
              <h2
                className="text-[42px] font-semibold text-clr_white mb-5"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="text-lg text-clr_pra mb-0"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                As a Full-Stack Developer, I build dynamic web applications
                using the MERN stack, Next.js, and TypeScript. I focus on
                creating intuitive user interfaces and robust back-end systems
                to solve complex business problems and deliver high-value
                solutions.
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between  gap-6">
                  {contactInfo.map(({ id, contact, socalContact, system, link }) => {
                    return (
                      <div key={id} className="" data-aos="zoom-in">
                        <div className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div>
                            <span className="text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                              {system}
                            </span>
                            {contact &&
                              (link ? (
                                <Link
                                  href={link}
                                  target="_blank"
                                  className="text-xl text-clr_white break-all"
                                >
                                  {contact}
                                </Link>
                              ) : (
                                <span className="text-xl text-clr_white break-all">
                                  {contact}
                                </span>
                              ))}

                            {socalContact && (
                              <ul className="flex items-center xl:gap-4 gap-2 ">
                                {socalContact.map((info) => (
                                  <li key={info.id}>
                                    <Link
                                      href={info.link}
                                      target="_blank"
                                      className="text-clr_white text-xl"
                                    >
                                      {info.icon}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
