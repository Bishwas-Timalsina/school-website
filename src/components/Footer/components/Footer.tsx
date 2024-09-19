import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const footer_item = [
    {
      heading: "Know More About Us",
      subHeading: [
        {
          subName: "About Us",
          slug: "/about-us",
        },
        {
          subName: "Teams",
          slug: "/teams",
        },
        {
          subName: "Gallery",
          slug: "/gallery",
        },
      ],
    },
    {
      heading: "Quick Links",
      subHeading: [
        {
          subName: "Home",
          slug: "/",
        },
        {
          subName: "About Us",
          slug: "/about-us",
        },
        {
          subName: "Blog",
          slug: "/blog",
        },
        {
          subName: "Academics Programs",
          slug: "/academic-programs",
        },
        {
          subName: "Privacy Policy",
          slug: "/privacy",
        },
      ],
    },
    {
      heading: "Support",
      subHeading: [
        {
          subName: "Contact Us",
          slug: "/contact-us",
        },

        {
          subName: "Terms and Conditions",
          slug: "/terms-and-conditions",
        },
      ],
    },
  ];

  const { fetchedData, loading } = useFetchData("company-profile");

  return (
    <div className="dark:bg-[#111827] object-cover  bg-[#EAECEA] drop-shadow-lg color-changer ">
      <div className=" layout component-padding">
        <div className="flex flex-col gap-6">
          <div className="grid lg:grid-cols-4 grid-cols-1 border-b-[2px] pb-8 dark:border-[white]">
            <div className="col-span-1">
              <div className="flex flex-col mb-8">
                <div className="lg:translate-y-[-30px]">
                  <img
                    src={fetchedData?.footer_logo_link}
                    alt=""
                    className=" w-[150px] object-contain  "
                  />
                </div>
                <div
                  className="text-[14px] text-justify"
                  dangerouslySetInnerHTML={{
                    __html: fetchedData?.footer_text,
                  }}
                />
              </div>
            </div>
            <div className="col-span-3 grid lg:grid-cols-3 grid-cols-1 gap-10">
              {footer_item?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-8 lg:items-center"
                  >
                    <div className="lg:text-[16px] font-semibold">
                      {data?.heading}
                    </div>
                    <div className="flex flex-col gap-4 lg:items-center text-[14px]">
                      {data?.subHeading?.map((subdata, index) => {
                        return (
                          <div
                            key={index}
                            className="transition-all relative group hover:-translate-y-[5px] hover:text-[#632115]"
                          >
                            <Link href={subdata?.slug}>{subdata?.subName}</Link>
                            <div className="absolute w-[10%] h-[2px] transition-all duration-500 group-hover:w-[100%]  z-0  bottom-[-10px] left-0 right-0 rounded-[2px]  group-hover:bg-secondary "></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 items-center justify-center">
              {fetchedData?.facebook && (
                <a
                  href={fetchedData?.facebook}
                  className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785]  dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
                >
                  <div>
                    <FaFacebookF size={12} />
                  </div>
                </a>
              )}
              {fetchedData?.twitter && (
                <a
                  href={fetchedData?.twitter}
                  className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785] dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
                >
                  <div>
                    <FaXTwitter size={12} />
                  </div>
                </a>
              )}
              {fetchedData?.instagram && (
                <a
                  href={fetchedData?.instagram}
                  className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785] dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
                >
                  <div>
                    <FaInstagram size={12} />
                  </div>
                </a>
              )}

              {fetchedData?.youtube && (
                <a
                  href={fetchedData?.youtube}
                  className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785]  dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
                >
                  <div>
                    <FaYoutube size={12} />
                  </div>
                </a>
              )}
            </div>
            <div>
              {" "}
              ©Peace Zone Academy 2024, All rights reserved. Developed By{" "}
              <div>
                <a
                  className="text-secondary"
                  href="https://bishwastimalsina.com.np/"
                  target="__blank"
                >
                  Bishwas Timalsina.
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
