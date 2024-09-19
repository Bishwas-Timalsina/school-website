import Calendar from "@/components/Calendar/Calendar";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";
import Metatag from "@/utils/Metatag";

const Blog = ({ blogs }: any) => {
  return (
    <AppLayout>
      <Metatag
        heading={`Peace Zone Academy`}
        subheading="Blog"
        og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
        description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
      />

      <PageHeader
        data={{
          image:
            "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
          title: "Blog",
        }}
      />
      <Calendar />
      <BlogCard data={blogs} />
      <CallToAction />
    </AppLayout>
  );
};

export default Blog;

export async function getServerSideProps() {
  try {
    const { data: blogs } = await SSR_fetchData("home/blogs");

    return {
      props: {
        blogs,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
