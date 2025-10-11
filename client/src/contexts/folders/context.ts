import { createContext } from "react";

export type Folder = {
  name: string;
  id: number;
  userid: number;
  flashcards: Record<string, string>[];
};

export type FolderInfo = {
  currentFolder: Folder | null;
  folders: Folder[];
};

const FoldersContext = createContext<
  FolderInfo & { changeCurrentFolder: ((folder: Folder) => void) | null }
>({ currentFolder: null, folders: [], changeCurrentFolder: null });

export default FoldersContext;
