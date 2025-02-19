import Image from "next/image";

export default function Team() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nossa Equipe
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça os profissionais dedicados por trás da Lumen Desenvolvimento
            Web.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <a target="_blank" href="https://www.linkedin.com/in/acaj0/">
          <div className="flex flex-col items-center space-y-4 rounded-md hover:shadow-md hover:outline outline-1 py-6">
            <Image
              src="/antonio.jpeg"
              alt="Foto do Membro 1"
              width={200}
              height={200}
              className="rounded-full outline outline-1 outline-black"
            />
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Antonio Carlos</h3>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <p className="text-muted-foreground">Desenvolvedor Web</p>
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mateus-gunsch/">
          <div className="flex flex-col items-center space-y-4 rounded-md hover:shadow-md hover:outline outline-1 py-6">
            <Image
              src="/mateus.jpeg"
              alt="Foto do Membro 2"
              width={200}
              height={200}
              className="rounded-full outline outline-1 outline-black"
            />
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Mateus Gunsch</h3>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <p className="text-muted-foreground">Desenvolvedor Web</p>
          </div>
        </a>
      </div>
    </div>
  );
}
