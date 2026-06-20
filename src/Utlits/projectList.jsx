export const projectList = [
  {
    id: 1,
    image: "/img/project/project1.png",
    heading: "Travel Buddy",
    subHeading: "Full-Stack Travel Planning Platform",
    category: ["all", "fullstack", "frontend", "backend"],
    liveSite: "https://travel-buddy-client-ten.vercel.app/",
    clientRepo: "https://github.com/ashikuzzamanmoon/travel-buddy-client",
    serverRepo: "https://github.com/ashikuzzamanmoon/travel-buddy-server",
    clientName: "Personal Project",
    projectDate: "October 2023",
    description:
      "A full-featured platform for travelers to plan trips, find compatible travel partners, and manage their adventures. Features a robust back-end with Prisma and Express.js, and a comprehensive user dashboard with full CRUD functionality and secure, role-based access control using JWT.",
    detailsImages: [
      "/img/portfolio/port-details-1-1.png",
      "/img/portfolio/port-details-1-2.png",
    ],
    detailsContent: {
      objective:
        "To create a comprehensive platform that simplifies trip planning and helps travelers connect with like-minded partners for shared adventures, enhancing the overall travel experience.",
      technologies: [
        "Next.js",
        "Redux",
        "Prisma",
        "Node.js",
        "Express.js",
        "Material-UI",
        "JWT",
      ],
      features: [
        "User authentication with role-based access control (User, Admin).",
        "Full CRUD functionality for managing trips and travel requests.",
        "Advanced search and filtering for finding travel buddies.",
        "Interactive user dashboard for a personalized experience.",
      ],
      challenges:
        "One of the main challenges was designing a database schema with Prisma that could efficiently handle complex relationships between users, trips, and travel requests. Implementing a secure, role-based access system with JWT also required careful planning.",
      solution:
        "I designed a normalized database schema and used Prisma's powerful querying capabilities to manage the data. For security, I implemented a robust JWT-based authentication system with middleware to protect routes based on user roles, ensuring data integrity and security.",
    },
  },
  {
    id: 2,
    image: "/img/project/project3.png",
    heading: "Chitro Golpo",
    subHeading: "E-Learning Platform for Photographers",
    category: ["all", "fullstack", "frontend", "backend"],
    liveSite: "https://assignment-12-9b8ee.web.app/",
    clientRepo: "https://github.com/ashikuzzamanmoon/chitro-golpo-client",
    serverRepo: "https://github.com/ashikuzzamanmoon/chitro-golpo-server",
    clientName: "Personal Project",
    projectDate: "September 2023",
    description:
      "An e-learning platform where users can browse, purchase, and stream photography courses from instructors. Engineered a secure, role-based access system (Admin, Instructor, Student) using Firebase Authentication and JWT.",
    detailsImages: [
      "/img/portfolio/port-details-2-1.png",
      "/img/portfolio/port-details-2-2.png",
    ],
    detailsContent: {
      objective:
        "To build a secure and intuitive e-learning platform that allows photographers to both sell and enroll in courses, with a clear distinction between Admin, Instructor, and Student roles.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
      ],
      features: [
        "Role-based access system (Admin, Instructor, Student).",
        "Instructors can create, manage, and upload their courses.",
        "Students can browse, purchase, and access their enrolled courses.",
        "Admin dashboard for managing users and courses.",
      ],
      challenges:
        "Implementing a multi-tiered role-based system with Firebase and JWT was complex. Ensuring that each role had the correct permissions to access or modify data required careful back-end logic and secure API endpoints.",
      solution:
        "I leveraged Firebase Authentication for user management and created custom JWT claims to define user roles. On the back-end, I wrote Express.js middleware to verify tokens and check roles on every protected route, ensuring a secure and reliable system.",
    },
  },
  {
    id: 3,
    image: "/img/project/project5.png",
    heading: "Digital Angan",
    subHeading: "WordPress ecommerce landing page",
    category: [
      "all",
      "frontend",
      "website",
      "wordpress",
      "ecommerce",
      "landing_page",
    ],
    liveSite: "https://digitalangan.com",
    clientRepo: "#", // Not applicable for WordPress theme dev
    serverRepo: "#", // Not applicable for WordPress theme dev
    clientName: "Personal Project",
    projectDate: "August 2023",
    description:
      "A responsive and visually appealing e-commerce landing page built with WordPress and modern design principles to showcase products effectively and drive conversions.",
    detailsImages: [
      "/img/portfolio/port-details-3-1.png",
      "/img/portfolio/port-details-3-2.png",
    ],
    detailsContent: {
      objective:
        "To design and develop a high-converting, responsive e-commerce landing page using WordPress, focusing on performance and user experience.",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Fully responsive design.",
        "Optimized for fast loading times.",
        "Visually appealing product showcase.",
      ],
      challenges:
        "The main challenge was to build a custom design within the WordPress ecosystem without relying on heavy page builders that slow down the site.",
      solution:
        "I developed a lightweight, custom theme from scratch, using native WordPress functions and minimal plugins. This approach gave me full control over the design and ensured optimal performance.",
    },
  },
  {
    id: 4,
    image: "/img/project/project2.png",
    heading: "Shajgoj Clone",
    subHeading: "Frontend E-commerce Project",
    category: ["all", "frontend", "website", "ecommerce"],
    liveSite: "https://shajgoj.vercel.app",
    clientRepo: "#", // Add client repo link if available
    serverRepo: "#", // Not applicable
    clientName: "Practice Project",
    projectDate: "July 2023",
    description:
      "A frontend clone of the popular e-commerce site Shajgoj, focusing on replicating the user interface and experience with pixel-perfect design and responsiveness.",
    detailsImages: [
      "/img/portfolio/port-details-4-1.png",
      "/img/portfolio/port-details-4-2.png",
    ],
    detailsContent: {
      objective:
        "To replicate the front-end of a popular e-commerce platform to practice and showcase skills in creating complex, pixel-perfect user interfaces with React.",
      technologies: ["Next.js", "CSS3", "Tailwind css"],
      features: [
        "Pixel-perfect replica of the original UI.",
        "Responsive design for mobile and desktop.",
        "Interactive UI components.",
      ],
      challenges:
        "Matching the exact design, layout, and responsiveness of a professional, large-scale website was a significant challenge that required meticulous attention to detail.",
      solution:
        "I broke down the UI into small, reusable React components and used advanced CSS techniques to achieve a pixel-perfect design. I extensively used browser developer tools for inspection and fine-tuning.",
    },
  },
  {
    id: 5,
    image: "/img/project/project4.png",
    heading: "Sundora Clone",
    subHeading: "Frontend E-commerce Project",
    category: ["all", "frontend", "website", "ecommerce"],
    liveSite: "https://sundora.vercel.app",
    clientRepo: "#", // Add client repo link if available
    serverRepo: "#", // Not applicable
    clientName: "Practice Project",
    projectDate: "June 2023",
    description:
      "A frontend clone of the popular beauty product e-commerce site Sundora. This project showcases skills in building complex and beautiful user interfaces.",
    detailsImages: [
      "/img/portfolio/port-details-5-1.png",
      "/img/portfolio/port-details-5-2.png",
    ],
    detailsContent: {
      objective:
        "To build a front-end clone of another major e-commerce site to further hone my skills in UI development and creating engaging user experiences.",
      technologies: ["React.js", "Tailwind CSS", "HTML5"],
      features: [
        "Faithful recreation of the Sundora website's UI/UX.",
        "Component-based architecture.",
        "Mobile-first responsive design.",
      ],
      challenges:
        "The main challenge was implementing the clean and minimalist design aesthetic of Sundora while ensuring all interactive elements were functional and intuitive.",
      solution:
        "I used Tailwind CSS to rapidly build the UI, focusing on creating a clean and maintainable component structure. This allowed me to efficiently replicate the design while keeping the code organized.",
    },
  },
  {
    id: 6,
    image: "/img/project/project6.png",
    heading: "Mobile Expo",
    subHeading: "E-commerce Mobile App",
    category: ["all", "frontend", "website", "ecommerce"],
    liveSite: "#",
    clientRepo: "#", // Add client repo link if available
    serverRepo: "#", // Add client repo link if available
    clientName: "Client Project",
    projectDate: "May 2023",
    description:
      "A fully functional e-commerce application for a mobile phone shop, featuring product listings, a shopping cart, and a checkout process. Built with a focus on user experience.",
    detailsImages: [
      "/img/portfolio/port-details-6-1.png",
      "/img/portfolio/port-details-6-1.png",
    ],
    detailsContent: {
      objective:
        "To develop a complete e-commerce application for a client, enabling them to sell mobile phones online with features like product management, shopping cart, and order processing.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Admin panel for product management.",
        "Shopping cart and checkout functionality.",
        "User account and order history.",
      ],
      challenges:
        "Building a secure and reliable checkout process and integrating a payment gateway were the primary challenges.",
      solution:
        "I used a well-tested e-commerce logic for the cart and order management. Although a dummy payment gateway was used for this version, the architecture is ready for integration with real payment processors like Stripe.",
    },
  },
  {
    id: 7,
    image: "/img/project/project7.png",
    heading: "1Tech",
    subHeading: "IT Solutions Website",
    category: ["all", "frontend", "website", "nextjs", "tailwindcss", "typescript"],
    liveSite: "https://1tech.com.bd/",
    clientRepo: "#",
    serverRepo: "#",
    clientName: "Client Project",
    projectDate: "2024",
    description:
      "A modern and responsive professional website for 1Tech, built with a focus on performance and clean user interface.",
    detailsImages: [
      "/img/portfolio/port-details-7-1.png",
      "/img/portfolio/port-details-7-2.png",
    ],
    detailsContent: {
      objective:
        "To design and develop a professional online presence for 1Tech.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      features: [
        "Fully responsive design.",
        "Optimized for fast loading times.",
        "Visually appealing services showcase.",
      ],
      challenges:
        "Delivering a seamless user experience across all devices.",
      solution:
        "Utilized modern frontend technologies to ensure a highly responsive and performant website.",
    },
  },
];

// export const imagesList = [
//   "/img/project/pro1.png",
//   "/img/project/pro3.png",
//   "/img/project/pro5.png",
//   "/img/project/pro2.png",
//   "/img/project/pro4.png",
//   "/img/project/pro6.png",
// ];

export const imagesList = projectList.map((p) => p.image);
