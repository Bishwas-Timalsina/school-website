import Link from "next/link";

const BlogCard = ({ data }: any) => {
  return (
    <div className="layout component-padding flex flex-col gap-6">
      <div className="flex flex-col gap-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {data?.map((data: any, index: number) => {
            return (
              <Link href={`/blog/${data?.slug}`} key={index} className="">
                <div className="flex flex-col gap-6">
                  <img
                    src={data?.image_link}
                    alt=""
                    className="object-cover h-[40vh] rounded-[8px]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110 "
                  />
                  <div className="text-xl">{data?.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
