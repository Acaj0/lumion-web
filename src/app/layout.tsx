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
  title: "Lumen Desenvolvimento Web | Sistemas Personalizados e Sites Profissionais em Cuiabá",
  keywords: "desenvolvimento de sistemas web, sistema web personalizado, plataforma web sob medida, e-commerce complexo, portal corporativo, desenvolvimento Next.js, React TypeScript, criação de sites Cuiabá, site profissional Cuiabá, landing page de conversão, integração de API, Supabase, desenvolvimento full stack, sistema educacional web, dashboard corporativo, site responsivo Cuiabá, SEO técnico, Lumen Web Cuiabá",
  description:
    "Desenvolvemos sistemas web personalizados e sites profissionais com Next.js, TypeScript e Supabase. Do e-commerce complexo à plataforma educacional, criamos soluções escaláveis para todo o Brasil. Atendimento remoto de Cuiabá-MT.",
  openGraph: {
    title: "Lumen Web | Sistemas e Sites Profissionais",
    description: "Soluções web completas: do site estratégico ao sistema complexo. Next.js, TypeScript, Supabase. Atendemos todo o Brasil.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen Web | Desenvolvimento de Sistemas e Sites",
    description: "Sistemas personalizados e sites profissionais com tecnologia moderna. Cuiabá atendendo todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.lumenweb.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/2.png" sizes="32x32" />
        <meta name="theme-color" content="#0369a1" />
        <meta name="geo.region" content="BR-MT" />
        <meta name="geo.placename" content="Cuiabá" />
        <meta name="author" content="Lumen Desenvolvimento Web" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}