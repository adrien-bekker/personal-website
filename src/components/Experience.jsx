import React from "react";
import python from "../assets/skills/python.png";
import numpy from "../assets/skills/numpy.png";
import pandas from "../assets/skills/pandas.png";
import machinelearning from "../assets/skills/machinelearning.png";
import java from "../assets/skills/java.png";
import selenium from "../assets/skills/selenium.png";
import javascript from "../assets/skills/javascript.png";
import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";

const Experience = () => {
    const techs = [
      {
        id: 1,
        src: python,
        title: "Python",
        style: "shadow-yellow-500",
      },
      {
        id: 2,
        src: numpy,
        title: "Numpy",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: pandas,
        title: "Pandas",
        style: "shadow-purple-500",
      },
      {
        id: 4,
        src: machinelearning,
        title: "Machine Learning",
        style: "shadow-pink-600",
      },
      {
        id: 5,
        src: java,
        title: "Java",
        style: "shadow-red-400",
      },
      {
        id: 6,
        src: selenium,
        title: "Selenium",
        style: "shadow-green-400",
      },
      {
        id: 7,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-200",
      },
      {
        id: 8,
        src: typescript,
        title: "TypeScript",
        style: "shadow-blue-500",
      },
      {
        id: 9,
        src: react,
        title: "React",
        style: "shadow-sky-400",
      },
    ];
  
    return (
      <div
        name="Experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen h-[120%]"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <p className="text-4xl font-bold inline hover:scale-105 duration-200">
            <span className="border-b-4 border-gray-500">Experience</span>
          </p>
          <p className="py-6 hover:scale-105 duration-200">
            These are the technologies I've worked with
          </p>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;