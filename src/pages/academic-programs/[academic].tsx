import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Metatag from "@/utils/Metatag";
//images
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import Link from "next/link";
import Calendar from "@/components/Calendar/Calendar";

const AcademicPrograms = ({ data }: any) => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`Peace Zone Academy`}
          subheading={data?.detail?.slug}
          og_image={data?.detail?.image_link}
          description={data?.detail?.description}
        />

        <PageHeader
          data={{
            image:
              "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
            title: data?.detail?.title,
          }}
        />
        <Calendar />
        <div className="layout component-padding">
          <div className="grid lg:grid-cols-8 gap-20 items-start">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="text-[30px] font-semibold text-[#d27785]">
                {data?.detail?.title}
              </div>
              <div>
                <img
                  src={data?.detail?.image_link}
                  alt="loading"
                  className="w-full h-[45vh] object-cover rounded-[8px]"
                />
              </div>
              <div className="text-[25px] font-bold text-[#d27785]">
                Overview
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.detail?.description,
                }}
              />
            </div>
            <div className="lg:col-span-3 sticky top-[140px]">
              <div className="">
                <div className="bg-white  drop-shadow-md p-4 flex flex-col gap-6">
                  <div className="text-[22px] font-bold text-[#d27785]">
                    Related Academics
                  </div>
                  <div className="flex flex-col gap-4  ">
                    {data?.related?.map((data: any, index: number) => {
                      return (
                        <div key={index}>
                          <Link href={`/academic-programs/${data?.slug}`}>
                            {data?.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default AcademicPrograms;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(
      `academic-programs/${params?.academic}`
    );

    return {
      props: {
        data,
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
