"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Globe, Lock } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    id: 1,
    title: "Projeto Internacional - Under NDA",
    description: "Plataforma SaaS em desenvolvimento para cliente internacional. Arquitetura escalável com features avançadas de real-time e integrações complexas.",
    image: "/placeholder-nda.jpg", // You'll need to add a generic tech image
    tags: ["NDA", "Internacional", "SaaS Platform"],
    tech: ["Next.js", "TypeScript", "Real-time", "AI"],
    link: null, 
    type: "system",
    isNDA: true
  },
  {
    id: 2,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page corporativa de alta conversão para empresa líder em refrigeração comercial no Mato Grosso. Otimizada para SEO e captação de leads.",
    image: "/duzzicapa.jpg",
    tags: ["Landing Page", "B2B", "SEO"],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "/portfolio/duzzi", 
    type: "site"
  },
  {
    id: 3,
    title: "Portal Duzzi Totaline",
    description: "Portal corporativo B2B com sistema de autenticação, gestão de pedidos, catálogo de produtos HVAC e dashboard administrativo para rede de revendedores.",
    image: "/duzzi-portal.png",
    tags: ["Portal B2B", "Sistema Completo", "Dashboard"],
    tech: ["Next.js", "TypeScript", "Supabase", "Auth"],
    link: null, 
    type: "system",
    isRestricted: true
  },
  {
    id: 4,
    title: "Marx's Cleaning",
    description: "Website responsivo focado em conversão e performance. Landing page com otimização avançada de SEO para dominar resultados de busca local.",
    image: "/6.jpg",
    tags: ["Landing Page", "SEO", "Performance"],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "/portfolio/marxscleaning",
    type: "site"
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
              De landing pages estratégicas a sistemas internacionais complexos. 
              Conheça alguns trabalhos desenvolvidos com tecnologia de ponta.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full flex flex-col ${
                project.isNDA ? 'border-2 border-sky-400' : ''
              }`}>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-0 pb-[56.25%] overflow-hidden bg-gradient-to-br from-sky-900 to-slate-900">
                    {project.isNDA ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Globe className="h-16 w-16 text-white mx-auto mb-4 opacity-50" />
                          <Lock className="h-8 w-8 text-white mx-auto opacity-70" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        quality={90}
                      />
                    )}
                    {/* Project Type Badge */}
                    <div className="absolute top-3 right-3">
                      {project.isNDA ? (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white flex items-center gap-1">
                          <Lock className="h-3 w-3" />
                          Under NDA
                        </span>
                      ) : project.isRestricted ? (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-700 text-white flex items-center gap-1">
                          Portal Corporativo
                        </span>
                      ) : (
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          project.type === 'system' 
                            ? 'bg-sky-700 text-white' 
                            : 'bg-white/90 text-sky-900'
                        }`}>
                          {project.type === 'system' ? 'Sistema Completo' : 'Site Profissional'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
                      {project.isNDA && <Globe className="h-5 w-5 text-sky-400" />}
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                    
                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-sky-700/50 text-white rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link ? (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#0c0817] transition-all duration-300 ease-in-out"
                        >
                          Ver Projeto
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : project.isNDA ? (
                      <Button
                        variant="outline"
                        disabled
                        className="w-full bg-transparent border-white/30 text-white/50 cursor-not-allowed"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Confidencial
                      </Button>
                    ) : project.isRestricted ? (
                      <Button
                        variant="outline"
                        disabled
                        className="w-full bg-transparent border-white/30 text-white/50 cursor-not-allowed"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Acesso Restrito
                      </Button>
                    ) : null}
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