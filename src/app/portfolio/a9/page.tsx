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
              <h1 className="text-4xl font-bold mb-6">A9 Logística </h1>
              <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
              <p className="text-muted-foreground mb-6">
                Desenvolvemos um site institucional moderno e responsivo para a
                A9 Logística, uma empresa especializada em soluções de
                logística. O site apresenta os serviços da empresa de forma
                atraente e fácil de navegar e um blog implementado.
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
                <li>Integração com CMS para fácil atualização de conteúdo</li>
              </ul>

              <Link
                href="https://www.a9logistica.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Visitar o Site</Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mt-6 lg:mt-0">
            <img
              src="/a9full.jpg"
              alt="a9 Screenshot"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/a9blog.png"
              alt="a9 blog"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/a9mob.jpg"
              alt="a9 Screenshot"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
