import React from "react";
import myimg from "../assets/icon-5887113_1280.webp";
import resume from "../assets/Resume-friend.pdf";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <Slide duration={1000} triggerOnce>
        <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-md md:max-w-6xl md:p-20 md:flex-row">
          {/* Profile Image */}
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <img
              src={myimg} // Replace this with your image URL
              alt="Profile"
              className="object-cover w-48 h-48 mx-auto rounded-full shadow-lg"
            />
          </div>

          {/* About Info */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">About Me</h1>
            <p className="leading-relaxed text-gray-600">
              Hi! I'm Prabha M, a student at Saranathan College of Engineering,
              pursuing a degree in AI & Data Science. I have a strong foundation
              in Python and machine learning, with additional expertise in Excel
              and Power BI. I am passionate about exploring new technologies and
              applying my knowledge to solve real-world problems.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              With a CGPA of 8.2, I am committed to continuous learning and
              improvement. I am excited about leveraging my skills in AI and
              data science to make a meaningful impact in the industry.
            </p>
            <p className="pt-4 font-semibold leading-relaxed text-gray-600">
              CONTACT: 9566696788
            </p>
            <p className="pt-1 font-semibold leading-relaxed text-gray-600">
              MAIL: prabhamuruga2020@gmail.com
            </p>
            <p className="pb-10 mt-4 leading-relaxed text-gray-600">
              Let's collaborate and create something amazing together!
            </p>

            {/* Download Resume Button */}
            <button
              type="submit"
              class="flex gap-2 mx-auto shadow-md text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-sky-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              <a
                href={resume} // Replace with your resume's file path
                download
              >
                Download Resume
              </a>
              <svg
                class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  class="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default About;
