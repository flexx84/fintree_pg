tsx
import React from 'react';
import { useGpt } from '../hooks/useGpt';
const GptConfig: React.FC = () => {
  const { key, model, setKey, setModel } = useGpt();
  return (
    <div className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">GPT API 설정</h3>
      <input className="w-full mb-2 p-2 border" placeholder="API Key" type="password"
        value={key} onChange={e=>setKey(e.target.value)} />
      <select className="w-full p-2 border"
        value={model} onChange={e=>setModel(e.target.value)}>
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
      </select>
    </div>
  );
};
export default GptConfig;
