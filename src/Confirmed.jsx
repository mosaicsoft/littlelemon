import { FaCalendarCheck } from "react-icons/fa6";
import Footer from "./Footer";
import Menu from "./Menu";
import { IoIosArrowBack, IoIosRedo } from "react-icons/io";

export default function Confirmed() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center py-10 gap-3">
        <FaCalendarCheck size={50} color="#495e57" />

        <div className="font-Markazi text-4xl">
          Your table has been reserved!
        </div>
        <div className="font-Markazi text-2xl">
          An email has been sent confirming this reservation.
        </div>
      </div>
      <div className="flex justify-center gap-5 mb-10">
        <button
          className="flex justify-center items-center gap-2 bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 my-5 rounded-2xl mx-4 md:mx-0 cursor-pointer"
          aria-label="Back"
          onClick={() => (window.location.href = "/")}
        >
          <IoIosArrowBack /> Back to home page
        </button>
        <button
          className="flex justify-center items-center gap-2 bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 my-5 rounded-2xl mx-4 md:mx-0 cursor-pointer"
          aria-label="New reservation"
          onClick={() => (window.location.href = "reserve")}
        >
          Make another reservation
          <IoIosRedo />
        </button>
      </div>
      <Footer />
    </div>
  );
}
