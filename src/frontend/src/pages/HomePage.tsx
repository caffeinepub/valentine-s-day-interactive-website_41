import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';

interface HomePageProps {
  onAccept: () => void;
}

export default function HomePage({ onAccept }: HomePageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!noButtonRef.current) return;
    
    setIsNoButtonMoving(true);
    
    // Get button dimensions
    const buttonWidth = noButtonRef.current.offsetWidth || 150;
    const buttonHeight = noButtonRef.current.offsetHeight || 60;
    
    // Calculate safe boundaries with padding
    const padding = 20;
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
    
    // Generate random position within safe boundaries
    const newX = Math.max(padding, Math.random() * maxX);
    const newY = Math.max(padding, Math.random() * maxY);
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  // Continuous evasion on pointer proximity
  useEffect(() => {
    if (showCelebration || !isNoButtonMoving) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!noButtonRef.current) return;

      const rect = noButtonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) + 
        Math.pow(e.clientY - buttonCenterY, 2)
      );

      // Move button if pointer is within 150px
      if (distance < 150) {
        moveNoButton();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isNoButtonMoving, showCelebration]);

  const handleNoInteraction = (e: React.PointerEvent | React.TouchEvent | React.FocusEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
  };

  const handleYesClick = () => {
    setShowCelebration(true);
    setTimeout(() => {
      onAccept();
    }, 2500);
  };

  useEffect(() => {
    if (showCelebration) {
      // Create confetti effect
      const colors = ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb'];
      const confettiCount = 50;
      
      for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.animationDelay = Math.random() * 0.5 + 's';
          document.body.appendChild(confetti);
          
          setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
      }
    }
  }, [showCelebration]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-valentine-light via-valentine-medium to-valentine-dark flex items-center justify-center">
      <FloatingHearts />
      
      <main className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {!showCelebration ? (
          <>
            <h2 className="text-3xl md:text-5xl font-bold text-valentine-accent mb-6 drop-shadow-lg animate-fade-in tracking-wide">
              Flora‑Nadia Ahmed
            </h2>
            
            <div className="mb-8 animate-bounce-slow">
              <img 
                src="/assets/generated/drake-valentine-meme.dim_400x400.png" 
                alt="Drake Valentine Meme"
                className="w-64 h-64 mx-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-valentine-text mb-8 drop-shadow-lg animate-fade-in">
              Will you be my Valentine?
            </h1>
            
            <div className="flex gap-6 justify-center items-center flex-wrap">
              <Button
                onClick={handleYesClick}
                size="lg"
                className="bg-valentine-accent hover:bg-valentine-accent-dark text-white text-2xl px-12 py-8 rounded-full shadow-2xl transform transition-all hover:scale-110 animate-pulse-slow"
              >
                <Heart className="mr-2 fill-current" />
                Yes! 💕
              </Button>
              
              <Button
                ref={noButtonRef}
                onPointerEnter={handleNoInteraction}
                onPointerDown={handleNoInteraction}
                onTouchStart={handleNoInteraction}
                onFocus={handleNoInteraction}
                onClick={handleNoClick}
                size="lg"
                variant="outline"
                className="bg-white/80 hover:bg-white text-valentine-text text-2xl px-12 py-8 rounded-full shadow-xl border-2 border-valentine-accent cursor-pointer"
                style={
                  isNoButtonMoving
                    ? {
                        position: 'fixed',
                        left: `${noButtonPosition.x}px`,
                        top: `${noButtonPosition.y}px`,
                        transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        zIndex: 50,
                      }
                    : {}
                }
              >
                No
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-celebration">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-6xl md:text-8xl font-bold text-valentine-accent drop-shadow-2xl animate-scale-up mb-8">
              OMG you said yes!
            </h2>
            
            {/* Drake Dancing Sticker Animation */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/assets/generated/drake-dance-sticker.dim_512x512.png" 
                alt="Drake dancing celebration"
                className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl animate-dance-celebration"
              />
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <Heart className="w-16 h-16 text-valentine-accent fill-current animate-heart-beat" />
              <Heart className="w-16 h-16 text-valentine-accent fill-current animate-heart-beat animation-delay-200" />
              <Heart className="w-16 h-16 text-valentine-accent fill-current animate-heart-beat animation-delay-400" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
