import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFive = () => {
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
        <div className="w-full min-h-[93vh] sm:h-[80vh] md:min-h-screen bg-[#EEEEEE] relative overflow-hidden">
            {/* RIGHT CIRCLE */}
            <div className='w-[180px] sm:w-[300px] lg:w-[405.06px] h-[180px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[16px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* Left Circle */}
            <div className="w-[96vw] h-[96vw] sm:w-[60vw] sm:h-[60vw] md:w-[45vw] md:h-[45vw] bg-white rounded-full absolute bottom-[-10vw] md:bottom-[-15vw] left-[-24vw] sm:left-[-20vw] md:left-[-10vw] p-1">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>

            {/* TITLE */}
            <div ref={titleRef} className="title relative text-center mt-[26px] mb-4 opacity-0">
                <div className="w-[75vw] sm:w-[35vw] md:w-[22vw] h-[.8vw] sm:h-[.3vw] md:h-[.2vw] bg-[#4C4886] absolute left-1/2 -translate-x-1/2 top-[5vw] sm:top-[20%] md:top-[18%]"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl pt-[20px] sm:pt-6">
                    Lets Talk With Us
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4C4886] font-semibold">
                    Contact Us
                </h2>
            </div>

            {/* Form */}
            <form
                ref={formRef}
                className="form w-full md:w-[80vw] mx-auto flex items-center justify-center flex-wrap gap-4 p-4 opacity-0"
            >
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Name:"
                    type="text"
                />
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Email:"
                    type="text"
                />
                <input
                    className="z-10 w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Phone No:"
                    type="text"
                />
                <input
                    className="w-full sm:w-[40vw] md:w-[28vw] h-[7vh] md:h-[9vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Enter Your Subject:"
                    type="text"
                />
                <textarea
                    className="z-10 w-full sm:w-[82.5vw] md:w-[57vw] h-[30vh] rounded ps-4 border border-[#9d9797]"
                    placeholder="Detailed Subject:"
                ></textarea>
                <div className="z-10 w-full sm:w-[82.5vw] md:w-[57vw]">
                    <button className="px-6 py-3 bg-[#4C4886] mb-[30px] text-white rounded font-semibold">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SectionFive;
