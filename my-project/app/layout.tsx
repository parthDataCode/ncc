import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/HeaderSection";
// import Nav from "@/components/Navbar/Nav";
import FooterSection from "@/components/Footer/FooterSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NCC DAVV",
  description: "Created by Parth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white text-black">
          <Header />
          {/* <Nav
            routing={true}
            routingLink={[
              { src: "#", name: "Home" },
              { src: "#", name: "About" },
              { src: "#", name: "Contact" },
              { src: "#", name: "Gallery" },
              { src: "#", name: "Activities" },
              { src: "#", name: "FAQ" },
            ]}
          /> */}

          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
