import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/footer";

const projects = [
  {
    id: 1,
    title: "A9 Logística",
    description: "Site e Blog para empresa de logística.",
    image: "/a9capa.jpg",
    link: "/portfolio/a9",
  },
  {
    id: 2,
    title: "Banda Digito Zero",
    description: "Site para banda de rock.",
    image: "/digitozerocapa.jpg",
    link: "/portfolio/digitozero",
  },
  {
    id: 3,
    title: "Top Pro Painting",
    description: "Landing page para a empresa americana de pintura.",
    image: "/topprocapa.jpg",
    link: "/portfolio/toppropaint",
  },
  {
    id: 4,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page para a empresa de Refrigeração do Mato-Grosso.",
    image: "/duzzicapa.jpg",
    link: "/portfolio/duzzi",
  },
  {
    id: 5,
    title: "Anjo Salva Brigada de Emergência",
    description: "Landing page para a empresa de de atendimento de emergência em eventos.",
    image: "/5.jpg",
    link: "/portfolio/anjosalva",
  },
  {
    id: 6,
    title: "Marx's Cleaning",
    description: "Landing page para a empresa americana de limpeza.",
    image: "/6.jpg",
    link: "/portfolio/marxscleaning",
  },
  // {
  //   id: 7,
  //   title: "Zafaloon Filmmaker",
  //   description: "Portfólio profissional para videomaker em Cuiabá.",
  //   image: "/duzzicapa.jpg",
  //   link: "/portfolio/zafalon",
  // },

];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#140f24] to-[#0369a1] flex flex-col justify-between">
      {" "}
      <NavBar></NavBar>
      <div className="py-12 mt-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Nosso Portfólio</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Desenvolvemos websites modernos, responsivos e otimizados para SEO.
          Confira alguns dos nossos projetos recentes.
        </p>
      </div>
      <ContactButton />
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
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
