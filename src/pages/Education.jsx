import React from "react";
import { Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <>
      <Slide triggerOnce>
        <div className="p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:w-3/4 md:p-10 mt-28 mb-28 w-[90%]">
          <h2 className="font-bold text-gray-800 text-md md:text-3xl">
            EDUCATION
          </h2>
          <div className="flex flex-col items-center justify-center mt-4">
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold md:text-2xl">
                  SARANATHAN COLLEGE OF ENGINEERING
                </h3>
                <p className="text-xs text-gray-600 md:text-lg">
                  ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
                </p>
                <p className="text-xs text-gray-500 md:text-lg">
                  Oct 2022 - Oct 2026
                </p>
                <p className="text-xs text-gray-600 md:text-lg">
                  Grade: 8.2 CGPA
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold md:text-2xl">
                  ST.ANTONY'S MATRIC HIGHER SEC SCHOOL
                </h3>
                <p className="text-xs text-gray-600 md:text-lg">
                  Higher Education
                </p>
                <p className="text-xs text-gray-500 md:text-lg">
                  Jun 2020 - Jun 2022
                </p>
                <p className="text-xs text-gray-600 md:text-lg">
                  Grade: 83.33%
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold md:text-2xl">
                  ST.ANTONY'S MATRIC HIGHER SEC SCHOOL
                </h3>
                <p className="text-xs text-gray-600 md:text-lg">
                  Primary Education
                </p>
                <p className="text-xs text-gray-500 md:text-lg">
                  Jun 2008 - Jun 2020
                </p>
                <p className="text-xs text-gray-600 md:text-lg">Grade: 79.8%</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Education;
