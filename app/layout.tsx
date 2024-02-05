import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick's Personal Site",
  description: "Nicholas is a software engineer. He develops full-stack and has 1 year of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 text-gray-950 relative`}>
        <div className="bg-red-400 absolute top-[-6rem] right-[5rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[65rem]"></div>
        <div className="bg-green-400 absolute top-[-6rem] left-[-35rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] sm:w-[65rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
      </body>
    </html>
  );
}
