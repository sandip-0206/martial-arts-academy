import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Beginner",
    price: "₹999",
    duration: "per month",
    features: [
      "Access to all beginner classes",
      "Basic self-defense techniques",
      "Flexible class timings",
    ],
  },
  {
    title: "Intermediate",
    price: "₹1,999",
    duration: "per month",
    features: [
      "All beginner plan features",
      "Advanced self-defense techniques",
      "Participation in sparring sessions",
      "Free club T-shirt",
    ],
  },
  {
    title: "Advanced",
    price: "₹2,999",
    duration: "per month",
    features: [
      "All intermediate plan features",
      "Private coaching sessions",
      "Eligibility for competitions",
      "Specialized training equipment access",
    ],
  },
];

// Framer Motion animation variants
const cardVariants = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 }, // Start slightly to the right
  visible: {
    opacity: 1,
    x: 0, // Slide into the viewport
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      delay, // Add a delay for staggered animation
    },
  },
});

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "easeIn",
      duration: 0.2,
    },
  },
};

const Pricing = () => (
  <div id="pricing" className="container">
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Animate Heading */}
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-2xl lg:text-4xl font-bold text-gray-800 "
        >
          Our Pricing Plans
        </motion.h2>
        {/* Animate Description */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-600"
        >
          Choose the plan that suits your training needs best.
        </motion.p>
        {/* Animate Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index * 0.2)} // Dynamic delay for each card
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% in view
              className="bg-white  shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 ">
                {plan.title}
              </h3>
              <p className="mt-2 text-4xl font-bold text-gray-800 ">
                {plan.price}
                <span className="text-lg font-medium text-gray-600">
                  / {plan.duration}
                </span>
              </p>
              <button className="mt-6 w-full py-2 px-4 primary-btn font-semibold rounded-md transition">
                Join Now
              </button>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="mr-2">
                      <FaCheck className="text-green-500" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
