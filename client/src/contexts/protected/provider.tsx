import { useEffect, useState } from "react";
import type { Children } from "../../types/default";
import { ProtectedContext } from "./context";
import getUser from "../../helpers/getuser";
import { useNavigate } from "@tanstack/react-router";

function ProtectedProvider({
  value,
  children,
}: {
  value: { username?: string; redirectTo?: string };
  children: Children;
}) {
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const _user = await getUser(value.username);
      if (!_user) navigate({ to: value.redirectTo || "/login" });
      else setUser(_user);
    };

    checkUser();
  }, []);

  if (user)
    return (
      <ProtectedContext.Provider value={value}>
        {children}
      </ProtectedContext.Provider>
    );
  return <h1>Loading...</h1>;
}

export default ProtectedProvider;
