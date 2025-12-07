import { Category, PromptItem } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', labelEn: 'All', labelZh: '全部' },
  { id: 'photorealistic', labelEn: 'Photography', labelZh: '摄影' },
  { id: 'illustration', labelEn: 'Illustration', labelZh: '插画' },
  { id: '3d', labelEn: '3D Render', labelZh: '3D渲染' },
  { id: 'anime', labelEn: 'Anime', labelZh: '动漫' },
  { id: 'architecture', labelEn: 'Architecture', labelZh: '建筑' },
  { id: 'fashion', labelEn: 'Fashion', labelZh: '时尚' },
  { id: 'icon', labelEn: 'Icon/Logo', labelZh: '图标/Logo' },
  { id: 'ui', labelEn: 'UI Design', labelZh: '界面设计' },
  { id: 'game', labelEn: 'Game Art', labelZh: '游戏美术' },
  { id: 'scenery', labelEn: 'Scenery', labelZh: '风景' },
];

export const PROMPTS: PromptItem[] = [
  {
    id: '1',
    title: 'Neon Cyberpunk Street',
    titleZh: '霓虹赛博朋克街道',
    prompt: 'A futuristic city street at night, drenched in neon rain, reflections on wet pavement, towering skyscrapers with holographic advertisements, cyberpunk style, cinematic lighting, 8k resolution --ar 16:9',
    imageUrl: 'https://picsum.photos/seed/cyberpunk/800/450',
    category: '3d',
    aspectRatio: 'landscape',
    model: 'Midjourney v6'
  },
  {
    id: '2',
    title: 'Ethereal Forest Spirit',
    titleZh: '空灵森林精灵',
    prompt: 'A mystical deer with glowing antlers standing in a bioluminescent forest, magical atmosphere, soft fog, fireflies, ethereal lighting, highly detailed, fantasy art style --ar 9:16',
    imageUrl: 'https://picsum.photos/seed/forest/600/1066',
    category: 'illustration',
    aspectRatio: 'portrait',
    model: 'Gemini Pro Vision'
  },
  {
    id: '3',
    title: 'Minimalist Coffee Morning',
    titleZh: '极简咖啡清晨',
    prompt: 'Top down shot of a ceramic coffee cup on a textured beige linen tablecloth, soft morning sunlight casting organic shadows, minimalist aesthetic, kinfolk style, high resolution photography',
    imageUrl: 'https://picsum.photos/seed/coffee/600/600',
    category: 'photorealistic',
    aspectRatio: 'square',
    model: 'Flux 1.0'
  },
  {
    id: '4',
    title: 'Isometric Tiny Home',
    titleZh: '等轴测微型住宅',
    prompt: 'Isometric 3D render of a cozy tiny home cutaway, warm interior lighting, wooden furniture, plants, pastel color palette, clay texture, blender 3d style --v 6.0',
    imageUrl: 'https://picsum.photos/seed/iso/600/600',
    category: '3d',
    aspectRatio: 'square',
    model: 'Midjourney v5.2'
  },
  {
    id: '5',
    title: 'Abstract Fluid Shapes',
    titleZh: '抽象流体形状',
    prompt: 'Abstract background, flowing liquid gold and turquoise silk, macro photography, depth of field, studio lighting, elegant, luxurious texture',
    imageUrl: 'https://picsum.photos/seed/fluid/800/600',
    category: '3d',
    aspectRatio: 'landscape',
    model: 'DALL-E 3'
  },
  {
    id: '6',
    title: 'Vintage Botanical Sketch',
    titleZh: '复古植物素描',
    prompt: 'Vintage botanical illustration of a wild orchid, aged paper texture, ink and watercolor, detailed scientific drawing, Victorian style',
    imageUrl: 'https://picsum.photos/seed/flower/600/800',
    category: 'illustration',
    aspectRatio: 'portrait',
    model: 'Stable Diffusion XL'
  },
  {
    id: '7',
    title: 'Modern Concrete Villa',
    titleZh: '现代混凝土别墅',
    prompt: 'Exterior shot of a brutalist concrete villa on a cliff edge, ocean view, sunset lighting, golden hour, architectural photography, ultra realistic',
    imageUrl: 'https://picsum.photos/seed/house/800/500',
    category: 'architecture',
    aspectRatio: 'landscape',
    model: 'Midjourney v6'
  },
  {
    id: '8',
    title: 'Retro Anime Girl',
    titleZh: '复古动漫少女',
    prompt: '1990s anime style, close up portrait of a girl with headphones, city lights bokeh background, lo-fi aesthetic, cel shaded, vibrant colors',
    imageUrl: 'https://picsum.photos/seed/anime/600/600',
    category: 'anime',
    aspectRatio: 'square',
    model: 'Niji Journey'
  },
  {
    id: '9',
    title: 'Surreal Cloud Castle',
    titleZh: '超现实云中城堡',
    prompt: 'A castle made entirely of fluffy white clouds floating in a blue sky, rene magritte style, surrealism, dreamy, soft lighting',
    imageUrl: 'https://picsum.photos/seed/cloud/600/800',
    category: 'illustration',
    aspectRatio: 'portrait',
    model: 'Gemini Imagen 3'
  },
  {
    id: '10',
    title: 'Product Shot: Perfume',
    titleZh: '产品摄影：香水',
    prompt: 'Professional product photography of a glass perfume bottle on a mirrored surface, surrounded by water splashes, high speed photography, studio lighting, crisp details',
    imageUrl: 'https://picsum.photos/seed/perfume/600/750',
    category: 'photorealistic',
    aspectRatio: 'portrait',
    model: 'Midjourney v6'
  },
  {
    id: '11',
    title: 'Low Poly Adventure',
    titleZh: '低多边形冒险',
    prompt: 'Low poly style landscape, mountains, pine trees, camping tent, starry night sky, cozy atmosphere, 3d game asset style',
    imageUrl: 'https://picsum.photos/seed/lowpoly/800/600',
    category: 'game',
    aspectRatio: 'landscape',
    model: 'Blender Output'
  },
  {
    id: '12',
    title: 'Cybernetic Portrait',
    titleZh: '赛博人像',
    prompt: 'Portrait of a woman with cybernetic gold skin implants, fashion photography style, dramatic lighting, sharp focus, intricate details, futuristic fashion',
    imageUrl: 'https://picsum.photos/seed/robot/600/900',
    category: 'fashion',
    aspectRatio: 'portrait',
    model: 'Flux 1.0 Pro'
  },
  {
    id: '13',
    title: 'Gradient App Icon',
    titleZh: '渐变应用图标',
    prompt: 'Minimalist mobile app icon, abstract shape, frosted glass effect, vivid purple and orange gradient, rounded corners, white background, vector style',
    imageUrl: 'https://picsum.photos/seed/icon/500/500',
    category: 'icon',
    aspectRatio: 'square',
    model: 'Midjourney v6'
  },
  {
    id: '14',
    title: 'Haute Couture Dress',
    titleZh: '高级定制礼服',
    prompt: 'Full body shot of a model wearing an avant-garde dress made of bioluminescent jellyfish material, runway fashion show, dramatic spotlight, high fashion',
    imageUrl: 'https://picsum.photos/seed/dress/600/1000',
    category: 'fashion',
    aspectRatio: 'portrait',
    model: 'Midjourney v6'
  },
  {
    id: '15',
    title: 'Mobile Banking UI',
    titleZh: '移动银行界面',
    prompt: 'Clean modern mobile banking app interface design, dashboard view with charts, dark mode, neumorphism elements, high fidelity UI mock up',
    imageUrl: 'https://picsum.photos/seed/ui/500/900',
    category: 'ui',
    aspectRatio: 'portrait',
    model: 'Midjourney v5.2'
  },
  {
    id: '16',
    title: 'Pixel Art RPG City',
    titleZh: '像素RPG城市',
    prompt: '16-bit pixel art of a medieval fantasy town square, bustling market, fountain in center, vibrant colors, retro game aesthetic',
    imageUrl: 'https://picsum.photos/seed/pixel/800/600',
    category: 'game',
    aspectRatio: 'landscape',
    model: 'DALL-E 3'
  },
  {
    id: '17',
    title: 'Nordic Interior',
    titleZh: '北欧室内设计',
    prompt: 'Interior photography of a scandinavian living room, large windows, natural light, beige sofa, minimalist decor, indoor plants, cozy atmosphere',
    imageUrl: 'https://picsum.photos/seed/room/800/600',
    category: 'architecture',
    aspectRatio: 'landscape',
    model: 'Stable Diffusion 3'
  },
  {
    id: '18',
    title: 'Watercolor Mountain',
    titleZh: '水彩山水',
    prompt: 'Watercolor painting of misty mountains at sunrise, soft pastel colors, wet on wet technique, artistic texture, serene landscape',
    imageUrl: 'https://picsum.photos/seed/water/800/500',
    category: 'scenery',
    aspectRatio: 'landscape',
    model: 'Midjourney Niji'
  }
] as const;