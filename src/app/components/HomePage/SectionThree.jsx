'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const circleRefs = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Use gsap.context for scoping
        const ctx = gsap.context(() => {
            // Animate h1 (from right → left)
            gsap.fromTo(
                h1Ref.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: h1Ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Animate h2 (from left → right)
            gsap.fromTo(
                h2Ref.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: h2Ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Random circle animation
            let activeIndex = null;
            const animateRandomCircle = () => {
                const allCircles = circleRefs.current.filter(Boolean);
                if (allCircles.length === 0) return;

                // hide previous (if any)
                if (activeIndex !== null && allCircles[activeIndex]) {
                    gsap.to(allCircles[activeIndex], {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                    });
                }

                // pick a new index that is different from last one
                let newIndex = activeIndex;
                while (newIndex === activeIndex) {
                    newIndex = Math.floor(Math.random() * allCircles.length);
                }
                activeIndex = newIndex;

                // animate only the new one
                gsap.fromTo(
                    allCircles[newIndex],
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                    }
                );
            };


            const interval = setInterval(animateRandomCircle, 2500);
            return () => clearInterval(interval);
        }, containerRef);

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    return (
        <div ref={containerRef} className="projects w-full h-[465px] sm:h-[790px] lg:h-[900px] xl:h-[900px] relative bg-[#0A131C] pt-[15px] sm:pt-[20px] lg:pt-[58px] overflow-hidden">
            {/* Background image (sharp outside, blurred inside glass) */}
            {/* RIGHT LOGO */}
            <div className="hidden right-image w-[55.8px] h-[72.3px] absolute right-[3%] lg:right-[5%] top-[1%] lg:top-[2%] xl:top-[5%] rotate-[50deg]">
                <img src="/img/aboutpage/sectionthree/rightlogo.png" />
            </div>
            {/* LEFT LOGO */}
            <div className="hidden left-image absolute left-[3%] bottom-0 lg:bottom-[1%] xl:bottom-[2%] rotate-x-[-140deg] rotate-[-80deg]">
                <img src="/img/aboutpage/sectionthree/leftlogo.png" />
            </div>

            {/* Main glass box */}
            <div className="main-glass w-[403px] sm:w-[88%] mx-auto h-[425px] sm:h-[740px] lg:h-[800px] xl:h-[800px] rounded-[5px] xl:rounded-[26px] border-[1.4px] xl:border border-[#4279E8]/40
                            md:backdrop-blur-xl opacity-[96%]
                            md:shadow-[0_8px_26px_rgba(0,0,0,0.6)]
                            relative overflow-hidden">
                {/* No extra logo needed inside */}
            </div>

            {/* MAIN CONTENT */}
            <div className="main-content w-[403px] sm:w-[90%] md:w-[90%] h-[873px] rounded-[26px] absolute top-[-24px] left-1/2 -translate-x-1/2 mt-[58px] z-[1000]">
                {/* HEADING */}
                <div className="w-[76px] h-[39px] sm:w-[120px] lg:w-[169px] sm:h-[90px] mx-auto text-center md:mt-[0px]  lg:mt-[100px] border-t-[3px] border-[#77CCF3]">
                    <h1 ref={h1Ref} className="font-[500] text-[12px] sm:text-[18px] lg:text-[22px] text-[#FFFFFF]">Our Work</h1>
                    <h2 ref={h2Ref} className="text-[#77CCF3] text-[16px] sm:text-[20px] lg:text-[26px] font-[600]">Portfolio</h2>
                </div>

                {/* PROJECTS SHOWCASE FOR DESKTOP */}
                <div className="desktop-projects w-[94%] hidden lg:flex mx-auto lg:mt-[50px] flex-wrap md:gap-[8px]">
                    {/* PROJECT ONE */}
                    <div className="project-one w-[20%] h-[260px] lg:h-[350px] p-[2px] gradient-border">

                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectone.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[0] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>


                            {/* OVERLAY */}
                            <div className="w-full h-[238px] bg-[#000] absolute bottom-0 right-0 pt-[50px] opacity-[80%] rounded-tl-full">
                                <h3 className="font-[500] text-[18px] xl:text-[20px] text-[#FFFFFF] absolute right-[30px] xl:right-[25px]">Printing Media</h3>
                                <h4 className="text-[#CCCCCC] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] text-[#CCCCCC] absolute lg:left-[36px] xl:left-[50px] mt-[68px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT TWO */}
                    <div className="project-two w-[40%] h-[150px] lg:h-[190px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projecttwo.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[1] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[54%] group-hover:h-full group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[40px] xl:pt-[50px] ">

                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] xl:w-[90%] text-[8px] text-right text-[#CCCCCC] absolute left-[30px] xl:left-[10px] mt-[54px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT THREE */}
                    <div className="project-three w-[38%] h-[260px] lg:h-[350px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectthree.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[2] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="w-0 h-0 group-hover:w-[70%] xl:group-hover:w-[55%] group-hover:h-[70%] bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[80px] xl:pt-[50px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px] xl:right-[26px">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] xl:text-[10px] text-[#CCCCCC] absolute left-[50px] mt-[68px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FOUR */}
                    <div className="project-four w-[20%] h-[130px] lg:h-[200px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfour.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[3] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="overlay w-0 h-0 group-hover:w-[70%] group-hover:h-[80%] bg-[#000] absolute bottom-0 right-0 pt-[50px] xl:pt-[40px] group-hover:opacity-[80%] rounded-tl-full opacity-0
                    transition-all duration-500 ease-in-out">
                                <h3 className="font-[500] text-[10px] xl:text-[12px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[7px] xl:text-[9px] mt-[16px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] xl:w-[90%] text-[5px] xl:text-[8px] text-[#CCCCCC] absolute left-[20px] xl:left-[21px] mt-[34px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi.</p>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FIVE */}
                    <div className="project-five w-[40%] h-[240px] lg:h-[360px] p-[2px] mt-[-110px] lg:mt-[-160px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfive.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[4] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[70%] group-hover:h-[80%] group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[80px]">

                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[90%] xl:w-[80%] text-[10px] xl:text-[12px] text-right text-[#CCCCCC] absolute left-[10px] xl:left-[50px] mt-[80px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT SIX */}
                    <div className="project-six w-[38%] lg:h-[200px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectsix.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefs.current[5] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="w-0 h-0 group-hover:w-[50%] group-hover:h-full bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[46px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[18px] xl:text-[20px] text-[#FFFFFF] absolute right-[20px] xl:right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[24px] xl:mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] text-[#CCCCCC] absolute left-[36px] xl:left-[50px] mt-[50px] xl:mt-[55px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECTS SHOWCASE FOR MOBILE */}
                <div className="flex lg:hidden w-[90%] mx-auto mt-[16px] sm:mt-0 sm:gap-[10px] flex-wrap">
                    {/* PROJECT ONE */}
                    <div className="w-[180px] h-[119px] sm:w-[33%] sm:h-[280px] p-[2px] gradient-border">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectone.png')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden w-full h-[238px] sm:h-[160px] md:h-[200px] bg-[#000] absolute bottom-0 right-0 pt-[50px] opacity-[80%] rounded-tl-full">
                                <h3 className="font-[500] text-[20px] sm:text-[14px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#CCCCCC] text-[12px] sm:text-[10px] mt-[30px] sm:mt-[20px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] sm:w-[90%] md:w-[80%] text-[8px] sm:text-[6px] md:text-[8px] text-[#CCCCCC] absolute left-[50px] sm:left-[12%] md:left-[18%] mt-[68px] sm:mt-[40px] md:mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT TWO */}
                    <div className="w-[178px] h-[66px] sm:w-[65%] sm:h-[160px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projecttwo.jpg')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[54%] group-hover:h-full group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[80px] sm:pt-[24px]">

                                <h3 className="font-[500] text-[20px] sm:text-[14px] text-[#FFFFFF] absolute right-[30px] sm:right-[20px] md:right-[50px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] sm:text-[10px] mt-[30px] sm:mt-[20px] absolute right-[14px] sm:right-[10px] md:right-[30px]">Short Detail Here</h4>
                                <p className="w-[90%] text-[8px] md:text-[10px] text-right text-[#CCCCCC] absolute left-[10px] mt-[54px] sm:mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[12px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[12px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT THREE */}
                    <div className="w-[178.99px] h-[96.51px] sm:w-[33%] sm:h-[120px] mt-[10px] sm:mt-0 p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfour.png')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden w-0 h-0 group-hover:w-[55%] sm:group-hover:w-[70%]  group-hover:h-full bg-[#000] absolute bottom-0 right-0 pt-[50px] sm:pt-[30px] group-hover:opacity-[80%] rounded-tl-full opacity-0
                    transition-all duration-500 ease-in-out">
                                <h3 className="font-[500] text-[10px] text-[#FFFFFF] absolute right-[30px] sm:right-[20px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[7px] mt-[16px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[5px] text-[#CCCCCC] absolute left-[20px] mt-[34px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi.</p>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[12px] left-[18px]">Visit Main Link</span>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[12px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FOUR */}
                    <div className="w-[179px] h-[121px] sm:w-[65%] sm:h-[240px] mt-[-44px] sm:mt-[-120px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectthree.jpg')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden w-0 h-0 group-hover:w-[55%] sm:group-hover:w-[70%] md:group-hover:w-[60%] group-hover:h-[70%] sm:group-hover:h-[90%] bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[100px] sm:pt-[40px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] text-[#CCCCCC] absolute left-[50px] mt-[68px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FIVE */}
                    <div className="w-[180px] h-[110px] sm:w-[49%] sm:h-[185px] mt-[10px] sm:mt-0 p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectsix.png')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden w-0 h-0 group-hover:w-[50%] sm:group-hover:w-[70%] group-hover:h-full bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[46px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[20px] sm:text-[14px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] sm:mt-[20px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] sm:w-[90%] text-[8px] sm:text-[7px] text-[#CCCCCC] absolute left-[50px] sm:left-[20px] mt-[68px] sm:mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[10px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] sm:bottom-[10px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT SIX */}
                    <div className="w-[176px] h-[141px] sm:w-[49%] sm:h-[185px] mt-[-21px] sm:mt-0 p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfive.jpg')] bg-cover bg-center relative">
                            {/* OVERLAY */}
                            <div className="hidden absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[70%] group-hover:h-[80%] sm:group-hover:h-full group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[80px] sm:pt-[40px]">

                                <h3 className="font-[500] text-[20px] sm:text-[16px] text-[#FFFFFF] absolute right-[30px] sm:right-[16px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] sm:text-[10px] mt-[30px] sm:mt-[20px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[90%] sm:w-[92%] md:w-[86%] text-[10px] text-right text-[#CCCCCC] absolute left-[10px] sm:left-[0px] md:left-[22px] mt-[80px] sm:mt-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;