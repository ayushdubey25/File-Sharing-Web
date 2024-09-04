"use client"
import { Shield, UploadCloudIcon,File } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon:UploadCloudIcon,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        }
    ]
    const [activeIndex,setactiveIndex]=useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
      <div>
        <Image src='/logo.svg' width={120} height={100}/>
      </div>
      <div className='flex flex-col float-left w-full'>
      {menuList.map((item,index)=>(
        <button key={item.id} className={`flex gap-2 p-4 px-0 hover:bg-blue-600 w-full ${activeIndex===index?'bg-blue-50 text-primary':null}`} onClick={()=>{setactiveIndex(index)}}>
          <item.icon/>
          <h2>
            {item.name}
          </h2>
        </button>
      ))}
      </div>
    </div>
  )
}

export default SideNav
