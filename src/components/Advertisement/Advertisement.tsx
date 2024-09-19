import { useEffect, useState } from "react";
import { Modal } from "antd";

//hooks
import useFetchData from "@/hooks/useFetchData";

const Advertisement = () => {
  const { fetchedData } = useFetchData("home/notices");

  const [advLength, setAdvLength] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [img, setImage] = useState("");

  const advertisementLength = fetchedData?.length;

  const reversedAdvertisementData = fetchedData
    ? [...fetchedData].reverse()
    : null;

  useEffect(() => {
    setAdvLength(advertisementLength);
  }, [advertisementLength]);

  useEffect(() => {
    setImage(reversedAdvertisementData?.[advLength - 1]?.image_link);
  }, [advLength]);

  const handleCancel = () => {
    if (advLength > 1) {
      setAdvLength(advLength - 1);
    } else {
      setIsModalOpen(false);
    }
  };

  if (fetchedData?.length > 0) {
    return (
      <div className="">
        {fetchedData && (
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
            centered={true}
          >
            <img src={img} alt="" />
          </Modal>
        )}
      </div>
    );
  }
};

export default Advertisement;
