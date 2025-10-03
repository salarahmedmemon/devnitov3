"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  // 1. states/hook variables
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Refs
  const topRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // useEffect
  useEffect(() => {
        // Title (from top)
        if (topRef.current) {
            gsap.fromTo(
                topRef.current,
                { y: -150, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: topRef.current,
                        start: "top 80%", // when 80% of viewport reached
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Left image
        if (leftRef.current) {
            gsap.fromTo(
                leftRef.current,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Right content
        if (rightRef.current) {
            gsap.fromTo(
                rightRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
  }, []);

  return (
    <div className="w-full bg-[#0A131C] p-5 sm:p-20">
      <div className="w-full gradient-border rounded-[1vw] p-1">
        <div className="w-full bg-[#0A131C] rounded-[1vw] text-white">
          {/* Section Title */}
          <div ref={topRef} className="text-center w-[50vw] sm:w-[34vw] md:w-[14vw] mx-auto pt-6 sm:pt-[4vw]">
            <h1 className="text-[9vw] sm:text-[5vw] md:text-[2.4vw] border-t-3 border-t-[#77CCF3]">
              Our Design
            </h1>
            <h2 className="text-[11vw] sm:text-[4.9vw] md:text-[3.2vw] leading-[6vw] sm:leading-[4vw] md:leading-[3vw] text-[#77CCF3] font-semibold">
              Process
            </h2>
          </div>

          {/* Description */}
          <p ref={leftRef} className="text-center p-6 sm:p-10">
            Lorem ipsum is simply dummy text of the printing and typsetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, When an unknown printer took a gallery of type
            and scrambled it to make a type speciman book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s.
            With the release of letraset sheets containing lorem ipsum passages,
            and more recently With Desktop.
          </p>

          <hr className="py-5 w-[60vw] md:w-[80vw] mx-auto" />

          {/* Expandable Section */}
          <div className="pb-10">
            <div
              className={`w-[60vw] md:w-[80vw] gradient-border mx-auto rounded-lg p-1 transition-all duration-700 ease-in-out cursor-pointer ${
                isExpanded ? "h-[120vh] sm:h-[100vw] md:h-[54vw] lg:h-[42vw] xl:h-[37vw]" : "h-[75vh] sm:h-[60vw] md:h-[40vw] lg:h-[40vw] xl:h-[30vw]"
              }`}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <div ref={rightRef} className="w-full h-full bg-[#0A131C] rounded-lg p-5 flex items-start justify-center gap-4 flex-wrap">
                {/* Card 1 */}
                <div className="w-[100%] sm:w-[40%] md:w-[22%] rounded-lg p-1">
                  <div className="w-full gradient-border rounded-lg p-1">
                    <div className="w-full h-[120px] md:h-[34.1vh] rounded-lg overflow-hidden">
                      <img
                        src="/img/casestudiespage/sectionthree/image01.png"
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
                          isExpanded ? "scale-105" : "scale-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out text-center mt-3 ${
                      isExpanded
                        ? "block md:opacity-100 translate-y-0"
                        : "hidden md:opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-[5vw] sm:text-[1.8vw] font-semibold">
                      Creative Design
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-[100%] sm:w-[40%] md:w-[22%] rounded-lg p-1">
                  <div className="w-full gradient-border rounded-lg p-1">
                    <div className="w-full h-[120px] md:h-[34.1vh] rounded-lg overflow-hidden">
                      <img
                        src="/img/casestudiespage/sectionthree/image02.png"
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
                          isExpanded ? "scale-105" : "scale-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out text-center mt-3 ${
                      isExpanded
                        ? "block md:opacity-100 translate-y-0"
                        : "hidden md:opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-[5vw] sm:text-[1.8vw] font-semibold">
                      Creative Design
                    </h1>
                    <p className="text-sm text-gray-300">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-[100%] sm:w-[40%] md:w-[22%] rounded-lg p-1">
                  <div className="w-full gradient-border rounded-lg p-1">
                    <div className="w-full h-[120px] md:h-[34.1vh] rounded-lg overflow-hidden">
                      <img
                        src="/img/casestudiespage/sectionthree/image03.png"
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
                          isExpanded ? "scale-105" : "scale-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out text-center mt-3 md:mt-5 ${
                      isExpanded
                        ? "block md:opacity-100 translate-y-0"
                        : "hidden md:opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-[5vw] sm:text-[1.8vw] font-semibold">
                      Creative Design
                    </h1>
                    <p className="text-sm text-gray-300">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="hidden md:block w-[100%] sm:w-[40%] md:w-[22%] rounded-lg p-1">
                  <div className="w-full gradient-border rounded-lg p-1">
                    <div className="w-full h-[140px] md:h-[34.1vh] rounded-lg overflow-hidden">
                      <img
                        src="/img/casestudiespage/sectionthree/image04.png"
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
                          isExpanded ? "scale-105" : "scale-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out text-center mt-3 ${
                      isExpanded
                        ? "block md:opacity-100 translate-y-0"
                        : "hidden md:opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-[5vw] sm:text-[1.8vw] font-semibold">
                      Creative Design
                    </h1>
                    <p className="text-sm text-gray-300">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
