import React from 'react'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    redirect("/login");
  }

  let user;
  try {
    user = JSON.parse(userCookie.value);
  } catch (e) {
    redirect("/login");
  }

  if (user?.user?.role) {
    redirect(`/dashboard/${user.user.role}`);
  }

  return (
    <div>page</div>
  );
}
