"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import {  Diff, Factory, LayoutGrid, LayoutPanelTop, Scale,  Slack, Warehouse } from 'lucide-react'

import React from 'react'

export default function Inventory() {
  

  const optionCards = [
   
    {
      title: 'Items',
      description: 'Create standalone items and services that you buy and sell',
      link: '/dashboard/inventory/items/new',
      linkTitle: 'New Item',
      enabled: true,
      icon: LayoutGrid
    },
    {
      title: 'Categories',
      description: 'Bundle different items together and sell them as kits',
      link: '/dashboard/inventory/categories/new',
      linkTitle: 'New Category',
      enabled: true,
      icon: LayoutPanelTop
    },
    {
      title: 'Warehouse',
      description: 'Bundle different items together and sell them as kits',
      link: '/dashboard/inventory/warehouse/new',
      linkTitle: 'New Warehouse',
      enabled: true,
      icon: Warehouse
    },
    {
      title: 'Brands',
      description: 'Tweak your item prices for specific contacts or transactions',
      link: '/dashboard/inventory/brands/new',
      linkTitle: 'New Brand',
      enabled: true,
      icon: Slack
    },
    {
      title: 'Units',
      description: 'Bundle different items together and sell them as kits',
      link: '/dashboard/inventory/units/new',
      linkTitle: 'New Unit',
      enabled: true,
      icon: Scale
    },
    {
      title: 'Suppliers',
      description: 'Bundle different items together and sell them as kits',
      link: '/dashboard/inventory/suppliers/new',
      linkTitle: 'New Supplier',
      enabled: true,
      icon: Factory
    }
    ,
    {
      title: 'Inventory Adjustment',
      description: 'Transfer stock from one warehouse to another',
      link: '/dashboard/inventory/adjustments/new',
      linkTitle: 'New Adjustment',
      enabled: true,
      icon: Diff
    }
  ]
  return (
    <div>
       <FixedHeader newLink="/dashboard/inventory/items/new"/>
       <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">

        {
          optionCards.map((card, i) =>{
            return (
              <OptionCard optionData={card} key={i}/>
            )
          })
        }


       </div>
    </div>
  )
}
