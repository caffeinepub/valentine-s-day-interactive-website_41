import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Gift, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState, useEffect } from 'react';

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GiftModal({ open, onClose }: GiftModalProps) {
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    if (open) {
      setShowGift(false);
      const timer = setTimeout(() => setShowGift(true), 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] bg-gradient-to-br from-red-50 to-pink-50">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-valentine-text flex items-center gap-3">
            <Gift className="w-8 h-8 text-valentine-accent" />
            Your Special Gift
          </DialogTitle>
          <DialogDescription className="text-lg text-valentine-text/80 mt-2">
            A token of my love, just for you 🌹
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="mt-6">
            {!showGift ? (
              <div className="text-center py-12">
                <div className="animate-bounce">
                  <Gift className="w-24 h-24 text-valentine-accent mx-auto mb-4" />
                </div>
                <p className="text-xl text-valentine-text/80">Opening your gift...</p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8">
                  <div className="absolute -top-4 -right-4">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  </div>
                  <div className="absolute -top-4 -left-4">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse animation-delay-200" />
                  </div>

                  <img
                    src="/assets/generated/roses-bouquet.dim_600x400.png"
                    alt="Beautiful Roses Bouquet"
                    className="w-full max-w-md mx-auto rounded-xl shadow-2xl mb-8 animate-scale-up"
                  />

                  <div className="romantic-letter space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-sm text-valentine-text/60 italic font-serif">
                        Written with love on Valentine's Day
                      </p>
                    </div>

                    <div className="letter-greeting">
                      <p className="text-2xl font-romantic text-valentine-accent mb-4">
                        My Dearest Valentine,
                      </p>
                    </div>

                    <div className="letter-body space-y-4">
                      <p className="text-xl font-romantic text-valentine-text/90 leading-relaxed text-center">
                        Roses are red,
                      </p>
                      <p className="text-xl font-romantic text-valentine-text/90 leading-relaxed text-center">
                        Violets are blue,
                      </p>
                      <p className="text-xl font-romantic text-valentine-text/90 leading-relaxed text-center">
                        My naughty thoughts involve
                      </p>
                      <p className="text-xl font-romantic text-valentine-text/90 leading-relaxed text-center">
                        Me and you 😏😈
                      </p>
                    </div>

                    <div className="letter-signature mt-8 text-right">
                      <p className="text-lg font-romantic text-valentine-accent italic">
                        Forever yours,
                      </p>
                      <p className="text-2xl font-romantic text-valentine-accent mt-2">
                        💕
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center gap-2">
                    {['🌹', '💕', '✨', '💖', '🌹'].map((emoji, i) => (
                      <span
                        key={i}
                        className="text-3xl animate-bounce"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="mt-6 flex justify-between items-center">
          <Button
            onClick={onClose}
            variant="outline"
            className="border-valentine-accent text-valentine-accent hover:bg-valentine-accent hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={onClose}
            className="bg-valentine-accent hover:bg-valentine-accent-dark text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
