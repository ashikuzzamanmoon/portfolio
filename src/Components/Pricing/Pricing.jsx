import React from "react";
import Price from "./Price";
import Title from "../Shared/Title";

const planData = [
  {
    id: 1,
    planName: "Basic Plan",
    price: "৳10,000",
    time: "per project",
    fetcher: [
      "Up to 5 Pages",
      "Responsive Design",
      "Fast Performance",
      "Contact Form Integration",
      "Basic SEO Setup",
    ],
    image: "/img/project/basic.png",
  },
  {
    id: 2,
    planName: "Standard Plan",
    price: "৳15,000",
    time: "per project",
    fetcher: [
      "Everything in Basic Plan",
      "Custom Backend (Node.js)",
      "Database Integration",
      "User Authentication (JWT)",
      "Admin Dashboard",
    ],
    image: "/img/project/warranty.png",
  },
  {
    id: 3,
    planName: "Premium Plan",
    price: "৳20,000",
    time: "per project",
    fetcher: [
      "Everything in Standard Plan",
      "Advanced API Integrations",
      "E-commerce Functionality",
      "Ongoing Maintenance",
      "Priority Consultation",
    ],
    image: "/img/project/premium-quality.png",
  },
];

const Pricing = () => {
  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle={"The best pricing plans to get your best"}
          sortTitle={"Choose Your Plan"}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
