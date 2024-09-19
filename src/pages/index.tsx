import Advertisement from "@/components/Advertisement/Advertisement";
import Calendar from "@/components/Calendar/Calendar";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import CollegeFeature from "@/components/feature/CollegeFeature";
import OurAssurance from "@/components/ourAssurance/components/OurAssurance";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";
import HeroSection from "@/pageComponents/HeroSection";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Testimonial from "@/pageComponents/home/Testimonial";
import Metatag from "@/utils/Metatag";

const index = ({
  data,
  heroSection,
  whyUs,
  academicProgram,
  teachingProcess,
  testimonial,
  blogs,
}: any) => {
  return (
    <div>
      <AppLayout data={data}>
        <Metatag
          heading="Home"
          subheading={data?.meta_title}
          og_image={data?.image_link}
          description={data?.meta_description}
          keywords={data?.meta_keywords}
        />
        <Advertisement />
        <Calendar />
        <HeroSection data={heroSection} />
        <OurAssurance data={whyUs} />
        <ServiceCollection heading={true} data={academicProgram} />
        <CollegeFeature data={teachingProcess} />
        <Testimonial data={testimonial} />
        <div className="lg:mt-[100px] mt-[80px]">
          <ComponentHeader
            data={{
              heading: "Latest Blogs and Trends",
            }}
          />
          <BlogCard data={blogs} />
        </div>

        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const { data } = await SSR_fetchData("company-profile");
    const { data: heroSection } = await SSR_fetchData("home/banner");
    const { data: whyUs } = await SSR_fetchData("home/why-us");
    const { data: academicProgram } = await SSR_fetchData(
      "home/academic-program"
    );
    const { data: teachingProcess } = await SSR_fetchData(
      "home/teaching-process"
    );

    const { data: testimonial } = await SSR_fetchData("home/testimonial");
    const { data: blogs } = await SSR_fetchData("home/blogs");

    return {
      props: {
        data,
        heroSection,
        whyUs,
        academicProgram,
        teachingProcess,
        testimonial,
        blogs,
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
