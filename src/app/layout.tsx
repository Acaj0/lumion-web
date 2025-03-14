import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Lumen Desenvolvimento Web -  Criação de Sites em Cuiabá",
  keywords: "Desenvolvimento de Sites Cuiabá, Criação de Sites em Cuiabá, Site Cuiabá, Sites Personalizados Cuiabá, Soluções Web Cuiabá, Lumen Desenvolvimento Web Cuiabá, Design de Sites Cuiabá, Sites Responsivos Cuiabá, Desenvolvedor Web Cuiabá, Agência de Criação de Sites Cuiabá",
  description:
    "Nossa empresa oferece soluções personalizadas em criação e desenvolvimento de sites. Impulsionamos negócios com inovação, eficiência e segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {" "}
        <link rel="icon" type="3/png" href="/2.png" sizes="32x32" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
