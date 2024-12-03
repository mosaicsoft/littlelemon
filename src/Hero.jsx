export default function Hero() {
  return (
    <header className="flex justify-center bg-primary-1">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="about font-Markazi md:w-1/2">
          <h1 className="text-primary-2 text-5xl mx-4  md:mx-0 my-3">
            Little Lemon
          </h1>
          <h2 className="text-white text-4xl my-3 mx-4 md:mx-0">Chicago</h2>
          <div className="font-Karla text-white text-md pt-3 mx-4 md:mx-0">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </div>
          <div className="mt-5">
            <button
              className="bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 my-5 rounded-2xl mx-4 md:mx-0 hover:text-primary-1 hover:bg-white"
              onClick={() => window.open("/reserve", "_self")}
            >
              Reserve a Table
            </button>
          </div>
        </div>
        <div>
          <img
            src="restauranfood.jpg"
            className="rounded-xl md:relative md:top-12 mb-5"
          />
        </div>
      </div>
    </header>
  );
}
