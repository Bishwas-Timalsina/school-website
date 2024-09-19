import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const AllTeams = ({ teamData }: any) => {
  const teams = [
    {
      name: "Mr. John Doe",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      phone: "980000000",
      email: "john@gmail.com",
    },
    {
      name: "Mr. Handrick Patel",
      image:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      phone: "980000000",
      email: "handrick@gmail.com",
    },
    {
      name: "Ms. Riya Sharma",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlMTBfcGhvdG9ncmFwaHlfb2ZfaGFwcHlfaW5kaWFuX2tpZF9wcmltYXJ5X2VsZW1lbl84MjU4YjIxZC1mYWY3LTRhY2ItYWEwNy0zZWE5MjI4NTNiYjEucG5n.png",
      phone: "980000000",
      email: "riya@gmail.com",
    },
    {
      name: "Ms. Shreya Shapkota",
      image:
        "https://play-lh.googleusercontent.com/t2tJJ3PvHpZwSVH20B7zGBqcqMrUMnNpQ8re_BiS6vqdxboDm_RM_pcJvuRY-n8KvGA=w526-h296-rw",
      phone: "980000000",
      email: "shreya@gmail.com",
    },
    {
      name: "Ms. Sharmila Gaikwad",
      image:
        "https://play-lh.googleusercontent.com/050MUO_KcXxnSjq6V9B4OIbiTGPjv6fxHFhIGNNJsaHj2uld5mwzxO3Uf85Cp6q4Fn2B=w526-h296-rw",
      phone: "980000000",
      email: "sharmila@gmail.com",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  ">
        {teamData?.map((data: any, index: number) => {
          return (
            <div key={index}>
              <div className="">
                <div className=" product-card w-[300px]  rounded-md shadow-xl overflow-hidden z-[10] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                  <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"></div>
                  <div className="absolute rounded-full bg-[#d27785] z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
                  <div className="para uppercase text-center leading-none z-40">
                    <div className="text-[20px] font-medium mb-4 h-[25px]">
                      {data?.name}
                    </div>
                  </div>
                  <div className="img w-[180px] aspect-square z-40 rounded-md">
                    <img
                      src={data?.image_link}
                      alt=""
                      className="h-[200px] object-cover"
                    />
                  </div>
                  <div className="btm-_container z-40 flex flex-row justify-between  gap-10  h-[8vh]">
                    <div className="flex flex-col items-center gap-1">
                      {data?.designation && (
                        <div className="z-40">{data?.designation}</div>
                      )}
                      {data?.phone && (
                        <div className="inline-flex gap-3 items-center justify-center">
                          <div className="p-1  bg-white flex items-center justify-center rounded-full">
                            <FaPhoneAlt className="text-color text-[12px]" />
                          </div>
                          <a
                            href={`tel:${data?.phone}`}
                            className="font-semibold text-xs text-color"
                          >
                            {data?.phone}
                          </a>
                        </div>
                      )}
                      {data?.email && (
                        <div className="flex flex-row gap-2">
                          <div className="inline-flex gap-3 items-center justify-center">
                            <div className="p-1 bg-white flex items-center justify-center rounded-full">
                              <BiLogoGmail className="text-color text-[12px]" />
                            </div>
                            <a
                              href={`tel:${data?.email}`}
                              className="font-semibold text-sm text-color"
                            >
                              {data?.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTeams;
