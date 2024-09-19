import useFetchData from "@/hooks/useFetchData";
import AppLayout from "@/layout/AppLayout";

const Calendar = () => {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div>
        <div>
          <AppLayout>
            <div className="layout component-padding my-20">
              <iframe
                src={fetchedData?.calendar_link}
                height={1000}
                className="w-[100%]"
              ></iframe>
            </div>
          </AppLayout>
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default Calendar;
