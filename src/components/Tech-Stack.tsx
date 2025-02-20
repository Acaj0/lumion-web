"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function TechStack() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl h-16 font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Tecnologia de Ponta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos as mais modernas tecnologias do mercado para entregar soluções web de alta performance,
            escaláveis e totalmente responsivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/nextjs.svg"
                alt="Next.js Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Next.js</h3>
            <p className="text-gray-600">
              Framework React que oferece renderização híbrida, otimização automática e excelente SEO para suas
              aplicações web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/shadcn.png"
                alt="shadcn/ui Logo"
                width={64}
                height={64}
                className="object-contain dark:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">shadcn/ui</h3>
            <p className="text-gray-600">
              Biblioteca de componentes React re-utilizáveis e acessíveis, construídos com Radix UI e Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/ts.png"
                alt="TypeScript Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
            <p className="text-gray-600">
              Adiciona tipagem estática ao JavaScript, aumentando a segurança e manutenibilidade do código.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/tailwind.png"
                alt="Tailwind CSS Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">
              Framework CSS utilitário que permite design responsivo e customizável com alta produtividade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/postgresql.svg"
                alt="PostgreSQL Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">PostgreSQL</h3>
            <p className="text-gray-600">
              Banco de dados relacional robusto e confiável para armazenamento seguro e eficiente dos dados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={64}
                height={64}
                className="object-contain dark:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vercel</h3>
            <p className="text-gray-600">
              Plataforma de deploy que oferece CDN global, certificados SSL automáticos e integração contínua.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa stack moderna garante websites rápidos, seguros e otimizados para mecanismos de busca, proporcionando
            a melhor experiência possível para seus usuários em qualquer dispositivo.
          </p>
        </div>
      </div>
    </section>
  )
}

 