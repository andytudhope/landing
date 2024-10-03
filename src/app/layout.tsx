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
  description: "Building a better web together, block by block. Block 10 Applications now open.",
  openGraph: {
    title: 'Kernel Community',
    description: 'Building a better web together, block by block. Block 10 Applications now open.',
    url: 'https://kernel.community',
    siteName: 'Kernel Communtiy',
    images: [
      {
        url: '/cover.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
      }
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${libreFranklin.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
