import Button from "@/components/button/components/Button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundImage: `url(../images/herosection/banner.jpg)`,
        backgroundSize: "cover",
      }}
      className="relative h-[50vh] bg-fixed flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 h-full object-contain w-full  bg-[black] opacity-70"></div>
      <div className="relative text-white ">
        <div className="flex items-center flex-col gap-8">
          <div className="flex flex-col gap-6 items-center">
            <div className="lg:text-[35px] text-[25px] font-medium lg:font-semibold text-center">
              Are You Still Interested To Enroll?
            </div>
            <div className="font-medium lg:text-[20px] text-[16px] lg:w-[60%] text-center">
              Join us for an unforgettable adventure filled with breathtaking
              sights, thrilling experiences, and unforgettable memories
            </div>
          </div>

          <Link href="/contact-us">
          <div className="text-white inline-block cursor-pointer transition-all p-3 drop-shadow-md rounded-[10px]  px-6 py-2  bg-[#632115]
          hover:brightness-110 hover:-translate-y-[3px] hover:bg-[#d27785]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Contact Us
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
