import { createContext } from "react";
import type { SetState } from "../../types/default";

type Type = {
  active: boolean,
  setActive: SetState<boolean>
}

const ToggleSmallMenuContext = createContext<Type>({
  active: false,
  setActive: () => { }
});

export default ToggleSmallMenuContext;
