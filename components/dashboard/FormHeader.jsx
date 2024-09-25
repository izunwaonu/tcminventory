import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FormHeader({title, href}) {
  return (
    <div className="flex items-center justify-between bg-white py-3 px-16">
    <h2 className="text-xl font-semibold">{title}</h2>
    <a href={href}>
    <X/>
    </a>
     
  </div>
  )
}
