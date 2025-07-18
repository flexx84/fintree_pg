tsx
import React from 'react';
import { useFileHandler } from '../hooks/useFileHandler';
interface Props { mode: 'excel'|'text'; }
const UploadSection: React.FC<Props> = ({ mode }) => {
  const { jsonFile, onJsonChange, images, onImageChange } = useFileHandler();
  return (
    <div className="mb-4 p-4 border rounded">
      {mode==='excel' ? (
        <input type="file" accept=".json" onChange={onJsonChange} />
      ) : (
        <textarea placeholder="상품 정보 입력" className="w-full h-32 p-2 border"></textarea>
      )}
      <input type="file" accept="image/*" multiple onChange={onImageChange}
        className="mt-2" />
      <div className="flex flex-wrap mt-2">
        {images.map((file,i)=><img key={i} src={URL.createObjectURL(file)} className="w-16 h-16 m-1"/>)}</div>
    </div>
  );
};
export default UploadSection;
