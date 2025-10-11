import { createFileRoute, useParams } from '@tanstack/react-router'
import ProtectedProvider from '../../contexts/protected/provider';
import Sidebar from '../../components/user/sidebar';
import Search from '../../components/user/search';
import Flashcards from '../../components/user/flashcards';
import { useEffect, useState } from 'react';
import useCookies from "../../hooks/useCookies";
import FoldersProvider from '../../contexts/folders/provider';
import type { Folder, FolderInfo } from '../../contexts/folders/context';
import Flashcard from '../../components/user/flashcards/flashcard';
import type { Flashcard as FType } from '../../components/user/flashcards/flashcard';

export const Route = createFileRoute('/$username/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { username } = useParams({ strict: false });  
  const { token } = useCookies();

  const [folders, setFolders] = useState<FolderInfo>({ currentFolder: null, folders: [] });
  const changeCurrentFolder = (folder: Folder) => {
    setFolders(prev => ({ ...prev, currentFolder: folder }));
  }

  useEffect(() => {
    const getFolders = async () => {
      const res = await fetch("http://localhost:5243/api/folders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        credentials: "include"
      })

      const json = await res.json();

      setFolders(prev => ({...prev, folders: json}));
      if (!json)
        console.log(json);
    }

    getFolders();
  }, [])

  return (
    <ProtectedProvider value={{ username }}>
    <FoldersProvider value={{...folders, changeCurrentFolder}}>
      <div className="flex flex-row h-[100vh] items-center justify-between gap-8">
        <Sidebar />
        <div className="flex flex-col gap-8 w-full pr-8 h-[89vh]">
          <Search />
          <Flashcards />
          <div>
            {folders.currentFolder?.flashcards.map(flashcard => (
              <Flashcard flashcard={flashcard as FType} key={flashcard.id} />
            ))}
          </div>
        </div>
      </div>
    </FoldersProvider>
    </ProtectedProvider>
  )
}
