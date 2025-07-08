import type { SetState } from "./default"

export type Theme = "dark" | "light"
export type ThemeContext = {
  theme: Theme,
  setTheme: SetState<Theme>
}
