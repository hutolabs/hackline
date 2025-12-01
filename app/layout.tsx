import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeUIProvider } from "theme-ui";
import theme from "@hackclub/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack Line",
  description: "A community phone network for Hack Clubbers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeUIProvider theme={theme as any}>{children}</ThemeUIProvider>
      </body>
    </html>
  );
}
