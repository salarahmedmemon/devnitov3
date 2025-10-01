"use client";
import Image from "next/image";
import Header from "../Header";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LoadContext } from "../ClientWrapper";


const SectionOne = () => {
    // 1. states/hook variables
    const { loaded } = useContext(LoadContext);
    const sectionRef = useRef(null);

    // LARGE SCREEN REFS
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const contentRef = useRef(null);
    const rightRef = useRef(null);
    const tl = useRef(null);

    // MOBILE REFS
    // const mImg1 = useRef(null);
    // const mImg2 = useRef(null);
    // const mContent = useRef(null);
    // const mRight = useRef(null);

    useLayoutEffect(() => {
        if (!loaded || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (window.innerWidth > 1280) {
                tl.current = gsap.timeline({ paused: true });
                tl.current.fromTo(imgRef1.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
                tl.current.fromTo(imgRef2.current, { y: 100, x: -100, opacity: 0 }, { y: 0, x: 0, duration: 1, opacity: 1, ease: "power3.out" }, 0);
                tl.current.fromTo(contentRef.current, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
                tl.current.fromTo(rightRef.current, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);

                const handleEnter = () => { if (tl.current.paused()) tl.current.play(); };
                sectionRef.current.addEventListener("mousemove", handleEnter);
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [loaded]);

    // 2. functions/methods

    // 3. return statment/jsx
    return (
        <div ref={sectionRef} className="w-full h-[514px] sm:h-[560px] md:h-[640px] xl:h-[725px] pt-[9px] md:pt-[20px] xl:pt-[30px]">
            {/* LARGE SCREEN BACKGROUND IMAGE */}
            <div className="w-full h-[514px] sm:h-[560px] md:h-[640px] xl:h-[725px] absolute top-0 left-0">
                <Image
                    src="/img/careerspage/bgimage.png"
                    alt="background image"
                    fill="true"
                    placeholder="blur"
                    className="object-cover"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAklEQVR4AewaftIAAACcSURBVI3BwUrDQBSG0e/PXDJaFfQB2pU0FOpaEJ++G0FcCCItZKnLLkwJmUyUuYpQcOk5ClY7/2D8IQmqil+l4O4cGT8kofqUy+sb1rf3yGH79MC+fcZzwt0xEFWccd7cMV82vL13jEPHxWLFp11x2G0oY49VwVB9Rt8+8vK6IdaRnDMIFE+QRVDCcCjDB16+cHdSmjjSMKEQAOcbKF45aEp4Xz8AAAAASUVORK5CYII="
                />
            </div>

            <Header />
            <div className="w-full h-full pt-[26px] sm:pt-0 relative overflow-hidden">
                <img ref={imgRef1}
                    src="/img/aboutpage/sectionone/image01.png"
                    className="img-top hidden lg:block absolute w-[173px] h-[217px] top-[-5%] left-[29%]"
                />
                <img ref={imgRef2}
                    src="/img/aboutpage/sectionone/image02.png"
                    className="img-left-bottom hidden lg:block absolute w-[66px] h-[125px] rotate-[28deg] top-[0%] left-[57%]"
                />
                <div ref={contentRef} className="w-full h-[80%] sm:h-full md:w-[88%] md:h-full lg:h-[86%] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mx-auto">
                    <div className="text-container w-[100%] h-full md:w-[491px] md:h-[420px] xl:h-full flex flex-col items-center lg:items-start justify-center">
                        <button className="w-[125px] h-[36px] sm:w-[140px] md:w-[160px] md:h-[40px] lg:w-[198px] lg:h-[65px] bg-white text-[#4C4886] text-[24px] lg:text-[40px] font-[600] rounded-lg mt-[16px] sm:mt-0 xl:mt-0">
                            SEE OUR
                        </button>
                        <h1 className="text-white text-center lg:text-start leading-[60px] lg:mt-[20px] w-[100vw] font-[600] text-[48px]  lg:text-[75px]  xl:text-[90px]">
                            CAREERS BLOG
                        </h1>
                        {/* <span className="text-[24px] lg:text-[40px] lg:mt-[40px] font-[500] text-white leading-[14px]">DETAILS</span> */}
                        <p className="text-white text-[12px] w-[80%] text-center lg:text-start font-[500] mt-[20px]   sm:w-[70%] sm:text-[14px]  md:w-[100%] md:text-[16px]   lg:text-[20px] lg:w-[90%]  xl:mt-[30px] xl:w-[100%]">
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem ipsum has been the industry's standard dummy text ever
                            since the 1500s.
                        </p>
                        <button className="w-[146px] h-[46px] sm:w-[200px] sm:h-[37px] bg-white text-[#4C4886] text-[12px] font-[600] rounded-[5px] mt-[8px]   md:w-[207px] md:h-[44px] md:text-[20px]   xl:mt-[40px] relative group">
                            Talk to our expert
                            <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                        </button>
                    </div>
                    <div ref={rightRef} className="main-img-container w-[196px] h-[201px] sm:w-[400px] sm:h-[100px]  xl:w-[500px]  xl:h-[200px]   flex items-center justify-center">
                        <img
                            src="/img/careerspage/image02.png"
                            className="pt-0 sm:pt-[80px] md:pt-0  w-[95%] sm:w-[65%]  lg:w-[100%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;