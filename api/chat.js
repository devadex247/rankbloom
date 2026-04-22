import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'), // You can change this to 'gpt-3.5-turbo' for lower cost
    system: 'You are Chat Bloom, the premium AI assistant for RankBloom. You help users with website pricing, SEO inquiries, and booking consultations. Your tone is professional, friendly, and helpful.',
    messages,
  });

  return result.toDataStreamResponse();
}
