import { RenovationStyle } from './types';

export const RENOVATION_STYLES: RenovationStyle[] = [
  {
    id: 'japanese',
    name: '日式原木风',
    nameEn: 'Japanese Minimalist',
    description: '温暖实木，禅意自然。',
    thumbnail: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in a Japanese Minimalist style. Use natural warm wood textures, tatami elements, sliding shoji-like screens or minimalist wooden furniture, and a zen-like, clean atmosphere. Keep the original room structure.',
  },
  {
    id: 'creamy',
    name: '奶油风',
    nameEn: 'Creamy Modern',
    description: '柔和曲线，温馨质感。',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in a Creamy Modern style. Use soft off-white and cream colors, curved furniture, plush textures, and warm indirect lighting. The atmosphere should be cozy and gentle. Keep the original room structure.',
  },
  {
    id: 'italian',
    name: '意式轻奢风',
    nameEn: 'Italian Luxury',
    description: '大理石纹理，金属质感。',
    thumbnail: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in an Italian Luxury style. Use high-quality marble textures, metallic accents (gold or brass), modern sleek furniture, and sophisticated dark or rich neutral tones. Keep the original room structure.',
  },
  {
    id: 'chinese',
    name: '新中式',
    nameEn: 'New Chinese',
    description: '东方韵味与极简融合。',
    thumbnail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in a New Chinese style. Combine traditional oriental motifs with modern minimalist furniture. Use dark wood frameworks, ink-wash textures, and elegant symmetrical layouts. Keep the original room structure.',
  },
  {
    id: 'modern',
    name: '现代简约风',
    nameEn: 'Modern Minimalist',
    description: '留白，未来感几何线条。',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in a Modern Minimalist style. Use a monochrome palette, clean geometric lines, hidden storage, and high-tech minimal fixtures. Emphasize open space and natural light. Keep the original room structure.',
  },
  {
    id: 'french',
    name: '法式复古风',
    nameEn: 'French Retro',
    description: '精致线条，雕花石膏装饰。',
    thumbnail: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop',
    prompt: 'Renovate this room in a French Retro style. Use ornate decorative moldings, plaster carvings, vintage-inspired furniture with curved legs, and a palette of muted pastels or sophisticated whites. Keep the original room structure.',
  },
];

export const COLORS = {
  primary: '#8EACCD', // Sky blue
  secondary: '#E2EBF4', // Fog blue
  accent: '#4A628A', // Deep blue
  bgGradient: 'linear-gradient(135deg, #F0F4F8 0%, #E2EBF4 100%)',
  whiteGlass: 'rgba(255, 255, 255, 0.7)',
  borderGlass: 'rgba(255, 255, 255, 0.5)',
};
