import Link from "next/link";

const Galleries = ({ data }: any) => {
  return (
    <div>
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {data?.map((data: any, index: any) => {
            return (
              <div key={index}>
                <Link
                  href={`/gallery/${data?.slug}`}
                  className="hover:cursor-pointer group overflow-hidden rounded-[8px] flex flex-col gap-4"
                >
                  <div className="overflow-hidden rounded-[8px]">
                    <img
                      src={data?.image_link}
                      alt=""
                      className="object-cover h-[40vh]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="text-[20px] font-medium">{data?.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galleries;
