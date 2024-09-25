import { Check, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventoryCard from './InventoryCard'

export default function SalesOverview() {

    const salesActivity = [
        {
            title: 'To be parked',
            number: 10,
            unit: "Qty",
            href: "/",
            color: "text-blue-600"   
        },
        {
            title: 'To be Shipped',
            number: 10,
            unit: "Pkgs",
            href: "/",
            color: "text-red-600"   
        },
        {
            title: 'To be Delivered',
            number: 20,
            unit: "Pkgs",
            href: "/",
            color: "text-blue-600"   
        },
        {
            title: 'To be Invoiced',
            number: 30,
            unit: "Pkgs",
            href: "/",
            color: "text-orange-600"   
        }
    ]

    const inventorySummary = [
        {
            title: 'Quantity in Hand',
            number: 10
        },
        {
            title: 'QUANTITY TO BE RECEIVED',
            number: 4
        }
    ]

  return (
    <div className="bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4">
        {/* Sales Activity */}
        <div className="col-span-full lg:col-span-8 border-r p-8 py-16 lg:py-8 border-slate-300">
            <h2 className="mb-6 text-xl">Sales Activity</h2>
            <div className=" pr-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {/* Card */}
                {
                    salesActivity.map((item, i) =>{
                        return (
                        <SalesActivityCard item={item} key={i}/>
                        )
                    })
                }

  
            </div>
        </div>

        {/* Inventory Summary */}
        <div className="col-span-full lg:col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
            {
                inventorySummary.map((item, i) => {
                    return (
                        <InventoryCard item={item} key={i}/>
                    )
                })
            }
        </div>
        </div>

    </div>
  )
}
