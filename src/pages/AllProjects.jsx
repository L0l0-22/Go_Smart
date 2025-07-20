import React from 'react';
import demoimg from "../assets/Projects/tasmem.png";
import equina from "../assets/Projects/Equin.png";
import diet from "../assets/Projects/diet.png";
import lms from "../assets/Projects/lms.png";
import contaqa from "../assets/Projects/contaqa.png";
import orderawy from "../assets/Projects/orderawy.png";
import classi from "../assets/Projects/classi.png";
import Aida from "../assets/Projects/Aida.png";
import CRM from "../assets/Projects/CRM.png";
import tippy from "../assets/Projects/TIPPY.png";
import OmegaCare from "../assets/Projects/OmegaCare.png";
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function AllProjects() {
  const projects = [
    {
      name: "Equina",
      description:
        "ERP system and mobile app for horse clubs and lesson bookings.",
      img: equina,
      buttonText: "Website & Mobile App",
    },

    {
      name: "OmegaCare",
      description:
        "CRM system for healthcare company integrated with WhatsApp messaging.",
      img: OmegaCare,
      buttonText: "ERP",
    },

    {
      name: "Ordarawy Market",
      description:
        "Full grocery app with ERP, POS, and delivery applications integrated.",
      img: orderawy,
      buttonText: "Mobile App",
    },

    {
      name: "Diet To Door",
      description:
        "ERP system for meal production, medical plans, and delivery to customers.",
      img: diet,
      buttonText: "ERP",
    },

    {
      name: "Aldiwan",
      description:
        "Real estate system for property management, pricing and installments.",
      img: CRM,
      buttonText: "ERP",
    },

    {
      name: "LMS",
      description:
        "Educational platform for course browsing, subscriptions, and admin dashboard.",
      img: lms,
      buttonText: "Website",
    },
    {
      name: "Tasmem",
      description:
        "Engineering consultancy app and website with built-in project coordination.",
      img: demoimg,
      buttonText: "Website & Mobile App",
    },
    {
      name: "Contaqa",
      description:
        "Company website showcasing info, projects, and all contact details.",
      img: contaqa,
      buttonText: "Website",
    },


    {
      name: "Classi",
      description:
        "ERP for furniture store managing inventory, sales, purchases, and customers.",
      img: classi,
      buttonText: "ERP",
    },
    {
      name: "Aida",
      description:
        "Website for IT help desk services and comprehensive IT solutions.",
      img: Aida,
      buttonText: "Website",
    },


    {
      name: "TippyTap",
      description:
        "Website for buying digital business, review, and deep linking cards.",
      img: tippy,
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
            <div className="">

              <img
                src={project.img}
                alt={project.name}
                className="object-cover mx-auto w-full max-w-[400px] rounded-md"
              />

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