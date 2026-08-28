import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Fan Page",
  description: "A curated collection of my favorite poems that speak to the heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
