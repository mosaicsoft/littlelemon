import SpecialsCard from "./SpecialsCard";

export default function Specials() {
  return (
    <section>
      <div
        id="specials"
        className="flex flex-col md:flex-row justify-around md:items-end mt-10"
      >
        <div className="text-4xl font-Markazi text-secondary-1 px-3 md:px-0">
          This week's special
        </div>
        <div className="mt-5 flex items-center px-3 md:px-0">
          <button className="bg-primary-2 text-primary-1 font-Markazi text-2xl font-bold px-4 py-2 rounded-2xl">
            Online Menu
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-5 justify-center gap-20">
        <SpecialsCard dish="Greek Salad" price="€ 12,99" img="greek_salad.jpg">
          The famous Greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons
        </SpecialsCard>
        <SpecialsCard dish="Bruschetta" price="€ 5,99" img="bruchetta.png">
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </SpecialsCard>
        <SpecialsCard
          dish="Lemon Dessert"
          price="€ 4,99"
          img="lemon_dessert.jpg"
        >
          This comes straight from grandma’s recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </SpecialsCard>
      </div>
    </section>
  );
}
