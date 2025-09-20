import { useState } from "react";
import Input from "../input";
import { FaCheck } from "react-icons/fa6";
import Button from "../button";
import { Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";

function RegisterForm() {
  const [tc, setTc] = useState(false);
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({
      email: "",
      username: "",
      password: "",
      passwordAgain: "",
    });
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("Username") as string;
    const email = formData.get("Email") as string;
    const password = formData.get("Password") as string;
    const passwordAgain = formData.get("Password again") as string;

    const scheme = z
      .object({
        username: z
          .string()
          .min(3, "Username must be at least 3 characters long"),
        email: z.email("Invalid email"),
        password: z
          .string()
          .min(6, "Password must be at least 6 characters long")
          .regex(/[a-z]/, "Password must include at least 1 lowercase")
          .regex(/[A-Z]/, "Password must include at least 1 uppercase")
          .regex(/\d/, "Password must include at least 1 number")
          .regex(/[^a-zA-Z0-9]/, "Password must include at least 1 symbol"),
        passwordAgain: z.string(),
      })
      .refine(
        (data) => data.password === data.passwordAgain,
        "Passwords don't match",
      );

    const schemeRes = scheme.safeParse({
      username,
      email,
      password,
      passwordAgain,
    });

    if (!tc) setErrorMessage("You must agree to the Terms & Conditions");

    if (!schemeRes.success) {
      const errors = schemeRes.error.format();
      setError((prev) => ({
        ...prev,
        email: errors.email?._errors[0] || "",
        password: errors.password?._errors[0] || "",
        passwordAgain: errors._errors[0] || "",
        username: errors.username?._errors[0] || "",
      }));
      setErrorMessage(schemeRes.error.issues[0].message);
      return;
    }

    const res = await fetch("http://localhost:5243/api/account/register", {
      body: JSON.stringify({ password, username, email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const json = await res.json();

    console.log(json);
    if (!json.token || !json.username) {
      console.log(json);
      setErrorMessage(json[0].description);
      return;
    }

    document.cookie = "username=" + encodeURIComponent(json.username);
    document.cookie = "token=" + encodeURIComponent(json.token);

    navigate({ to: "/" });
  };

  return (
    <form
      className="max-w-[540px] flex flex-col gap-12 relative"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Create account</h1>
        <h2>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary underline hover:opacity-80 transition-all"
          >
            Log in
          </Link>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-6">
          <Input name="Username" error={error.username.length > 0} />
          <Input name="Email" error={error.email.length > 0} />
        </div>

        <Input name="Password" password error={error.password.length > 0} />
        <Input
          name="Password again"
          password
          error={error.passwordAgain.length > 0}
        />

        <div className="flex flex-row items-center gap-2">
          <button
            type="button"
            onClick={() => setTc((prev) => !prev)}
            className={`${tc && "bg-white"} border border-white rounded transition-all flex items-center justify-center w-4 h-4`}
          >
            <span className={`${tc ? "flex" : "hidden"} text-xs text-black`}>
              <FaCheck />
            </span>
          </button>
          <h2>
            I agree to the{" "}
            <button className="text-primary underline hover:opacity-80 transition-all">
              Terms & Conditions
            </button>
          </h2>
        </div>
      </div>

      <Button text="Create account" />
      {errorMessage.length > 0 && (
        <div className="w-full flex justify-center absolute bottom-12">
          <h1 className="text-red-500">{errorMessage}</h1>
        </div>
      )}
    </form>
  );
}

export default RegisterForm;
