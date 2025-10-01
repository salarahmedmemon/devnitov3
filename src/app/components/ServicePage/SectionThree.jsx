"use client";

import { useState } from "react";
import Image from "next/image";

const SectionThree = () => {
  // state to track active service image
  const [activeImage, setActiveImage] = useState("/img/servicepage/sectionthree/mobileapp.png");

  // Map service names to images
  const serviceImages = {
    "Mobile App Development": "/img/servicepage/sectionthree/mobileapp.png",
    "IT Resource": "/img/servicepage/sectionthree/itresource.png",
    "E-Commerce Web Development": "/img/servicepage/sectionthree/ecommerce.png",
    "UI/UX Development": "/img/servicepage/sectionthree/uiux.png",
    "Emerging Tech Development": "/img/servicepage/sectionthree/emerging.png",
    "Digital Branding & Communication": "/img/servicepage/sectionthree/dbc.png",
    "Web Development": "/img/servicepage/sectionthree/webdevelopment.png",
    "Video Animation": "/img/servicepage/sectionthree/video.png",
    "Digital Marketing": "/img/servicepage/sectionthree/marketing.png",
  };

  // reusable box component
  const ServiceBox = ({ title, position }) => (
    <div
      className={`w-[20vw] sm:w-[20vw] md:w-[10vw] h-[15vh] absolute text-[3vw] sm:text-[2.4vw] md:text-[1.4vw] ${position}`}
      onMouseEnter={() => setActiveImage(serviceImages[title])}
      onMouseLeave={() => setActiveImage("/img/servicepage/sectionthree/mobileapp.png")}
    >
      <div className="w-[12vw] sm:w-[10vw] md:w-[5vw] lg:w-[6vw] lg:h-[6vw] h-[6vh] sm:h-[9vh] md:h-[11vh] border-2 border-[#2A4560] mx-auto rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
        <div className="w-[2.5vw] h-[2.5vw] bg-[#2A4560] rounded-full"></div>
      </div>
      <span className="text-center block text-[#2A4560] text-[12px] lg:text-[20px] font-semibold mt-2">
        {title}
      </span>
    </div>
  );

  return (
    <div className="w-full h-[120vh] sm:h-[110vh] md:h-[180vh] bg-[#0a131c] overflow-hidden flex items-center justify-center">
      <div className="w-[50%] sm:w-[50%] lg:w-[70%] h-[80vh] relative">
        {/* iPhone Frame */}
        <div className="w-[50vw] sm:w-[24vw] lg:w-[40vw] h-[130vh] sm:h-[90vh] lg:h-[100vh] absolute top-[8vw] left-[13vw] flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Dynamic screen content */}
            <div className="z-1000 absolute top-[12%] left-[-22vw] sm:left-[-4.5vw] md:left-[12%] w-[67vw] sm:w-[140%] md:w-[80%] h-[50%] sm:h-[65%] md:h-[94%] overflow-hidden rounded-[2rem] transition-all duration-100 ease-in">
              <Image
                src={activeImage}
                alt="iPhone Screen"
                fill
                className="sm:object-cover transition-opacity duration-500"
              />
            </div>

            <div className="hidden md:block w-[40vw] h-[40vw] bg-[#35628e] absolute bottom-[-28vw] left-1/2 -translate-x-1/2 rounded-full"></div>
          </div>
        </div>

        {/* Service Boxes */}
        <ServiceBox title="Mobile App Development" position="top-[10vw] lg:top-[0vw] left-[16vw] md:left-[20vw] lg:left-[41%]" />
        <ServiceBox title="IT Resource" position="top-[26vw] sm:top-[2vw] md:top-[-9vw] lg:top-[-14%] lg:left-[8%] left-[-23vw] sm:left-[-10vw] md:left-[-2vw]" /> 
        <ServiceBox title="E-Commerce Web Development" position="top-[66vw] sm:top-[24vw] md:top-[3vw] lg:top-[15%] lg:left-[-5%] left-[-26vw] sm:left-[-18vw] md:left-[-16vw]" />
        <ServiceBox title="UI/UX Development" position="top-[26vw] sm:top-[2vw] md:top-[-9vw] lg:top-[-14%] lg:right-[8%] right-[-22vw] sm:right-[-10vw] md:right-[-2vw]" />
        <ServiceBox title="Emerging Tech Development" position="top-[66vw] sm:top-[24vw] md:top-[3vw] right-[-26vw] sm:right-[-18vw] md:right-[-16vw] lg:top-[15%] lg:right-[-5%]" />
        <ServiceBox title="Digital Branding & Communication" position="top-[118vw] sm:top-[53vw] md:top-[18vw] left-[-26vw] sm:left-[-18vw] md:left-[-16vw] lg:left-[-5%] lg:top-[55%]" />
        <ServiceBox title="Web Development" position="top-[118vw] sm:top-[53vw] md:top-[18vw] right-[-26vw] sm:right-[-18vw] md:right-[-16vw] lg:right-[-5%] lg:top-[55%]" />
        <ServiceBox title="Video Animation" position="top-[170vw] sm:top-[84vw] md:top-[32vw] left-[-20vw] sm:left-[-10vw] md:left-[-2vw] lg:left-[5%] lg:top-[100%]" />
        <ServiceBox title="Digital Marketing" position="top-[170vw] sm:top-[84vw] md:top-[32vw] right-[-20vw] sm:right-[-10vw] md:right-[-2vw] lg:right-[5%] lg:top-[100%]" /> 
      </div>
    </div>
  );
};

export default SectionThree;
