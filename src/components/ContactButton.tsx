"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function ContactButton() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [buttonPosition, setButtonPosition] = useState(16) // 4rem (bottom-4) in pixels
    const buttonRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 767)
            }
        
            handleResize() // Chama a função imediatamente para definir o estado inicial
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }, [])

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY
        setIsExpanded(scrollPosition > 300)

        const footer = document.querySelector("footer")
        if (footer && buttonRef.current) {
            const footerRect = footer.getBoundingClientRect()
            // const buttonRect = buttonRef.current.getBoundingClientRect()

            if (footerRect.top < window.innerHeight) {
            const overlap = window.innerHeight - footerRect.top
            setButtonPosition(Math.max(16, overlap + 16)) // 16px minimum distance from bottom
            } else {
            setButtonPosition(16)
            }
        }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)
        return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleScroll)
        }
    }, [])

    return (
        <Link
        ref={buttonRef}
        href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
        target="_blank"
        style={{ bottom: `${buttonPosition}px` }}
        className={`${isVisible ? "" : "hidden"} fixed right-4 z-50 flex items-center justify-center rounded-full bg-sky-700 shadow text-white transition-all duration-300 ease-in-out hover:bg-sky-600 ${
            isExpanded ? "w-auto px-6 py-3" : "w-14 h-14"
        }`}
        >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {isExpanded && <span className="ml-2 text-sm font-medium">Entre em contato conosco</span>}
        </Link>
    )
}


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"

// export default function FloatingWhatsAppButton() {
//     const [isExpanded, setIsExpanded] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//         const scrollPosition = window.scrollY
//         setIsExpanded(scrollPosition > 100) // Expande após 100px de scroll
//         }

//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     return (
//         <Link
//         href="https://api.whatsapp.com/send?phone=5571982471477&text=Ol%C3%A1,%20Gostaria%20de%20Fazer%20um%20or%C3%A7amento%20para%20meu%20site!"
//         target="_blank"
//         className={`fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-sky-700 text-white transition-all duration-300 ease-in-out hover:bg-sky-600 ${
//             isExpanded ? "w-auto px-6 py-3" : "w-14 h-14"
//         }`}
//         >
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//         </svg>
//         {isExpanded && <span className="ml-2 text-sm font-medium">Entre em contato conosco</span>}
//         </Link>
//     )
// }
