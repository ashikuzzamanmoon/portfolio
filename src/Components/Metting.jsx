import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Envelope, GeoAlt } from "react-bootstrap-icons";
import TitleSecond from "./Shared/TitleSecond";
import CopyButton from "./Shared/CopyButton";

const Metting = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden  pt_120 pb_120">
      <div className="container">
        <div className="grid lg:grid-cols-[58%_auto] gap-20 items-center">
          <div>
            <div>
              <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all">
                <TitleSecond
                  mainTitle={"Have a Project in Mind? Let's Talk"}
                  sortTitle={"Get in Touch"}
                />
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center shrink-0">
                  <Envelope className="text-[26px] text-clr_title" />
                </span>
                <span className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-clr_pra md:text-lg text-base block">
                      Email
                    </span>
                    <CopyButton text="ashikuzzamanmoon31@gmail.com" label="Copy" />
                  </div>
                  <Link
                    href={"mailto:ashikuzzamanmoon31@gmail.com"}
                    className="text-white md:text-xl text-base font-medium hover:text-clr_base transition-colors break-all"
                  >
                    ashikuzzamanmoon31@gmail.com
                  </Link>
                </span>
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                  <GeoAlt className="text-[26px] text-clr_title" />
                </span>
                <span>
                  <span className="text-clr_pra md:text-lg text-base mb-1 block">
                    {" "}
                    Location{" "}
                  </span>
                  <Link
                    href={""}
                    className="text-white md:text-xl text-base font-medium"
                  >
                    {" "}
                    Sirajganj, Bangladesh{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Image
                src="/img/project/project-need.png"
                alt="Project discussion illustration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
