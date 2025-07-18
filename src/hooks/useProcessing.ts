ts
import { useState } from 'react';
export function useProcessing() {
  const [busy,setBusy]=useState(false);
  const [progress,setProgress]=useState(0);
  const [task,setTask]=useState('');
  const [logs,setLogs]=useState<string[]>([]);
  const [previewData,setPreview]=useState<any[]>([]);
  const [downloadData,setDownload]=useState<any>(null);

  const start = async(mode:'excel'|'text')=>{
    setBusy(true); setLogs([]); setTask('시작');
    // TODO: 업로드->변환 흐름 구현
    setBusy(false);
  };

  return { busy, progress, task, logs, previewData, downloadData, start };
}
