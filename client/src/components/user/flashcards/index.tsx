import Header from "./header";

function Flashcards() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-full flex justify-center mt-4">
        <div className="w-[90%] h-[2px] bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}

export default Flashcards;
