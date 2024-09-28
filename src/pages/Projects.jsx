import React from "react";
import ProjectData from "./ProjectData"; // Make sure to adjust the import path based on your file structure
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-6 pt-24 bg-primary">
      <h1 className="text-lg font-semibold text-center text-gray-900">
        MY PROJECTS
      </h1>
      <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
      {/* Centered Grid Layout */}
      <Slide duration={1000} triggerOnce>
        <div className="flex w-full">
          <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-10">
            {/* <Fade duration={2000} triggerOnce> */}
            {ProjectData.map((project, index) => (
              <div
                key={index}
                className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg"
              >
                {/* Project Image */}
                <img
                  src={project.imgsrc}
                  alt={project.title}
                  className="object-cover w-full h-48"
                />

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-center">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-center text-gray-700">
                    {project.text}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between pt-5">
                    {project.view && (
                      <button
                        type="submit"
                        className="relative z-10 flex gap-2 px-4 py-2 overflow-hidden text-lg border-2 rounded-full shadow-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-900 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 group"
                      >
                        <a
                          href={project.view}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                        <svg
                          className="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border border-gray-700 rounded-full group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 group-hover:border-none"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                          ></path>
                        </svg>
                      </button>
                    )}

                    {project.source && (
                      <button
                        type="submit"
                        className="relative z-10 flex gap-2 px-4 py-2 overflow-hidden text-lg border-2 rounded-full shadow-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-900 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 group"
                      >
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                        <svg
                          className="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border border-gray-700 rounded-full group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 group-hover:border-none"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                          ></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* </Fade> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
