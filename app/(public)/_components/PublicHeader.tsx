'use client'

import { Menu, Sandwich } from 'lucide-react'

export default function PublicHeader() {
  return (
    <header className="py-4 px-22 w-full items-center flex justify-between fixed backdrop-blur-2xl border-b-1 border-b-gray-500/40 max-[400px]:px-2">
      <div className="">
        <h1 className="font-bold text-3xl">Gabriel Grote</h1>
      </div>
      <div>
        <ul className="flex items-center gap-x-4 max-[400px]:hidden">
          <li>About</li>
          <li>Contato</li>
          <li>Projetos</li>
        </ul>
      </div>
      <div className="min-[400px]:hidden">
        <Menu />
      </div>
    </header>
  )
}
