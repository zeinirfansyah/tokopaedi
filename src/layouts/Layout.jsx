import { PropTypes } from "prop-types";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between lg:h-auto">
      <header className="bg-white border-b py-5 sticky top-0">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="bg-white border-t py-5 sticky bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
