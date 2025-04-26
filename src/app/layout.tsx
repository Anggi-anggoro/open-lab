import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import WonderFooter from "./footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body
      >
        <Header/>
        {children}
        <WonderFooter/>
      </body>
    </html>
  );
}
