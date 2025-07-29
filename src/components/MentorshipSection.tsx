const MentorshipSection = () => {
  const programs = [
    {
      title: "High School Giants",
      description: "Awakening purpose and vision in teenage warriors",
      features: [
        "Identity discovery sessions",
        "Academic & life goal setting",
        "Confidence building workshops",
        "Future planning guidance"
      ],
      icon: "🎓"
    },
    {
      title: "College Warriors",
      description: "Navigating university life with purpose and clarity",
      features: [
        "Career path exploration",
        "Leadership development",
        "Mindset transformation",
        "Networking & life skills"
      ],
      icon: "⚔️"
    },
    {
      title: "Parent Empowerment",
      description: "Equipping parents to raise giants at home",
      features: [
        "Communication strategies",
        "Discipline with love",
        "Building family vision",
        "Supporting teen development"
      ],
      icon: "👥"
    }
  ];

  return (
    <section id="mentorship" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-6">The Mentorship Path</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Every giant was once a seed. Through intentional mentorship, we cultivate the soil 
            of the mind and water the roots of purpose until greatness grows.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="card-elegant p-8 rounded-2xl text-center group hover:shadow-elegant transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              
              {/* Content */}
              <h3 className="heading-md text-primary mb-4 group-hover:text-secondary transition-colors">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 font-medium">
                {program.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center text-sm text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        {/* What You Get */}
        <div className="max-w-4xl mx-auto fade-in">
          <div className="card-elegant p-8 md:p-12 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="heading-md text-primary mb-4">What Every Giant Receives</h3>
              <p className="body-md text-muted-foreground">
                Mentorship that goes beyond advice—transformation that lasts a lifetime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Mindset Coaching</h4>
                    <p className="text-muted-foreground text-sm">Rewiring limiting beliefs into empowering truths</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Purpose Discovery</h4>
                    <p className="text-muted-foreground text-sm">Uncovering your unique calling and passion</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Discipline & Clarity</h4>
                    <p className="text-muted-foreground text-sm">Building systems for consistent growth</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Life Clarity</h4>
                    <p className="text-muted-foreground text-sm">Creating a roadmap for your future</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground text-sm">A mentor who walks with you through the journey</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Community Connection</h4>
                    <p className="text-muted-foreground text-sm">Join a network of like-minded giants</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <h4 className="heading-md text-primary mb-4">Ready to Begin Your Transformation?</h4>
              <p className="body-md text-muted-foreground mb-6">
                Take the first step toward becoming the giant you were meant to be.
              </p>
              <a 
                href="https://wa.me/254792939417" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MentorshipSection;