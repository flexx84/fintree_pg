tsx
import React from 'react';
interface Props { progress: number; task: string; }
const ProgressBar: React.FC<Props> = ({ progress, task }) => (
  <div className="mb-4">
    <p className="mb-1">{task}</p>
    <div className="bg-gray-200 rounded h-4">
      <div className="bg-blue-500 h-4 rounded" style={{width:`${progress}%`}} />
    </div>
  </div>
);
export default ProgressBar;
