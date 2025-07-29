import teacherCasualPortrait from '@/assets/teacher-portrait-casual.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-primary mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Bio Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Portrait */}
            <div className="lg:col-span-1 flex justify-center fade-in">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-elegant transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={teacherCasualPortrait} 
                    alt="Teacher Casual Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="lg:col-span-2 card-elegant p-8 md:p-12 rounded-2xl fade-in">
              <div className="prose prose-lg max-w-none">
                <p className="body-lg text-foreground leading-relaxed mb-6">
                  I am a passionate teacher, a devoted mentor, and an author with a mission to raise giants. 
                  My calling goes beyond the classroom through mentorship, I walk with young people as they 
                  discover purpose, rise from pain, and rewrite their stories.
                </p>
                
                <p className="body-lg text-foreground leading-relaxed mb-6">
                  I've authored books like <span className="text-primary font-semibold">From Shadows to Sparks</span>, 
                  <span className="text-primary font-semibold"> Awaken the Warrior Within</span>, and 
                  <span className="text-primary font-semibold"> Sedated but Awake</span> all drawn from a deep well 
                  of personal experience, faith, and a desire to see others set free.
                </p>
                
                <p className="body-lg text-foreground leading-relaxed">
                  Whether I'm teaching, writing, or mentoring, my heartbeat is the same: to ignite vision, 
                  challenge the ordinary, and shape warriors who live with courage and conviction.
                </p>
              </div>
            
              {/* Stats/Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">3</div>
                  <div className="text-muted-foreground font-medium">Published Books</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">100+</div>
                  <div className="text-muted-foreground font-medium">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">∞</div>
                  <div className="text-muted-foreground font-medium">Purpose Ignited</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;