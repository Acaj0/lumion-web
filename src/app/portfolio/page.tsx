"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import ContactButton from "@/components/ContactButton"
import Footer from "@/components/footer"

const projects = [

  {
    id: 1,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page para uma das maiores empresas de Refrigeração do Mato-Grosso.",
    image: "/duzzicapa.jpg",
    link: "/portfolio/duzzi",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Marx's Cleaning",
    description: "Website responsivo focado em conversão, com alto desempenho em SEO",
    image: "/6.jpg",
    link: "/portfolio/marxscleaning",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Top Pro Painting",
    description: "Landing Page responsiva focada em conversão, com alto desempenho em SEO",
    image: "/topprocapa.jpg",
    link: "/portfolio/toppropaint",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "A9 Logística",
    description: "Website institucionais com Blog para empresa de logística do Mato Grosso.",
    image: "/a9capa.jpg",
    link: "/portfolio/a9",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 5,
    title: "Anjo Salva Brigada de Emergência",
    description: "Landing page para a empresa de de atendimento de emergência em eventos.",
    image: "/5.jpg",
    link: "/portfolio/anjosalva",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    title: "Banda Digito Zero",
    description: "Site para banda de rock, com uma implementação de blog e SEO otimizado.",
    image: "/digitozerocapa.jpg",
    link: "/portfolio/digitozero",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 7,
    title: "Zafaloon Filmmaker",
    description: "Portifolio responsivo com um painel para alteração dos dados em tempo real",
    image: "/Zafalooncapa.jpg",
    link: "/portfolio/zafalon",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 8,
    title: "PeresNet",
    description: "Site institucional responsivo para empresa de TI de Cuiabá-MT",
    image: "/peresnetcapa.jpg",
    link: "/portfolio/peresnet",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#140f24] to-[#0369a1] flex flex-col justify-between">
      <NavBar />
      <div className="py-12 mt-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Nosso Portfólio</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Desenvolvemos websites modernos, responsivos e otimizados para SEO. Confira alguns dos nossos projetos
          recentes.
        </p>
      </div>
      <ContactButton />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-0 pb-[56.25%] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-white/10 text-white rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#0c0817] transition-all duration-300 ease-in-out"
                      >
                        Ver Projeto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

