import React from 'react';
import demo from "../assets/projectDemo2.mp4";
import demoimg from "../assets/imgdemo.jpeg";
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function AllProjects() {
  const projects = [
        {
      name: "Project One",
      description:
        "The second project focuses on eCommerce development and performance.",
      img: demoimg,
      buttonText: "Website",
    },
    {
      name: "Project Two",
      description:
        "This is the first project showcasing modern UI and responsive design principles.",
      video: demo,
      buttonText: "Mobile App",
    },
    {
      name: "Project Three",
      description:
        "The second project focuses on eCommerce development and performance.",
      img: demoimg,
      buttonText: "Website",
    },
  ];

  return (
    <div className="bg-white py-8 mt-6 relative">
      <div className="absolute left-0 top-[-50px] xl:top-[-1px] hidden md:block xl:h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="xl:h-full xl:w-auto w-[22rem]" />
      </div>
      <div className="absolute right-0 bottom-0 xl:top-[-1px] hidden md:block xl:h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="xl:h-full" />
      </div>
      <div className="absolute left md:hidden block">
        <img src={logoresp} alt="Go Smart logo" />
      </div>
      <div className="absolute right-0 bottom-0 md:hidden block">
        <img src={logoresp2} alt="Go Smart logo" />
      </div>

      <div className="xl:max-w-7xl max-w-full mx-4 xl:mx-auto relative justify-center flex flex-wrap gap-8 py-16 z-30">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-[47%] xl:w-[30%] max-w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between z-10"
          >
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-main px-4 py-2">
                {project.name}
              </h3>
              <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
                {project.description}
              </p>
            </div>

            {/* Conditionally render video or image */}
            <div className="px-4 py-2">
              {project.video ? (
                <video
                  src={project.video}
                  className="object-contain mx-auto w-full max-w-[300px] rounded-md"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={project.img}
                  alt={project.name}
                  className="object-cover mx-auto w-full max-w-[300px] rounded-md"
                />
              )}
            </div>

            <button className="w-full mt-6 rounded bg-main hover:bg-[#000099] text-white text-base md:text-lg font-semibold px-4 py-3">
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
