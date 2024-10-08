import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
      />
      <title>Create Next App</title>
    </head>
    <body
        className={`antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
