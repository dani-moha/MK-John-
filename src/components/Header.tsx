import { useState, useEffect } from 'react';

const Header = () => {
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      const greetingText = hour < 12
        ? "Good morning"
        : hour < 18
        ? "Good afternoon"
        : "Good evening";
      const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setGreeting(greetingText);
      setTime(timeText);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-heading font-semibold text-lg text-primary">
            MENTORSHIP HUB
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('books')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Books
              </button>
              <button 
                onClick={() => scrollToSection('mentorship')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Mentorship
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="text-sm text-muted-foreground font-medium">
            <span className="hidden sm:inline">{greeting}, it's </span>
            <span className="font-semibold text-primary">{time}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;