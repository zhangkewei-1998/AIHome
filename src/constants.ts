import { RenovationStyle, Article, Product } from './types';

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

export const DECORATION_ARTICLES: Article[] = [
  {
    id: '1',
    title: '2026年室内设计配色指南：回归自然的色彩学',
    category: '设计灵感',
    date: '2026-04-15',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    content: '在2026年的家居趋势中，我们看到了对大地色系、柔和粉彩色以及“有机绿”的深度回归。这种趋势不仅仅是视觉上的选择，更是都市人对自然连接的渴望。我们将探讨如何在新中式与现代极简风格中巧妙运用这些色彩。',
  },
  {
    id: '2',
    title: '可持续家居：环保材料如何定义现代奢华',
    category: '行业趋势',
    date: '2026-04-10',
    thumbnail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop',
    content: '回收材料不再是低端产品的代名词。现代意式轻奢风正在通过再生皮革、循环大理石和低功耗智能照明系统，重新定义什么是真正的“奢华”。',
  },
  {
    id: '3',
    title: '智能生活：AI助手如何隐身于设计之中',
    category: '智能科技',
    date: '2026-04-18',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-103790587270?q=80&w=1000&auto=format&fit=crop',
    content: '未来的智能家居不再是冰冷的屏幕。环境智能（Ambient Intelligence）让AI助手隐藏在墙纸、灯具甚至实木家具中，随叫随到却又不留痕迹。',
  },
];

export const FURNITURE_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '云端模块化沙发',
    brand: 'Arper Design',
    price: '¥12,800',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    description: '极致柔软，可根据任何客厅尺寸进行自由组合。采用再生纤维面料。',
    specs: ['尺寸: 320x105x70cm', '材质: 再生绒布 + 记忆棉', '颜色: 奶油白 / 燕麦灰'],
  },
  {
    id: 'p2',
    name: '人体工学智享椅',
    brand: 'ErgoSmart',
    price: '¥3,500',
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=800&auto=format&fit=crop',
    description: '内置生物传感器，根据坐姿实时调整腰部支撑力。',
    specs: ['承重: 150kg', '气压棒: 4级防爆', '调节: 12向动态调节'],
  },
  {
    id: 'p3',
    name: '浮石天然大理石茶几',
    brand: 'Minimalist House',
    price: '¥8,900',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    description: '纯天然大理石顶板，配合隐藏式基座，营造出悬浮在地面上的错觉。',
    specs: ['直径: 90cm', '高度: 35cm', '材质: 意大利卡拉拉白大理石'],
  },
];

export const COLORS = {
  primary: '#8EACCD', // Sky blue
  secondary: '#E2EBF4', // Fog blue
  accent: '#4A628A', // Deep blue
  bgGradient: 'linear-gradient(135deg, #F0F4F8 0%, #E2EBF4 100%)',
  whiteGlass: 'rgba(255, 255, 255, 0.7)',
  borderGlass: 'rgba(255, 255, 255, 0.5)'
};
