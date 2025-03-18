import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
