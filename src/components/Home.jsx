import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return ( 
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-gray-950 to-gray-800">
            <div className="max-w-[80%] mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white hover:scale-105 duration-200">I'm Adrien Bekker</h2>
                        <p className="text-gray-500 py-4 max-w-lg text-center hover:scale-105 duration-200 font-bold">
                            Honors Computer Science Major and Business Minor Student at University of Massachusetts Amherst
                        </p>

                    <a href="./AdrienBekkerResume.pdf" target="_blank" download>
                        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:scale-105 duration-200">
                            Download Resume
                            <span><MdOutlineKeyboardArrowRight /></span>
                        </button>
                    </a>
                </div>

                <div>
                    <img src={require("../assets/img.JPG")} alt="headshot" className="rounded-2xl mx-auto w-2/3 md:w-3/5 hover:scale-105 duration-200" />
                </div>
            </div>
        </div>
    )
}

export default Home;