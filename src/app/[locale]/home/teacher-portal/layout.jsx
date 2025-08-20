import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function RootLayout({children}) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user") || {};

  if (!userCookie) {
    redirect("/login");
  }
  let user;
  
  try{
    user = JSON.parse(userCookie?.value);
  }catch(e){
    console.error("Failed to parse cookie:", e);
    redirect("/login");
  }
  if (user?.user?.role !== "teacher") {
    console.log("User role is not teacher:", user.user.role);
    redirect("/home");
  }
  return (
    children
  )
}

export default RootLayout;