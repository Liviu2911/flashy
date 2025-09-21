import { createFileRoute, useNavigate } from "@tanstack/react-router";
import FormImage from "../../components/form/image";
import RegisterForm from "../../components/form/register";
import useUser from "../../hooks/useuser";

export const Route = createFileRoute("/register/")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  const navigate = useNavigate();
  if (user) navigate({ to: "/" });
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
