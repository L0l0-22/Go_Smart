import React from 'react';
import Marquee from "react-fast-marquee";
import AIDA from "../assets/AIDA.png";
import TippyTap from "../assets/TippyTap.png";
import KhanMarket from "../assets/KhanMarket.png";
import Classi from "../assets/Classi.png";
import Equina from "../assets/Equina.png";
import Diet from "../assets/Diet.png";
import ordarawy from "../assets/ordarawy.png";
import contaqa from "../assets/contaqa.png";
import omega from "../assets/omega.png";
import rakict from "../assets/rakict.png";
import benaa from "../assets/benaa.png";
import Aldiwan from "../assets/Aldiwan.png";

export default function Partner() {
  const partners = [
    { image: AIDA },
    { image: TippyTap },
    { image: KhanMarket },
    { image: Classi },
    { image: Equina },
    { image: Diet },
    { image: ordarawy },
    { image: contaqa },
    { image: omega },
    { image: rakict },
    { image: benaa },
    { image: Aldiwan },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#F8FAFF] ">
      <p className="text-main font-semibold uppercase flex items-center text-xl mb-8">
        <span className="inline-block w-10 h-[2px] bg-main mr-2"></span>
        Our Partner
        <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
      </p>

      <div className="w-full ">
        <Marquee
          speed={100}
          pauseOnHover={true}
          gradient={false}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="m-4 w-[190px] h-[109px] shrink-0 bg-white rounded-lg shadow-[4px_4px_6px_0px_#C8DDFF85] 
              flex items-center justify-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg "
            >
              <img
                src={partner.image}
                alt={`Partner ${index}`}
                className="max-h-[80%] max-w-[80%] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
