import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Brands({updateLink}) {

  const brands = await getData("brands")

  
  const columns = ["title", "createdAt", "updatedAt", ""]

  return (
    <div>
        {/* Header */} 
        <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new"/>
        {/* Table*/}

        <div className="my-4 p-8">
        <DataTable data={brands} columns={columns} resourceTitle="brands"/>
        </div>
        
    </div>
  )
}
