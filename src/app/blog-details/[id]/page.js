"use client";
import React from "react";
import Link from "next/link";

import PageHeader from "@/Components/Shared/PageHeader";
import BlogSidebar from "@/Components/Blogs/BlogSidebar";
import Form from "@/Components/Shared/Form";

import { blogsList } from "@/Utlits/blogList";
import { socialIcons } from "@/Utlits/socilIcons";

const BlogDetailsPage = ({ params }) => {
  // Find the blog based on the id from the URL
  const blog = blogsList.find((b) => b.id === parseInt(params.id));

  // If blog not found, show a message
  if (!blog) {
    return (
      <div className="container text-center py-20 text-white">
        Blog post not found.
      </div>
    );
  }

  const { details } = blog;

  return (
    <>
      <PageHeader heading={blog.heading} page={"Blog Details"} />
      <section className="pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-[66.66%_auto] gap-6">
            <div>
              <div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="overflow-hidden block w-full rounded-lg">
                    <img
                      src={details.mainImage}
                      alt={blog.heading}
                      className="w-full overflow-hidden duration-500"
                    />
                  </div>
                  <div className="py-[30px]">
                    <div
                      className="lg:mb-[30px] mb-5 "
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <span className="text-lg font-medium text-white border-b border-b-clr_cusborder xl:pb-[30px] pb-5 xl:mb-7 mb-[19px] block">
                        By: {details.author} / {details.category} / Posted on {blog.date} /
                        Comments: {details.commentsCount}
                      </span>
                      <p className="text-clr_pra text-base mb-4">
                        {details.content_p1}
                      </p>
                      <p className="text-clr_pra text-base">
                        {details.content_p2}
                      </p>
                    </div>
                    <div className="lg:mb-[30px] mb-5 bg-clr_base rounded-lg lg:p-[30px] p-5">
                      <img
                        src={"/img/blog/straight-quotes.png"}
                        alt="quote"
                        className="mb-[30px]"
                      />
                      <p className="text-xl text-clr_title mb-9 italic">
                        "{details.quote}"
                      </p>
                      <span
                        className="font-medium text-xl text-clr_title"
                      >
                        - {details.quoteAuthor}
                      </span>
                    </div>
                    
                    <h3 className="text-white capitalize sm:text-[32px] text-[26px] leading-[120%] font-semibold lg:mb-[30px] mb-5">
                      {details.subheading}
                    </h3>
                    <div className="lg:mb-[30px] mb-5">
                      <img src={details.subImage} alt="blog detail" className="rounded-lg"/>
                    </div>
                   
                    <div
                      className="lg:mb-[30px] mb-5"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      <ul>
                        {details.bulletPoints.map((point, index) => (
                           <li key={index} className="flex items-center gap-[10px] relative text-base text-clr_pra sm:pl-4 pl-0 xl:mb-5 mb-[10px]">
                             <span className="min-w-[6px] h-[6px] rounded-full bg-clr_base"></span>
                             <span>{point}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-common_bg xl:mb-[60px] mb-10 rounded-lg xl:p-[30px] sm:p-5 py-5 px-[14px] flex items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap gap-5">
                      <div className="flex items-center sm:gap-5 gap-[10px] flex-wrap">
                        <span className="text-xl font-medium text-white">
                          Tags :
                        </span>
                        {details.tags.map(tag => (
                             <span
                                key={tag}
                                className="rounded-[10px] bg-[rgb(29_29_29_)] sm:py-[12px] py-2 sm:px-5 px-[10px] sm:text-base text-[12px] uppercase text-clr_pra"
                            >
                                {tag}
                            </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="text-xl font-medium text-white">
                          Share :
                        </span>
                        <ul className="social-cus flex items-center rounded-[10px] bg-[rgb(29_29_29_)] py-[10px] px-5 gap-5 ">
                          {socialIcons.map(({ id, icon, link }) => (
                            <li key={id}>
                              <Link href={link} target="_blank">
                                <i className="text-white duration-500 hover:text-clr_base">
                                  {icon}
                                </i>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Form isColTwo={true} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
