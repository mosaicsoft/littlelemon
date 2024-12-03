import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 bottom-0 px-5 py-2 m-2 bg-primary-2 rounded-lg  items-center gap-3 cursor-pointer z-10 ${
        showButton ? "flex" : "hidden"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FaArrowUp />
      Scroll to top
    </div>
  );
}
