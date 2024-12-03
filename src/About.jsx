export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center md:p-10"
    >
      <div className="w-full md:w-1/2 flex flex-col px-10 md:px-40 font-Markazi gap-4">
        <p className="text-4xl text-primary-2 font-bold">Little Lemon</p>
        <p className="text-2xl text-primary-1">Chicago</p>
        <p className="font-Karla text-sm text-secondary-1">
          Embark on a culinary journey through the sun-kissed shores of the
          Mediterranean. Little Lemon invites you to savor the vibrant flavors
          of Greece, Italy, Spain, and beyond. Indulge in our fresh, seasonal
          dishes, crafted with love and passion. From succulent grilled meats to
          fragrant seafood and hearty vegetarian options, our menu offers
          something for everyone. Join us for a taste of the Mediterranean,
          right in your neighborhood.
        </p>
      </div>
      <div className="grid grid-cols-12 relative me-10 p-10 md:p-0">
        <img
          src="about_2.jpg"
          className="col-start-1 col-span-8 row-start-1 pt-[50px] z-10 shadow-2xl"
        />
        <img
          src="about_1.jpg"
          className="col-start-5 row-start-1 col-span-8 shadow-2xl"
        />
      </div>
    </section>
  );
}
