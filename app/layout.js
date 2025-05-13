import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ส่งฟรี วัตถุดิบเบเกอรี่ บรรจุภัณฑ์ ถนนทวีวัฒนา",
  description: "ส่งฟรี อุปกรณ์เบเกอรี่ น้ำเชื่อม ถนนทวีวัฒนา",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
