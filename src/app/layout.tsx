import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Vendemos todo tipo de productos electrónicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
