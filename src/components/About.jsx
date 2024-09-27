import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-bold mb-5 text-green-500 flex justify-center underline">About</h1>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side - About Content */}
        <div className="md:w-1/2 mb-8">
          <p className="text-lg mb-4">
            Hello, I'm Tamir, a passionate web developer with a keen eye for
            the MERN Stack. With a background in IT, I strive to create
            impactful and visually stunning software solutions
           
          </p>
          <h2 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h2>
          <span>
            Degree/Certification || Institution, [Year] <br />
            Degree/Certification || Institution, [Year] <br />
            Relevant Course || Platform/Institution, [Year]
          </span>
          <br />
          <br />
          <h2 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h2>
          <span>
            Proficient in [Programming Languages]. <br />
            Experienced with [Software Tools/Technologies]. <br />
            Strong grasp of [Design Principles/Concepts]. <br />
            Excellent problem-solving skills. <br />
            Effective communicator and collaborator.
          </span>
          <br />
          <br />
          <h2 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Right Side - Technologies Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-5 text-center">
            Technologies I Work With
          </h1>
          <div className="flex justify-center items-center gap-8 text-5xl text-gray-700">
            <FaHtml5 className="text-orange-600" />
            <FaCss3Alt className="text-blue-500" />
            <IoLogoJavascript className="text-yellow-500" />
            <FaReact className="text-blue-400" />
            <FaJava className="text-red-600" />
            <FaGithub className="text-green-700"/>
            <RiTailwindCssFill className="text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
