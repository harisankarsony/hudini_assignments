"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const sessionStatus = localStorage.getItem("token");

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const session = sessionStatus;
    
    useEffect(() => {
      if (!session) {
        redirect("/");
      }
    }, []);

    if (!session) {
      return null;
    }

    return <Component {...props}/>;
  };
}
