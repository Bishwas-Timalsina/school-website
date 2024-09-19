import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const ContactDetail = () => {
  return (
    <div>
      <div className="sticky top-[120px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div
              className="lg:text-[35px] text-[25px]  font-semibold"
              style={{
                color: "var(--accent-color)",
              }}
            >
              Want to reach us Directly?
            </div>
            <div>If you have any queries feel free to contact us.</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div
                style={{
                  color: "var(--accent-color)",
                }}
              >
                <FaPhoneAlt size={15} />
              </div>
              <a href={`tel:8178083860`}>+1-817-808-3860</a>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  color: "var(--accent-color)",
                }}
              >
                <GrLocation size={15} />
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <div>Pokhara, Nepal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
