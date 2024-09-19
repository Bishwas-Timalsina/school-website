import Calendar from "@/components/Calendar/Calendar";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import Galleries from "@/pageComponents/Gallery/Galleries";
import Metatag from "@/utils/Metatag";

const gallery = ({ galleryData }: any) => {
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
            title: "Gallery",
          }}
        />
        <Calendar />
        <Galleries data={galleryData} />
      </AppLayout>
    </div>
  );
};

export default gallery;

export async function getServerSideProps() {
  try {
    const { data: galleryData } = await SSR_fetchData("galleries");
    return {
      props: {
        galleryData,
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
