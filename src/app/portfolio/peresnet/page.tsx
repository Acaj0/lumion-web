"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NavBar2 from "@/components/NavBar2"

export default function PeresnetWebProject() {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyTop = stickyRef.current.getBoundingClientRect().top
        setIsSticky(stickyTop <= 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <NavBar2 />
      <main className="container mx-auto mt-20 px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              ref={stickyRef}
              className={`lg:sticky ${isSticky ? "lg:top-4" : "lg:top-20"} transition-all duration-300`}
            >
              <h1 className="text-4xl font-bold mb-6">Peresnet</h1>
              <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
              <p className="text-muted-foreground mb-6">
                Desenvolvemos um site institucional moderno e responsivo para a Peresnet. O site apresenta os serviços da empresa de forma atraente e fácil
                de navegar.
              </p>

              <h3 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Next.js</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Vercel</Badge>
              </div>

              <h3 className="text-xl font-semibold mb-2">Vantagens do Site</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>Design responsivo para uma experiência perfeita em todos os dispositivos</li>
                <li>Otimizado para SEO, melhorando a visibilidade nos mecanismos de busca</li>
                <li>Carregamento rápido graças à renderização do lado do servidor (SSR)</li>
                <li>Interface de usuário intuitiva e fácil de navegar</li>
              </ul>

              <Link href="https://www.peresnet.com.br" target="_blank" rel="noopener noreferrer">
                <Button>Visitar o Site</Button>
              </Link>

              <Button className="flex flex-col gap-2 min-[400px]:flex-row mt-10">
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5565981227631&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
                  prefetch={false}
                  className="w-72 flex justify-center gap-2 items-center"
                >
                  <svg width={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Solicite um orçamento{" "}
                </Link>
              </Button>

              <Link href="/portfolio" passHref>
                <Button variant="ghost" className="flex items-center mt-10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Portfólio
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mt-6 lg:mt-0">
            <img
              src="/peresnet1.jpg"
              alt="Peresnet navegação pc"
              className="w-full rounded-lg shadow-lg outline outline-1"
            />
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

