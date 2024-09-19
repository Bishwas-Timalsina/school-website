//Images
import Button from "@/components/button/components/Button";
import Link from "next/link";
import repairone from "../../../../public/images/aboutus/repairone.jpg";

//react icons

const About = ({ data }: any) => {
  return (
    <div className="layout component-padding ">
      <div className="grid lg:grid-cols-1 gap-20">
        <div className=" grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="lg:text-[38px] text-[30px] font-semibold">
              Shaping Futures, Igniting Potential
            </div>
            <div
              className=" no-scrollbar leading-[26px]"
              dangerouslySetInnerHTML={{
                __html: data?.introduction,
              }}
            />
            <Link href="/contact-us">
              <Button
                data={{
                  name: "Learn More",
                }}
              ></Button>
            </Link>
          </div>
          <div className="lg:col-span-5 rounded-[8px]  overflow-hidden   sticky top-[150px]">
            <div className="">
              <img
                src={data?.image_link}
                alt=""
                className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        <img src={data?.ads_banner_image_link} alt="" />
      </div>
    </div>
  );
};

export default About;
