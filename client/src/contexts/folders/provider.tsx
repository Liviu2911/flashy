import type { Children } from "../../types/default";
import type { Folder, FolderInfo } from "./context";
import FoldersContext from "./context";

type Props = {
  value: FolderInfo & { changeCurrentFolder: ((folder: Folder) => void) | null };
  children: Children;
};

export default function FoldersProvider({ value, children }: Props) {
  return (
    <FoldersContext.Provider value={value}>{children}</FoldersContext.Provider>
  );
}
