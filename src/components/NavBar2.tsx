"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function NavBar2() {
  const [, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash
      if (hash === "#Serviços" || hash === "#Stack") {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 500)
      }
    }
  }, [pathname])

  const handleSectionClick = async (sectionId: string) => {
    setIsMenuOpen(false)

    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-4 lg:px-6 h-20 flex items-center p-1 z-50 transition-all duration-300 ease-in-out bg-white shadow`}
    >
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image
          src="/4.png"
          quality={100}
          unoptimized={true}
          height={200}
          width={200}
          alt="logo da lumen"
          className="transition-all duration-500 ease-in-out"
        />
        <span className="sr-only">Home</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link
          href="/portfolio"
          className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out text-black"
          prefetch={false}
        >
          Portfólio
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSectionClick("Serviços")
          }}
          className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out text-black"
        >
          Serviços
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSectionClick("Stack")
          }}
          className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out text-black"
        >
          Tecnologias
        </button>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
          className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out text-black"
          prefetch={false}
        >
          Contato
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto md:hidden p-2 text-black">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Menu</span>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            <Link
              href="/portfolio"
              className="text-black text-lg font-medium py-2 hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
              prefetch={false}
            >
              Portfólio
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleSectionClick("Serviços")
              }}
              className="text-black text-lg font-medium py-2 hover:underline underline-offset-4 text-left"
            >
              Serviços
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleSectionClick("Stack")
              }}
              className="text-black text-lg font-medium py-2 hover:underline underline-offset-4 text-left"
            >
              Tecnologias
            </button>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
              className="text-black text-lg font-medium py-2 hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
              prefetch={false}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

