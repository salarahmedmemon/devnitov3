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
                            project-card group w-[100%] h-auto 
                            sm:w-[40vw] md:w-[40vw]  
                            sm:mt-6 gradient-border rounded-lg relative overflow-hidden
                            lg:w-[100%] lg:h-auto  
                            p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
                        >
                            <div className="w-full h-full bg-[#0A131C] flex flex-col items-center justify-start p-4 xl:p-6">

                                {/* Heading */}
                                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
                                    Project {index + 1}
                                </h3>

                                {/* List of 8 items */}
                                <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                                    <li>Item 1 for Project {index + 1}</li>
                                    <li>Item 2 for Project {index + 1}</li>
                                    <li>Item 3 for Project {index + 1}</li>
                                    <li>Item 4 for Project {index + 1}</li>
                                    <li>Item 5 for Project {index + 1}</li>
                                    <li>Item 6 for Project {index + 1}</li>
                                    <li>Item 7 for Project {index + 1}</li>
                                    <li>Item 8 for Project {index + 1}</li>
                                </ul>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SectionThree;
