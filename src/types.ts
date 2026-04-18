export type StyleId = 'japanese' | 'creamy' | 'italian' | 'chinese' | 'modern' | 'french';

export interface RenovationStyle {
  id: StyleId;
  name: string;
  nameEn: string;
  description: string;
  thumbnail: string;
  prompt: string;
}

export type AppView = 'home' | 'upload' | 'style' | 'generating' | 'preview' | 'profile';

export interface DesignState {
  originalImage: string | null;
  selectedStyle: RenovationStyle | null;
  resultImage: string | null;
  isProcessing: boolean;
}
