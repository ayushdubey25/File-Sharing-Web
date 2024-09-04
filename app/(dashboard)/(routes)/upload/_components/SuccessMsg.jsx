import React from 'react'
import { CloudUpload } from 'lucide-react'
function SuccessMsg({msg}) {
  return (
    <div className='p-4 bg-blue-900 mt-5 text-white rounded-md flex gap-5 items-center'>
      <CloudUpload/>
      {msg}
    </div>
  
  )
}

export default SuccessMsg
