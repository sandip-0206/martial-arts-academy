import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { GiBlackBelt } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <div className="border-red-500 md:text-xl flex items-center gap-2 font-bold uppercase">
            <GiBlackBelt className="text-secondary text-3xl" />
            <p>
              JK Martial <span className="text-secondary">Arts Academy</span>{" "}
            </p>
            {/* <p className="text-secondary">Arts Academy</p> */}
          </div>
          <p className="mt-4 text-gray-400">
            Discover the art of karate and transform your body and mind with our
            expert training programs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
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
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
          <p className="mt-4">
            <span className="block">Email: info@zenkarateclub.com</span>
            <span className="block mt-2">Phone: +91 98765 43210</span>
            <span className="block mt-2">
              Address: 123 Martial Arts St, City
            </span>
          </p>
          <div className="mt-6 flex text-2xl space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <CiFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} JK Martial Arts Academy. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
