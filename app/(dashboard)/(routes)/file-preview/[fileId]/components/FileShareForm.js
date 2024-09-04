import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import SuccessMsg from "./SuccessMsg"

function FileShareForm({ file, onPasswordSave }) {
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(file?.shortUrl);
    setCopiedSuccess(true);
  };

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <label className='text-[14px] text-gray-500'>Share. </label>
        <div className='flex gap-5 p-2 border rounded-md'>
          <input type='text' value={file?.shortUrl} className='disabled:text-gray-500 bg-transparent outline-none w-full ' />
          <Copy className='text-gray-400 hover:text-blue-500' onClick={handleCopy} />
        
        </div>
        {copiedSuccess && <SuccessMsg msg="Your Text Is Copied Successfully" />}
        <h2 className='text-gray-400'>Copy the URL and share it.</h2>
      </div>
     
      
    </div>
  );
}

export default FileShareForm;