import React from 'react'
import { getData } from '@/lib/getData'
import NewItem from '@/components/dashboard/NewItem';


export default async function Update({params:{id}}) {
    const data = await getData(`items/${id}`);
    console.log(data)
  return ( 
    <NewItem initialData={data} isUpdate={true}/>
  )
}
