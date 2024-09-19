import React from "react";

const CompanySuccess = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div
        style={{
          marginTop: "190px",
          position: "relative",
          padding: "20px",
          transform: "skewY(-5deg)",
          transformOrigin: "top left",
        }}
        className="lg:mt-[100px]  lg:mb-0 my-[50px] dark:bg-[#101324] bg-[#EAECEA] color-changer"
      >
        <div className="layout lg:px-4 grid-cols-2 gap-6 grid lg:grid-cols-4 items-center justify-center">
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="75"
            data-aos-duration="1000"
          >
            <div className="lg:text-[58px] text-[38px] font-semibold text-[#d27785]">
              60 +
            </div>
            <div className="lg:text-[20px] text-[18px] font-medium lg:translate-x-[5px]">
              Clients
            </div>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="75"
            data-aos-duration="1000"
          >
            <div className="lg:text-[58px] text-[38px] font-semibold text-[#d27785]">
              20+
            </div>
            <div className="lg:text-[20px] text-[18px] font-medium lg:translate-x-[5px]">
              Years of Experience
            </div>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="75"
            data-aos-duration="1000"
          >
            <div className="lg:text-[58px] text-[38px] font-semibold text-[#d27785]">
              200 +
            </div>
            <div className="lg:text-[20px] text-[18px] font-medium lg:translate-x-[5px]">
              Completed Projects
            </div>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="75"
            data-aos-duration="1000"
          >
            <div className="lg:text-[58px] text-[38px] font-semibold text-[#d27785]">
              10+
            </div>
            <div className="lg:text-[20px] text-[18px] font-medium lg:translate-x-[5px]">
              Achievements
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySuccess;
