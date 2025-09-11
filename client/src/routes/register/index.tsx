import { createFileRoute, Link } from "@tanstack/react-router";
import Form from "../../components/form";
import Input from "../../components/form/input";
import Button from "../../components/form/button";

export const Route = createFileRoute("/register/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 items-center mt-24 mb-6">
        <h1 className="font-bold sm:text-4xl">Create Account</h1>
        <Link
          to="/login"
          className="text-primary opacity-80 hover:opacity-100 transition-all"
        >
         Log In
        </Link>
      </div>
      <Form onSubmit={() => {}}>
        <Input name="username" />
        <Input name="email" />
        <Input name="password" password />
        <Input name="repassword" password />
        <Button text="Create Account" />
      </Form>
    </div>
  );
}
