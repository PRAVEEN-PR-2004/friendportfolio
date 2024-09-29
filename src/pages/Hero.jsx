import { TbBrandGithubFilled } from "react-icons/tb";
// import { H/ } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import ParticlesBg from "particles-bg";

const Hero = () => {
  return (
    <>
      {/* Wrap the main content in a relative div and give it a higher z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[95vh] md:min-h-screen px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-white md:mb-9 md:text-7xl">
          Hello,
          <br /> I'm PRABHA M
        </h1>
        <p className="max-w-2xl mb-8 text-sm text-center text-white md:text-xl">
          A passionate AI & Data Science student at Saranathan College of
          Engineering, skilled in Python and Machine Learning, proficient in
          Excel and Power BI, with a strong interest in leveraging technology to
          solve real-world problems.
        </p>

        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/PRABHA-MURUGANANDHAM"
            className="text-3xl font-extrabold text-black"
          >
            <TbBrandGithubFilled
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-blue-900"
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/prabha-m-62ba57268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-3xl font-extrabold text-blue-500"
          >
            <FaLinkedinIn
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-blue-700"
            />
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://www.hackerrank.com/profile/prabhamuruga2020"
            className="text-3xl font-extrabold text-green-600"
          >
            <FaHackerrank
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-green-900"
            />
          </a>
        </div>
      </div>

      {/* Particles background with a lower z-index */}
      <ParticlesBg
        type="circle"
        bg={{
          zIndex: 0, // Lower z-index so the particles stay behind the content
          position: "absolute",
          background: "black", // Set the background to black
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default Hero;
