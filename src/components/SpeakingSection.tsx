const SpeakingSection = () => {
  const topics = [
    {
      title: "Vision & Purpose",
      description: "Helping young people discover their unique calling",
      icon: "🎯"
    },
    {
      title: "Courage & Resilience",
      description: "Building mental strength to overcome challenges",
      icon: "🛡️"
    },
    {
      title: "Mental Health Awareness",
      description: "Breaking stigmas and promoting emotional wellness",
      icon: "🧠"
    },
    {
      title: "Identity & Self-Worth",
      description: "Understanding your value beyond circumstances",
      icon: "💎"
    },
    {
      title: "Warrior Mindset",
      description: "Developing the inner strength to win in life",
      icon: "⚡"
    },
    {
      title: "Leadership Development",
      description: "Raising giants who will raise other giants",
      icon: "👑"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-6">Speaking & Workshops</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Transformational speaking that ignites purpose, challenges comfort zones, 
            and equips audiences with tools for lasting change.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Topics */}
          <div className="fade-in">
            <h3 className="heading-md text-primary mb-8">Speaking Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div 
                  key={index}
                  className="card-elegant p-6 rounded-xl hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Event Types & Testimonials */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="heading-md text-primary mb-6">Perfect For</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Schools & Universities</h4>
                    <p className="text-muted-foreground text-sm">Assemblies, graduation speeches, student workshops</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Youth Organizations</h4>
                    <p className="text-muted-foreground text-sm">Conferences, camps, leadership retreats</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Corporate Events</h4>
                    <p className="text-muted-foreground text-sm">Team building, leadership development, motivation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Community Events</h4>
                    <p className="text-muted-foreground text-sm">Workshops, seminars, motivational talks</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Preview */}
            <div className="card-elegant p-6 rounded-xl">
              <h4 className="font-semibold text-primary mb-4">What Audiences Say</h4>
              <blockquote className="text-foreground italic mb-4">
                "This wasn't just a speech—it was a wake-up call. The students were completely 
                engaged, and weeks later, they're still talking about the message of rising from 
                their shadows into their purpose."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Principal, Local High School
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Call to Action */}
        <div className="text-center fade-in">
          <div className="card-elegant p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
            <h3 className="heading-md text-primary mb-4">Book Me for Your Next Event</h3>
            <p className="body-md text-muted-foreground mb-8">
              Whether you need a keynote speaker who will challenge and inspire, or workshop 
              facilitator who will equip and empower, let's create an unforgettable experience 
              that transforms lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant hover:scale-105">
                Request Speaking Kit
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Available for local, national, and international speaking engagements
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SpeakingSection;