import type { Children, SetState } from "../../types/default";
import ToggleSmallMenuContext from "./context";

type Props = {
  children: Children,
  value: {
    active: boolean,
    setActive: SetState<boolean>
  }
}

export default function ToggleSmallMenuProvider({ children, value }: Props) {
  return (
    <ToggleSmallMenuContext.Provider value={value}>
      {children}
    </ToggleSmallMenuContext.Provider>
  )
}
