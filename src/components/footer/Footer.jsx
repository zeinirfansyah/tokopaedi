import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

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
          {!isMobile ? (
            <>
              <h1>Footer</h1>
            </>
          ) : (
            <>
            <div className="flex justify-between">
             Nvigation
            </div>
            </>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
