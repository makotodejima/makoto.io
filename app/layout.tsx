import { Metadata } from "next";
import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Makoto Dejima | Software engineer",
  description:
    "Software engineer with a blend of design background and technical expertise. Skilled at handling tasks across the entire stack, merging aesthetics and functionality to craft impactful, user-centric products.",
  icons: {
    icon: "/mdfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
