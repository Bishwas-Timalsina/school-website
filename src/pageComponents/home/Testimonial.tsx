import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//images
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import { responsiveItem } from "@/constants/responsiveItem";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = ({ data }: any) => {
  const ButtonGroup = ({ next, previous }: any) => {
    return (
      <div
        className="carousel-button-group   gap-4 flex lg:justify-start lg:px-[250px]  justify-center
            items-center w-full absolute top-[110%]"
      >
        <div
          onClick={() => previous()}
          className="cursor-pointer transition-all p-3 drop-shadow-md rounded-[2px]  px-6 py-2  bg-[#632115]

 hover:brightness-110 hover:-translate-y-[1px] hover:bg-[#d27785]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          <FaArrowLeftLong className="text-white" />
        </div>

        <div
          onClick={() => next()}
          className="cursor-pointer transition-all p-3 drop-shadow-md rounded-[2px]  px-6 py-2  bg-[#632115]

 hover:brightness-110 hover:-translate-y-[1px] hover:bg-[#d27785]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          <FaArrowRightLong className="text-white" />
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="layout component-padding color-changer">
        <div className="flex flex-col gap-20">
          <div>
            <ComponentHeader
              data={{
                heading: "What Our Students Are Saying",
                subheading:
                  "Insights from satisfied customers: their feedback tells the story of our quality service and products",
              }}
            />
          </div>
          <div className="">
            <div className="relative lg:mb-0  mb-20 z-20">
              <Carousel
                responsive={responsiveItem}
                swipeable={true}
                draggable={true}
                infinite={true}
                pauseOnHover={true}
                arrows={false}
                className="relative "
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
              >
                {data?.map((data: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className=" max-w-6xl mx-auto relative "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >
                      <div className="grid lg:grid-cols-2 lg:gap-24 gap-10 grid-cols-1 justify-between">
                        <div
                          data-aos="fade-up"
                          data-aos-delay="75"
                          data-aos-duration="1000"
                          className="relative  mt-6 group"
                        >
                          <img
                            src={data?.image_link}
                            alt=""
                            className="z-0 rounded-[8px]"
                          />
                          <div className="absolute group-hover:bg-[#d27785] text-white bg-[#632115] drop-shadow-lg top-[-22px] z-50 lg:right-[-20px] right-[2px] h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full flex items-center justify-center">
                            <RiDoubleQuotesR
                              size={26}
                              className=" font-semibold text-white"
                            />
                          </div>
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1080"
                          className="flex flex-col gap-10  relative"
                          style={{
                            color: "var(--black-color)",
                          }}
                        >
                          <div className="text-[30px]  font-semibold z-20">
                            {data?.title}
                          </div>
                          <div className="flex flex-col gap-5 z-20">
                            <div className="text-[14px]">{data?.message}</div>
                            <div>
                              <div className="font-semibold">{data?.name}</div>
                              <div className="text-[12px] font-semibold">
                                {data?.designation}
                              </div>
                            </div>
                          </div>
                          <div className="absolute  bottom-0 z-0"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
