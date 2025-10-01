"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceBox = ({ fname, sname, pos, image, setActiveImage }) => {
    return (
        <div
            className={`w-[92px] h-[86px] lg:w-[200px] lg:h-[134px] absolute ${pos} flex flex-col items-center justify-between cursor-pointer`}
            onMouseEnter={() => setActiveImage(image)}
        >
            <div className="w-[47px] h-[44px] lg:w-[70px] lg:h-[70px] rounded-[10px] border border-[#75BAFF] shadow-[0_0_4px_0_#0080FF] flex items-center justify-center">
                <div className="w-[16px] h-[16px] lg:w-[27px] lg:h-[27px] rounded-full bg-[#75BAFF] shadow-[0_0_4px_0_#0080FF]"></div>
            </div>
            <div className="w-[200px] h-[54px] text-[12px] lg:text-[20px] font-[600] text-[#75BAFF] flex flex-col items-center justify-center text-center">
                <span>{fname}</span> <span>{sname}</span>
            </div>
        </div>
    );
};

const UpdatedSectionThree = () => {
    const [activeImage, setActiveImage] = useState(
        "/img/servicepage/sectionthree/mobileapp.png"
    );

    const serviceImages = {
        "Mobile App Development": "/img/servicepage/sectionthree/mobileapp.png",
        "IT Resource": "/img/servicepage/sectionthree/itresource.png",
        "E-Commerce Web Development": "/img/servicepage/sectionthree/ecommerce.png",
        "UI/UX Design": "/img/servicepage/sectionthree/uiux.png",
        "Emerging Tech Development": "/img/servicepage/sectionthree/emerging.png",
        "Digital Branding & Communication": "/img/servicepage/sectionthree/dbc.png",
        "Website Development": "/img/servicepage/sectionthree/webdevelopment.png",
        "Video Animation": "/img/servicepage/sectionthree/video.png",
        "Digital Branding": "/img/servicepage/sectionthree/marketing.png",
    };

    return (
        <div className="w-full h-[810px] lg:h-[1921px] flex items-center justify-center bg-[#0A131C] overflow-hidden">
            <div className="w-[80%] h-[50%] relative">
                {/* WHITE SHADOW BEHIND IMAGE */}
                <div className="w-[220px] h-[476px] lg:w-[340px] lg:h-[660px] absolute bottom-[-80px] lg:bottom-[-10px] left-1/2 -translate-x-1/2 z-5 rounded-[40px] shadow-[0_0_80px_30px_rgba(255,255,255,0.35)]"></div>

                {/* IMAGE FRAME WITH ANIMATION (NO BORDER) */}
                <div className="w-[210px] h-[476px] lg:w-[340px] lg:h-[660px] absolute bottom-[-80px] lg:bottom-0 left-1/2 -translate-x-1/2 z-10 overflow-hidden rounded-[30px]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeImage}
                            src={activeImage}
                            alt="iphone image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full object-cover rounded-[30px]"
                        />
                    </AnimatePresence>
                </div>

                {/* CIRCLE BACKGROUND */}
                <div
                    className="w-[481px] h-[481px] lg:w-[783px] lg:h-[783px] rounded-full absolute bottom-[-80%] lg:bottom-[-60%] 
                    left-1/2 -translate-x-1/2 opacity-[30%] bg-gradient-to-r to-[#EEEEEE4D] via-[#33333300] from-[#EEEEEE4D]"
                ></div>

                {/* SERVICE BOXES */}
                <ServiceBox
                    fname="Mobile"
                    sname="App Development"
                    pos="top-[-120px] lg:top-[120px] left-1/2 -translate-x-1/2"
                    image={serviceImages["Mobile App Development"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="IT"
                    sname="Resource"
                    pos="top-[-60px] left-[-40px] lg:top-[60px] lg:left-[90px]"
                    image={serviceImages["IT Resource"]}
                    setActiveImage={setActiveImage}
                />
            
                <ServiceBox
                    fname="UI/UX"
                    sname="Design"
                    pos="top-[-60px] right-[-40px] lg:top-[60px] lg:right-[90px]"
                    image={serviceImages["UI/UX Design"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="E-Commerce"
                    sname="Web Development"
                    pos="top-[120px] lg:top-[240px] left-[-40px]"
                    image={serviceImages["E-Commerce Web Development"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="Emerging"
                    sname="Tech Development"
                    pos="top-[120px] xl:top-[240px] right-[-40px]"
                    image={serviceImages["Emerging Tech Development"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="Digital Branding &"
                    sname="Communication"
                    pos="top-[300px] lg:top-[500px] left-[-40px]"
                    image={serviceImages["Digital Branding & Communication"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="Website"
                    sname="Development"
                    pos="top-[300px] xl:top-[500px] right-[-40px]"
                    image={serviceImages["Website Development"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="Video"
                    sname="Animation"
                    pos="top-[500px] left-[0px] lg:top-[700px] lg:left-[90px]"
                    image={serviceImages["Video Animation"]}
                    setActiveImage={setActiveImage}
                />
                
                <ServiceBox
                    fname="Digital"
                    sname="Branding"
                    pos="top-[500px] right-[0px] lg:top-[700px] lg:right-[90px]"
                    image={serviceImages["Digital Branding"]}
                    setActiveImage={setActiveImage}
                />
            </div>
        </div>
    );
};

export default UpdatedSectionThree;
