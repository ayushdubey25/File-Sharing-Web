import Image from 'next/image'
import React from 'react'
import { X } from 'lucide-react'
import { FileIcon } from 'lucide-react'

function FilePreview({file,removefile}) {
  return (
    <div className='flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-400'>
      <div className='flex items-center p-2'>
      <FileIcon size={30} className="text-blue-500" />
      <div className='text-left ml-2'>
        <h2>
            {file.name}
        </h2>
        <h2 className='text-[12px] text-gray-400'>{file?.type}/{(file.size/1024/1024).toFixed(2)}MB</h2>
      </div>
      </div>
      <X className='cursor-pointer' onClick={()=>removefile()}/>
    </div>
  )
}

export default FilePreview
