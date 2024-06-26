"use client";

import { useRouter } from "next/navigation";
import WithAuth from "../components/withAuth/index";

const Profile = () => {
  const router = useRouter();

  function handleOnClick() {
    localStorage.clear();
    router.push("/");
  }

  return <button onClick={handleOnClick}>Sign out</button>;
};

export default WithAuth(Profile);
