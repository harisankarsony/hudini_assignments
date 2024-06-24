"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";
// import { headers } from "next/headers";
// import { log } from "console";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
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
      console.log(err, "error");
    }
  }

  function handleOnChange(e) {
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
        <button> Sign up</button>
      </form>
    </div>
  );
}
