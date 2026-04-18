import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Camera, 
  Sparkles, 
  User, 
  ChevronRight, 
  ArrowLeft,
  Download,
  RotateCcw,
  Plus
} from 'lucide-react';
import { RENOVATION_STYLES, COLORS } from './constants';
import { AppView, DesignState, RenovationStyle } from './types';
import { transformRoom } from './services/geminiService';

export default function App() {
  const [view, setView] = useState<AppView>('home');
  const [designState, setDesignState] = useState<DesignState>({
    originalImage: null,
    selectedStyle: null,
    resultImage: null,
    isProcessing: false
  });
  const [loadingMsg, setLoadingMsg] = useState('制作中...');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---
  const handleStartDesign = () => setView('upload');
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setDesignState(prev => ({ ...prev, originalImage: event.target?.result as string }));
        setView('style');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectStyle = (style: RenovationStyle) => {
    setDesignState(prev => ({ ...prev, selectedStyle: style }));
  };

  const handleGenerate = async () => {
    if (!designState.originalImage || !designState.selectedStyle) return;
    
    setView('generating');
    setDesignState(prev => ({ ...prev, isProcessing: true }));

    try {
      const result = await transformRoom(
        designState.originalImage, 
        designState.selectedStyle.prompt,
        setLoadingMsg
      );
      setDesignState(prev => ({ ...prev, resultImage: result, isProcessing: false }));
      setView('preview');
    } catch (err) {
      alert('渲染失败，请重试');
      setView('style');
      setDesignState(prev => ({ ...prev, isProcessing: false }));
    }
  };

  const resetDesign = () => {
    setDesignState({
      originalImage: null,
      selectedStyle: null,
      resultImage: null,
      isProcessing: false
    });
    setView('home');
  };

  // --- Views ---

  const HomeView = () => (
    <div className="flex flex-col gap-8 p-8 pb-32">
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight text-deep-blue">MyHome AI</h1>
          <p className="text-[12px] opacity-60 italic font-medium">“家是心灵的港湾，设计的温度由心而发”</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-sky-blue/20 border-2 border-white shadow-sm overflow-hidden">
          <img src="https://picsum.photos/seed/user-avatar/100/100" alt="User" />
        </div>
      </header>

      <section className="relative h-72 rounded-[32px] overflow-hidden glass group cursor-pointer" onClick={handleStartDesign}>
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
          alt="Featured" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent flex flex-col justify-end p-8">
          <button className="bg-sky-blue text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 w-fit shadow-lg shadow-sky-blue/30 active:scale-95 transition-transform">
            开始设计 <Plus className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-lg font-bold text-deep-blue">推荐装修风格</h2>
          <button className="text-sky-blue text-xs font-bold flex items-center gap-1">探索更多 <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar -mx-8 px-8">
          {RENOVATION_STYLES.map((style) => (
            <motion.div 
              key={style.id}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-44 glass rounded-[24px] p-2 cursor-pointer transition-all hover:border-sky-blue/30"
              onClick={() => {
                handleSelectStyle(style);
                setView('upload');
              }}
            >
              <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-3">
                <img src={style.thumbnail} referrerPolicy="no-referrer" alt={style.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-sm font-bold text-deep-blue">{style.name}</h3>
                <p className="text-[10px] text-deep-blue/60 truncate">{style.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );

  const UploadView = () => (
    <div className="flex flex-col gap-8 p-8 pb-32 min-h-screen">
      <header className="flex items-center gap-4">
        <button onClick={() => setView('home')} className="p-2 glass rounded-full">
          <ArrowLeft className="w-5 h-5 text-deep-blue" />
        </button>
        <h2 className="text-xl font-bold text-deep-blue">上传空间照片</h2>
      </header>

      <div 
        className="flex-1 flex flex-col items-center justify-center glass border-2 border-dashed border-sky-blue/30 rounded-[40px] p-8 gap-6 text-center cursor-pointer hover:bg-white/80 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="w-20 h-20 bg-sky-blue/20 rounded-full flex items-center justify-center">
          <Camera className="w-10 h-10 text-sky-blue" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-deep-blue">拍摄或上传您的房间</p>
          <p className="text-sm text-deep-blue/60">支持毛坯房或现有家具空间<br/>AI将为您精准渲染</p>
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
      </div>
      
      <p className="text-center text-[11px] text-deep-blue/40 font-medium">设计的温度，由心而发</p>
    </div>
  );

  const StyleSelectView = () => (
    <div className="flex flex-col gap-8 p-8 pb-32 min-h-screen">
       <header className="flex items-center gap-4">
        <button onClick={() => setView('upload')} className="p-2 glass rounded-full">
          <ArrowLeft className="w-5 h-5 text-deep-blue" />
        </button>
        <h2 className="text-xl font-bold text-deep-blue">确认装修风格</h2>
      </header>

      {designState.originalImage && (
        <div className="w-full aspect-video rounded-[32px] overflow-hidden glass border-2 border-white ring-1 ring-sky-blue/10 overflow-hidden shadow-xl">
          <img src={designState.originalImage} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {RENOVATION_STYLES.map((style) => (
            <motion.div 
              key={style.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelectStyle(style)}
              className={`p-2 rounded-[24px] border-2 transition-all ${
                designState.selectedStyle?.id === style.id 
                  ? 'border-sky-blue bg-sky-blue/10 scale-105' 
                  : 'border-transparent glass opacity-80'
              }`}
            >
              <div className="relative aspect-[3/2] rounded-[18px] overflow-hidden mb-2">
                <img src={style.thumbnail} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                {designState.selectedStyle?.id === style.id && (
                  <div className="absolute inset-0 bg-sky-blue/30 flex items-center justify-center">
                    <Sparkles className="text-white fill-white w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="px-1 text-center">
                <h3 className="text-sm font-bold text-deep-blue">{style.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button 
        disabled={!designState.selectedStyle}
        onClick={handleGenerate}
        className={`w-full py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 ${
          designState.selectedStyle 
            ? 'bg-sky-blue text-white shadow-sky-blue/30' 
            : 'bg-deep-blue/20 text-white cursor-not-allowed'
        }`}
      >
        立即渲染空间 <Sparkles className="w-5 h-5" />
      </button>
    </div>
  );

  const GeneratingView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-32 text-center gap-8">
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-sky-blue/10 border-t-sky-blue rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sparkles className="w-10 h-10 text-sky-blue" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-deep-blue">{loadingMsg}</h2>
        <p className="text-deep-blue/50 font-medium animate-pulse">正在利用AI引擎为您重塑艺术空间...</p>
      </div>
      <div className="w-56 h-1.5 bg-sky-blue/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full bg-sky-blue"
        />
      </div>
    </div>
  );

  const PreviewView = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInteraction = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    };

    return (
      <div className="flex flex-col gap-8 p-8 min-h-screen pb-32">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setView('style')} className="p-2 glass rounded-full">
              <ArrowLeft className="w-5 h-5 text-deep-blue" />
            </button>
            <h2 className="text-xl font-bold text-deep-blue">设计成果预览</h2>
          </div>
          <button onClick={resetDesign} className="p-2 glass rounded-full">
            <RotateCcw className="w-5 h-5 text-deep-blue" />
          </button>
        </header>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/5] rounded-[48px] overflow-hidden glass border-4 border-white shadow-2xl select-none touch-none"
          onMouseMove={(e) => handleInteraction(e.clientX)}
          onTouchMove={(e) => handleInteraction(e.touches[0].clientX)}
        >
          <img src={designState.resultImage!} className="absolute inset-0 w-full h-full object-cover" alt="Result" />
          <div 
            className="absolute inset-0 w-full h-full object-cover overflow-hidden" 
            style={{ width: `${sliderPos}%` }}
          >
            <img src={designState.originalImage!} className="absolute inset-0 w-full h-full object-cover max-w-none" alt="Original" style={{ width: containerRef.current?.offsetWidth }} />
          </div>
          
          <div className="absolute inset-y-0" style={{ left: `${sliderPos}%` }}>
            <div className="h-full w-1.5 bg-white shadow-xl relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border border-sky-blue/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8EACCD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16M6 8L2 12L6 16"></path></svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
             <div className="px-4 py-1.5 bg-deep-blue/80 backdrop-blur-lg rounded-full text-[10px] text-white font-bold uppercase tracking-widest shadow-lg">BEFORE · 原图</div>
             <div className="px-4 py-1.5 bg-sky-blue/90 backdrop-blur-lg rounded-full text-[10px] text-white font-bold uppercase tracking-widest shadow-lg">AFTER · {designState.selectedStyle?.name}</div>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
             onClick={() => alert('已保存至本地相册')}
             className="flex-1 glass py-4 rounded-full font-bold text-deep-blue flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Download className="w-5 h-5 text-sky-blue" /> 重新上传
          </button>
          <button 
             onClick={() => alert('已保存至本地相册')}
             className="flex-1 bg-sky-blue text-white py-4 rounded-full font-bold shadow-lg shadow-sky-blue/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Download className="w-5 h-5 text-white" /> 保存模拟图
          </button>
        </div>
      </div>
    );
  };

  // --- Bottom Nav ---
  const BottomNav = () => (
    <div className="fixed bottom-6 inset-x-0 px-6 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-sm glass backdrop-blur-2xl rounded-full p-2 h-16 pointer-events-auto flex items-center justify-around">
        <button onClick={() => setView('home')} className={`flex flex-col items-center gap-1 transition-all ${view === 'home' ? 'text-sky-blue opacity-100 scale-110' : 'text-deep-blue opacity-50'}`}>
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">首页</span>
        </button>
        <button onClick={() => setView('upload')} className={`flex flex-col items-center gap-1 transition-all ${view === 'upload' || view === 'style' || view === 'preview' ? 'text-sky-blue opacity-100 scale-110' : 'text-deep-blue opacity-50'}`}>
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-bold">设计</span>
        </button>
        <button onClick={() => setView('home')} className={`flex flex-col items-center gap-1 transition-all text-deep-blue opacity-50`}>
          <ChevronRight className="w-5 h-5 -rotate-90" />
          <span className="text-[10px] font-bold">探索</span>
        </button>
        <button onClick={() => setView('profile')} className={`flex flex-col items-center gap-1 transition-all ${view === 'profile' ? 'text-sky-blue opacity-100 scale-110' : 'text-deep-blue opacity-50'}`}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">我的</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-blue-200 overflow-x-hidden" style={{ background: COLORS.bgGradient }}>
      <main className="max-w-md mx-auto min-h-screen relative shadow-inner overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full flex-1"
          >
            {view === 'home' && <HomeView />}
            {view === 'upload' && <UploadView />}
            {view === 'style' && <StyleSelectView />}
            {view === 'generating' && <GeneratingView />}
            {view === 'preview' && <PreviewView />}
            {view === 'profile' && <div className="p-24 text-center text-slate-400">个人中心及收藏功能正在开发中...</div>}
          </motion.div>
        </AnimatePresence>
        
        <BottomNav />
      </main>
    </div>
  );
}
