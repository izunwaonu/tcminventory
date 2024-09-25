"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { getData } from '@/lib/getData'
import { UploadButton, UploadDropzone } from '@uploadthing/react'
import { Pencil, Plus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

export default  function CreateItemForm({
  categories, 
  units, 
  brands, 
  warehouses,
   suppliers,
  initialData={}, isUpdate=false
  })
  {
    
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl);

  const router = useRouter();

 

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({defaultValues:initialData}); 
  

  const [loading, setLoading] = useState(false); 

  function redirect (){
    router.push("/dashboard/inventory/items")
  }

 
  async function onSubmit(data)  {
    data.imageUrl = imageUrl;
    console.log(data);

    if(isUpdate){ 
      //update request
      makePutRequest(setLoading, `api/items/${initialData.id}`, data, "Item", redirect, reset)
    }else
    {
      makePostRequest(setLoading, "api/items", data, "Items", reset)
    setImageUrl("")
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label="Item Title" name="title" register={register} errors={errors} className='w-full'/>

          <SelectInput register={register} name="categoryId" label="Select the Item Category"  className="w-full" options={categories}/>

          <TextInput label="Item SKU" name="sku" register={register} errors={errors}  className='w-full'/>

          <TextInput label="Item Barcode" name="barcode" register={register} errors={errors}  className='w-full'/>

          <TextInput label="Quantity" name="qty" register={register} errors={errors}  className='w-full'/>

          <SelectInput register={register} name="unitId" label="Select the Item Unit"  className="w-full" options={units}/>

          <SelectInput register={register} name="brandId" label="Select the Item Brand"  className="w-full" options={brands}/>

          <TextInput label="Buying Price" name="buyingPrice" type="number" register={register} errors={errors} className='w-full'/>

          <TextInput label="Selling Price" name="sellingPrice" type='number' register={register} errors={errors} className='w-full'/>

          <SelectInput register={register} name="supplierId" label="Select the Item Supplier"  className="w-full" options={suppliers}/>


          <TextInput label="Re-Order Point" name="reOrderPoint" type='number' register={register} errors={errors} className='w-full'/>

          <SelectInput register={register} name="warehouseId" label="Select the Item Warehouse"  className="w-full" options={warehouses}/>

          <TextInput label="Item Weight in Kgs" name="weight" type="number" register={register} errors={errors}  className='w-full'/>
          
          <TextInput label="Item Dimensions in cm (20 x 30 x 100)" name="dimensions"  register={register} errors={errors}  className='w-full'/>
          
          <TextInput label="Item Tax Rate in %" name="taxRate" type='number' register={register} errors={errors}  className='w-full'/>

          <TextareaInput label="Item Description" name="description" register={register} errors={errors}/>

          <TextareaInput label="Item notes" name="notes" register={register} errors={errors}/>
          <ImageInput label="Item Image"  imageUrl={imageUrl}  setImageUrl={setImageUrl} endpoint="imageUploader"/>
          
          </div>
          <SubmitButton isLoading={loading} title={isUpdate?"Updated Item":"Item"} />
        </form>
  )
}
