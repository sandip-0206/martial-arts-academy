import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { GiBlackBelt } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-8"
        >
          {/* Logo section */}
          <div className="border-red-500 md:text-xl flex items-center gap-2 font-bold uppercase">
            <GiBlackBelt className="text-secondary text-3xl" />
            <p>
              JK Martial <span className="text-secondary">Arts Academy</span>{" "}
            </p>
            {/* <p className="text-secondary">Arts Academy</p> */}
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="
                    inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <a
                href="#contact"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold p-2 rounded-lg"
              >
                Contact Us
              </a>
            </ul>
          </div>
          {/* Icons section */}
          {/* <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div> */}
          {/* Mobile hamburger Menu section */}
          {open ? (
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <IoMdClose className="text-4xl" />
            </div>
          ) : (
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          )}
        </motion.div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
