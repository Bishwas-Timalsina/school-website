import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import Link from "next/link";
import studentfive from "../../../public/images/academicprograms/studentfive.jpg";
import studentfour from "../../../public/images/academicprograms/studentfour.jpg";
import studentone from "../../../public/images/academicprograms/studentone.jpg";
import studentsix from "../../../public/images/academicprograms/studentsix.jpg";
import studentthree from "../../../public/images/academicprograms/studentthree.jpg";
import studenttwo from "../../../public/images/academicprograms/studenttwo.jpg";

const ServiceCollection = ({ heading, data }: any) => {
  const serviceList = [
    {
      img: studentone,
      service_name: "Academic Advising",
      service_desc:
        "Professional advisors help students navigate academic requirements, choose majors, plan courses, and explore career paths.",
      slug: "academic-advising",
    },
    {
      img: studenttwo,

      service_name: "Tutoring Center",
      service_desc:
        "A resource where students can receive academic support and assistance from peer tutors or professional staff in various subjects.",
      slug: "tutoring-center",
    },
    {
      img: studentthree,

      service_name: "Career Services",
      service_desc:
        "Guidance and resources to help students explore career options, search for internships and jobs, develop resumes and cover letters, and prepare for interviews.",
      slug: "career-services",
    },
    {
      img: studentfour,
      service_name: "Health Services",
      service_desc:
        "On-campus medical care for minor illnesses, injuries, and preventive health services, as well as referrals to off-campus healthcare providers when needed.",
      slug: "health-services",
    },
    {
      img: studentfive,

      service_name: "Disability Support Services",
      service_desc:
        "Accommodations and support for students with disabilities to ensure equal access to academic programs and campus facilities.",
      slug: "disability-support-services",
    },
    {
      img: studentsix,

      service_name: "Financial Aid Office",
      service_desc:
        "Assistance with navigating the financial aid process, including information on scholarships, grants, loans, work-study programs, and financial literacy resources.",
      slug: "financial-aid-office",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="layout component-padding z-20">
          <div className="flex flex-col gap-20">
            {heading === true && (
              <ComponentHeader
                data={{
                  heading: "Our Academic Programs",
                  subheading:
                    "From consultation to implementation, we're here to support you every step of the way",
                }}
              />
            )}

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
              {data?.map((data: any, index: number) => {
                return (
                  <div
                    className="z-20 transition-all drop-shadow-md rounded-[10px] hover:brightness-110 hover:-translate-y-[3px]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    key={index}
                  >
                    <Link
                      data-aos="fade-up"
                      data-aos-delay="75"
                      data-aos-duration="1000"
                      href={`/academic-programs/${data?.slug}`}
                      className=" drop-shadow-lg rounded-[8px]  border-[2px] dark:bg-gray-900 bg-white  dark:text-white black-color inline-block max-w-full break-words"
                    >
                      <div key={index} className="">
                        <div className="">
                          <div className="flex flex-col gap-6">
                            <img
                              src={data?.image_link}
                              alt=""
                              className="w-[100%] h-[25vh] object-cover rounded-t-[8px]"
                            />
                            <div className="flex flex-col gap-4 p-4">
                              <div className="text-[20px] font-semibold">
                                {data?.title}
                              </div>
                              <div
                                className="text-[16px] line-clamp-4"
                                dangerouslySetInnerHTML={{
                                  __html: data?.description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceCollection;
