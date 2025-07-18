tsx
import React from 'react';
import { useAws } from '../hooks/useAws';
const AwsConfig: React.FC = () => {
  const { config, setConfig, testConnection } = useAws();
  return (
    <div className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">AWS S3 설정</h3>
      <input className="w-full mb-2 p-2 border" placeholder="Access Key"
        value={config.accessKey} onChange={e=>setConfig('accessKey', e.target.value)} />
      <input className="w-full mb-2 p-2 border" placeholder="Secret Key" type="password"
        value={config.secretKey} onChange={e=>setConfig('secretKey', e.target.value)} />
      <input className="w-full mb-2 p-2 border" placeholder="Bucket Name"
        value={config.bucketName} onChange={e=>setConfig('bucketName', e.target.value)} />
      <select className="w-full mb-2 p-2 border"
        value={config.region} onChange={e=>setConfig('region', e.target.value)}>
        <option value="ap-northeast-2">서울</option>
        <option value="us-west-2">오레곤</option>
      </select>
      <button className="px-4 py-2 bg-blue-500 text-white" onClick={testConnection}>
        연결 테스트
      </button>
    </div>
  );
};
export default AwsConfig;
