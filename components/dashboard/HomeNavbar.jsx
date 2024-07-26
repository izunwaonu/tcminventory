"use client";
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function () {

    const pathname = usePathname()

    console.log(pathname)

    const navLinks = [
        {
            title: 'Dashbord',
            href: '/dashboard/home/overview',
        },
        {
            title: 'Getting Started',
            href: '/dashboard/home/getting-started'
        },
        {
            title: 'Recent updates',
            href: '/dashboard/home/updates'
        },
        {
            title: 'Annoucements',
            href: '/dashboard/home/annoucements'
        }
    ]

  return (
    <div className="h-32 p-5 header-bg bg-slate-50 border-b border-slate-300">
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold text-slate-700">Hello: Justus Izuchukwu</p>
                <span className="text-sm">TCM</span>
            </div>
        </div>
        <nav className="sticky bottom-0 mt-6 flex space-x-4">
        {
            navLinks.map((item, i) => {
                return(
                    <Link key={i} href={item.href} className={`${pathname===item.href? "py-1 border-b-2 border-blue-600":"py-1"}`}>{item.title}</Link>
                )
            })
        }        
        </nav>
    </div>
  )
}
