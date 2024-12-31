import React from "react";
import {
  FaUserShield,
  FaHandsHelping,
  FaTrophy,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const offerings = [
  {
    icon: <FaUserShield className="text-indigo-600 text-4xl" />,
    title: "Self-Defense",
    description:
      "Learn practical self-defense techniques to protect yourself and build confidence in real-life situations.",
  },
  {
    icon: <FaHandsHelping className="text-indigo-600 text-4xl" />,
    title: "Community",
    description:
      "Become part of a supportive community that values respect, discipline, and mutual growth.",
  },
  {
    icon: <FaTrophy className="text-indigo-600 text-4xl" />,
    title: "Competitions",
    description:
      "Showcase your skills in competitions and tournaments to challenge yourself and gain recognition.",
  },
  {
    icon: <FaHeartbeat className="text-indigo-600 text-4xl" />,
    title: "Fitness",
    description:
      "Improve your physical fitness, stamina, and overall health through engaging and structured training.",
  },
];

// Framer Motion animation variants for Slide-Up effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 25, // Smooth transition effect
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below (Slide-Up)
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20, // Smooth, bouncy effect
      duration: 0.8, // Longer duration for smoothness
    },
  },
};

const Equipments = () => (
  <motion.div
    id="what-we-offer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is in view
    className="container mx-auto py-12 px-6"
  >
    <motion.h2
      variants={containerVariants}
      className="text-2xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white"
    >
      What We Offer You
    </motion.h2>
    <motion.p
      variants={containerVariants}
      className="mt-4 text-center text-gray-600 dark:text-gray-300"
    >
      Discover the benefits of joining our Karate club and how we can help you
      achieve your goals.
    </motion.p>
    <motion.div
      variants={containerVariants}
      className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {offerings.map((offering, index) => (
        <motion.div
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          key={index}
          // variants={cardVariants}
          className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4">{offering.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {offering.title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {offering.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default Equipments;
