'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function PublicNavMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu className="cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="w-full flex justify-end">
            <DrawerClose>
              <X className="cursor-pointer" />
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-full flex justify-start flex-col text-4xl px-4 gap-y-12">
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contato</Link>
          <Link href={'/projects'}>Projetos</Link>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
