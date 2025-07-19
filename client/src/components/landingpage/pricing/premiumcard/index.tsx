import { IoIosCheckmark } from "react-icons/io";

function PremiumCard() {
  const features = ["Use flashcards", "Access to folders", "Unlimited decks", "Access to notes while studying", "Get hints", "Generate flashcards using AI"];
  return (
    <div className="relative rounded-lg card-shadow flex flex-col py-4 items-center border border-stone-600 min-w-64 max-h-max">
      <div className="flex items-center justify-center absolute -top-5 h-10 px-8 rounded-xs bg-stone-900">
        <h1 className="text-xl font-semibold text-primary">PREMIUM</h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {features.map(feature => (
          <div className="flex flex-row items-center max-w-48 gap-2">
            <span className="text-2xl text-primary">
              <IoIosCheckmark />
            </span>
            <h1 className="font-medium">{feature}</h1>
          </div>
        ))}
        <div className="mt-4 w-full h-[1px] rounded-full bg-primary opacity-50" />
        <p className="text-sm text-stone-400 max-w-48">
        Get the full experience of a premium product designed to help you grow and learn.
        </p>
        <div className="w-full h-[1px] rounded-full bg-primary opacity-50" />
        <h1 className="text-lg text-stone-400 text-center">10.99$/month</h1>
      </div>
    </div>
  )
}

export default PremiumCard;
