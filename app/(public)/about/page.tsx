'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import me from '@/public/imgs/me2.png'
import { Progress, ProgressColored } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const aboutText = `Olá! Meu nome é Gabriel de Oliveira Grote, sou Desenvolvedor Full Stack com uma base sólida em Java (Spring Boot) e, nos últimos anos, aprofundei meus conhecimentos em Next.js, ampliando minha atuação para o desenvolvimento frontend e backend completo.
1f
Iniciei minha carreira como estagiário na área de backend Java na Panvel, onde rapidamente evoluí para a posição de desenvolvedor júnior. Durante minha passagem por lá, trabalhei com sistemas críticos, integrações via APIs REST e bancos de dados relacionais como PostgreSQL — sempre em ambientes ágeis e com forte cultura DevOps.
1f
Após o encerramento das operações locais da empresa devido às enchentes no RS, decidi dar um novo rumo à minha carreira e embarquei no desenvolvimento autônomo. Foi nesse momento que mergulhei no ecossistema React/Next.js, aprendendo frontend na prática e me tornando um desenvolvedor full stack pleno.
1f
Hoje, atuo como freelancer e Tech Lead prestando serviços regulares para a Berry Companys, liderando projetos de ponta a ponta — desde o levantamento de requisitos até o deploy com Docker e integração de bancos SQL e NoSQL. Também utilizo boas práticas de arquitetura, testes e CI/CD para entregar soluções robustas e escaláveis.
1f
Sou fluente em inglês e estou sempre em busca de novos desafios que me permitam aprender, ensinar e crescer como profissional de tecnologia.
`
  return (
    <section className="w-full pt-17">
      <div className="w-full flex items-center pt-12 flex-col gap-y-6 bg-seconddark max-[400px]:px-4">
        <div>
          <Card className="rounded-full size-56 overflow-hidden p-0 m-0 shadow-2xl border-4 max-[400px]:size-64">
            <Image alt="self-presentation" src={me} className="w-full" />
          </Card>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-5xl text-mainblue font-bolder">Sobre Mim</h1>
          <h4 className="text-2xl text-white">
            Obsecado por duas coisas: tecnologia e artes.
          </h4>
        </div>
        <div className="py-32 flex w-full justify-center">
          <Card className="min-[400px]:w-2/3 rounded-sm bg-lightgray">
            <CardContent>
              <CardHeader className="py-4">
                <CardTitle className="text-2xl">
                  Minha Carreira Profissional
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-lg">
                {aboutText.split('1f').map((text) => (
                  <p className="py-1">{text}</p>
                ))}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-lightgray flex flex-col items-center py-12">
        <div className="w-full flex justify-center pb-12">
          <h1 className="text-4xl">Expertise Tecnica</h1>
        </div>
        <div className="flex justify-center gap-x-6 w-full max-[400px]:flex-col max-[400px]:px-4 max-[400px]:gap-y-4">
          <Card className="min-[400px]:w-2/5 rounded-sm">
            <CardContent>
              <CardHeader>
                <CardTitle className="text-3xl py-4">
                  Conhecimento Backend
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex flex-col text-xl gap-y-4">
                <div className="flex flex-col">
                  <h1 className=" ">Java & Spring Boot</h1>
                  <ProgressColored value={90} indicatorColor="bg-orange-500" />
                </div>
                <div className="flex flex-col">
                  <h1>REST API</h1>
                  <ProgressColored value={83} indicatorColor="bg-orange-500" />
                </div>
                <div className="flex flex-col">
                  <h1>Python</h1>
                  <ProgressColored value={68} indicatorColor="bg-orange-500" />
                </div>
                <div className="flex flex-col">
                  <h1>Banco de Dados</h1>
                  <ProgressColored value={72} indicatorColor="bg-orange-500" />
                </div>
                <div className="flex flex-col">
                  <h1>.NET</h1>
                  <ProgressColored value={47} indicatorColor="bg-orange-500" />
                </div>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="min-[400px]:w-2/5 rounded-sm">
            <CardContent>
              <CardHeader>
                <CardTitle className="text-3xl py-4">
                  Conhecimento Frontend
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex flex-col text-xl gap-y-4">
                <div className="flex flex-col">
                  <h1>Next js</h1>
                  <ProgressColored value={90} indicatorColor="bg-mainblue" />
                </div>
                <div className="flex flex-col">
                  <h1>Type Script</h1>
                  <ProgressColored value={83} indicatorColor="bg-mainblue" />
                </div>
                <div className="flex flex-col">
                  <h1>HTML & CSS</h1>
                  <ProgressColored value={95} indicatorColor="bg-mainblue" />
                </div>
                <div className="flex flex-col">
                  <h1>React Native</h1>
                  <ProgressColored value={68} indicatorColor="bg-mainblue" />
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-gradient-to-br w-full from-mainblue to-mainpurple text-center py-12 max-[400px]:px-4 ">
        <div className="w-full flex flex-col items-center justify-around h-56">
          <h1 className="text-5xl text-white max-[400px]:text-4xl">
            Vamos Construir Algo <span className="underline">Juntos?</span>
          </h1>
          <h4 className="text-3xl text-white max-[400px]:text-xl">
            Adoraria conversar contigo para botarmos no ar a tua ideia!
          </h4>
          <div>
            <Button className="rounded-sm bg-lightgray text-lightgraytext cursor-pointer hover:text-white hover:bg-mainblue">
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
