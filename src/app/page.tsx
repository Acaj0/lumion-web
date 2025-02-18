"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Scene from "@/components/Scene";
import Servicos from "@/components/Servicos";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import ContactButton from "@/components/ContactButton";
import Reviews from "@/components/reviews";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <NavBar />
      <main className="flex-1">
        <FloatingContactButtons />

        <section
          ref={(el) => {
            if (el) sectionRefs.current[0] = el;
          }}
          id="1"
          className="w-full py-12 md:py-24 lg:py-32 min-h-screen bg-[url(/newfundo.png)] flex items-center"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col justify-center space-y-4 max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Criação de Sites em Cuiabá
                </h1>
                <p className="max-w-[600px] text-lg md:text-xl text-gray-200">
                  Construímos soluções inovadoras que impulsionam seu negócio.
                  Do conceito à escala, tudo com eficiência e segurança,
                  oferecendo a flexibilidade que você precisa para se destacar
                  no mercado digital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-sky-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
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
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://www.instagram.com/lumen.web/"
                      target="_blank"
                      className="text-white hover:text-gray-200"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/lumenweb/"
                      target="_blank"
                      className="text-white hover:text-gray-200"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.facebook.com/people/Lumen-Desenvolvimento-Web/61565593634646/"
                      target="_blank"
                      className="text-white hover:text-gray-200"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-40 max-w-lg">
                <Scene />
              </div>
            </div>
          </div>
        </section>

        <ContactButton />

        <section
          ref={(el) => {
            if (el) sectionRefs.current[1] = el;
          }}
          id="2"
          className="w-full py-12 bg-white"
        >
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
                  Nossa Agência garante uma solução personalizada, voltada para
                  performance e design responsivo. Oferecemos suporte dedicado
                  em cada etapa, do planejamento à execução, utilizando as
                  melhores práticas de SEO e segurança para que seu site se
                  destaque, carregue rápido e funcione perfeitamente em qualquer
                  dispositivo.
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col gap-4">
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-1">
                  <div className="flex items-center justify-center rounded-full bg-sky-700 p-4">
                    <svg
                      width={50}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-center">
                    Performance
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma é otimizada para desempenho ultrarrápido em
                    qualquer lugar do mundo, garantindo uma experiência fluida
                    para seus usuários.
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
                  <h3 className="mt-2 text-xl font-bold text-center">SEO</h3>
                  <p className="text-muted-foreground">
                    SEO (Search Engine Optimization) é a otimização de sites
                    para melhorar seu posicionamento nos resultados de busca
                    orgânica, aumentando a visibilidade e o tráfego sem anúncios
                    pagos.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-center rounded-full bg-sky-700 p-4">
                    <svg
                      width={39}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
                    </svg>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-center">
                    Responsividade
                  </h3>
                  <p className="text-muted-foreground">
                    Design responsivo adapta o layout de um site a diferentes
                    tamanhos de tela, garantindo uma exibição otimizada em
                    qualquer dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={(el) => {
            if (el) sectionRefs.current[3] = el;
          }}
          id="team"
          className="w-full  bg-white"
        >
          <Team />
        </section>
        <section
          ref={(el) => {
            if (el) sectionRefs.current[2] = el;
          }}
          id="Serviços"
          className="w-full py-12 "
        >
          <Servicos />
        </section>

        <section
          ref={(el) => {
            if (el) sectionRefs.current[4] = el;
          }}
          id="4"
        >
          <Reviews />
        </section>
      </main>
      <Footer/>
    </div>
  );
}
