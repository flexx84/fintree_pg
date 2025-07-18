tsx
import React from 'react';
interface Props { logs: string[]; }
const LogPanel: React.FC<Props> = ({ logs }) => (
  <div className="mb-4 p-2 border h-32 overflow-y-auto font-mono text-sm">
    {logs.map((l,i)=><div key={i}>{l}</div>)}
  </div>
);
export default LogPanel;
