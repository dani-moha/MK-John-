import { useState } from 'react';
import bookShadowsSparks from '@/assets/book-shadows-sparks.jpg';
import bookWarriorWithin from '@/assets/book-warrior-within.jpg';
import bookSedatedAwake from '@/assets/book-sedated-awake.jpg';
import BookModal from './BookModal';

const BooksSection = () => {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  
  const books = [
    {
      id: 1,
      title: "From Shadows to Sparks",
      subtitle: "A journey from insecurity to inner power",
      quote: "I don't just teach; I awaken sleeping giants hiding in school uniforms.",
      image: bookShadowsSparks,
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 2,
      title: "Awaken the Warrior Within",
      subtitle: "A mindset guide for youth walking through self-doubt",
      quote: "I light torches for others to find their way.",
      image: bookWarriorWithin,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Sedated but Awake",
      subtitle: "A raw memoir of mentoring from personal pain and healing",
      quote: "Pain was once my classroom...",
      image: bookSedatedAwake,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="books" className="section-padding">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-6">My Books</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Each book is a piece of my journey, written to guide others from their shadows into their light.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className="card-elegant p-6 rounded-2xl group cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Book Cover */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              
              {/* Book Info */}
              <div className="space-y-4">
                <h3 className="heading-md text-primary group-hover:text-secondary transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-muted-foreground font-medium">
                  {book.subtitle}
                </p>
                
                <blockquote className="text-foreground italic border-l-4 border-accent pl-4 py-2">
                  "{book.quote}"
                </blockquote>
                
                <button 
                  onClick={() => setSelectedBook(book.id)}
                  className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="card-elegant p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="heading-md text-primary mb-4">Transform Your Story</h3>
            <p className="body-md text-muted-foreground mb-6">
              These books are more than words on pages they're roadmaps from pain to purpose, 
              from doubt to destiny.
            </p>
            <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow">
              Get All Three Books
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Book Modal */}
      {selectedBook && (
        <BookModal
          book={books.find(b => b.id === selectedBook)!}
          isOpen={selectedBook !== null}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </section>
  );
};

export default BooksSection;