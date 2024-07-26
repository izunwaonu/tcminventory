import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react';
import React from 'react';
import Searchinput from './Searchinput';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-gray-100 flex h-12 items-center justify-between px-8 border-b border-gray-200">
        <div className="flex gap-3">
            {/* Recent Activity  */}
            <button> 
              <History className="w-6 h-6"/>
            </button>

            {/* Search  */}
            <Searchinput/>
        </div>
        <div className="flex items-center gap-3">
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
            <button className="flex items-center">
              <span>TCM</span>
              <ChevronDown className="w-4 h-4"/>
            </button>
            <button>
              <Image alt="use image"
              src="/user.png" 
              width={96} height={96} 
              className="rounded-full w-8 h-8 border border-slate-800"
              />
            </button>
            <button>
              <LayoutGrid className="w-6 h-6 text-slate-900"/>
            </button>
          </div>

          {/*  */}

        </div>
    </div>
  )
}
