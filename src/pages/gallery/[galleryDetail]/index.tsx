import Calendar from "@/components/Calendar/Calendar";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import Gallery from "@/pageComponents/Gallery/Gallery";
import Metatag from "@/utils/Metatag";

const GalleryDetail = ({ galleryDetail, slug }: any) => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`Peace Zone Academy`}
          subheading="Gallery"
          og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
          description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
        />

        <PageHeader
          data={{
            image:
              "https://admin.peacezoneacademy.com/upload/images/gallery/17150631774434221478.jpg",
            title: slug
              .replace(/-/g, " ")
              .replace(/(^|\s)\S/g, function (t: any) {
                return t.toUpperCase();
              }),
          }}
        />
        <Calendar />
        <Gallery galleryCollection={galleryDetail} />
      </AppLayout>
    </div>
  );
};

export default GalleryDetail;

export async function getServerSideProps({ params }: any) {
  try {
    const { data: galleryDetail } = await SSR_fetchData(
      `gallery/${params?.galleryDetail}`
    );
    return {
      props: {
        galleryDetail,
        slug: params?.galleryDetail,
      },
    };
  } catch (e) {
    return {
      props: {
        data: null,
      },
    };
  }
}
