"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'

import React, {useState} from 'react'
import { useForm } from 'react-hook-form';


export default function NewSupplier({initialData={}, isUpdate=false}) {

  const router = useRouter();
  const selectOptions = [
    {
      label: 'Main',
      value: 'main'
    },
    {
      label: 'Branch',
      value: 'branch'
    }
  ]


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues : initialData
  }); 
  

  const [loading, setLoading] = useState(false); 
  function redirect (){
    router.push("/dashboard/inventory/suppliers")
}

 
  async function onSubmit(data)  {
    console.log(data);

    if(isUpdate){
      //update request
      makePutRequest(setLoading, `api/suppliers/${initialData.id}`, data, "Supplier", redirect, reset)
    }else
    {
      makePostRequest(setLoading, "api/suppliers", data, "Supplier", reset)
    }
   
    
    
  }

  return (
    <div>
        {/* Header */}
        <FormHeader title="Update Supplier" href="/dashboard/inventory/suppliers" />


        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label="Supplier's Name" name="title" register={register} errors={errors} className='w-full'/>

          <TextInput label="Supplier's Phone" name="phone" register={register} errors={errors} className='w-full'/>
          
          <TextInput label="Supplier's Email" name="email" type="email" register={register} errors={errors} className='w-full' />
          
          <TextInput label="Supplier's Address" name="address"  register={register} errors={errors} className='w-full' />
         
          <TextInput label="Supplier's Contact Person" name="contactPerson"  register={register} errors={errors} className='w-full' />
          
          <TextInput label="Supplier's Code" name="supplierCode"  register={register} errors={errors} className='w-full' />
          
          <TextInput label="Supplier's TIN" name="taxID"  register={register} errors={errors}  />

          <TextareaInput label="Supplier's Payment terms" name="paymentTerms" register={register} errors={errors}/>
          
          <TextareaInput label="Notes" name="notes" register={register} errors={errors}/>
          
          </div>
          <SubmitButton isLoading={loading} title={isUpdate?"Updated Supplier":"New Supplier"} />
        </form>
    </div>
  )
}
