import { createFileRoute, Link } from "@tanstack/react-router";
import Form from "../../components/form";
import Input from "../../components/form/input";
import Button from "../../components/form/button";
import { z } from "zod";
import { useState } from "react";

export const Route = createFileRoute("/register/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [error, setError] = useState("");

  const schema = z
    .object({
      username: z
        .string()
        .min(3, "Username is too short")
        .max(24, "Username is too long"),
      email: z.string().email("Invalid email"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[A-Z]/, "Password must contain at least an uppercase")
        .regex(/\d/, "Password must contain at least a number"),
      repassword: z.string(),
    })
    .refine(
      (data) => data.password === data.repassword,
      "Passwords don't match",
    );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as String;
    const email = formData.get("email") as String;
    const password = formData.get("password") as String;
    const repassword = formData.get("repassword") as String;

    const { error } = schema.safeParse({
      username,
      email,
      password,
      repassword,
    });

    if (error) {
      setError(error.issues[0].message);
      return;
    }

    setError("");
  };

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
      <Form onSubmit={onSubmit}>
        <Input name="username" />
        <Input name="email" />
        <Input name="password" password />
        <Input name="repassword" password />
        {error && (
          <div className="w-full flex justify-center">
            <h1 className="text-rose-500 text-center max-w-48">{error}</h1>
          </div>
        )}
        <Button text="Create Account" />
      </Form>
    </div>
  );
}
