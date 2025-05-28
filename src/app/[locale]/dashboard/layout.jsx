import { cookies } from "next/headers";
import Footer from "./_layout/Footer";
import Header from "./_layout/Header";
import { redirect } from "next/navigation";

async function RootLayout({children}) {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    /* console.log("User cookie:", userCookie); */
    if (!userCookie) {
      redirect("/login");
    }
    let user;
    
    try{
      user = JSON.parse(userCookie.value);   
      /* console.log("User data:", user); */
         
    }catch(e){
      console.error("Failed to parse cookie:", e);
      redirect("/login");
    }
    if (!user.user.email_verified_at) {
      console.log("User role is not teacher:", user.user.email_verified_at);
      redirect("/otp");
    }

  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout;