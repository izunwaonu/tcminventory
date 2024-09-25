"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react';
import React from 'react';
import Searchinput from './Searchinput';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { generateInitials } from '@/lib/generateInitials';
import Login from '@/app/login/page';

export default function Header({setShowSidebar}) {

  const {data:session, status} = useSession()
  const router = useRouter()

  if(status==="loading"){
    return <p>Loading User, please wait...</p>
  }
  if(status==="unauthenticated"){
    return <Login/>;
  }


  const username = session?.user?.name.split(" ")[0]??"";
  const initials = generateInitials(session?.user?.name);


  return (
    <div className="bg-gray-100 flex h-12 items-center justify-between px-8 border-b border-gray-200">
      <button className="lg:hidden" onClick={()=>setShowSidebar(true)} >
        <AlignJustify className="w-6 h-6"/>
      </button>
        <div className="flex gap-3">
            {/* Recent Activity  */}
            <button className="hidden lg:block"> 
              <History className="w-6 h-6"/>
            </button>

            {/* Search  */}
            <Searchinput/>
        </div>
        <div className="items-center gap-3 hidden lg:flex">
          {/* Plus Icon */}
           <div className="pr-2 border-r border-gray-300">
           <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 h-4 w-4"/>
           </button>
           </div>
           <div className="flex border-r border-gray-300 space-x-2">
            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <Users className="text-slate-900 h-4 w-4"/>
            </button>
            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <Bell className="text-slate-900 h-4 w-4"/>
            </button>
            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <Settings className="text-slate-900 h-4 w-4"/>
            </button>
            
           </div>

          {/*  */}
          <div className="flex gap-3">
          <DropdownMenu>
          <DropdownMenuTrigger>
          <button className="flex items-center">
              <span>{username}</span>
              <ChevronDown className="w-4 h-4"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <button onClick={()=>signOut()}> 
                Logout
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

            
            {
              session.user?.image?(
                <button className="sm: hidden ">
              <Image alt="use image"
              src={session.user?.image} 
              width={96} height={96} 
              className="rounded-full w-8 h-8 border border-slate-800"
              />
            </button>
              ): (
                <div className="rounded-full w-8 h-8 border border-slate-800">
                  {initials}
                </div>
              )
            }
            <button>
              <LayoutGrid className="w-6 h-6 text-slate-900"/>
            </button>
          </div>

          {/*  */}

        </div>
        <div className="flex items-center gap-5 sm:hidden ">
        <button className="flex items-center">
              <span>{username}</span>
              <ChevronDown className="w-4 h-4"/>
          </button>
        <button>
              <Image alt="use image"
              src="/user.png" 
              width={96} height={96} 
              className="rounded-full w-8 h-8 border border-slate-800"
              />
          </button>
        </div>
    </div>
  )
}
