import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Adjustments() {

  const addAdjustmentData =  getData("adjustments/add")
  const transferAdjustmentData =  getData("adjustments/transfer")

  const [addAdjustment, transferAdjustment] = await Promise.all([addAdjustmentData, transferAdjustmentData])
  const addColumns = ["referenceNumber",  "addStockQty", "createdAt"]
  const transferColumns = ["referenceNumber",  "transferStockQty", "createdAt"]

  return (
    <div>
        {/* Header */} 
        <FixedHeader title="Adjustments" newLink="/dashboard/inventory/adjustments/new"/>
        {/* Table*/}

        <div className="my-4 p-8">
          <h2 className="py-4 text-xl font-semibold">Stock Increment Adjustments</h2>
          <DataTable data={addAdjustment} columns={addColumns} resourceTitle="adjustments/add"/>
        </div>
        <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">Stock Transfer Adjustments</h2>
          <DataTable data={transferAdjustment} columns={transferColumns} resourceTitle="adjustments/transfer"/>
        </div>
        
    </div>
  )
}
