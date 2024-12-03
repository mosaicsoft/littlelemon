import Footer from "./Footer";
import Menu from "./Menu";

export default function Reserve() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col p-10 items-center">
        <h1 className="font-Markazi text-4xl py-5">Table Reservation</h1>
        <form className="flex flex-col gap-4 md:w-1/3" action="confirmed">
          <div className="flex gap-4 w-full justify-between">
            <label htmlFor="txt_nm" className="w-1/2 md:text-right">
              Name *
            </label>
            <input
              type="text"
              id="txt_nm"
              minLength="5"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_email" className="w-1/2 md:text-right">
              Email ID *
            </label>
            <input
              type="email"
              id="txt_email"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_ph" className="w-1/2 md:text-right">
              Phone *
            </label>
            <input
              type="tel"
              id="txt_ph"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_dt" className="w-1/2 md:text-right">
              Booking Date *
            </label>
            <input
              type="date"
              id="txt_dt"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_tm" className="w-1/2 md:text-right">
              Booking Time *
            </label>
            <input
              type="time"
              id="txt_tm"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_guests" className="w-1/2 md:text-right">
              Number of guests *
            </label>
            <select
              id="txt_guests"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
              required
            >
              <option value="">Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>More than 12</option>
            </select>
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="txt_occasion" className="w-1/2 md:text-right">
              Any special occasion
            </label>
            <select
              id="txt_occasion"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
            >
              <option value="">Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Family gathering</option>
              <option>Romantic dinner</option>
              <option>Business dinner</option>
            </select>
          </div>

          <div className="flex gap-4">
            <label
              htmlFor="txt_special_request"
              className="w-1/2 md:text-right"
            >
              Any special request
            </label>
            <textarea
              type="tex"
              id="txt_special_request"
              className="border-2 border-slate-500 rounded-md px-2 py-1 text-sm md:w-1/2"
            />
          </div>

          <div className="flex justify-center gap-5">
            <input
              type="button"
              value="Cancel"
              className="bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 my-5 rounded-2xl mx-4 md:mx-0 cursor-pointer"
              aria-label="Cancel"
              onClick={() => window.open("/", "_self")}
            />
            <input
              type="submit"
              value="Submit"
              aria-label="Submit"
              className="bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 my-5 rounded-2xl mx-4 md:mx-0 cursor-pointer"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
