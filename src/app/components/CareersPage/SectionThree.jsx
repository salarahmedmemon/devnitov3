"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    // 1. states/hook variables
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Title animation
            gsap.from(".section-three-title", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-three-title",
                    start: "top 80%",
                },
            });

            // Projects animation alternating left/right
            gsap.utils.toArray(".project-card").forEach((card, i) => {
                gsap.from(card, {
                    x: i % 2 === 0 ? -150 : 150,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        { img: "/img/careerspage/sectionthree/image01.png" },
        { img: "/img/careerspage/sectionthree/image02.png" },
        { img: "/img/careerspage/sectionthree/image03.png" },
        { img: "/img/careerspage/sectionthree/image04.png" },
    ];




    return (
        <div ref={sectionRef} className="w-full bg-[#0A131C] p-5 md:p-20 relative overflow-hidden">
            <div className="hidden lg:block absolute top-[10%] left-1/2 -translate-x-1/2 w-[86%] h-[75%] bg-gradient-to-r from-[#FA1AC2] via-[#11AAEE] to-[#11AAEE] p-[2px] rounded-[10px]">
                <div className="w-full h-full bg-[#0A131C] rounded-[10px]"></div>
                <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute top-[-4%] right-[-4%] blur-[250px]"></div>
                <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute bottom-[-4%] left-[-4%] blur-[250px]"></div>
            </div>
            
            <div className="w-full h-full section-three-bgImage pt-2 sm:pt-4 md:pt-6">

                <div className="relative section-three-title">
                    <div className="w-[59vw] sm:w-[40vw] md:w-[20vw] h-1 bg-[#71C1E6] absolute left-[15.7%] sm:left-[28.5%] md:left-[38.5%] top-[5vw] sm:top-[20%] md:top-[18%]"></div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-[24px] sm:pt-6 text-white">
                        See Our
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
                        Latest Blog
                    </h2>
                </div>


                <div className="relative w-full h-full mt-4 mb-[40px] sm:mt-6 md:mt-10 p-0 md:p-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
                    <img
                        src="/img/aboutpage/sectionthree/rightLogo.png"
                        className="hidden md:block absolute top-[-42vw] sm:top-[-24vw] md:top-[-16vw] right-[-2.5vw] w-[15vw] sm:w-[10vw] md:w-[6vw]"
                    />
                    <img
                        src="/img/aboutpage/sectionthree/leftLogo.png"
                        className="hidden md:block w-[15vw] sm:w-[10vw] md:w-[7.4vw] absolute bottom-[-2.3vw] left-[-2.8vw]"
                    />

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] 
                            project-card group w-[100%] h-[240px] 
                            sm:w-[40vw] md:w-[40vw]  
                            sm:h-[50vw] sm:mt-6 
                            md:h-[vw] gradient-border rounded-lg relative overflow-hidden
                            lg:w-[100%] lg:h-[400px]  
                            p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
                        >

                            <div className="w-full h-full bg-[#0A131C] flex flex-col items-center justify-center 
                            p-[5px] xl:p-[10px]">

                                <div className="w-full h-full">
                                    <div className="w-full h-[100px] sm:h-[150px]">
                                        <img
                                            src={project.img}
                                            className="w-full h-full transition-all duration-500 group-hover:opacity-30"
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-full">
                                    <div className="flex items-center justify-between mt-[1vw]">
                                        <span className="flex items-center justify-between gap-2 text-white"> 
                                            <img src="/img/careerspage/author.png" className="w-[3vw] lg:w-[20px]" /> 
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">|</span> 
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">Author</span>
                                        </span>
                                        <span className="flex items-center justify-between gap-2 text-white"> 
                                            <img src="/img/careerspage/image06.png" className="w-[3vw] lg:w-[20px]" /> 
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">|</span> 
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">1 Jan 2025</span>
                                        </span>
                                    </div>
                                    <h4 className="mt-[2vw] font-semibold text-[10px] 
                                    sm:text-[14px] md:text-[18px] 
                                    lg:text-[16px] text-white">Few Words "Can Refer To A Phrase"</h4>
                                    <p className="text-[#928D9B] text-[8px] 
                                    sm:text-[12px] md:text-[16px] 
                                    lg:text-[14px] mt-[3vw] lg:mt-[3px]">Lorem ipsum is simply dummy text</p>
                                    <button className="bg-white text-[#755E9D] w-[58px] h-[15px] 
                                    sm:w-[70px] sm:h-[22px] rounded-[3px] text-[8px] 
                                    sm:text-[12px] mt-[3vw] lg:mt-[6px]">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
