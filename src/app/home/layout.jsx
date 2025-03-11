"use client";
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import React from 'react'

export default function RootLayout({children}) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex flex-col gap-4'>
          {children}
        </main>
        <Footer />
    </div>
  )
}
