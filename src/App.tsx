tsx
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import AwsConfig from './components/AwsConfig';
import GptConfig from './components/GptConfig';
import Options from './components/Options';
import UploadSection from './components/UploadSection';
import ProcessButton from './components/ProcessButton';
import ProgressBar from './components/ProgressBar';
import LogPanel from './components/LogPanel';
import Preview from './components/Preview';
import DownloadButtons from './components/DownloadButtons';
import { useProcessing } from './hooks/useProcessing';

function App() {
  const [mode, setMode] = useState<'excel'|'text'>('excel');
  const processing = useProcessing();

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">🚀 통합 상품 데이터 변환기</h1>
        <p className="text-gray-600">AWS S3 이미지 업로드 + GPT 텍스트 변환 + Excel 생성</p>
      </header>

      <Tabs mode={mode} onChange={setMode} />

      {mode === 'excel' ? (
        <>
          <AwsConfig />
          <Options />
          <UploadSection mode="excel" />
        </>
      ) : (
        <>
          <GptConfig />
          <Options />
          <UploadSection mode="text" />
        </>
      )}

      <ProcessButton mode={mode} onStart={() => processing.start(mode)} disabled={processing.busy} />
      <ProgressBar progress={processing.progress} task={processing.task} />
      <LogPanel logs={processing.logs} />
      <Preview data={processing.previewData} />
      <DownloadButtons mode={mode} data={processing.downloadData} />
    </div>
  );
}

export default App;
