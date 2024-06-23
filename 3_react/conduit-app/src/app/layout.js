import { Inter } from "next/font/google";
import "./globals.css";
import HomeTitle from "./components/HomeTitle";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "conduit app",
  description: "Conduit medium clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
