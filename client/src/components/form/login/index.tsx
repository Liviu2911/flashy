import { Link, useNavigate } from "@tanstack/react-router";
import Input from "../input";
import Button from "../button";
import { useState } from "react";

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("Username") as string;
    const password = formData.get("Password") as string;

    const res = await fetch("http://localhost:5243/api/account/login", {
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const json = await res.json();
    if (!json.token) {
      console.log(json);
      setErrorMessage("User not found");
      return;
    }

    document.cookie = "token=" + encodeURIComponent(json.token);
    document.cookie = "username=" + encodeURIComponent(json.username);
    document.cookie = "userid=" + encodeURIComponent(json.userId);

    navigate({ to: "/" + username });
  };

  return (
    <form
      className="w-[442px] flex flex-col gap-12 relative"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Log in</h1>
        <h2>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary underline hover:opacity-90 transition-all"
          >
            Create account
          </Link>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <Input name="Username" error={errorMessage.length > 0} />
        <Input name="Password" password error={errorMessage.length > 0} />
      </div>

      <Button text="Log in" />

      {errorMessage.length > 0 && (
        <div className="w-full flex justify-center absolute bottom-12">
          <h1 className="text-red-500">{errorMessage}</h1>
        </div>
      )}
    </form>
  );
}

export default LoginForm;
