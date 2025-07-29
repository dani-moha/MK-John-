import { useState } from 'react';

interface BookModalProps {
  book: {
    id: number;
    title: string;
    subtitle: string;
    quote: string;
    image: string;
    fullDescription?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ book, isOpen, onClose }: BookModalProps) => {
  if (!isOpen) return null;

  const getFullDescription = (bookId: number) => {
    switch (bookId) {
      case 1:
        return `"From Shadows to Sparks" is a transformative journey that takes readers from the depths of insecurity into the light of inner power. This book chronicles the path of self-discovery, revealing how our deepest struggles can become our greatest strengths. Through personal anecdotes, practical exercises, and profound insights, readers learn to recognize their own potential and step boldly into their purpose. It's not just about overcoming self-doubt—it's about awakening the giant that has been dormant within you all along.`;
      case 2:
        return `"Awaken the Warrior Within" is a comprehensive mindset guide specifically crafted for young people navigating the treacherous waters of self-doubt. This book serves as both compass and sword, providing readers with the mental tools needed to fight back against limiting beliefs and societal pressures. Through ancient wisdom and modern psychology, it teaches readers how to develop an unshakeable warrior mindset that can withstand any storm. Each chapter builds upon the last, creating a fortress of confidence that protects and empowers the reader's dreams.`;
      case 3:
        return `"Sedated but Awake" is a raw, unflinching memoir that exposes the reality of mentoring from a place of personal pain and healing. This book doesn't shy away from the uncomfortable truths about struggle, trauma, and the journey toward wholeness. It's a testament to the power of transformation and the responsibility that comes with being healed. Through vulnerable storytelling and hard-won wisdom, readers discover that their pain can become their purpose, and their scars can become stars that light the way for others.`;
      default:
        return book.subtitle;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Book content */}
          <div className="space-y-6">
            <div className="text-center">
              <img 
                src={book.image} 
                alt={book.title}
                className="w-48 h-64 object-cover rounded-xl mx-auto shadow-elegant mb-6"
              />
              <h2 className="heading-lg text-primary mb-2">{book.title}</h2>
              <p className="text-muted-foreground font-medium mb-4">{book.subtitle}</p>
            </div>

            <blockquote className="text-center text-foreground italic border-l-4 border-accent pl-4 py-2 text-lg">
              "{book.quote}"
            </blockquote>

            <div className="prose prose-lg max-w-none">
              <p className="body-lg text-foreground leading-relaxed">
                {getFullDescription(book.id)}
              </p>
            </div>

            <div className="flex gap-4 justify-center pt-6">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300">
                Purchase Book
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Preview Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;