tsx
import React from 'react';
interface OptionsProps {}
const Options: React.FC<OptionsProps> = () => (
  <div className="mb-4 p-4 border rounded">
    <label><input type="checkbox" defaultChecked /> 이미지 최적화</label>
    <label className="ml-4"><input type="checkbox" defaultChecked /> 병렬 업로드</label>
  </div>
);
export default Options;
