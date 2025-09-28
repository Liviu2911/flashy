import { createFileRoute } from "@tanstack/react-router";
import FormImage from "../../components/form/image";
import RegisterForm from "../../components/form/register";
import getCookies from "../../helpers/getCookies";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/register/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { username } = getCookies();
  const navigate = useNavigate();
  if (username) navigate({ to: "/" + username });

  return (
    <div className="w-full flex justify-center">
      <div className="mt-24 flex flex-row justify-between p-12 w-[65%] bg-stone-900 rounded-lg">
        <FormImage />
        <div className="h-full flex items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
