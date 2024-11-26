import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NavBar from '@/components/NavBar'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "A9 Logística",
    description: "Site e Blog para empresa de logística.",
    image: "/a9capa.jpg",
    link: "/portfolio/a9"
  },
  {
    id: 2,
    title: "Banda Digito Zero",
    description: "Site para banda de rock.",
    image: "/digitozerocapa.jpg",
    link: "/portfolio/digitozero"
  },
  {
    id: 3,
    title: "Top Pro Painting",
    description: "Landing page para a empresa americana de pintura.",
    image: "/topprocapa.jpg",
    link: "/portfolio/toppropaint"
  },
  {
    id: 4,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page para a empresa de Refrigeração do Mato-Grosso.",
    image: "/duzzicapa.jpg",
    link: "/portfolio/duzzi"
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
        <NavBar></NavBar>
      <div className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Nosso Portfólio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Desenvolvemos websites modernos, responsivos e otimizados para SEO. 
          Confira alguns dos nossos projetos recentes.
        </p>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={1920}
                  height={1080}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={project.link} passHref>
                  <Button variant="outline" className="w-full">Ver Detalhes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-muted p-8 px-4 text-center mt-12">
        <p className="text-muted-foreground mb-2">Entre em contato para discutir seu próximo projeto</p>
        <Button variant="default"><Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
          className="md:flex hidden text-lg font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contate-nos
        </Link></Button>
      </footer>
    </div>
  )
}