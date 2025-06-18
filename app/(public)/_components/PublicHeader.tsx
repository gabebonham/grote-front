'use client'

import { Menu, Sandwich } from 'lucide-react'
import PublicNavMenu from './PublicNavMenu'
import Link from 'next/link'

export default function PublicHeader() {
  return (
    <header className="py-4 z-10 px-22 w-full items-center flex justify-between fixed backdrop-blur-2xl border-b-1 border-b-gray-500/40 max-[400px]:px-2">
      <div className="">
        <Link
          href={'/home'}
          className="font-bold text-3xl hover:text-mainpurple"
        >
          Gabriel Grote
        </Link>
        <p className="text-red-500">Site ainda em desenvolvimento</p>
      </div>
      <div>
        <ul className="flex items-center gap-x-8 text-xl max-[400px]:hidden">
          <li className="hover:text-mainblue">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="hover:text-mainblue">
            <Link href={'/contact'}>Contato</Link>
          </li>
          <li className="hover:text-mainblue">
            <Link href={'/projects'}>Projetos</Link>
          </li>
        </ul>
      </div>
      <div className="min-[400px]:hidden">
        <PublicNavMenu />
      </div>
    </header>
  )
}
