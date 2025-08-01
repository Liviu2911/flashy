import { createContext } from "react";
import type { ThemeContext as Type } from "../../types/themeContext";

export const ThemeContext = createContext<Type>({ theme: "dark", setTheme: () => { } })
