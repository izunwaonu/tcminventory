import { Inter } from "next/font/google";
import "../styles/main.scss";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TCM Inventory",
  description: "The Central Connection of TCM Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        {children}
      </AuthProvider>
        </body>
    </html>
  );
}
