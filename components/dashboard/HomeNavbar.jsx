"use client";
import { Building2 } from 'lucide-react'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function () {
    const {data:session,status} = useSession();
    if(status==="loading"){
        return <p>Loading User, please wait...</p>
      }
     
    
    
      const username = session?.user?.name.toUpperCase();

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
    <div className="h-32 p-5 header-bg bg-slate-50 ">
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold text-slate-700">Hello: {username}</p>
                <span className="text-sm">TCM</span>
            </div>
        </div>
        <nav className="bottom-0 mt-6 flex space-x-4">  

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">

                    {
                        navLinks.map((item, i) => {
                            return(
                                <li className="me-2" key={i}>
                                        <Link  href={item.href} className={`${pathname===item.href? "inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>
                                            {item.title}
                                        </Link>
                                </li>
                            )
                        })
                    }     
                    
                </ul>
            </div>
    
        </nav>
    </div>
  )
}
