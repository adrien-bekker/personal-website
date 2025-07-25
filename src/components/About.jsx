import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-4xl font-bold inline hover:scale-105 duration-200">
        <span className="border-b-4 border-gray-500">About</span>
        </p>
        

        <p className="text-xl mt-20 hover:scale-105 duration-200">
        I'm Adrien - a current Technology Analyst at Deutsche Bank. I graduated from UMass Amherst with a computer science major and business minor in 2025. I love building full-stack apps with Python, JavaScript, React, and exploring AI/ML.

I've created CS curriculum, taught coding to kids, and fundraised to bring computer science to underrepresented youth. I have developed projects that have won hackathon awards for innovation and social impact.
        </p>

        <br />

        <p className="text-xl hover:scale-105 duration-200">
        Outside of tech, I enjoy playing rugby, working out, gaming, and listening to electronic music. I bring technical skills, business knowledge, and a passion for education to everything I do.

I'm excited to continue creating innovative solutions that make a real world impact. Let's connect!        </p>
      </div>
    </div>
  );
};

export default About;