"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LumenWebProject() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyTop = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(stickyTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b">
        <div className="container mx-auto">
          <Link href="/portfolio" passHref>
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              ref={stickyRef}
              className={`lg:sticky ${
                isSticky ? "lg:top-4" : "lg:top-12"
              } transition-all duration-300`}
            >
              <h1 className="text-4xl font-bold mb-6">Top Pro Painting </h1>
              <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
              <p className="text-muted-foreground mb-6">
                Para a Top Pro Painting, desenvolvemos um site institucional
                moderno e responsivo voltado para o mercado americano. O site
                destaca os serviços de pintura da empresa com uma interface
                elegante e fácil de navegar, além de uma seção hero impactante.
                Implementamos funcionalidades para facilitar o contato com
                clientes e melhorar a experiência do usuário em dispositivos
                móveis e desktops, proporcionando um visual profissional que
                reflete a qualidade dos serviços da Top Pro Painting.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Next.js</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Vercel</Badge>
              </div>

              <h3 className="text-xl font-semibold mb-2">Vantagens do Site</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>
                  Design responsivo para uma experiência perfeita em todos os
                  dispositivos
                </li>
                <li>
                  Otimizado para SEO, melhorando a visibilidade nos mecanismos
                  de busca
                </li>
                <li>
                  Carregamento rápido graças à renderização do lado do servidor
                  (SSR)
                </li>
                <li>Interface de usuário intuitiva e fácil de navegar</li>
              </ul>

              <Link
                href="https://www.toppropaint.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Visitar o Site</Button>
              </Link>
            </div>
          </div>

          <div className="space-y-10 mt-6 lg:mt-0">
            <img
              src="/toppromain.jpg"
              alt="top pto Screenshot"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/interior.jpg"
              alt="top pro service page"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/guarantee.jpg"
              alt="top pro guarantee page"
              className="w-full rounded-lg shadow-md"
            />
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
