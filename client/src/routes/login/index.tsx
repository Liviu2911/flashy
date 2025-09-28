import { createFileRoute, useNavigate } from "@tanstack/react-router";
import FormImage from "../../components/form/image";
import LoginForm from "../../components/form/login";
import getCookies from "../../helpers/getCookies";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { username } = getCookies();
  const navigate = useNavigate();
  if (username) navigate({ to: "/" + username });

  return (
    <div className="flex w-full justify-center">
      <div className="mt-24 flex flex-row justify-between p-12 w-[65%] bg-stone-900 rounded-lg">
        <FormImage />
        <div className="h-full flex items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
