import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-20 flex items-center p-1">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            className=""
            src={"/4.png"}
            quality={100}
            unoptimized={true}
            height={200}
            width={200}
            alt="logo da lumen"
          />
          <span className="sr-only">Home</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full mt-10 py-12 md:py-24 lg:py-32 h-[700px] items-center flex ">
          <div className="container px-4 md:px-6 bg backdrop-blur-md">
            <div className="flex gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center justify-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Criação de Sites
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Construímos soluções inovadoras que impulsionam seu negócio.
                    Do conceito à escala, tudo com eficiência e segurança,
                    oferecendo a flexibilidade que você precisa para se destacar
                    no mercado digital.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className=" drop-shadow-lg inline-flex h-10 items-center justify-center rounded-md bg-sky-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Fale com um Especialista
                  </Link>
                </div>
              </div>
              <img src="/pcs.png" width="300" height="300" alt="Hero" />
            </div>
          </div>
        </section>
        <section className="w-full py-10 md:py-10 lg:py-10 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  O que nós podemos fazer por você
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify	">
                  Na Lumen Desenvolvimento Web, ajudamos você a se
                  destacarem no ambiente digital por meio de estratégias
                  eficazes de SEO (Search Engine Optimization). Com a otimização
                  adequada de sites e conteúdo, oferecemos às empresas a
                  oportunidade de melhorar sua visibilidade online e alcançar
                  mais clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Sites institucionais
                      </h3>
                      <p className="text-muted-foreground">
                        Digitalize sua empresa com um site e garanta a sua
                        presença digital. Não ter um site no mercado atual deixa
                        sua empresa invisível!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Loja Virtual</h3>
                      <p className="text-muted-foreground">
                        Tenha uma plataforma de vendas 24h, de alto custo
                        benefício para sua empresa, com total suporte durante 1
                        ano
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Landing Pages</h3>
                      <p className="text-muted-foreground">
                        Potencialize suas vendas e transmita autoridade no
                        mercado com páginas de captura otimizadas para vendas ou
                        captura de leads.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className=" drop-shadow-lg inline-flex h-10 items-center justify-center rounded-md bg-sky-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Fale com um Especialista
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Lumen Web. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
