export type StyleId = 'japanese' | 'creamy' | 'italian' | 'chinese' | 'modern' | 'french';

export interface RenovationStyle {
  id: StyleId;
  name: string;
  nameEn: string;
  description: string;
  thumbnail: string;
  prompt: string;
}

export type AppView = 'home' | 'upload' | 'style' | 'generating' | 'preview' | 'profile' | 'explore' | 'article_detail' | 'product_detail';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  description: string;
  specs: string[];
}

export interface DesignState {
  originalImage: string | null;
  selectedStyle: RenovationStyle | null;
  resultImage: string | null;
  isProcessing: boolean;
  selectedArticle?: Article | null;
  selectedProduct?: Product | null;
}
