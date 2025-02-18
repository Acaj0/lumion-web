"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-4 lg:px-6 h-20 flex items-center p-1 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow" : "bg-transparent"}`}
    >
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image 
          src={isScrolled ? "/4.png" : "/Lume.png"} 
          quality={100} 
          unoptimized={true} 
          height={200} 
          width={200} 
          alt="logo da lumen" 
          className="transition-all duration-500 ease-in-out"
        />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/portfolio"
          className={`text-lg font-medium hover:underline underline-offset-4 flex transition-all duration-500 ease-in-out ${isScrolled ? " text-black" : "text-white"}`}
          prefetch={false}
        >
          Portfólio
        </Link>
        <Link
          href="/#Serviços"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#Serviços")?.scrollIntoView({ behavior: "smooth" })
          }}
          className={`text-lg font-medium hover:underline underline-offset-4 md:flex hidden transition-all duration-500 ease-in-out ${isScrolled ? " text-black" : "text-white"}`}
          prefetch={false}
        >
          Serviços
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
          className={`text-lg font-medium hover:underline underline-offset-4 md:flex hidden transition-all duration-500 ease-in-out ${isScrolled ? " text-black" : "text-white"}`}
          prefetch={false}
        >
          Contato
        </Link>
      </nav>
    </header>
  )
}
