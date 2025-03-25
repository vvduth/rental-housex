import React from 'react'
import '@/assets/styles/globals.css'
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
const metadata:Metadata = {
  title: 'Property Rental',
  keywords: 'Rental, properties and real estates ',
  description: 'Find the pefect properties'
}
const MainLayout = ({children}:  Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <html>
        <body>
        <Navbar />
            <main>
            
                {children}
            </main>
            <Footer />
        </body>
    </html>
  )
}

export default MainLayout