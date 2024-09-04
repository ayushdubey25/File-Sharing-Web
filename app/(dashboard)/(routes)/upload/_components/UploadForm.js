import React, { useState } from "react";
import AlertMsg from "./AlertMsg"
import FilePreview from "./FilePreview"
import ProgressBar from "./ProgressBar"
import SuccessMsg from "./SuccessMsg"

function UploadForm({uploadbtnclick,progress}) {
    const [file,setfile]=useState();
    const [errorMsg,seterrorMsg]=useState();
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const onfileselect=(file)=>{
        console.log(file)
        if(file&&file.size>200000){
            console.log("Size is greater than 2MB");
            seterrorMsg('Maximum File Upload Size Is 2MB')
            return;
        }
        seterrorMsg(null);
        setfile(file);
        uploadbtnclick(file);
      setUploadSuccess(true); 
    }

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full mt-5">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-13 h-8 mb-4 text-blue-500 dark:text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold"><strong className='text-primary'>Click</strong> to upload</span> or <strong className='text-primary'>drag</strong> and 
              <strong className='text-primary'> drop.</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. SIZE: 2MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(event)=>onfileselect(event.target.files[0])}/>
        </label>
      </div>
      {errorMsg?<AlertMsg msg={errorMsg}/>:null}
      {file?<FilePreview file={file} removefile={()=>setfile(null)}/>:null}
     
    {progress>0?<ProgressBar progress={progress}/>: <button disabled={!file} className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 hover:bg-blue-950 disabled:bg-slate-600" onClick={()=>uploadbtnclick(file)}>Upload</button>}
    
    {uploadSuccess && <SuccessMsg msg="Your File Is Uploaded Successfully" />}
    </div>
  ); 
}

export default UploadForm;
