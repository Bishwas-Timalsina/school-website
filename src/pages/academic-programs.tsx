import Calendar from "@/components/Calendar/Calendar";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Metatag from "@/utils/Metatag";

const AcademicPrograms = ({ academicProgram }: any) => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`Peace Zone Academy`}
          subheading="Academic Programs"
          og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
          description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
        />

        <PageHeader
          data={{
            image:
              "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
            title: "Our Academic Programs",
            subDetail:
              " Whether it's a minor fix or a major overhaul, trust us to restore your appliances to optimal functionality, providing you with peace of mind and convenience at every step.",
          }}
        />
        <Calendar />
        <ServiceCollection data={academicProgram} />
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default AcademicPrograms;

export async function getServerSideProps() {
  try {
    const { data: academicProgram } = await SSR_fetchData(
      "home/academic-program"
    );

    return {
      props: {
        academicProgram,
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
