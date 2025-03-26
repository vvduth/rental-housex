import React from "react";
import "@/assets/styles/globals.css";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const metadata: Metadata = {
  title: "Property Rental",
  keywords: "Rental, properties and real estates ",
  description: "Find the pefect properties",
};
const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
