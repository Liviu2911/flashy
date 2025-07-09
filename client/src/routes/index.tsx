import { createFileRoute } from '@tanstack/react-router'
import Bgstars from '../components/landingpage/bgstars'
import Navbar from '../components/navbar'
import "../style/landing.css"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Bgstars />
      <Navbar />
    </>
  )
}
