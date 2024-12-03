import { FaStar, FaStarHalf } from "react-icons/fa6";

export default function TestimonialCard({ rating, name, image, children }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex flex-col justify-start items-center bg-white p-6 m-4 rounded-xl md:w-full h-[400px]">
      <img src={image} className="rounded-full h-2/5" />
      <div className="py-3 font-Markazi text-2xl">{name}</div>
      <div className="flex justify-center gap-2 pb-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} color="#F4CE14" />
        ))}

        {halfStar && <FaStarHalf color="#F4CE14" />}
        <span className="text-xs">{rating} / 5</span>
      </div>
      <div className="font-Karla text-sm">{children}</div>
    </div>
  );
}
