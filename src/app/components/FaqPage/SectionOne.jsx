import Header from "../Header";

const SectionOne = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[450px] sm:h-[650px] lg:[844px] xl:h-[731px] bg-[url('/img/aboutpage/image.png')] bg-cover bg-center pt-[14px] lg:pt-[36px]">
            <Header />
            <div className="w-full h-full pt-0 relative overflow-hidden">
              
              <img
                src="/img/termspage/image01.png"
                className="img-top hidden lg:block absolute top-[-5%] left-[30%] h-[16vw]"
              />
              <img
                src="/img/aboutpage/sectionone/image02.png"
                className="img-left-bottom hidden lg:block absolute top-[0vw] right-[10vw] rotate-30 w-[5vw]"
              />
              
              <div className="w-full h-[80%] md:h-full flex flex-col-reverse lg:hidden items-center justify-center gap-0 md:gap-10 ps-25.5 pe-25.5">
                <div className="text-container w-[50vw] sm:w-[90%] h-full flex flex-col items-center justify-center">
                  <button className="w-[136px] h-[36px] bg-white text-[#4C4886] text-[24px] sm:text-[3vw] md:text-[2.5vw] font-[600] rounded-[10px] mt-0 md:mt-10">
                    OUR FAQ:S
                  </button>
                  <h1 className="text-white font-[600] text-[48px] sm:text-[10vw] md:text-[6.5vw] sm:leading-[10vw] md:leading-[7vw]">
                    QUESTION
                  </h1>
                  <p className="text-white text-[12px] font-[500] sm:text-[2.4vw] md:text-[1.5vw] w-[90vw] sm:w-[100%] md:w-[70%] text-center mt-[1vw]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                  <button className="w-[115px] h-[24px] sm:w-[200px] sm:h-[40px] bg-white text-[#4C4886] text-[12px] sm:text-[2.4vw] md:text-[1.2vw] font-[600] rounded-[5px] mt-4 ">
                    Talk to our experts
                  </button>
                </div>
                
                <div className="main-img-container w-[234px] h-[212px] sm:w-[44vw] sm:h-full md:w-[350px] md:h-[100px] flex items-center justify-center">
                  <img
                    src="/img/faqpage/image01.png"
                    className="pt-0 sm:pt-10 md:pt-40"
                  />
                </div>
              
              </div>
              
              <div className="w-[90%] h-full mx-auto flex">
                <div className="w-full h-full">
                  <button className="w-[219px] h-[64px] text-[40px] bg-white text-[#4C4886] font-[600] rounded-[10px] mt-[108px]">OUR FAQ:S</button>
                   <h1 className="text-white font-[600] text-[90px] leading-[100px]">QUESTION</h1>
                  <p className="text-white font-[500] w-[65%] text-[20px] mt-[10px]">
                    Lorem Ipsum is simply dummy text of the prining and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                  <button className="w-[208px] h-[46px] bg-white text-[#4C4886] font-[600] rounded-[5px] mt-[35px] relative group">Talk to our experts
                    <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                  </button>
                 
                </div>
                <div className="w-full h-[80%] flex items-center justify-center">
                  <img src="/img/faqpage/image01.png"
                    className="w-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
    );
};

export default SectionOne;