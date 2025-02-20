import Image from "next/image"

export default function Reviews() {
  return (
    <section id="4" className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que Nossos Clientes Dizem</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Ouça nossos clientes satisfeitos e descubra como os ajudamos a alcançar seus objetivos online.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              name: "Guilherme Zafalon",
              date: "21/08/2024",
              image: "/foto.png",
              text: "Eu fiz meu site de portfólio com eles, o processo foi fácil pra caramba e sempre que eu preciso atualizar o site e colocar mais itens eles me atendem muito bem.",
            },
            {
              name: "Ramon Meneghetti",
              date: "08/03/2024",
              image: "/ramon.png",
              text: "Fiz o site da minha banda com a Lumen, equipe sempre disposta a atender as demandas e os ajustes que precisavamos, indico para todos que precisam divulgar mais a sua marca na internet.",
            },
            {
              name: "Akila Kawato",
              date: "03/11/2024",
              image: "/aki.png",
              text: "Desenvolvi o site da minha empresa com a Lumen, e a experiência foi excelente! A equipe é super atenciosa, entenderam exatamente o que eu precisava e entregaram um resultado incrível. Sempre que preciso fazer ajustes ou atualizações, o atendimento é rápido e eficiente. Recomendo para quem quer um site profissional e um suporte de qualidade!!",
            },
            {
              name: "Guilherme Shimo",
              date: "08/11/2024",
              image: "/shimo.png",
              text: "Usei a Lumen para desenvolver meu site para jogos, excelente empresa.",
            },
            {
              name: "Vinicius Kreutz",
              date: "07/11/2024",
              image: "/vini.png",
              text: "Muito bom, melhor site que ja vi.",
            },
            {
              name: "Paloma Ferreira",
              date: "07/11/2024",
              image: "/paloma.png",
              text: "Profissional super comprometido e entregas nos prazos combinados, sem dúvidas uma ótima escolha.",
            },
          ].map((review, index) => (
            <a
              key={index}
              href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
              target="_blank"
              className="block"
              rel="noreferrer"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={`Foto ${review.name}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <Image width={24} height={24} src="/google.png" alt="Google" className="ml-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <Image width={120} height={24} src="/star.png" alt="5 estrelas" className="h-5 object-contain" />
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-4">{review.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

