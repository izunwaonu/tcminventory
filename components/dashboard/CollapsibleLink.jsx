import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink({item}) {
  return (
    <div>
         <Link href={item.href} className="flex items-center justify-between pl-8 pr-4 hover:bg-orange-600 transition-all duration-300 py-2 rounded-md space-x-3" >
            <span className="text-sm">{item.title}</span> 
            <PlusCircle className="w-4 h-4"/>
        </Link>
        
                  
    </div>
  )
}
