import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import { Suspense } from "react";
import Loader from "@/components/loader";
import HydrateAuth from "@/components/HydrateAuth";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Octar School",
  description: "Octar Organisation",
  icons:{
    icon:"/logo.svg"
  }
};



function RootLayout({ children  }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={3000} />
        <ClientProvider>
          <Suspense fallback={<Loader />}>
            <HydrateAuth >
                {children}
            </HydrateAuth>
          </Suspense>
          
        </ClientProvider>        
      </body>
    </html>
  );
}


export default RootLayout;