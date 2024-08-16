import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAllPartners } from "@/db";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const partners = await getAllPartners()

  const links = partners.map(p => ({ href: `/partner/${p.id}`, label: p.name }))

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={links}/>
        {children}
      </body>
    </html>
  );
}
