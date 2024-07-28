"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { BaggageClaim, ChevronRight } from 'lucide-react'
import CollapsibleLink from './CollapsibleLink'

export default function SideBarDropDownLink({title, items, icon}) {

    const Icon = icon

  return (

    <div>
        <Collapsible>
              <CollapsibleTrigger className="flex justify-between items-center w-full ">
               <div className="p-2 flex items-center space-x-2">
               <Icon className="w-4 h-4"/>
               <span>
                {title}
               </span>
               </div>
               <ChevronRight className="w-4 h-4"/>
              </CollapsibleTrigger>
              <CollapsibleContent>
              {
                items.map((item,i) => {
                  return(
                    
                    <CollapsibleLink key={i} item={item}/>
                  )
                })
              }
              
              </CollapsibleContent>
              
            </Collapsible>
    </div>
  )
}
