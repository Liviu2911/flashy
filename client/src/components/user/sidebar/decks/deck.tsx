type DeckType = {
  name: string;
  flashcards: number;
};

function Deck({ deck }: { deck: DeckType }) {
  return (
    <div className="flex items-center justify-between py-1 px-4 hover:bg-gray-700 rounded transition-all">
      <h1 className="text-gray-300">{deck.name}</h1>
      <h2 className="text-sm text-primary opacity-75">{deck.flashcards}</h2>
    </div>
  );
}

export default Deck;
