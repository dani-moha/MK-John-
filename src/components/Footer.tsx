const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-white">Raising Giants</h3>
            <p className="text-white/80 leading-relaxed">
              Rewriting stories, restoring purpose, and helping young people rise from shadows into light.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-white/80 hover:text-accent transition-colors">
                About Me
              </button>
              <button onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-white/80 hover:text-accent transition-colors">
                Books
              </button>
              <button onClick={() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-white/80 hover:text-accent transition-colors">
                Mentorship
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-white/80 hover:text-accent transition-colors">
                Contact
              </button>
            </nav>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                Speaking Engagements
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                Youth Mentorship
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                Workshops
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                Parent Coaching
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <a href="mailto:mjkiragu797@gmail.com" 
                 className="block text-white/80 hover:text-accent transition-colors">
                mjkiragu797@gmail.com
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
                 className="block text-white/80 hover:text-accent transition-colors">
                WhatsApp Message
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Available for speaking engagements worldwide
            </p>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Raising Giants. All rights reserved. | Built with purpose to transform lives.
            </p>
            
            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;