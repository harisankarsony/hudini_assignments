"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState({
    disabled: false,
    bg: "",
  });

  const router = useRouter();

  async function submit(e) {
    setButtonState({ disabled: true, bg: "#5cb85cb0" });
    e.preventDefault();
    try {
      const userDetails = await axios.post(
        "https://api.realworld.io/api/users/login",
        {
          user: {
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
      localStorage.setItem("token", userDetails.data.user.token);
      router.push("/");
    } catch (err) {
      setButtonState({ disabled: false, bg: "#5cb85c" });
      console.log(err, "error");
    }
  }

  function handleOnChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <div className={styles.main_div}>
      <h1>Sign in</h1>
      <p>
        <Link className={styles.link} href="./signup">
          Need an account?
        </Link>
      </p>
      <form className={styles.form} onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleOnChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleOnChange}
        ></input>
        <button
          style={{ background: buttonState.bg }}
          disabled={buttonState.disabled}
        >
          {" "}
          Sign in
        </button>
      </form>
    </div>
  );
}
