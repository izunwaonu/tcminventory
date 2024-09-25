"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

import CollapsibleLink from './CollapsibleLink'
import SideBarDropDownLink from './SideBarDropDownLink'

export default function Sidebar({showSidebar, setShowSidebar}) {

  console.log(showSidebar)

  const inventoryLinks = [
    {
      title: "All Inventories",
      href: "/dashboard/inventory",
    },
    {
      title: "Items",
      href: "/dashboard/inventory/items",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse"
    },
    {
      title: "Inventory Adjustment",
      href: "/dashboard/inventory/adjustments"
    },
    {
      title: "Suppliers",
      href: "/dashboard/inventory/suppliers"
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
    <div className={`${showSidebar?"w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed lg:block z-50":"w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed hidden lg:block z-50"}`}>
        {/* Top Part */}
        <div className="flex flex-col ">
            {/* Logo */}
           <div className="flex justify-between">
           <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full ">
                <ShoppingCart/>
                <span className=" font-semibold">TCM Inventory</span>
            </Link>
            <button className="py-3 px-4 lg:hidden bg-slate-950" onClick={()=>{setShowSidebar(false)}}>
              <X className="h-6 w-6 text-white"/>
            </button>
           </div>
           {/* Links */}
           <nav className="flex flex-col gap-3 px-3 py-6">
            <Link className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md" href="/dashboard/home/overview"> <Home className="w-4 h-4"/> <span>Home</span> </Link>
              <SideBarDropDownLink 
              items={inventoryLinks} 
              title="Inventory" 
              icon={BaggageClaim} 
              setShowSidebar={setShowSidebar}
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

        <div className="flex flex-col"> 
        <button className="bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center ">
                <ChevronLeft/>
        </button>
        </div>


        {/* Subscription Part */}

        {/* Footer Icon */}
    </div>
  )
}
