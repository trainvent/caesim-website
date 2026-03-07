import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caesim | Trim Image Libraries",
  description:
    'Caesim is a gallery-cleaning concept that moves unwanted images into a "cut" folder so large photo libraries are easier to trim and review.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
