
import React from 'react';
import frame from "../assets/Frame 109.png";
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function AllProjects() {
  const projects = Array(6).fill({
    name: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: frame,
    buttonText: "Mobile App & Website",
  });

  return (
    <div className=" bg-white py-8 mt-6 relative">
      <div className="absolute left-0 top-[-50px] lg:top-[-1px] hidden md:block lg:h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="lg:h-full lg:w-auto w-[22rem]"/>
      </div>
      <div className="absolute right-0 bottom-0 lg:top-[-1px] hidden md:block lg:h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="lg:h-full"/>
      </div>
      <div className="absolute left md:hidden block">
        <img src={logoresp} alt="Go Smart logo" />
      </div>
      <div className="absolute right-0 bottom-0 md:hidden block">
        <img src={logoresp2} alt="Go Smart logo" />
      </div>
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 z-30">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] lg:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between z-10"          >
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
                {project.name}
              </h3>
              <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
                {project.description}
              </p>
            </div>

            <img
              src={project.image}
              alt="Project visual"
              className="object-contain mx-auto w-full max-w-[300px]"
            />

           <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
