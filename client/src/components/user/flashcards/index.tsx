import Header from "./header";

function Flashcards() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="w-full flex justify-center mt-4">
        <div className="w-[94%] h-[2px] bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}

export default Flashcards;
