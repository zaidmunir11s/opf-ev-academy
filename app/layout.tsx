import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OPF EV Academy | Overseas Pakistanis Foundation",
  description:
    "Electric vehicle training, assessment, and certification by Overseas Pakistanis Foundation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-[family-name:var(--font-rubik)]">
        {children}
      </body>
    </html>
  );
}
