import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-gray-600 w-full h-4 mt-3 rounded-full'>
        <div className=' bg-blue-600 rounded-full h-4 text-[12px] text-black font-bold' style={{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}
        </div>
    
    </div>
  )
}

export default ProgressBar
