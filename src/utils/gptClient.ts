ts
import OpenAI from 'openai';
export function initGpt(key:string) {
  return new OpenAI({ apiKey:key });
}
