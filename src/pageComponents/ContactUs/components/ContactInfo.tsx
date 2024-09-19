import useFetchData from "@/hooks/useFetchData";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

//css

const ContactInfo = () => {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (fetchedData) {
    return (
      <div>
        <div className="layout component-padding">
          <div className="grid lg:grid-cols-8 grid-cols-1 gap-20">
            <div className="lg:col-span-3 ">
              <div className="sticky top-[140px]">
                <ContactDetail />
              </div>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* <iframe
          src={fetchedData?.}
          className="w-full lg:h-[80vh] h-[40vh]"
          loading="lazy"
        ></iframe> */}
        <div
          className="w-full lg:h-[80vh] h-[40vh]"
          dangerouslySetInnerHTML={{
            __html: fetchedData?.map,
          }}
        />
      </div>
    );
  } else if (loading) {
    return <div>Loading</div>;
  } else {
    return <div>Error</div>;
  }
};

export default ContactInfo;
