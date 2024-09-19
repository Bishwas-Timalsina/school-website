import Calendar from "@/components/Calendar/Calendar";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import BlogDetail from "@/pageComponents/BlogDetail/BlogDetail";
import Metatag from "@/utils/Metatag";

const BlogPage = ({ blogDetail }: any) => {
  return (
    <AppLayout>
      <Metatag
        heading={`Peace Zone Academy`}
        subheading={blogDetail?.detail?.meta_title || blogDetail?.detail?.title}
        og_image={blogDetail?.detail?.image_link}
        description={blogDetail?.detail?.meta_description}
        keywords={blogDetail?.detail?.meta_keywords}
      />
      <PageHeader
        data={{
          image:
            "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
          title: "Blog Detail",
        }}
      />
      <BlogDetail data={blogDetail} />
      <Calendar />
    </AppLayout>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  try {
    const pageConstant: any = await SSR_fetchData("home/blogs");
    const paths = pageConstant?.data?.map((data: any) => ({
      params: { blog: data?.slug },
    }));
    return { paths, fallback: false };
  } catch (e) {
    console.log(e);
  }
}

export async function getStaticProps({ params }: any) {
  const { data: blogDetail } = await SSR_fetchData(`blog/${params?.blog}`);
  return {
    props: {
      blogDetail,
    },
  };
}
