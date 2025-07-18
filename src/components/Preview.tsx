tsx
import React from 'react';
interface Props { data: any[]; }
const Preview: React.FC<Props> = ({ data }) => {
  if(!data.length) return null;
  return (
    <table className="w-full table-auto mb-4 border-collapse">
      <thead><tr><th>상품명</th><th>가격</th></tr></thead>
      <tbody>{data.map((r,i)=>(
        <tr key={i}><td>{r.name}</td><td>{r.price}</td></tr>
      ))}</tbody>
    </table>
  );
};
export default Preview;
