import Maq from "./Maq";
import Link from "next/link";

const SectionThree = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[290vh]  sm:h-[1600px]  md:h-[1760px]  lg:h-[1920px]   xl:h-[2566px] bg-[#0A131C] relative">
            <div className="image w-full h-[40vh] absolute top-[10vw] p-4 left-0 text-white  lg:left-[5%]   xl:top-[198px] xl:left-[60px]">
                <img src="/img/servicedetailspage/sectionthree/image01.png" className="border-[2px] border-[#fff] rounded-lg    w-full    lg:w-[60%] lg:border-[3px]  xl:w-[847px] xl:h-[465px]" />
                <h1 className="text-[#77CCF3] text-[20px] font-[600]   sm:text-[6vw]   md:text-[4vw]   lg:text-[3vw]    xl:text-[36px]">Information Security Services We Offer</h1>
                <p className="w-[100%] text-[12px] font-[400] mt-2    sm:text-[2.4vw]   md:text-[2vw]     lg:w-[55%] lg:text-[2vw]   xl:w-[817px] xl:text-[16px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially uncharged. It was popularized in the 1960s with the release of
                    Letraset sheets containing lorem ipsum passages, and more recently with desktop publishing
                    software like aldus pagemaker including version of Lorem ipsum.
                </p>

                <p className="w-[90%] text-[12px] font-[400] mt-5  sm:text-[2.4vw]    md:text-[2vw]    lg:w-[55%] lg:text-[2vw]    xl:w-[812px] xl:text-[16px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book.
                </p>

                <div className="hidden xl:flex w-full mt-[51px] gap-5">
                    <img src="/img/servicedetailspage/sectionthree/image02.png" className="w-full border-1 border-[#fff] rounded-[20px]    xl:w-[413px] xl:h-[300px]" />
                    <img src="/img/servicedetailspage/sectionthree/image03.png" className="w-full border-1 border-[#fff] rounded-[20px]    xl:w-[413px] xl:h-[300px]" />
                </div>

                <p className="hidden xl:block w-[90%] text-[12px] mt-[19px]   xl:w-[817px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book.
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book.
                </p>

                <p className="hidden xl:block w-[90%] text-[12px] mt-[19px]   xl:w-[812px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book.
                </p>

                <div className="w-[90%] mt-[51px] flex flex-wrap items-center justify-between gap-2   sm:gap-[16px]   md:gap-[20px]   lg:w-[60%] lg:gap-[3vw]   xl:w-[673px] xl:gap-[20px]">
                    <div className="w-[40%] text-[#77CCF3] flex items-center justify-between gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                        <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">01 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                            <p className="text-white text-[10px] w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[40%] text-[#77CCF3] flex items-center justify-between gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                        <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">01 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                            <p className="text-white text-[10px] w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[40%] text-[#77CCF3] flex items-center justify-between gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                        <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">01 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                            <p className="text-white text-[10px] w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[40%] text-[#77CCF3] flex items-center justify-between gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                        <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">01 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                            <p className="text-white text-[10px] w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                </div>

                <Maq />

            </div>

            <div className="sm:hidden lg:block  ListOfServices w-[90%] border-1 border-[#423D4C] absolute top-[1180px] right-[5vw] p-4 rounded-lg lg:w-[24%] lg:top-[120px] lg:border-[2px] lg:right-[7%]   xl:w-[290px] xl:right-[74px] xl:top-[214px] xl:p-2 xl:border-[1px]">
                <h1 className="text-white text-[1.4rem]">List of Services</h1>
                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-8 rounded p-2 flex items-center gap-5  xl:mt-3">
                        <img src="/img/servicedetailspage/sectionthree/wd.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">Web Development</span>
                    </div>
                </Link>

                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/dm.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">Digital Marketing</span>
                    </div>
                </Link>


                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/ma.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">Mobile App</span>
                    </div>
                </Link>

                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/uiux.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">UI/UX Designing</span>
                    </div>
                </Link>

                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/ecommerce.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">Ecommerce</span>
                    </div>
                </Link>

                <Link href="/packages">
                    <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/db.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                        <span className="text-white">Digital Branding</span>
                    </div>
                </Link>
            </div>

            <div className="sm:hidden lg:block  ListOfServices text-white w-[90%] border-1 border-[#423D4C] absolute top-[1640px] sm:top-[90vw] md:top-[46vw] right-[5vw] p-4 rounded-lg     lg:w-[24%] lg:top-[580px] lg:border-[2px] lg:right-[7%]    xl:w-[290px] xl:right-[74px] xl:top-[640px] xl:p-2 xl:border-[1px]">
                <h1 className="text-[1.2rem] md:text-[1.4rem]">Download Assets</h1>
                <p className="text-[.7rem] md:text-[.8rem] mt-2">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem ipsum has been the industry's standard dummy text ever since the
                    1500s.
                </p>
                <div className="w-[100%] h-[10%] bg-[#042A48] mt-8 rounded p-2 flex items-center gap-5">
                    <img src="/img/servicedetailspage/sectionthree/servicerepo.png" className="w-[4vw] md:w-[8%]" />
                    <span className="text-white">Service Report</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/servicedetailspage/sectionthree/servicerepo.png" className="w-[4vw] md:w-[8%]" />
                    <span className="text-white">All Services</span>
                </div>
            </div>

            <div className="sm:hidden lg:block  ListOfServices text-white w-[90%] border-1 border-[#423D4C] absolute top-[1930px] sm:top-[142vw] md:top-[70vw] right-[5vw] p-4 rounded-lg  lg:w-[24%] lg:top-[924px] lg:border-[2px] lg:right-[7%]  xl:w-[290px] xl:right-[74px] xl:top-[940px] xl:p-2 xl:border-[1px]">
                <h1 className="text-[1.4rem]">Follow Us On</h1>
                <div className="w-[100%] mt-2 rounded flex flex-wrap items-center justify-between gap-2   xl:my-[20px]">
                    <img src="/img/servicedetailspage/sectionthree/facebook.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" />
                    <img src="/img/servicedetailspage/sectionthree/youtube.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" />
                    <img src="/img/servicedetailspage/sectionthree/instagram.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" />
                    <img src="/img/servicedetailspage/sectionthree/twitter.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" />
                </div>
            </div>
        </div>
    );
};

export default SectionThree;