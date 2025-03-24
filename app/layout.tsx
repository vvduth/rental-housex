import React from 'react'
import '@/assets/styles/globals.css'
import { Metadata } from 'next';
import Navbar from './components/Navbar';
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
            <main>
              <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainLayout