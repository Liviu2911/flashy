import { createFileRoute, Link } from "@tanstack/react-router";
import Form from "../../components/form";
import Input from "../../components/form/input";
import Button from "../../components/form/button";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 items-center mt-24 mb-6">
        <h1 className="font-bold sm:text-4xl">Log In</h1>
        <Link to="/register" className="text-primary opacity-80 hover:opacity-100 transition-all">Create Account</Link>
      </div>
      <Form onSubmit={() => {}}>
        <Input name="username" />
        <Input name="password" password />
        <Button text="Login" />
      </Form>
    </div>
  );
}
