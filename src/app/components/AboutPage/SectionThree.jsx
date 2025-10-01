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
    { img: "/img/aboutpage/sectionthree/image.png", name: "Junaid Qureshi", subname: "Founded & CEO" },
    { img: "/img/aboutpage/sectionthree/image02.png", name: "Maroof Qureshi", subname: "Frontend Developer Intern" },
    { img: "/img/aboutpage/sectionthree/image03.png", name: "Abdullah Al Tayeh", submenu: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image04.png", name: "Zulfiqar Ali Abro", subname: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image05.png", name: "Adnan Qurban", subname: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image06.png", name: "Iqra Qureshi", subname: "UI/UX Desginer | Graphic Designer Intern" },
  ];

  return (
    <div ref={sectionRef} className="w-full sm:min-h-[70vh] md:min-h-screen bg-[#0A131C] p-5 md:p-20 relative overflow-hidden">
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[4%] right-[0%] opacity-[24%] lg:opacity-[30%] right-blur-circle blur-animation'></div>
      <div className='w-[0vw] h-[0vw] rounded-full absolute bottom-[30%] left-0 opacity-[24%] lg:opacity-[30%] blur-circle blur-animation'></div>


      <div className="w-full h-full bg-gradient-to-br to-[#FA1AC2] from-[#11AAEE] section-three-bgImage p-0 md:p-[3px]">
        <div className="w-full h-full bg-[#0A131C] pt-2 sm:pt-4 md:pt-6">
          <div className="relative section-three-title">
            <div className="w-[59vw] sm:w-[40vw] md:w-[20vw] h-1 bg-[#71C1E6] absolute left-[15.7%] sm:left-[28.5%] md:left-[38.5%] top-[5vw] sm:top-[20%] md:top-[18%]"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-[24px] sm:pt-6 text-white">
              Meet The Best
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
              Team Ever
            </h2>
          </div>


          <div className="relative w-full sm:w-[90%] sm:mx-auto h-full mt-4 sm:mt-6 md:mt-10 p-0 md:p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
            <img
              src="/img/aboutpage/sectionthree/rightLogo.png"
              className="hidden md:block absolute md:top-[-200px] top-[-210px] right-[-90px] w-[15vw] sm:w-[10vw] md:w-[6vw]"
            />
            <img
              src="/img/aboutpage/sectionthree/leftLogo.png"
              className="hidden md:block w-[15vw] sm:w-[10vw] md:w-[7.4vw] absolute bottom-[-2.3vw] left-[-90px]"
            />

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] project-card group w-[100%] h-[205px] sm:w-[40vw] md:w-[23vw] sm:h-[30vw] md:h-[22vw] gradient-border rounded-lg relative overflow-hidden flex items-center justify-center p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
              >

                <img
                  src={project.img}
                  className="rounded-lg w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.name}
                  </span>
                  <span className="text-white text-center text-[3vw] sm:text-lg font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.subname}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
