import { useState } from 'react';
import BlogModal from './BlogModal';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  
  const blogCategories = [
    {
      title: "Vision",
      description: "Seeing beyond current circumstances",
      icon: "👁️",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Healing",
      description: "Journey from pain to wholeness",
      icon: "🌱",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Warrior Mindset",
      description: "Mental strength for life's battles",
      icon: "⚔️",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Ancient Wisdom",
      description: "Timeless truths for modern giants",
      icon: "📜",
      color: "from-amber-500 to-amber-700"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "The Giant in the Mirror",
      excerpt: "Every morning, you stand before a mirror. But what if I told you that mirror doesn't just show your reflection—it reveals your potential?",
      category: "Vision",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "When Scars Become Stars",
      excerpt: "Your wounds were never meant to be your identity. They were meant to be your credentials for helping others heal.",
      category: "Healing",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Warrior's Rest",
      excerpt: "Even warriors need rest. But there's a difference between strategic retreat and giving up entirely.",
      category: "Warrior Mindset",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-6">Scrolls of Wisdom</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Deep reflections, powerful insights, and ancient wisdom for the modern giant. 
            These are the thoughts that shape warriors and transform lives.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {blogCategories.map((category, index) => (
            <div 
              key={index}
              className="card-elegant p-6 rounded-xl text-center group hover:shadow-elegant transition-all duration-300 cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
              <div className={`w-0 h-1 bg-gradient-to-r ${category.color} mx-auto mt-4 group-hover:w-full transition-all duration-300 rounded-full`}></div>
            </div>
          ))}
        </div>
        
        {/* Recent Posts */}
        <div className="max-w-4xl mx-auto fade-in">
          <h3 className="heading-md text-primary text-center mb-12">Recent Wisdom</h3>
          
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <article 
                key={index}
                className="card-elegant p-8 rounded-xl hover:shadow-elegant transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <h4 className="heading-md text-primary mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h4>
                
                <p className="body-md text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedPost(post.id)}
                  className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
                >
                  Continue Reading
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
          
          {/* View All Posts */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant hover:scale-105">
              Explore All Wisdom
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Blog Modal */}
      {selectedPost && (
        <BlogModal
          post={recentPosts.find(p => p.id === selectedPost)!}
          isOpen={selectedPost !== null}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default BlogSection;