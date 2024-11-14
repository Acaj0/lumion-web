import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";

export default function NotFound() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-40 bg-white flex flex-col items-center justify-center text-center px-4">
        <svg
          width={100}
          className="animate-bounce mb-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
        <h1 className="text-4xl font-bold text-black mb-4">
          Oops! Página não encontrada
        </h1>
        <p className="text-xl text-gray-800 mb-6">
          Parece que nosso código deu um 404 flip!
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Não se preocupe, até os melhores desenvolvedores às vezes se perdem no
          labirinto do código. Que tal voltarmos para um terreno mais familiar?
        </p>
        <Button
          asChild
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          <Link href="/">Voltar para a Página Inicial</Link>
        </Button>
        <p className="mt-8 text-gray-500">
          Se você acha que isso é um erro, por favor contate o{" "}
          <a
            href="mailto:antoniocarlosjr007@hotmail.com"
            className="underline hover:text-gray-700"
          >
            suporte da Lumen
          </a>
          .
        </p>
      </div>
    </div>
  );
}
