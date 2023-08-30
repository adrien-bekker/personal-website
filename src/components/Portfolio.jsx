import React from "react";
import ElfBot from "../assets/projects/ElfBot.jpg";
import IMGModels from "../assets/projects/imgmodels.png";
import FeelTheBeat from "../assets/projects/feelthebeat.png";
import Insight from "../assets/projects/insight.jpg";

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: ElfBot,
        href1: "https://youtu.be/pM-kx_mdIzI",
        href2: "https://github.com/drinnyboy/ElfBot",
      },
      {
        id: 2,
        src: IMGModels,
        href1: "https://youtu.be/Vwspeiezuzw",
        href2: "https://github.com/drinnyboy/IMG-Models",
      },
      {
        id: 3,
        src: FeelTheBeat,
        href1: "https://youtu.be/gA7oihrpqWU",
        href2: "https://github.com/drinnyboy/FeelTheBeat",
      },
      {
        id: 4,
        src: Insight,
        href1: "https://youtu.be/bZLY5-CHO_g",
        href2: "https://github.com/drinnyboy/Insight",
      },
    ];
  
    return (
      <div
        name="Portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold inline hover:scale-105 duration-200">
            <span className="border-b-4 border-gray-500">Portfolio</span>
          </p>
          <p className="py-6 hover:scale-105 duration-200">
            Check out some of my work right here
          </p>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {portfolios.map(({ id, src, href1, href2 }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
      <img
        src={src}
        alt=""
        className="rounded-md duration-200 hover:scale-105 h-48 object-contain w-full"
      />
      <div className="flex items-center justify-center h-16">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          <a href={href1} target="_blank">Demo</a>
        </button>
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          <a href={href2} target="_blank">Code</a>
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    );
  };
  
  export default Portfolio;
  