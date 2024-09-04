"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import {app} from '/firebaseConfig.js'
import FileInfo from './components/FileInfo';
import { ArrowLeft, Link } from 'lucide-react';
import FileShareForm from './components/FileShareForm';

function FilePreview() {
  const params = useParams();
  const [file,setFile]=useState();
  const db = getFirestore(app);
  useEffect(()=>{
    console.log(params?.fileId)
    params?.fileId&&getFileInfo();
  },[params])
  
  const getFileInfo=async()=>{
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFile(docSnap.data())
      } else {
       
        console.log("No such document!");
      }
  }
  const onPasswordSave=async(password)=>{
    const docRef=doc(db,"uploadedFile",params?.fileId);
    await updateDoc(docRef,{
      password:password
    }, {merge:true});

  }

  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3'>
      <ArrowLeft/>Go to upload
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
      <FileInfo file={file}/>
      <FileShareForm file={file}
      onPasswordSave={onPasswordSave}/>
      </div>
    </div>
  )
}

export default FilePreview