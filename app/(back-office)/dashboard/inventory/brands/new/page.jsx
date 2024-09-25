"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
// import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
// import { Plus, X } from 'lucide-react'
// import Link from 'next/link'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'

export default function NewBrand({initialData={}, isUpdate=false}) {

  const router = useRouter()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues : initialData,
  }); 
  

  const [loading, setLoading] = useState(false); 
  function redirect (){
      router.replace("/dashboard/inventory/brands")
  }

 
  async function onSubmit(data)  {
    console.log(data);
    if(isUpdate){
              // update request 
      makePutRequest(setLoading, `api/brands/${initialData.id}`, data, "Brand", redirect, reset)
    }else
    {
      makePostRequest(setLoading, "api/brands", data, "Brand",  reset)
    }
  }

  return (
    <div>
        {/* Header */}
        <FormHeader title={isUpdate? "Update Brand":"New Brand"} href="/dashboard/inventory/brands" />


        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Brand Title" name="title" register={register} errors={errors} className='w-full'/>
          
          </div>
          <SubmitButton isLoading={loading} title={isUpdate? "Updated Brand":"New Brand"} />
        </form>
    </div>
  )
}
