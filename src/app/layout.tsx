import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Anthony Cano - Computer Science Student",
  description: "Personal website showcasing my projects and skills",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/personal_website/favicon.ico" />
        {/* 👇 Ensures GitHub Pages can find your assets */}
        <base href="/personal_website/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
