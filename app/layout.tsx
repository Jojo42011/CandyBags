import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "@/components/WalletProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HalloweenBackground from "@/components/HalloweenBackground";

export const metadata: Metadata = {
  title: "CandyBags | Halloween Memecoin on Solana",
  description: "Trick or Treat on the Blockchain! Join the spookiest memecoin community on Solana.",
  keywords: ["CandyBags", "memecoin", "Solana", "Halloween", "crypto", "cryptocurrency"],
  openGraph: {
    title: "CandyBags | Halloween Memecoin on Solana",
    description: "Trick or Treat on the Blockchain!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <HalloweenBackground />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}

