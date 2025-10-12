"use client";
import React from "react";

const skillsData = [
  {
    category: "Front-End",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux", "RTK Query", "HTML5", "CSS3"],
  },
  {
    category: "Styling & UI/UX",
    skills: ["Tailwind CSS", "Bootstrap", "DaisyUI", "Material-UI (MUI)", "Mantine UI", "Shadcn UI"],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Express.js", "RESTful API Design", "JWT (JSON Web Token)"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "Prisma", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code", "Chrome DevTools", "Firebase", "Cloudinary"],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="pb_120">
      <div className="container">
        <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden p-6 sm:p-10 lg:p-14">
          <div data-aos="fade-up" className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-clr_white mb-5">
              Technologies & Tools
            </h2>
            <p className="text-base md:text-lg text-clr_pra mb-10 md:mb-12 max-w-3xl mx-auto">
              Here's a snapshot of the primary technologies, languages, and tools
              I work with to bring ideas to life, from front-end design to back-end implementation.
            </p>
          </div>
          <div className="space-y-8">
            {skillsData.map((item, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-duration={1000 + (index * 200)}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-clr_base mb-4">
                  {item.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#1D1D1D] text-clr_pra text-sm md:text-base font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-clr_base hover:text-clr_title cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


// import React from "react";

// const skillsList = [
//   {
//     id: 1,
//     skill: "Figma",
//     percentage: "90%",
//     image: "/img/about/figma.png",
//   },
//   {
//     id: 2,
//     skill: "Wordpress",
//     percentage: "95%",
//     image: "/img/about/word.png",
//   },
//   {
//     id: 3,
//     skill: "Figma",
//     percentage: "85%",
//     image: "/img/about/html.png",
//   },
//   {
//     id: 4,
//     skill: "Bootstrap",
//     percentage: "97%",
//     image: "/img/about/boot.png",
//   },
// ];

// const Skills = ({ isTabActive }) => {
//   return (
//     <div className={`w-full duration-700 ${isTabActive === "skills" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
//       <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
//         <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
//           <div>
//             <div>
//               <img src={"/img/about/personal-infothumb.png"} alt="img" />
//             </div>
//           </div>
//           <div>
//             <div>
//               <h2 className="text-[42px] font-semibold text-clr_white mb-5">My Skills</h2>
//               <p className="text-lg text-clr_pra mb-0">
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//                 consectetur, aliquam quaerats voluptatem. Ut enim ad minima
//                 veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
//                 velit esse quam nihil
//               </p>
//               <div className="mt-10">
//                 <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between  gap-6">
//                   {skillsList.map(({id, skill, image, percentage}) => {
//                     return (
//                       <div key={id} className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
//                         <div className="flex items-center gap-6">
//                           <div>
//                             <img src={image} alt="img" />
//                           </div>
//                           <div>
//                             <span className="md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">{skill}</span>
//                             <h1 className="font-semibold text-5xl text-clr_white">{percentage}</h1>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;



