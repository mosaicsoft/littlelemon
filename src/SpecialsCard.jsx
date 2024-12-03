export default function SpecialsCard({ dish, price, img, children }) {
  return (
    <div className="flex flex-col w-full md:w-1/5 bg-secondary-2 rounded-xl h-[400px]">
      <div className="img-thumb-parent rounded-t-xl h-40">
        <img src={img} className="img-thumb rounded-t-xl" />
      </div>

      <div className="flex justify-between p-3 font-Markazi text-2xl">
        <div>{dish}</div>
        <div className="text-price">{price}</div>
      </div>
      <div className="font-Karla  px-5 h-[150px]">{children}</div>
      <div className="flex justify-between p-4">
        <div className="font-Karla text-xs font-bold">Order a delivery</div>
        <img src="motorbike.png" className="bike h-5" />
      </div>
    </div>
  );
}
