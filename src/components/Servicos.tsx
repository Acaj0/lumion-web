import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Palette, Rocket, PenTool } from "lucide-react"

export default function Servicos() {
  const services = [
    {
      title: "Sites institucionais",
      description:
        "Digitalize sua empresa com um site e garanta a sua presença digital. Não ter um site no mercado atual deixa sua empresa invisível!",
      icon: <Globe className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Portfólios online",
      description: "Para criativos e profissionais que desejam mostrar seu trabalho de forma visual e interativa.",
      icon: <Palette className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Landing Pages",
      description:
        "Potencialize suas vendas e transmita autoridade no mercado com páginas de captura otimizadas para vendas ou captura de leads.",
      icon: <Rocket className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Blogs",
      description: "Para compartilhar conteúdos, atrair tráfego orgânico e fortalecer sua presença online.",
      icon: <PenTool className="h-8 w-8 text-sky-700" />,
    },
  ]

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nós podemos fazer por você</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Na Lumen Desenvolvimento Web, ajudamos você a se destacar no ambiente digital por meio de estratégias
            eficazes de SEO (Search Engine Optimization). Com a otimização adequada de sites e conteúdo, oferecemos às
            empresas a oportunidade de melhorar sua visibilidade online e alcançar mais clientes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="row-span-2 flex items-center justify-center">
            <Image
              src="/sitesparado.png"
              width={400}
              height={400}
              alt="Lumen foto promocional"
              className="rounded-lg object-cover"
            />
          </div>
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:border-sky-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-sky-700 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            <svg
              width={20}
              fill="currentColor"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Fale com um Especialista
          </Link>
        </div>
      </div>
    </section>
  )
}

