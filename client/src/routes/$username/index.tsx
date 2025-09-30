import { createFileRoute, useParams } from '@tanstack/react-router'
import ProtectedProvider from '../../contexts/protected/provider';

export const Route = createFileRoute('/$username/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { username } = useParams({ strict: false });  

  return (
    <ProtectedProvider value={{ username }}>
    <></> 
    </ProtectedProvider>
  )
}
