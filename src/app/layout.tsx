import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin } from 'next/font/google'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Kernel Community",
  description: "Kernel Community. Block 10 Applications now open.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
