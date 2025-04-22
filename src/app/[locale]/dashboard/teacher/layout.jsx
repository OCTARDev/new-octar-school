import SchoolSidebar from "./_components/Sidebar";

function RootLayout({children}) {
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