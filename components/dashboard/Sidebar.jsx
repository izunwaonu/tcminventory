"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

import CollapsibleLink from './CollapsibleLink'
import SideBarDropDownLink from './SideBarDropDownLink'

export default function Sidebar() {

  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory"
    },
    {
      title: "Categories",
      href: "/dashboard/inventory"
    },
    {
      title: "Brands",
      href: "/dashboard/inventory"
    },
    {
      title: "Units",
      href: "/dashboard/inventory"
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/"
    },
    {
      title: "Inventory Adjustment",
      href: "/dashboard/inventory"
    }
  ]
  const salesLinks = [
    {
      title: "Customer",
      href: "/"
    },
    {
      title: "Sales Orders",
      href: "/"
    },
    {
      title: "Packages",
      href: "/"
    }
    ,
    {
      title: "Shipments",
      href: "/"
    }
    ,
    {
      title: "Invoices",
      href: "/"
    }
    ,
    {
      title: "Sales Receipts",
      href: "/"
    }
    ,
    {
      title: "Payment Receipts",
      href: "/"
    }
    ,
    {
      title: "Sales Returns",
      href: "/"
    }
    ,
    {
      title: "Credit Notes",
      href: "/"
    }
  ]

  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed">
        {/* Top Part */}
        <div className="flex flex-col">
            {/* Logo */}
            <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2 ">
                <ShoppingCart/>
                <span className=" font-semibold">TCM Inventory</span>
            </Link>

           {/* Links */}
           <nav className="flex flex-col gap-3 px-3 py-6">
            <Link className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md" href="#"> <Home className="w-4 h-4"/> <span>Home</span> </Link>
              <SideBarDropDownLink 
              items={inventoryLinks} 
              title="Inventory" 
              icon={BaggageClaim} 
              />
              
              <SideBarDropDownLink 
              items={salesLinks} 
              title="Sales" 
              icon={ShoppingBasket} 
              />

  
            <button className=" p-2 flex items-center space-x-2"> <ShoppingBasket className="w-4 h-4"/> <span>Purchases</span> </button>
            <Link className=" p-2 flex items-center space-x-2" href="#"> <Cable className="w-4 h-4"/> <span>Integrations</span> </Link>
            <Link className=" p-2 flex items-center space-x-2" href=""> <BarChart4 className="w-4 h-4"/> <span>Report</span> </Link>
            <Link className=" p-2 flex items-center space-x-2" href=""> <Files className="w-4 h-4"/> <span>Documents</span> </Link>
           </nav>
           <SubscriptionCard/>


        </div>
        


        {/* Bottom Part */}

        <div className="flex flex-col "> 
        <button className="bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center ">
                <ChevronLeft/>
        </button>
        </div>


        {/* Subscription Part */}

        {/* Footer Icon */}
    </div>
  )
}
