"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";
import { object, z } from "zod";
import { Padauk } from "next/font/google";

const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export default function SignUp() {
  const [error, setError] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState({
    disabled: false,
    bg: "",
  });

  const router = useRouter();

  const validateSignup = (formData) => {
    try {
      signupSchema.parse(formData);
      return { success: true, errors: [] };
    } catch (error) {
      console.log("err");
      return { success: false, errors: error.errors };
    }
  };

  const handleServerError = (error) => {
    let errorMessages = [];
    for (const key in error) {
      errorMessages.push(key + " " + error[key]);
    }

    setError(errorMessages);
  };

  async function submit(e) {
    setButtonState({ disabled: true, bg: "#5cb85cb0" });
    e.preventDefault();

    const result = validateSignup({ username, email, password });

    if (!result.success) {
      const zodErrors = result.errors.map((err) => err.message);
      setError(zodErrors);
      return;
    }

    try {
      await axios.post(
        "https://api.realworld.io/api/users",
        {
          user: {
            username: username,
            email: email,
            password: password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/signin");
    } catch (err) {
      let error = err.response.data.errors;
      handleServerError(error);
    }
  }

  // console.log(error);

  function handleOnChange(e) {
    setButtonState({ disabled: false, bg: "#5cb85c" });
    setError([]);
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <div className={styles.main_div}>
      <h1>Sign up</h1>
      <p>
        <Link className={styles.link} href="./signin">
          Have an account?
        </Link>
      </p>

      {!!error.length && (
        <div className={styles.errors_div}>
          <ul>
            {error.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form className={styles.form} onSubmit={submit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleOnChange}
          name="username"
          value={username}
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={handleOnChange}
          name="email"
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={password}
        ></input>
        <button
          style={{ background: buttonState.bg }}
          disabled={buttonState.disabled}
        >
          {" "}
          Sign up
        </button>
      </form>
    </div>
  );
}
