import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/navbar'
import Stars from '../components/stars'
import LandingPage from '../components/landingpage'
import ToggleSmallMenuProvider from '../contexts/togglesmallmenu/provider'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // Display the menu on smaller screens
  const [active, setActive] = useState(false);

  return (
    <>
      <Stars />
      <ToggleSmallMenuProvider value={{ active, setActive }}>
        <Navbar />
        <LandingPage />
      </ToggleSmallMenuProvider>
    </>
  )
}
