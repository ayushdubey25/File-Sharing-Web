"use client"
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import {app} from '/firebaseConfig.js'
import { getDownloadURL, getStorage,ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../_utils/GenerateRandomString';
import {useRouter} from "next/navigation";



function Upload() {
  const router=useRouter();
  const [filedocid,setfiledocid]=useState();
  const {user}=useUser();
  const [progress,setprogress]=useState();
  const storage=getStorage(app);
  const db = getFirestore(app);
  const uploadfile=(file)=>{ 
    const metadata = {
      contentType: file.type 
    };
    const storageRef = ref(storage, 'files-uploaded/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
        setprogress(progress);
        progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL);
        }).then(resp=>{
          console.log(resp);
        });
      },)
     
  }


  const saveInfo=async(file,fileUrl)=>{
    const docId=generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName:file?.name,
      fileSize:file?.size,
      fileType:file?.type,
      fileUrl:fileUrl,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
      password:'',
      id:docId,
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+docId,
    });
    setfiledocid(docId)
    console.log("FileDocId",docId)
    router.push('/file-preview/'+docId)
  }
  return (
    <div className='p-5 px-8 md:px-28' >
      <h2 className='text-[20px] md-5 text-center '>Start <strong className='text-primary'>Uploading</strong> File And <strong className='text-primary'>Share</strong> it.</h2>
      <UploadForm uploadbtnclick={(file)=>uploadfile(file)} progress={progress}/>
    </div>
  )
}

export default Upload
