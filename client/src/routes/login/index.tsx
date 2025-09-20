import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    console.log("valid");
  };

  return (
    <div className="flex flex-col gap-8 items-center">
   </div>
  );
}
