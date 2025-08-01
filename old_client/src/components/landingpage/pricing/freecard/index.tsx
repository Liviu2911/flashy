import { IoIosCheckmark } from "react-icons/io";

function FreeCard() {
  const features = ["Use flashcards", "Access to folders", "Up to 10 decks"];
  return (
    <div className="relative rounded-lg card-shadow flex flex-col py-4 items-center border border-stone-600 min-w-64 max-h-max">
      <div className="flex items-center justify-center absolute -top-5 h-10 px-8 rounded-xs bg-stone-900">
        <h1 className="text-xl font-semibold">FREE</h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {features.map(feature => (
          <div key={feature} className="gap-2 flex flex-row items-center">
            <span className="text-2xl text-primary">
              <IoIosCheckmark />
            </span>
            <h1 className="font-medium">{feature}</h1>
          </div>
        ))}
        <div className="mt-4 w-full h-[1px] rounded-full bg-primary opacity-50" />
        <p className="max-w-48 text-stone-400 text-center text-sm">
        A good plan to try out our product, but lacks features for long term users.
        </p>
        <div className="w-full h-[1px] rounded-full bg-primary opacity-50" />
        <h1 className="text-lg text-stone-400 text-center">0$/month</h1>
      </div>
    </div>
  )
}

export default FreeCard;
