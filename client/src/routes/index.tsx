import { createFileRoute } from '@tanstack/react-router'
import Bgstars from '../components/landingpage/bgstars'
import Navbar from '../components/navbar'
import Hero from "../components/landingpage/hero"
import "../style/landing.css"
// import React from "react"
// const Testimonials = React.lazy(() => import("../components/landingpage/testimonials"));
import Testimonials from "../components/landingpage/testimonials"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Bgstars />
      <Hero />
      <div className="flex flex-col items-center gap-12 mt-10">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold">Testimonials</h1>
          <p className="text-lg text-stone-600 font-medium">Trusted by users around the world</p>
        </div>
      </div>
      <Testimonials />
    </>
  )
}
