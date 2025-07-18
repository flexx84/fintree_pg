tsx
import React from 'react';
interface Props { mode: string; onStart: ()=>void; disabled: boolean; }
const ProcessButton: React.FC<Props> = ({ mode, onStart, disabled }) => (
  <button className="w-full py-3 bg-green-500 text-white rounded"
    onClick={onStart} disabled={disabled}>
    {mode==='excel'?'Excel 변환 시작':'텍스트 변환 시작'}
  </button>
);
export default ProcessButton;
