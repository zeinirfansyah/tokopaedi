import { PropTypes } from "prop-types";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <header className="bg-white border-b py-5 sticky top-0">
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
