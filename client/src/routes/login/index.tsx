import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import FormImage from "../../components/form/image";
import LoginForm from "../../components/form/login";
import useUser from "../../hooks/useuser";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  const navigate = useNavigate();
  if (user) navigate({ to: "/" });
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
