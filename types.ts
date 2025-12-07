export interface PromptItem {
  id: string;
  title: string;
  titleZh?: string;
  prompt: string;
  imageUrl: string;
  category: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  model?: string; // e.g., 'Midjourney v6', 'DALL-E 3', 'Gemini'
}

export interface Category {
  id: string;
  labelEn: string;
  labelZh: string;
}

export type Language = 'en' | 'zh';

export interface ToastState {
  show: boolean;
  message: string;
}