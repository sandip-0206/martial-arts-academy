import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import profile1 from "../../assets/2.png";
import profile2 from "../../assets/profile.jpg";
import profile3 from "../../assets/profile.jpg";

const testimonials = [
  {
    name: "John Doe",
    role: "Student",
    text: "Joining this Karate club was the best decision I’ve ever made. The instructors are excellent, and I feel more confident and disciplined!",
    image: profile1,
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Parent",
    text: "My son has learned so much in this club. The focus on respect and discipline is truly remarkable. Highly recommend!",
    image: profile2,
    rating: 4,
  },
  {
    name: "Alex Johnson",
    role: "Instructor",
    text: "It’s an honor to teach such eager and hardworking students. This club fosters a fantastic community spirit!",
    image: profile3,
    rating: 5,
  },
];

// Framer Motion variants for sliding right to left with smooth easing
const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier easing
    },
  },
});

const TestimonialCard = ({ name, role, text, image, rating, delay }) => (
  <motion.div
    variants={SlideRight(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
  >
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-600 mb-4">{role}</p>
    <p className="text-gray-700 mb-4">{text}</p>
    <div className="flex items-center justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  </motion.div>
);

const Testimonials = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="container mx-auto px-4"
    id="testimonials"
  >
    <section className="py-12">
      {/* Heading animation */}
      <motion.h2
        variants={SlideRight(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-6"
      >
        What Our Members Say
      </motion.h2>
      <motion.p
        variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-gray-600 mb-12"
      >
        See how our Karate club has impacted the lives of our members and their
        families.
      </motion.p>
      {/* Cards animation */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            delay={0.2 * (index + 1)} // Dynamic delay for smooth staggered animation
          />
        ))}
      </motion.div>
    </section>
  </motion.div>
);

export default Testimonials;
