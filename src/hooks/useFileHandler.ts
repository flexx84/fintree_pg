ts
import { useState } from 'react';
export function useFileHandler() {
  const [jsonFile,setJson] = useState<File|null>(null);
  const [images,setImages] = useState<File[]>([]);
  const onJsonChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files) setJson(e.target.files[0]);
  };
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files) setImages(Array.from(e.target.files));
  };
  return { jsonFile, images, onJsonChange, onImageChange };
}
