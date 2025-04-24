import SchoolSidebar from "./_components/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function RootLayout({children}) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    redirect("/login");
  }
  let user;
  
  try{
    user = JSON.parse(userCookie.value);
  }catch(e){
    console.error("Failed to parse cookie:", e);
    redirect("/login");
  }
  if (user.user.role !== "teacher") {
    console.log("User role is not teacher:", user.user.role);
    
    redirect("/dashboard/school");
  }
  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-4 relative">
      <SchoolSidebar />
      <main className='flex flex-col gap-4 md:col-span-3'>
          {children}
      </main>
    </div>
  )
}

export default RootLayout;