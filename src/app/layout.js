
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Hilink Travels ",
  description: "Travel App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
