"use client"

import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

export default function AddInventoryForm({items, warehouses, suppliers}) {

  


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm(); 
  

  const [loading, setLoading] = useState(false); 

 
  async function onSubmit(data)  {
    console.log(data);
    makePostRequest(setLoading, "api/adjustments/add", data, "Stock Adjustment", reset)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label="Reference Number" name="referenceNumber" register={register} errors={errors}  />
          
          <SelectInput register={register} name="itemId" label="Select the Item "  className="w-full" options={items}/>

          <SelectInput register={register} name="supplierId" label="Select the Supplier "  className="w-full" options={suppliers}/>
          
          <TextInput type='number' label="Quantity of stock to add" name="addStockQty" register={register} errors={errors} className='w-full'/>

          <SelectInput register={register} name="receivingWarehouseId" label="Select the the Warehouse that will receive the stock"  className="w-full" options={warehouses}/>

          <TextareaInput label="Adjustment Note" name="notes" register={register} errors={errors}/>
          
          </div>
          <SubmitButton isLoading={loading} title="Adjustment" />
        </form>
  )
}
