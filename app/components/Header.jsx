import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image alt="" className="rounded-full w-32" src={assets.profile_img} />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Qoddri
        <Image alt="" className="w-6" src={assets.hand_icon} />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend web developer with a passion for creating engaging and
        user-friendly interfaces. I specialize in building responsive and
        visually appealing websites that provide a seamless user experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          href="#contact"
        >
          contact me
          <Image alt="" className="w-4" src={assets.right_arrow_white} />
        </a>
        <a
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
          href="/CV_Achmad_Qoddri.pdf"
          download
        >
          my resume
          <Image alt="" className="w-4" src={assets.download_icon} />
        </a>
      </div>
    </div>
  );
};

export default Header;
