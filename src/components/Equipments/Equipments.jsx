import React from "react";
import {
  FaUserShield,
  FaHandsHelping,
  FaTrophy,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";

const offerings = [
  {
    icon: <FaUserShield className="text-primary text-4xl" />,
    title: "Self-Defense",
    description:
      "Learn practical self-defense techniques to protect yourself and build confidence in real-life situations.",
  },
  {
    icon: <FaHandsHelping className="text-primary text-4xl" />,
    title: "Community",
    description:
      "Become part of a supportive community that values respect, discipline, and mutual growth.",
  },
  {
    icon: <FaTrophy className="text-primary text-4xl" />,
    title: "Competitions",
    description:
      "Showcase your skills in competitions and tournaments to challenge yourself and gain recognition.",
  },
  {
    icon: <FaHeartbeat className="text-primary text-4xl" />,
    title: "Fitness",
    description:
      "Improve your physical fitness, stamina, and overall health through engaging and structured training.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Equipments = () => (
  <motion.div
    id="what-we-offer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="container mx-auto py-12 px-6"
  >
    <motion.h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">
      What We Offer You
    </motion.h2>
    <motion.p className="mt-4 text-center text-gray-600">
      Discover the benefits of joining our Karate club and how we can help you
      achieve your goals.
    </motion.p>
    <motion.div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {offerings.map((offering, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4">{offering.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">
            {offering.title}
          </h3>
          <p className="mt-2 text-gray-600">{offering.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default Equipments;
