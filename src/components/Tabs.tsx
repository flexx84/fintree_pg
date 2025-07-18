tsx
import React from 'react';
interface TabsProps { mode: string; onChange: (mode: 'excel'|'text') => void; }
const Tabs: React.FC<TabsProps> = ({ mode, onChange }) => (
  <div className="flex border-b mb-4">
    {['excel','text'].map(m => (
      <button key={m}
        className={`px-4 py-2 ${mode===m?'border-b-2 border-blue-500':''}`}
        onClick={()=>onChange(m as 'excel'|'text')}>
        {m==='excel'?'Excel 변환 모드':'텍스트 변환 모드'}
      </button>
    ))}
  </div>
);
export default Tabs;
