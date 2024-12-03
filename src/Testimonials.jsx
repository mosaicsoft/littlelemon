import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center bg-primary-1 w-full my-10">
      <div className="font-Markazi text-white text-4xl py-10">Testimonials</div>
      <div className="flex flex-col md:flex-row pb-5 md:w-4/5">
        <TestimonialCard rating="4.5" name="Madie Fadel" image="madie.jpg">
          My partner and I had an amazing dinner at Little Lemon. The ambiance
          was romantic, the service was impeccable, and the food was absolutely
          divine. We'll definitely be back!
        </TestimonialCard>
        <TestimonialCard rating="5" name="Anais Gleason" image="anais.jpg">
          Little Lemon truly captures the essence of Mediterranean cuisine.
          Every dish was bursting with flavor and beautifully presented. A
          must-try for food lovers!
        </TestimonialCard>
        <TestimonialCard rating="4.8" name="Billie Grady" image="billie.jpg">
          We love bringing our family to Little Lemon. The kids adore the kid's
          menu, and the adults enjoy the wide range of delicious options. It's
          the perfect place for a family gathering.
        </TestimonialCard>
        <TestimonialCard rating="5" name="Eleanora Sauer" image="eleanora.jpg">
          Great food, great atmosphere, and great service! The Lemon Dessert was
          absolutely delicious. Can't wait to come back!
        </TestimonialCard>
      </div>
    </section>
  );
}
