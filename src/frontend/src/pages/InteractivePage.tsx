import { useState } from 'react';
import { Camera, Gift, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import GalleryModal from '@/components/GalleryModal';
import GiftModal from '@/components/GiftModal';

type ModalType = 'gallery' | 'gift' | null;

interface InteractivePageProps {
  onReturnHome: () => void;
}

export default function InteractivePage({ onReturnHome }: InteractivePageProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const iconCards = [
    {
      id: 'camera',
      icon: Camera,
      title: 'Gallery',
      description: 'Beautiful moments together',
      gradient: 'from-pink-400 to-rose-500',
      type: 'gallery' as ModalType,
    },
    {
      id: 'gift',
      icon: Gift,
      title: 'A Gift for You',
      description: 'Something just for you',
      gradient: 'from-red-400 to-pink-500',
      type: 'gift' as ModalType,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-valentine-light via-valentine-medium to-valentine-dark">
      <FloatingHearts />
      
      <header className="relative z-10 pt-12 pb-8 text-center">
        <div className="absolute top-4 left-4">
          <Button
            onClick={onReturnHome}
            variant="outline"
            size="lg"
            className="bg-white/90 hover:bg-white text-valentine-text border-2 border-valentine-accent shadow-lg hover:shadow-xl transition-all"
          >
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Button>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-valentine-accent mb-4 drop-shadow-md">
          For Flora 💕
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold text-valentine-text drop-shadow-lg mb-4">
          💝 Your Valentine Surprises 💝
        </h1>
        <p className="text-xl md:text-2xl text-valentine-text/90">
          Click on each to discover something special
        </p>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {iconCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => setActiveModal(card.type)}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-valentine transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-valentine-text mb-2">
                  {card.title}
                </h3>
                <p className="text-valentine-text/70">
                  {card.description}
                </p>
                
                <div className="mt-4 text-valentine-accent font-semibold group-hover:underline">
                  Open →
                </div>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="relative z-10 text-center py-8 mt-12">
        <p className="text-valentine-text/80 flex items-center justify-center gap-2">
          © 2026. Built with <span className="text-valentine-accent text-xl">❤️</span> using{' '}
          <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-valentine-accent transition-colors">
            caffeine.ai
          </a>
        </p>
      </footer>

      <GalleryModal 
        open={activeModal === 'gallery'} 
        onClose={() => setActiveModal(null)} 
      />
      <GiftModal 
        open={activeModal === 'gift'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
}
