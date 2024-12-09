import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "E-Commerce Store",
  description: "Best products at unbeatable prices",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
       
      </body>
    </html>
  );
}
