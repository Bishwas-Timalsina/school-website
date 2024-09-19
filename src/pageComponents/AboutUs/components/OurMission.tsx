import React from "react";

import mission from "../../../../public/images/aboutus/mission.jpg";
import Image from "next/image";

const OurMission = ({ data }: any) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-6">
          <div className="lg:text-[38px] text-[30px] font-semibold">
            Our Mission{" "}
            <span
              style={{
                color: "var(--accent-color)",
              }}
            >
              and Vision
            </span>
          </div>
          <div
            className="text-[18px]"
            dangerouslySetInnerHTML={{
              __html: data?.mission,
            }}
          ></div>
        </div>
        <div className="flex lg:justify-end">
          <Image src={mission} alt="loading" className="rounded-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
