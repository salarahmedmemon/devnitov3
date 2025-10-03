"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        // Title from Left
        gsap.fromTo(
            titleRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Form from Right
        gsap.fromTo(
            formRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="w-full h-[93vh] sm:h-[80vh] md:min-h-screen bg-[#EEEEEE] relative overflow-hidden">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* LEFT CIRCLE */}
            <div className='w-[185.26px] h-[185.26px] sm:w-[400px] sm:h-[400px] lg:w-[754px] lg:h-[754px] rounded-full bg-[#fff] absolute bottom-[-20px] left-[-40px] sm:bottom-[-30px] sm:left-[-160px] lg:bottom-[-200px] lg:left-[-160px] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#F2F3F5] to-[#F1F2F2]'></div>
            </div>

            {/* TITLE */}
            <div ref={titleRef} className="title relative text-center mb-10 opacity-0">
                <div className="w-[50%] sm:w-[35vw] md:w-[22vw] h-[2px] bg-[#4C4886] absolute left-1/2 -translate-x-1/2 top-[5vw] sm:top-[20%] md:top-[18%]"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl pt-[40px] sm:pt-6">
                    Ask For The Custom
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4C4886] font-semibold">
                    Service And Package
                </h2>
            </div>

            {/* Form */}
            <form
                ref={formRef}
                className="form w-full md:w-[80vw] mx-auto flex items-center justify-center flex-wrap gap-4 p-4 opacity-0"
            >
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Email:"
                    type="email"
                />
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Phone No:"
                    type="number"
                />
                <input
                    className="z-10 w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Phone No:"
                    type="number"
                />
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Date: 20/Sep/2025"
                    type="date"
                />
                <textarea
                    className="z-10 w-full sm:w-[82.5vw] md:w-[57vw] h-[30vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Messages:"
                ></textarea>
                <div className="z-10 w-full sm:w-[82.5vw] md:w-[57vw]">
                    <button className="px-6 py-3 bg-[#4C4886] text-white rounded font-semibold">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SectionFour;