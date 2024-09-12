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
            href="#3"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Funcionalidades
          </Link>
          <Link
            href="#"
            className="md:flex hidden text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="1" className="w-full mt-10 py-12 md:py-24 lg:py-32 h-[700px] items-center flex ">
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
              <img className="hidden md:flex" src="/pcs.png" width="300" height="300" alt="Hero" />
            </div>
          </div>
        </section>
        <section id="2" className="w-full py-10 md:py-10 lg:py-10 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  O que nós podemos fazer por você
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify	">
                  Na Lumen Desenvolvimento Web, ajudamos você a se destacarem no
                  ambiente digital por meio de estratégias eficazes de SEO
                  (Search Engine Optimization). Com a otimização adequada de
                  sites e conteúdo, oferecemos às empresas a oportunidade de
                  melhorar sua visibilidade online e alcançar mais clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/sitesparado.png"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
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
        <section id="3" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Principais funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Eleve sua presença na web
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa Agência garante garante uma solução personalizada,
                  voltada para performance e design responsivo. Ofereço suporte
                  dedicado em cada etapa, do planejamento à execução, utilizando
                  as melhores práticas de SEO e segurança para que seu site se
                  destaque, carregue rápido e funcione perfeitamente em qualquer
                  dispositivo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-sky-700 p-4">
                <svg width={50} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-muted-foreground">
                  Nossa plataforma é otimizada para desempenho ultrarrápido em qualquer lugar do mundo,
                  garantindo uma experiência fluida para seus usuários.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-sky-700 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={50}
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="white"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">SEO</h3>
                <p className="text-muted-foreground">
                  SEO (Search Engine Optimization) é a otimização de sites para
                  melhorar seu posicionamento nos resultados de busca orgânica,
                  aumentando a visibilidade e o tráfego sem anúncios pagos.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-sky-700 p-4">
                <svg width={39} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg>
                </div>
                <h3 className="text-xl font-bold">Responsividade</h3>
                <p className="text-muted-foreground">
                  Design responsivo adapta o layout de um site a diferentes
                  tamanhos de tela, garantindo uma exibição otimizada em
                  qualquer dispositivo.
                </p>
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
            Termos de serviço
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
