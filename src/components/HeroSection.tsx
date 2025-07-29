import heroBackground from '@/assets/hero-background.jpg';
import teacherPortrait from '@/assets/teacher-portrait-main.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 fade-in">
              <h1 className="heading-xl text-white">
                Raising Giants.
                <span className="block text-accent">Rewriting Stories.</span>
                <span className="block">Restoring Purpose.</span>
              </h1>
              
              <p className="body-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
                I help young people rise from the shadows of self-doubt into the light of purpose.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow hover:scale-105"
                >
                  Start Your Journey
                </button>
                <button 
                  onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Explore Books
                </button>
              </div>
            </div>
            
            {/* Right Content - Portrait */}
            <div className="flex justify-center lg:justify-end fade-in">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-elegant transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={teacherPortrait} 
                    alt="Teacher Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;