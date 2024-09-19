const OurAssurance = ({ data }: any) => {
  return (
    <div className="layout component-padding black-color">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {data?.map((data: any, index: any) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "var(--white-color)",
              }}
              className="drop-shadow-md p-6 flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-6">
                <div
                  style={{
                    color: "var(--accent-color)",
                  }}
                  className="lg:text-[36px] text-[32px] font-bold"
                >
                  0{index + 1}
                </div>
                <div className="lg:text-[24px] text-[20px] font-semibold">
                  {data?.title}
                </div>
              </div>
              <div className="text-[16px] lg:h-[25vh]  leading-[26px]">
                {data?.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurAssurance;
