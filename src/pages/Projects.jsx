import React from "react";
import ProjectData from "./ProjectData"; // Ensure the import path is correct
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-6 pt-24 bg-primary">
      <h1 className="text-lg font-semibold text-center text-gray-900">
        MY PROJECTS
      </h1>
      <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
      <Slide duration={1000} triggerOnce>
        <div className="flex w-full">
          <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-10">
            {ProjectData.map((project, index) => (
              <div
                key={index}
                className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <img
                  src={project.imgsrc}
                  alt={project.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-center">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm text-center text-gray-700">
                    {project.objective}
                  </p>{" "}
                  {/* Objective */}
                  <p className="mb-2 text-sm text-center text-gray-500">
                    {project.tools}
                  </p>{" "}
                  {/* Tools */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
