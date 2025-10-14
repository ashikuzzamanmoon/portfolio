"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, Search } from "react-bootstrap-icons";
import { blogsList } from "@/Utlits/blogList";

const BlogSidebar = () => {

  // Get the 3 most recent posts
  const recentPosts = blogsList.slice(0, 3);

  // Get all unique categories from the blogs
  const allCategories = [...new Set(blogsList.map(blog => blog.details.category))];

  // Get all unique tags from the blogs
  const allTags = [...new Set(blogsList.flatMap(blog => blog.details.tags))];


  return (
    <div className="border border-clr_cusborder xl:p-[30px] py-5 px-[18px] rounded-lg sticky top-[120px]">
      {/* --- Search Section  --- */}
      <div className="xl:mb-[60px] mb-10">
        <h4 className="text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
          Search
        </h4>
        <form action="#0" className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent py-[10px] pr-[10px] pl-5 h-[60px] border border-clr_cusborder rounded-l-lg outline-none text-white focus:border-clr_base"
          />
          <button
            type="submit"
            className="min-w-[60px] h-[60px] flex items-center justify-center bg-clr_base rounded-r-lg"
          >
            <i className="text-clr_title text-lg">
              <Search />
            </i>
          </button>
        </form>
      </div>

      {/* --- Categories Section --- */}
      <div className="xl:mb-[60px] mb-10 position-relative">
        <h4 className="text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
          Categories
        </h4>
        <ul className="category">
          {allCategories.map((category, index) => (
            <li key={index} className="duration-500 group mb-6 last:mb-0">
              <Link
                href="#" // You can later link this to a category filter page
                className="flex items-center justify-between duration-500"
              >
                <span className="text-clr_pra text-lg group-hover:text-clr_base">{category}</span>
                <span className="duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                  <i className="text-[11px] text-clr_title">
                    <ChevronRight />
                  </i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Recent Post Section --- */}
      <div className="xl:mb-[60px] mb-10">
        <h4 className="text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
          Recent Post
        </h4>
        <ul>
          {recentPosts.map(({ id, heading, image, date }) => (
            <li key={id} className="mb-[30px] last:mb-0">
              <Link
                href={`/blog-details/${id}`}
                className="flex items-center flex-wrap xl:flex-nowrap xl:gap-5 gap-[10px] group"
              >
                <img src={image} alt={heading} className="w-20 h-20 object-cover rounded-md"/>
                <div>
                  <span className="text-white text-lg font-medium mb-[14px] block group-hover:text-clr_base duration-300">
                    {heading}
                  </span>
                  <span className="text-clr_base text-base flex items-center gap-2">
                    <i>
                      <Clock />
                    </i>
                    {date}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* --- Tags Section --- */}
      <div>
        <h4 className="text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
          Tags
        </h4>
        <ul className="flex flex-wrap gap-3">
          {allTags.map((tag, index) => (
            <li key={index}>
              <Link href={"#"} className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title">{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
