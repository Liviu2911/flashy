import type { Children } from "../../types/default";
import type { ThemeContext as Type } from "../../types/themeContext";
import { ThemeContext } from "./context";

function ThemeProvider({ value, children }: { value: Type, children: Children }) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
