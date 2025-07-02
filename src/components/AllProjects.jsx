<<<<<<< HEAD
import React from 'react'

export default function AllProjects() {
  return (
    <div>AllProjects</div>
  )
=======
import React from 'react';
import frame from "../assets/Frame 109.png";

export default function AllProjects() {
  const projects = Array(6).fill({
    name: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: frame,
    buttonText: "Mobile App & Website",
  });

  return (
    <div className="max-w-[95%] mx-auto bg-white py-8 mt-6">
      <div className="flex flex-wrap justify-center items-start gap-20 py-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[406px] h-[540px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between relative z-10"
          >
            <div>
              <h3 className="text-[24px] font-bold capitalize leading-[100%] font-[Poppins] text-[#000066] px-4 py-2 rounded-md inline-block">
                {project.name}
              </h3>
              <p className="text-[14px] font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C] opacity-30 px-4 py-2 rounded">
                {project.description}
              </p>
            </div>

            <img
              src={project.image}
              alt="Project visual"
              className="object-cover mx-auto"
            />

            <button className="w-[358px] h-[62px] mt-6 rounded bg-[#000066] text-white text-lg font-semibold px-2 py-4">
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> my-changes
}
