import Decks from "./decks";
import Header from "./header";
import HomeButton from "./homebutton";
import Separator from "./separator";
import Actions from "./actions";
import Account from "./account";

function Sidebar() {
  return (
    <div className="w-72 h-full flex items-center">
      <div className="relative p-4 border bg-[#171717] border-gray-500 rounded-lg flex flex-col m-6 w-72 h-[90%]">
        <Header />
        <Separator />
        <HomeButton />
        <Decks />
        <Separator />
        <Actions />
        <Account />
      </div>
    </div>
  );
}

export default Sidebar;
