import React from "react";
import Reactjs from "../assets/logo192.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import github1 from "../assets/github1.jpeg";
import leetcode from "../assets/leetcode.jpeg";
import html from "../assets/html.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo:javascript,
      name:"javascript",
      // Unique video link
      sourceCodeLink: "https://exquisite-gumdrop-180e30.netlify.app/", // Unique link for MongoDB project
      // Unique live demo link
    },
    {
      id:2,
      logo:reactjs,
      name:"ReactJS",
      // Unique video link
      sourceCodeLink: "http://localhost:3004/", // Unique link for ReactJS project
      // Unique live demo link
    },
    {
      id: 3,
      logo: Reactjs,
      name: "logo192.png",
      sourceCodeLink: "https://food-project-youi.vercel.app//", // Unique link for Java project
      // Unique live demo lin
    },
    {
      id: 4,
      logo:html,
      name:"html.png",
      sourceCodeLink: "https://food-project-youi.vercel.app//",
      // Unique live demo lin
    },
    {
      id: 5,
      logo:github1,
      name: "github1.jpeg",
      sourceCodeLink: "https://github.com/TamirAlam",
      // Unique live demo lin
    },
    {
      id: 6,
      logo: leetcode,
      name: "leetcode.jpeg",
      sourceCodeLink: "https://leetcode.com/u/tamiralam2/",
      // Unique live demo lin
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5 text-center text-green-500">Project</h1>
        <span className="underline font-semibold text-center block mb-8">
          Recent Projects
        </span>

        {/* Grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center my-5">
          {cardItem.map(
            ({ id, logo, name, videoLink, sourceCodeLink, liveDemoLink }) => (
              <div
                className="md:w-[300px] md:h-[330px] border-[2px] rounded-lg shadow-lg p-5 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto mb-4"
                  alt={name}
                />
                <div>
                  <div className="text-center font-bold text-xl mb-2">
                    {name}
                  </div>
                  <p className="text-center text-black-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                {/* Buttons section with 3 buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mb-0"> */}
                  {/* <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer"> */}
                  {/* Video */}
                  {/* </a> */}
                  {/* </button> */}
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded mb-0">
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  {/* <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded mb-0"> */}
                  {/* <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer"> */}
                  {/* Source Code */}
                  {/* </a> */}
                  {/* </button> */}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
