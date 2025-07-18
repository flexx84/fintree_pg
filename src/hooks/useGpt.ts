ts
import create from 'zustand';
interface GptState { key:string; model:string; setKey:(k:string)=>void; setModel:(m:string)=>void; }
export const useGpt = create<GptState>(set=>({ key:'', model:'gpt-3.5-turbo', setKey:k=>set({key:k}), setModel:m=>set({model:m}) }));
