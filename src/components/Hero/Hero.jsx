import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/karate-cart-4.jpg";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h[560px] relative">
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-2xl lg:text-4xl font-bold leading-relaxed xl:leading-normal">
                Achieve Excellence with{" "}
                <span className="text-primary">JK Martial Arts Academy</span>{" "}
              </h1>
              <p className="text-gray-600 xl:max-w-[500px]">
                Train with the best instructors and achieve your full potential.
                Whether you’re a beginner or an advanced student, we have a
                class for you!
              </p>
              {/* Button section */}
              <div className="flex justify-center gap-8 md:justify-start mt-4">
                <button className="primary-btn flex items-center gap-2 my-4">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          {/* hero Image */}
          <div className="flex justify-center">
            <motion.img
              variants={SlideLeft(0.2)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              src={heroImg}
              alt="Hero Image"
              className="w-[350px] md:w-[550px] xl:w-[700] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
