'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import luma from '@/public/imgs/luma.png'

import { ExternalLink, Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function ProjectsPage() {
  const router = useRouter()
  const projs = [
    {
      id: '1',
      name: 'Berry Companys Landing Page',
      description:
        'A Landing Page de uma empresa focada em soluções de sistemas, que presto serviços regularmente.',
      img: '/imgs/berry.png',
      tech: [
        'Next js',
        'Vercel',
        'Axios',
        'HTML',
        'CSS',
        'Type Script',
        'Java',
        'Spring Boot',
      ],
      status: 'Finalizado',
      link: 'https://berrycompanys.com',
    },
    {
      id: '2',
      name: 'Site Pessoal V2',
      description: 'A segunda versão do meu web site pessoal.',
      img: '/imgs/v2.png',
      tech: [
        'Next js',
        'Vercel',
        'Axios',
        'HTML',
        'CSS',
        'Type Script',
        'Shadcn',
      ],
      status: 'Finalizado',
      githubLink: 'https://github.com/gabebonham/grote-website-frontend',
      link: 'https://grote-website-frontend.vercel.app/home',
    },
    {
      id: '3',
      name: 'Site de Eventos',
      description: 'Um Remake de site de eventos.',
      img: '/imgs/luma.png',
      tech: ['HTML', 'CSS'],
      status: 'Finalizado',
      githubLink: 'https://github.com/gabebonham/events-website',
      link: 'https://gabebonham.github.io/events-website/',
    },
    {
      id: '4',
      name: 'Site Pessoal V1',
      description: 'A primeira versão do meu web site pessoal.',
      img: '/imgs/v1.png',
      tech: [
        'Next js',
        'Vercel',
        'Axios',
        'HTML',
        'CSS',
        'Type Script',
        'Shadcn',
      ],
      status: 'Finalizado',
      githubLink: 'https://github.com/gabebonham/dev-web-site-front',
      link: 'https://grote.com.br',
    },
    {
      id: '5',
      name: 'App de Chat',
      description:
        'Um treinamento pessoal. A ideia e simular um aplicativo similar ao Whatsapp.',
      img: '/imgs/chat.png',
      tech: [
        'Next js',
        'Vercel',
        'Axios',
        'HTML',
        'CSS',
        'Type Script',
        'Shadcn',
        'Java',
        'Spring Boot',
      ],
      status: 'Em Andamento',
      githubLink: 'https://github.com/gabebonham/chat-app',
      link: 'https://chat-app-eight-virid.vercel.app/',
    },
    {
      id: '6',
      name: 'CRM',
      description:
        'Um aplicativo CRM que não foi dado continuidade, mas foi um dos meus primeiros projetos front-end.',
      img: '/imgs/crm.png',
      tech: ['Next js', 'Axios', 'HTML', 'CSS', 'Type Script', 'Shadcn'],
      status: 'Cancelado',
      githubLink: 'https://github.com/gabebonham/next-1',
    },
    {
      id: '7',
      name: 'Biscuit Bijux',
      description: 'Um catalogo de bijuterias.',
      img: luma,
      tech: ['Next js', 'Axios', 'HTML', 'CSS', 'Type Script', 'Shadcn'],
      status: 'Em Andamento',
      githubLink: 'https://github.com/gabebonham/biscuit-bijux',
      link: 'https://biscuit-bijux.vercel.app/',
    },
    {
      id: '8',
      name: 'Blog Site',
      description:
        'Um teste. O site foi feito em 3 horas como desafio para provar minhas skills para trabalhar em uma empresa.',
      img: '/imgs/blog.png',
      tech: ['Next js', 'Axios', 'HTML', 'CSS', 'Type Script'],
      status: 'Finalizado',
      githubLink: 'https://github.com/gabebonham/frontend',
      link: 'https://frontend-chi-eight-29.vercel.app/',
    },
  ]
  return (
    <section className="pt-17">
      <div className="bg-lightgray py-22">
        <div className="w-full flex flex-col items-center text-center max-[400px]:px-4">
          <h1 className="text-5xl">Projetos</h1>
          <h4 className="text-mainblue text-xl w-86 pt-4 max-[400px]:w-full">
            Alguns dos projetos que tenho liberdade de compartilhar.
          </h4>
        </div>
        <div className="w-full grid grid-cols-2 px-24 gap-8 pt-18 max-[400px]:px-4 max-[400px]:grid-cols-1">
          {projs &&
            projs.length > 0 &&
            projs.map((proj) => (
              <Card
                key={proj.id}
                className="p-0 bg-seconddark  text-white shadow-xl/30 border-black flex flex-col "
              >
                <CardContent className="p-0 ">
                  <CardHeader className="p-0">
                    <div className="h-52 overflow-hidden px-2 pt-2">
                      <Image
                        alt="proj1"
                        src={proj.img}
                        className="object-cover object-top w-full h-full rounded-t-lg  box-content"
                        width={600}
                        height={600}
                      />
                    </div>
                    <CardTitle className="px-6 text-xl">{proj.name}</CardTitle>
                  </CardHeader>
                  <CardDescription className=" px-6 py-2 text-lightgray">
                    {proj.description}
                    <div className="py-4">
                      <div className="space-x-6 space-y-4 w-full">
                        {proj.tech.map((tech) => (
                          <Badge className="bg-transparent border-white rounded-lg text-white">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardDescription>
                  <CardFooter className="flex flex-col w-full items-center gap-y-4 py-4 px-6 max-[400px]:pb-4">
                    <div className="w-full flex gap-x-6 justify-center max-[400px]:flex-col max-[400px]:gap-y-4">
                      {proj.link && (
                        <Button
                          onClick={() => router.push(proj.link)}
                          className="px-16 rounded-sm flex justify-center cursor-pointer bg-mainblue hover:bg-mainblue/70"
                        >
                          <p className="flex justify-center items-center gap-x-2">
                            <ExternalLink />
                            Explorar Projeto
                          </p>
                        </Button>
                      )}
                      {proj.githubLink && (
                        <Button
                          className="px-20 rounded-sm cursor-pointer "
                          onClick={() => router.push(proj.githubLink)}
                        >
                          <p className="flex justify-center items-center gap-x-2">
                            <svg
                              className="size-6  transition-all"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 30 30"
                              fill="currentColor"
                            >
                              <path
                                fill="currentColor"
                                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                              ></path>
                            </svg>
                            Ver Código
                          </p>
                        </Button>
                      )}
                    </div>

                    <div>
                      {proj.status == 'Finalizado' ? (
                        <p className="text-green-500">Finalizado</p>
                      ) : proj.status == 'Em Andamento' ? (
                        <p className="text-mainblue">Em Andamento</p>
                      ) : (
                        <p className="text-red-500">Cancelado</p>
                      )}
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
