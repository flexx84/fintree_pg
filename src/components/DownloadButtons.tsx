tsx
import React from 'react';
interface Props { mode: string; data: any; }
const DownloadButtons: React.FC<Props> = ({ mode, data }) => {
  const download = () => {/* 구현 */};
  return (
    <div className="flex gap-2">
      <button className="py-2 px-4 bg-blue-600 text-white" onClick={download}>
        {mode==='excel'?'Excel 다운로드':'텍스트 다운로드'}
      </button>
    </div>
  );
};
export default DownloadButtons;
