import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isCartRoute = window.location.pathname === "/cart";

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = 768;
      setIsMobile(window.innerWidth < maxWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer
        className={`bg-white border-t py-5 ${
          isMobile ? "sticky bottom-0" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {isCartRoute && <h1>Cart footer</h1>}
          {!isCartRoute && isMobile && <h1>MOBILE NAVIGATION</h1>}
          {!isCartRoute && !isMobile && <h1>desktop footer</h1>}
        </div>
      </footer>
    </>
  );
};

export default Footer;
