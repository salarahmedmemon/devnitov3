const SectionTwo = () => {
    // 1. states/hook variables

    // functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[1000px] sm:h-[1500px] md:h-[1200px] lg:h-[900px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* HEADINGS */}
            <div className="w-[303px] h-[100.77px] border-t-[3px] 
            lg:border-t-[5px] border-[#4C4886] 
            absolute left-1/2 -translate-x-1/2
            lg:w-[400px]">
                <h1 className="text-[32px] sm:text-[38px] lg:text-[30px] font-[500] text-center text-[#333333]">PACKAGES We Offering</h1>
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[600] text-[#4C4886] text-center">Certified Excellence</h2>
            </div>

            {/* IMAGE */}
            <div className="lg:hidden w-[70%] h-[310px] md:w-[40%] mx-auto mt-[120px]">
                <img src="/img/careerspage/image04.png" className="ms-[4%]"/>
            </div>

            {/* CONTENT */}
            <div className="lg:hidden w-[92%] h-[629px] mx-auto flex flex-col items-start sm:mt-[220px] md:mt-[40px]">
                <h1 className="w-[202px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px]">DISCOVERY PACKAGES</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-[#AAAAAA]">We are an IT outstanding company in Dubai offering an extended range of services including End User Support, 
                    Application Investment, Cloud & Infrastructure expertise. Our on-demand IT staff outsourcing solution in Dubai 
                    specializes exclusively for digital transformation with Custom Software Development, Software Testing & QA, Cloud 
                    Computing, Mobile & Web Development, Maintenance & Support, Blockchain Consulting, Data Science.
                </p>
                <span className="text-[12px] sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col">
                    <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]">Basic Plan</h3>
                        <li className="list-disc text-[16px] text-[#AAA]">Essential IT Support</li>
                        <li className="list-disc text-[16px] text-[#AAA]">Basic Security &amp; Monitoring</li>
                        <li className="list-disc text-[16px] text-[#AAA]">Limited Cloud Storage</li>
                        <li className="list-disc text-[16px] text-[#AAA]">24/7 Email Support</li>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]">Standard Plan</h3>
                        <li className="list-disc text-[16px] text-[#AAA]">Advanced IT Support &amp; Maintenance</li>
                        <li className="list-disc text-[16px] text-[#AAA]">Enhanced Security &amp; Threat Detection</li>
                        <li className="list-disc text-[16px] text-[#AAA]">Increased Cloud Storage</li>
                        <li className="list-disc text-[16px] text-[#AAA]">24/7 Chat &amp; Email Support</li>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] lg:h-[80%] lg:mt-[20%] xl:mt-[14%] justify-between">
                <div className="w-[511px] h-[419px] ms-[5%]">
                    <img src="/img/packagespage/image02.png" className="w-full h-full object-cover ms-[4%]" />
                </div>

                <div className="w-[640px] h-full lg:ms-[5%] me-[5%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[30px] font-[600] text-[#4C4886] ps-[6px]">DISCOVERY PACKAGES</h1>
                    <p className="text-[20px] font-[400] mt-[20px] text-[#AAAAAA]">We are an IT outstanding company in Dubai offering an extended range of services including End User Support, 
                    Application Investment, Cloud & Infrastructure expertise. Our on-demand IT staff outsourcing solution in Dubai 
                    specializes exclusively for digital transformation with Custom Software Development, Software Testing & QA, Cloud 
                    Computing, Mobile & Web Development, Maintenance & Support, Blockchain Consulting, Data Science.</p>
                    <span className="text-[18px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-full mt-[24px] flex items-center justify-center">
                        <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                            <h3 className="text-[20px] font-[500] text-[#4C4886]">Basic Plan</h3>
                            <li className="list-disc text-[16px] text-[#AAA]">Essential IT Support</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Basic Security &amp; Monitoring</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Limited Cloud Storage</li>
                            <li className="list-disc text-[16px] text-[#AAA]">24/7 Email Support</li>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                            <h3 className="text-[20px]  font-[500] text-[#4C4886]">Standard Plan</h3>
                            <li className="list-disc text-[16px] text-[#AAA]">Advanced IT Support &amp; Maintenance</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Enhanced Security &amp; Threat Detection</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Increased Cloud Storage</li>
                            <li className="list-disc text-[16px] text-[#AAA]">24/7 Chat &amp; Email Support</li>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px] mt-[30px] sm:mt-0">
                            <h3 className="text-[20px]  font-[500] text-[#4C4886]">Premium Plan</h3>
                            <li className="list-disc text-[16px] text-[#AAA]">Fully Managed IT Services</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Enterprise-Level Security &amp; Backups</li>
                            <li className="list-disc text-[16px] text-[#AAA]">Unlimited Cloud Storage &amp; Backups</li>
                            <li className="list-disc text-[16px] text-[#AAA]">24/7 Priority Support (Phone, Chat, Email)</li>
                        </div>

                        
                    </div>
                    <button className="w-[217px] h-[46px] bg-[#4C4886] 
                    text-[20px] mt-[40px] font-[600]
                    rounded-[5px] text-white">TALK TO OUR EXPERT</button>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;