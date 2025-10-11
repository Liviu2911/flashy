import { createFileRoute, useParams } from '@tanstack/react-router'
import ProtectedProvider from '../../contexts/protected/provider';
import Sidebar from '../../components/user/sidebar';
import Search from '../../components/user/search';
import Flashcards from '../../components/user/flashcards';
import { useEffect, useState } from 'react';
import useCookies from "../../hooks/useCookies";

export const Route = createFileRoute('/$username/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { username } = useParams({ strict: false });  
  const { token } = useCookies();

  const [folders, setFolders] = useState<Record<string, any>[]>([])
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

      setFolders(json);
      if (json)
        console.log(json);
    }

    getFolders();
  }, [])

  return (
    <ProtectedProvider value={{ username }}>
      <div className="flex flex-row h-[100vh] items-center justify-between gap-8">
        <Sidebar />
        <div className="flex flex-col gap-8 w-full pr-8 h-[89vh]">
          <Search />
          <Flashcards />
        </div>
      </div>
    </ProtectedProvider>
  )
}
