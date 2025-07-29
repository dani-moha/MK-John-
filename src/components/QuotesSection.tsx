import { useState, useEffect } from 'react';

const QuotesSection = () => {
  const quotes = [
    "I don't just teach; I awaken sleeping giants hiding in school uniforms.",
    "I was once a student burning silently with questions. Now, I light torches for others to find their way.",
    "Pain was once my classroom. Now I mentor from a place of healing, not just knowledge.",
    "I mentor because I remember what it felt like to almost give up until one voice called me a 'child of promise.'",
    "I stand before my students as proof that broken beginnings can still write powerful endings.",
    "This is more than a job. It's a calling to ignite purpose, challenge mediocrity, and send warriors into the world.",
    "Mentorship is not about perfection. It's about walking with others through the fire and not leaving them there.",
    "Mindset is the mother of every vision. Every great idea is conceived in your mind, so take care of it.",
    "My chalk writes lessons, but my life writes legacies.",
    "I don't just raise grades I raise giants who raise others.",
    "Mentorship is my rebellion against the silence I grew up in.",
    "I was once the boy with torn shoes and a loud dream. Now I teach others to run—no matter what they're wearing.",
    "The goal is not to be remembered as a teacher, but as the voice that awakened something sacred in them.",
    "Some students come to school with wounds. I come to class ready to bandage them with truth, vision, and hope.",
    "Teaching fills the mind. Mentorship shapes the soul.",
    "They may forget the formulas I teach, but they'll never forget the fire I helped them find.",
    "I don't teach to impress. I teach to impact. Because I know what it means to be one 'yes' away from giving up."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="section-padding bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Quote Display */}
          <div className="quote-box p-12 md:p-16 rounded-3xl backdrop-blur-sm">
            <div 
              className={`transition-all duration-300 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              <blockquote className="text-2xl md:text-3xl font-heading font-medium text-white leading-relaxed mb-8">
                "{quotes[currentQuoteIndex]}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-2">
                {quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuoteIndex ? 'bg-accent w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Source Attribution */}
          <div className="mt-8 text-white/80 font-medium">
            Words of Wisdom from a Giant Maker
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;