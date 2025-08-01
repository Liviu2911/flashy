import { createFileRoute } from '@tanstack/react-router'
import Bgstars from '../components/landingpage/bgstars'
import Navbar from '../components/navbar'
import Hero from "../components/landingpage/hero"
import "../style/landing.css"
import React from "react"
import Pricing from '../components/landingpage/pricing'
import Features from "../components/landingpage/features"

const Testimonials = React.lazy(() => import("../components/landingpage/testimonials"));

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Bgstars />
      <Hero />
      <Testimonials />
      <Pricing />
      <Features />
    </>
  )
}
