import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center p-1">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image
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
          href="/portfolio"
          className="text-lg font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Portfólio
        </Link>
        <Link
          href="/#3"
          className="text-lg font-medium hover:underline underline-offset-4 md:flex hidden"
          prefetch={false}
        >
          Funcionalidades
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
          className="md:flex hidden text-lg font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
