//images

const CollegeFeature = ({ data }: any) => {
  return (
    <div className="bg-[#632115] text-white">
      <div className="layout component-padding">
        <div className=" white-color ">
          <div className=" flex flex-col gap-20">
            <div className="flex items-center justify-center">
              <div className="lg:text-[48px] text-center lg:w-[60%]  text-[28px] font-semibold">
                Our Teaching Process
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-3 lg:gap-8 gap-14">
                {data?.map((data: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="border-[1px] relative group border-[#d27785] p-6 rounded-[8px] flex flex-col gap-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[20px] font-semibold">
                          {data?.title}
                        </div>
                      </div>
                      <div>{data?.description}</div>
                      <div className="absolute top-[-30px] right-10 group-hover:animate-spin">
                        <div className="border-[2px] h-[60px] w-[60px] border-[#d27785] group-hover:bg-[white] group-hover:text-[#d27785] bg-[#632115] rounded-full flex items-center justify-center">
                          <div className="text-[24px]">0{index + 1}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFeature;
