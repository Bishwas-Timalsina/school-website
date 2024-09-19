import Footer from "@/components/Footer/components/Footer";
import Header from "../components/Header/Header";

interface ILayoutProps {
  children?: React.ReactNode;
  data?: any;
}

const AppLayout = ({ children, data }: ILayoutProps) => {
  return (
    <div className="bg-white">
      <div className="">
        <Header />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
