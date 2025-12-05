import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Palette, Rocket, PenTool, Database, Puzzle, BarChart3, Cpu } from "lucide-react";

export default function Servicos() {
  const sitesServices = [
    {
      title: "Landing Pages",
      description:
        "Páginas de alta conversão otimizadas para captura de leads e vendas. Design focado em resultados mensuráveis.",
      icon: <Rocket className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Sites Institucionais",
      description:
        "Presença digital profissional para sua empresa. Sites responsivos com SEO otimizado para o Google.",
      icon: <Globe className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Portfólios Online",
      description:
        "Showcase visual e interativo do seu trabalho. Destaque seus projetos de forma profissional e impactante.",
      icon: <Palette className="h-8 w-8 text-sky-700" />,
    },
    {
      title: "Blogs com CMS",
      description:
        "Plataforma de conteúdo para atrair tráfego orgânico. Sistema de gerenciamento fácil para publicar artigos.",
      icon: <PenTool className="h-8 w-8 text-sky-700" />,
    },
  ];

  const systemsServices = [
    {
      title: "E-commerce Complexo",
      description:
        "Lojas online B2B e B2C com gestão de estoque, múltiplas formas de pagamento e integrações avançadas.",
      icon: <Database className="h-8 w-8 text-sky-700" />,
      badge: "Sistema Completo",
    },
    {
      title: "Plataformas Educacionais",
      description:
        "Sistemas de ensino online com gestão de turmas, quizzes, dashboards de progresso e integrações com APIs educacionais.",
      icon: <BarChart3 className="h-8 w-8 text-sky-700" />,
      badge: "Sistema Completo",
    },
    {
      title: "Portais Corporativos",
      description:
        "Sistemas internos para gestão empresarial, dashboards administrativos e automação de processos de negócio.",
      icon: <Cpu className="h-8 w-8 text-sky-700" />,
      badge: "Sistema Completo",
    },
    {
      title: "Integrações de API",
      description:
        "Conectamos seu sistema a pagamentos, CRMs, ERPs, plataformas educacionais e qualquer API que seu negócio precise.",
      icon: <Puzzle className="h-8 w-8 text-sky-700" />,
      badge: "Integração",
    },
  ];

  return (
    <section className="w-full py-16 bg-[url(/newfundo2.png)] bg-cover bg-no-repeat">
      <div className="container rounded-lg p-5 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
            Do Site ao Sistema Completo
          </h2>
          <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos soluções completas em desenvolvimento web. Seja um site estratégico 
            para sua presença digital ou um sistema complexo sob medida, utilizamos tecnologia 
            moderna (Next.js, TypeScript, Supabase) para entregar resultados escaláveis.
          </p>
        </div>

        {/* Complex Systems Section - FIRST FOR EMPHASIS */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sistemas Sob Medida</h3>
            <p className="text-gray-300">Soluções escaláveis para desafios complexos de negócio</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {systemsServices.map((service, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:border-sky-700 bg-white/95 backdrop-blur relative overflow-hidden"
              >
                {service.badge && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-sky-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {service.badge}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {service.icon}
                    <span className="text-base">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-white/30"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 py-2 text-black font-semibold rounded-full">
              Também fazemos
            </span>
          </div>
        </div>

        {/* Sites & Landing Pages Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sites & Landing Pages</h3>
            <p className="text-gray-300">Presença digital estratégica e de alta conversão</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sitesServices.map((service, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:border-sky-700 bg-white/95 backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {service.icon}
                    <span className="text-base">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Lumen%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-sky-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
          </a>
        </div>
      </div>
    </section>
  );
}