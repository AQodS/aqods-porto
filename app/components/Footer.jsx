import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image alt="" className="w-36 mx-auto mb-2" src={assets.logo} />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image alt="" className="w-6" src={assets.mail_icon} />
          qoddri@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Achmad Qoddri. All right reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/AQodS" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/qoddri/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/AQodS" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
