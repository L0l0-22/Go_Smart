import React from 'react';
import we from "../assets/we.svg";
import docker from "../assets/docker.png";
import python from "../assets/python.png";
import flutter from "../assets/flutter.png";
import node from "../assets/node.png";
import dj from "../assets/dj.png";
import wordpress from "../assets/wordpress.png";
import odoo from "../assets/Odoo.png"; // Change if you have a real odoo logo

export default function Technologies() {
  const technologies = [
    { name: '', image: docker },
    { name: 'Python', image: python },
    { name: 'WordPress', image: wordpress },
    { name: '', image: node },
    { name: 'Django', image: dj }, // Replace with real Django logo if needed
    { name: 'Flutter', image: flutter },
    { name: '', image: odoo },
  ];

  const firstRow = technologies.slice(0, 4);
  const secondRow = technologies.slice(4);

  return (
    <div className='bg-[#F8FAFF] pt-12' id='technologies'>
      {/* Header */}
      <div className="w-full sm:max-w-[95%] mx-auto rounded-md border border-gray-300 bg-white py-6 px-4 sm:py-8 sm:px-14  ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-main font-semibold uppercase flex items-center text-xl mb-3">
            <span className="inline-block w-10 h-[2px] bg-main mr-2"></span>
            Technologies
            <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
          </p>
          <h2 className="text-2xl xl:text-5xl font-bold text-center">
            <span className='flex items-center '>
              Technologies   
              <img src={we} alt="Go Smart we" className='mx-3 w-14 md:w-20 object-contain'/> 
              Master
            </span>
          </h2>

          {/* Technologies Grid */}
          <div className="mt-12 space-y-8">
            {/* First row: 4 items */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {firstRow.map((tech, index) => (
                <div
                  key={index}
                  className="w-[148px] h-[43px] sm:w-[255px] sm:h-[68px] flex items-center justify-center 
                 rounded-[71px] border border-[#CED5FF] bg-[#EFF4FC] 
                 shadow-[4px_4px_0px_0px_#DAE8FF] gap-2 px-4 sm:px-10"
                >
                  <img src={tech.image} alt={tech.name} className="h-[60%] object-contain" />
                  <p className="text-xs sm:text-sm md:text-base font-bold">{tech.name}</p>
                </div>
              ))}
            </div>


            {/* Second row: 3 items */}
            <div className="flex justify-center mt-2">
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                {secondRow.map((tech, index) => {

                  // CENTERING THE THIRD CARD IF IT'S ODD NUMBER |3|

                  const isLast = index === secondRow.length - 1;
                  const isOdd = secondRow.length % 2 !== 0;

                  const itemClasses =
                    isLast && isOdd
                      ? "col-span-2 flex justify-center xl:col-span-1 xl:justify-start"
                      : "";

                  return (
                    <div
                      key={index}
                      className={`${itemClasses}`}
                    >
                      <div
                        className="w-[148px] h-[43px] sm:w-[255px] sm:h-[68px] flex items-center justify-center 
                       rounded-[71px] border border-[#CED5FF] bg-[#EFF4FC] 
                       shadow-[4px_4px_0px_0px_#DAE8FF] gap-2 px-4 sm:px-10"
                      >
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-[40%] h-[80%] object-contain"
                        />
                        <p className="text-sm md:text-base font-bold">{tech.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
