import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
}

const photos = [
  {
    src: '/assets/IMG_4314.jpeg',
    caption: "You're gorgeous, Flora 💕",
    alt: 'Flora looking beautiful'
  },
  {
    src: '/assets/IMG_4281.jpeg',
    caption: "can't wait to share more memories with you",
    alt: 'Flora with a beautiful smile'
  },
  {
    src: '/assets/IMG_5097.jpeg',
    caption: "Absolutely stunning, always 🌹",
    alt: 'Flora looking radiant'
  }
];

export default function GalleryModal({ open, onClose }: GalleryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-pink-50 to-rose-50">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-valentine-text flex items-center gap-3">
            <Camera className="w-8 h-8 text-valentine-accent" />
            Gallery
          </DialogTitle>
          <DialogDescription className="text-lg text-valentine-text/80 mt-2">
            Every moment with you is picture perfect 📸✨
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-valentine hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 105, 180, 0.3))',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valentine-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-valentine-text flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-valentine-accent fill-current animate-heart-beat" />
                  {photo.caption}
                  <Heart className="w-5 h-5 text-valentine-accent fill-current animate-heart-beat" />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-valentine-accent/10 rounded-2xl border-2 border-valentine-accent/20">
          <p className="text-center text-valentine-text font-bold text-xl">
            💕 You're absolutely stunning, Flora 💕
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-valentine-accent hover:bg-valentine-accent-dark text-white px-8 py-3 text-lg"
          >
            Close Gallery
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
