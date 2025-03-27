"use client";
import Header from "./_layout/Header";

function RootLayout({children}) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex flex-col gap-4'>
            {children}
        </main>
    </div>
  )
}

export default RootLayout;