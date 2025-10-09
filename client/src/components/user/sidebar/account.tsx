import { FaUser } from "react-icons/fa";

function Account() {
  return (
    <div className="absolute bottom-0 flex flex-col items-center left-0 w-full p-4 border-t border-gray-500">
      <div className="flex flex-row gap-6 items-center py-2 px-8 rounded bg-primary">
        <span className="text-xl p-2 rounded-full border border-white">
          <FaUser />
        </span>
        <div className="flex flex-col text-xs">
          <h1 className="text-white opacity-90">Liviu</h1>
          <h1 className="text-white opacity-75">frimu@contact.ro</h1>
        </div>
      </div>
    </div>
  );
}

export default Account;
