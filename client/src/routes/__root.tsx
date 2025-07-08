import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import type { Theme } from "../types/themeContext"
import ThemeProvider from '../contexts/theme/provider'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [theme, setTheme] = React.useState<Theme>("dark")
  return (
    <React.Fragment>
      <ThemeProvider value={{ theme, setTheme }}>
        <div className={(theme === "dark" ? "bg-black text-stone-200" : "bg-stone-200 text-black") + " w-full h-[100vh] absolute left-0 top-0"}>
          <Outlet />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
