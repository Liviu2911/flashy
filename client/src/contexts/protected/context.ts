import { createContext } from "react";

export const ProtectedContext = createContext<
  undefined | { username?: string; redirectTo?: string }
>(undefined);
