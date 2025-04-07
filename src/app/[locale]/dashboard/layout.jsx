import Footer from "./_layout/Footer";
import Header from "./_layout/Header";

function RootLayout({children}) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout;