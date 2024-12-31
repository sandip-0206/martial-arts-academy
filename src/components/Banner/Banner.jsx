import React from "react";
// import BannerImg from "../../assets/";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] flex flex-wrap gap-2 justify-center space-y-6 rounded-xl md:space-y-0 py-14">
        {/* img */}
        <div className="mx-4">
          <motion.img
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            src={image}
            alt="banner image"
            className="w-[500px] md:max-w-[500px] opacity-0.1
          xl:min-w-[600px] h-full object-cover rounded-xl"
          />
        </div>
        {/* Info */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center
        md:text-left mx-10 space-y-4 lg:max-w-[400px]"
        >
          <p className="text-2xl lg:text-4xl font-bold capitalize">{title}</p>
          <p>{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <button className="primary-btn ">Explore More</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
