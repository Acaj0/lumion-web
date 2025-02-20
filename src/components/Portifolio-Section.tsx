"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    id: 1,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page para uma das maiores empresas de Refrigeração do Mato-Grosso.",
    image: "/duzzicapa.jpg",
    tags: ["Next.js", "TypeScript", "React"],
    link: "/portfolio/duzzi", 
  },
  {
    id: 2,
    title: "Zafaloon Filmmaker",
    description: "Portifolio responsivo com um painel para alteração dos dados em tempo real",
    image: "/zafalooncapa.jpg",
    tags: ["React", "Tailwind", "PostgreSQL"],
    link: "/", 
  },
  {
    id: 3,
    title: "Marx's Cleaning",
    description: "Website responsivo focado em conversão, com alto desempenho em SEO",
    image: "/6.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "/portfolio/marxscleaning",
  },
]

export default function PortfolioSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-[#0369a1] to-[#0c0817]" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold mb-4 text-white">Projetos em Destaque</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Conheça alguns dos nossos melhores trabalhos em desenvolvimento web e design
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="group bg-transparent border-white text-white hover:bg-white transition-all duration-300 ease-in-out"
              size="lg"
            >
              <span className="bg-gradient-to-l font-bold from-[#0369a1] to-[#0c0817] bg-clip-text group-hover:text-transparent transition-all duration-300 ease-in-out">
                Ver Portfólio Completo
              </span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform group-hover:text-[#0c0817]" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </section>
  )
}

