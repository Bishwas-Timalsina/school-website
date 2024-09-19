//images
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import Image from "next/image";
import student1 from "../../../public/images/academicprograms/studentone.jpg";
import BlogCard from "../Blogs/BlogCard";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
const BlogDetail = ({ data }: any) => {
  return (
    <div className="">
      <div className="max-w-5xl mt-[-45px] mb-10 mx-auto bg-white drop-shadow-md  rounded-[8px] p-8 flex flex-col gap-10">
        <div className="lg:text-[38px] text-[30px] font-semibold">
          {data?.detail?.title}
        </div>

        <div>
          <img
            src={data?.detail?.image_link}
            alt="loading"
            className="w-full h-[50vh] object-cover rounded-[8px]"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.detail?.description,
          }}
        ></div>
      </div>

      <div className="mt-[120px]">
        <ComponentHeader
          data={{
            heading: "Related Blogs",
          }}
        />
        <div className="">
          <BlogCard data={data?.related} />
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default BlogDetail;
