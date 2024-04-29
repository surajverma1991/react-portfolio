import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white pt-28">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          Dynamic and skilled Senior UI developer with 6+ years of experience
          designing and implementing user interfaces for web applications.
          Proficient in HTML, CSS, and Javascript using a modern library such as
          React JS. Collaborative teams with exceptional skills in integrating
          user interface designs with back­end services, implementing
          accessibility standards, and optimizing user experience.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default About;
