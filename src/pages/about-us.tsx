import Calendar from "@/components/Calendar/Calendar";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CollegeFeature from "@/components/feature/CollegeFeature";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import About from "@/pageComponents/AboutUs/components/AboutUs";
import CoreValues from "@/pageComponents/AboutUs/components/CoreValues";
import Message from "@/pageComponents/AboutUs/components/Message";
import MessageFromDirector from "@/pageComponents/AboutUs/components/MessageFromDirector";
import OurMission from "@/pageComponents/AboutUs/components/OurMission";
import Testimonial from "@/pageComponents/home/Testimonial";
import Metatag from "@/utils/Metatag";

const AboutUs = ({ testimonial, teachingProcess, data }: any) => {
  return (
    <AppLayout>
      <Metatag
        heading={`Peace Zone Academy`}
        subheading="About Us"
        og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
        description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
      />

      <PageHeader
        data={{
          image:
            "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
          title: "About Us",
        }}
      />
      <Calendar />
      <About data={data} />
      <OurMission data={data} />
      <CollegeFeature data={teachingProcess} />
      <Testimonial data={testimonial} />
      <CoreValues data={data} />

      <Message data={data} />

      <MessageFromDirector data={data} />

      <div className="mt-20">
        <CallToAction />
      </div>
    </AppLayout>
  );
};

export default AboutUs;

export async function getServerSideProps() {
  try {
    const { data } = await SSR_fetchData("company-profile");
    const { data: testimonial } = await SSR_fetchData("home/testimonial");
    const { data: teachingProcess } = await SSR_fetchData(
      "home/teaching-process"
    );

    return {
      props: {
        data,
        testimonial,
        teachingProcess,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
