import Footer from "../components/Footer";
import SectionFour from "../components/ServicePage/SectionFour";
import SectionOne from "../components/ServicePage/SectionOne";
import SectionThree from "../components/ServicePage/SectionThree";
import SectionTwo from "../components/ServicePage/SectionTwo";
import UpdatedSectionThree from "../components/ServicePage/UpdatedSectionThree";

const Page = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <SectionOne />
            <SectionTwo />
            <UpdatedSectionThree />
            <SectionFour />
            <Footer />
        </div>
    );
};

export default Page;