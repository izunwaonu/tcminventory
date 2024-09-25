import React from 'react'
import { getData } from '@/lib/getData'
import NewUnit from '../../new/page';

export default async function Update({params:{id}}) {
    const data = await getData(`units/${id}`);
    console.log(data)
  return (
    <NewUnit initialData={data} isUpdate={true}/>
  )
}
