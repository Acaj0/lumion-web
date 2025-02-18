
import Image from "next/image"

export default function Reviews() {return(
<section id="4" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  O que Nossos Clientes Dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ouça nossos clientes satisfeitos e descubra como os ajudamos a
                  alcançar seus objetivos online.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg shadow-md min-h-[380px] p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/foto.png"
                          height={100}
                          width={100}
                          className=""
                          alt="Foto Guilherme Zafalon"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Guilherme Zafalon</p>
                          <p className="text-black/45 text-sm">21/08/2024</p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Eu fiz meu site de portfólio com eles, o processo foi
                      fácil pra caramba e sempre que eu preciso atualizar o site
                      e colocar mais itens eles me atendem muito bem.
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg min-h-[380px] shadow-md p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/ramon.png"
                          height={100}
                          width={100}
                          className="rounded-full"
                          alt="Foto Ramon"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Ramon Meneghetti</p>
                          <p className="text-black/45 text-sm">08/03/2024</p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Fiz o site da minha banda com a Lumen, equipe sempre
                      disposta a atender as demandas e os ajustes que
                      precisavamos, indico para todos que precisam divulgar mais
                      a sua marca na internet.
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg min-h-80 shadow-md p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/aki.png"
                          height={100}
                          width={100}
                          className=""
                          alt="Foto Akila Kawato"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Akila Kawato</p>
                          <p className="text-black/45 text-sm">03/11/2024</p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Desenvolvi o site da minha empresa com a Lumen, e a
                      experiência foi excelente! A equipe é super atenciosa,
                      entenderam exatamente o que eu precisava e entregaram um
                      resultado incrível. Sempre que preciso fazer ajustes ou
                      atualizações, o atendimento é rápido e eficiente.
                      Recomendo para quem quer um site profissional e um suporte
                      de qualidade!!
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg min-h-80 shadow-md p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/shimo.png"
                          height={100}
                          width={100}
                          className=""
                          alt="Foto Guilherme Shimo"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Guilherme Shimo</p>
                          <p className="text-black/45 text-sm">08/11/2024 </p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Usei a Lumen para desenvolver meu site para jogos,
                      excelente empresa.
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg min-h-80 shadow-md p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/vini.png"
                          height={100}
                          width={100}
                          className=""
                          alt="Foto Vinicius Kreutz"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Vinicius Kreutz</p>
                          <p className="text-black/45 text-sm">07/11/2024 </p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Muito bom, melhor site que ja vi.
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white rounded-lg min-h-80 shadow-md p-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/search?client=opera-gx&q=Lumen+Desenvolvimento+Web&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0xdadd90ab3e655c3:0x8924dfa94f53033c,1,,,,"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-20 h-20 mr-4">
                        <Image
                          src="/paloma.png"
                          height={100}
                          width={100}
                          className=""
                          alt="Foto Paloma Ferreira"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg font-bold">Paloma Ferreira</p>
                          <p className="text-black/45 text-sm">07/11/2024</p>
                        </div>
                        <Image
                          width={50}
                          height={20}
                          src="/google.png"
                          className="mt-1"
                          alt="stars"
                        />
                      </div>
                    </div>
                    <Image
                      width={200}
                      height={30}
                      src="/star.png"
                      className="mt-1"
                      alt="stars"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Profissional super comprometido e entregas nos prazos
                      combinados, sem dúvidas uma ótima escolha.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>)} 