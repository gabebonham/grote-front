'use client'
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
import me from '@/public/imgs/me2.png'
import luma from '@/public/imgs/luma.png'
import { Badge } from '@/components/ui/badge'
import {
  ArrowDownToLine,
  Code,
  Container,
  Database,
  ExternalLink,
  Mail,
  Router,
  Server,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { downloadCV } from '../_lib/actions'
export default function HomePage() {
  const router = useRouter()
  const historic = [
    {
      id: '1',
      place: 'Panvel',
      role: 'Backend Spring Boot Developer',
      location: 'Eldorado Do Sul - RS',
      description: `Desenvolvimento e manutenção de sistemas críticos usando Java Spring Bootf1
Construção de integrações com sistemas internos usando REST APIsf1
Uso extenso de Banco de Dados (Oracle) e controle de versionamento com Gitf1
Colaboração com times ágeis (Scrum) e cultura DevOps`,
      status: '2 anos',
    },
    {
      id: '2',
      place: 'Desenvolvedor Fullstack Autonomo',
      role: 'Fullstack Developer',
      location: 'Remoto',
      description: `Trabalhando como desenvolvedor independente, criando soluções Desktop, Web, Bots, etc...f1
Soluções customizadas para necessidade de cada clientef1
Trabalhando com MongoDB/PostgreSQL como preferencia para bancos de dados f1
Participando nas fases dos projetos: juntando requerimentos, desenvolvimento, testando, e deployment`,
      status: 'Atualmente',
    },
    {
      id: '3',
      place: 'Berry Companys',
      role: 'Tech Lead',
      location: 'Remoto',
      description: `Administrando equipesf1
Desenvolvendo sistemas e mantendo eles, Frontend, Backend, Desktop, Bots, etc...f1
Mantendo Banco de Dadosf1
Cuidado da parte de DevOps`,
      status: 'Atualmente',
    },
  ]
  const backBadges = [
    'Spring Boot',
    'Java',
    'Node',
    'API REST',
    'MVC',
    'Micro Services',
    'Gradle',
    'Python',
    '.NET',
  ]
  const frontBadges = [
    'Next js',
    'Type Script',
    'Axios',
    'Java Script',
    'React Native',
    'Tailwind',
    'HTML',
    'CSS',
  ]
  const dbBadges = ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'Postgres', 'Oracle']
  const devopsBadges = ['Docker', 'CI/CD', 'Deploy VPS', 'Vercel', 'Git']
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
    <section className="pt-17 ">
      <div className="w-full flex items-center bg-lightgray/70 justify-around py-18  max-[400px]:flex-col-reverse ">
        <div className=" w-96 space-y-4 max-[400px]:w-full max-[400px]:px-4">
          <div className="space-y-3">
            <h1 className="text-6xl/18 font-extrabold text-black max-[400px]:text-5xl/18 max-[400px]:pt-4">
              Engenheiro de <span className="text-mainblue">Software</span>
            </h1>
            <h4 className="text-xl/8 text-lightgraytext">
              Proeficiente em Backend Spring Boot e Frontend Next js. Criando
              soluções escalaveis, des de apicações web, desktop, até bots ou
              jogos.
            </h4>
          </div>
          <div className="flex min-[400px]:items-center gap-x-6 max-[400px]:flex-col max-[400px]:gap-y-4">
            <Button
              onClick={() => downloadCV()}
              className="bg-mainblue text-white hover:bg-mainblue/60 px-10 rounded-sm cursor-pointer"
            >
              <span className="flex items-center gap-x-2">
                <ArrowDownToLine />
                Download CV
              </span>
            </Button>
            <Button
              onClick={() => router.push('/projects')}
              className="bg-white border-gray-600 text-black hover:bg-mainblue/60 px-10 rounded-sm  cursor-pointer"
            >
              <span className="flex items-center gap-x-2">
                <ExternalLink />
                Explorar Projetos
              </span>
            </Button>
          </div>
          <div className="flex items-center gap-x-8 px-2 max-[400px]:justify-center max-[400px]:pt-4">
            <Link href={'https://github.com/gabebonham'}>
              <svg
                className="size-6 hover:text-mainblue transition-all"
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
            </Link>
            <Link href={'https://www.linkedin.com/in/gabriel-grote-92357a220/'}>
              <svg
                className="size-6 hover:text-mainblue transition-all"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <Card className="rounded-full size-86 overflow-hidden p-0 m-0 shadow-2xl border-4 max-[400px]:size-64">
            <Image alt="self-presentation" src={me} className="w-full" />
          </Card>
        </div>
      </div>
      <div className="flex flex-col justify-center py-18 gap-y-12 bg-seconddark">
        <div className="w-full text-center space-y-2">
          <h1 className="text-6xl/18 text-white">
            Principais <span className="text-mainblue">Habilidades</span>
          </h1>
          <h4 className="text-2xl text-lightgray/60">
            Algumas Tecnologias que Uso Diariamente
          </h4>
        </div>
        <div className="flex items-center justify-center w-full gap-x-8 max-[400px]:flex-col max-[400px]:gap-y-6">
          <Card className="rounded-sm w-68 h-fit p-8 pr-2 bg-white/20 border-maindark">
            <div className="flex items-center gap-x-2">
              <Server className="size-9 text-orange-400" />
              <h1 className="text-2xl font-bold text-white">Backend</h1>
            </div>
            <div className="space-x-2 w-full">
              {backBadges.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-orange-300 text-maindark rounded-lg text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="rounded-sm w-68 h-fit p-8 pr-2 bg-white/20 border-maindark">
            <div className="flex items-center gap-x-2">
              <Code className="size-9 text-mainblue" />
              <h1 className="text-2xl font-bold text-white">Frontend</h1>
            </div>
            <div className="space-x-2 w-full">
              {frontBadges.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-mainblue/60 text-maindark rounded-lg text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="rounded-sm w-68 h-fit p-8 pr-2 bg-white/20 border-maindark">
            <div className="flex items-center gap-x-2">
              <Database className="size-9 text-gray-400" />
              <h1 className="text-2xl font-bold text-white">Database</h1>
            </div>
            <div className="space-x-2 w-full">
              {dbBadges.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-gray-100 text-maindark rounded-lg text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="rounded-sm w-68 h-fit p-8 pr-2 bg-white/20 border-maindark">
            <div className="flex items-center gap-x-2">
              <Container className="size-9 text-yellow-500" />
              <h1 className="text-2xl font-bold text-white">DevOps</h1>
            </div>
            <div className="space-x-2 w-full">
              {devopsBadges.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-yellow-300 text-maindark rounded-lg text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col bg-seconddark/40 justify-center py-18 gap-y-12">
        <div className="w-full text-center space-y-2">
          <h1 className="text-6xl">Projetos</h1>
          <h4 className="text-2xl text-gray-600">
            Alguns dos projetos que eu tenho liberdade para compartilhar
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-x-20 px-16 max-[400px]:grid-cols-1 max-[400px]:px-6 max-[400px]:gap-y-6">
          {projs &&
            projs.length > 0 &&
            projs.slice(0, 3).map((proj) => (
              <Card key={proj.id} className="p-0 bg-seconddark border-maindark">
                <CardContent className="p-0">
                  <CardHeader className="p-0">
                    <Image
                      alt="project-1"
                      src={proj.img}
                      className="w-full rounded-t-xl"
                      width={600}
                      height={600}
                    />
                  </CardHeader>
                  <CardTitle className="pt-4 px-8 text-2xl font-bold text-white">
                    {proj.name}
                  </CardTitle>
                  <CardDescription className="pt-2 pb-4 px-8 text-white/60">
                    {proj.description}
                  </CardDescription>
                  <CardFooter className="flex flex-col w-full gap-y-4 pb-6 px-8 box-border">
                    <div className="w-full">
                      {proj.tech.map((t) => (
                        <Badge className="rounded-xl text-maindark bg-white border-1 border-maindark">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className=" flex gap-x-4  max-[400px]:flex-col max-[400px]:w-full max-[400px]:gap-y-4">
                      <Button
                        onClick={() => router.push(proj?.githubLink as string)}
                        className="w-fit px-10 cursor-pointer bg-white text-black/70 border-gray-500 border-1 rounded-sm hover:bg-gray-500/10 hover:text-black max-[400px]:w-full"
                      >
                        Ver Código
                      </Button>
                      <Button
                        onClick={() => router.push(proj?.link as string)}
                        className="w-fit px-10 cursor-pointer bg-mainblue text-white  rounded-sm hover:bg-mainblue/50 hover:text-black max-[400px]:w-full"
                      >
                        Explorar Projeto
                      </Button>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
      <div className="flex flex-col bg-seconddark/10 justify-center py-18 gap-y-12">
        <div className="w-full text-center space-y-2">
          <h1 className="text-6xl font-bold">Carreira Profissional</h1>
        </div>
        <div className="px-20 space-y-8 max-[400px]:px-6">
          {historic &&
            historic.length > 0 &&
            historic.map((his) => (
              <Card className="rounded-sm bg-seconddark ">
                <CardContent className="max-[400px]:px-2">
                  <CardHeader>
                    <div className="flex justify-between ">
                      <h2 className="text-3xl font-bold text-white">
                        {his.place}
                      </h2>
                      {his.status != 'Atualmente' ? (
                        <Badge className="text-xs font-normal h-fit text-white rounded-xl bg-transparent border-1 border-gray-500">
                          {his.status}
                        </Badge>
                      ) : (
                        <Badge className="text-xs font-normal h-fit text-white rounded-xl bg-mainblue ">
                          Atualmente
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-mainblue">{his.role}</h4>
                    <p className="text-white/60">{his.location}</p>
                  </CardHeader>
                  <CardDescription className="px-6 text-white/70">
                    {his.description.split('f1').map((des) => (
                      <p className="py-1">• {des}</p>
                    ))}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
            <Button
              onClick={() => router.push('/contact')}
              className="rounded-sm bg-lightgray text-lightgraytext cursor-pointer hover:text-white hover:bg-mainblue"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
