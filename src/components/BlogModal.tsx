interface BlogModalProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
  if (!isOpen) return null;

  const getFullContent = (postId: number) => {
    switch (postId) {
      case 1:
        return `Every morning, you stand before a mirror. But what if I told you that mirror doesn't just show your reflection—it reveals your potential?

        The giant in the mirror isn't the person you see today. It's the person you're becoming. It's the warrior hiding beneath layers of doubt, the leader concealed by whispers of "not yet," and the champion masked by the ordinary.

        I've stood before that same mirror, seeing only my flaws, my fears, my inadequacies. But mentorship taught me to look deeper—to see not just what is, but what could be. The mirror became my training ground, where I learned to speak life into my reflection instead of death.

        Your reflection is not your limitation; it's your invitation. Every scar tells a story of survival. Every line speaks of lessons learned. Every imperfection is proof that you're human, and humans are designed to grow.

        Today, look in the mirror and see your giant. Not the problems you carry, but the potential you possess. Not the failures you've experienced, but the future you're creating. Because the world needs the giant in you—awakened, alive, and ready to rise.`;
      
      case 2:
        return `Your wounds were never meant to be your identity. They were meant to be your credentials for helping others heal.

        I know this because I've lived it. Every scar on my soul, every tear I've shed in silence, every moment I felt like giving up—they weren't punishments. They were preparation. Preparation for the purpose I couldn't see yet, the people I hadn't met yet, the healing I couldn't imagine yet.

        Scars are not signs of weakness; they're proof of strength. They're evidence that you survived what could have destroyed you. They're testimonies that your story isn't over—it's just getting started.

        But here's the magic: when scars become stars, they light the way for others walking in darkness. Your pain becomes their hope. Your breakthrough becomes their possibility. Your healing becomes their invitation to believe again.

        I mentor because my scars taught me something beautiful—broken crayons still color. Wounded warriors still fight. Scarred hearts still love. And stars that have been through the darkness shine the brightest.

        Your scars are not your shame; they're your superpower. They're your authority to speak into someone else's pain and say, "I've been where you are, and there's a way through." They're your credentials to turn around and pull someone else up.

        Let your scars become stars. The world is waiting for the light only you can shine.`;
      
      case 3:
        return `Even warriors need rest. But there's a difference between strategic retreat and giving up entirely.

        I learned this the hard way, pushing myself until I burned out, believing that rest was weakness and vulnerability was failure. I thought warriors were supposed to be invincible, untouchable, always ready for battle. I was wrong.

        The strongest warriors know when to retreat, regroup, and restore. They understand that rest is not the opposite of strength—it's the source of it. They know that even the mightiest sword needs sharpening, even the strongest armor needs maintenance.

        Strategic retreat is not surrender; it's wisdom. It's stepping back to step forward stronger. It's taking time to heal so you can fight another day. It's understanding that your worth is not measured by your wounds, but by your willingness to keep going despite them.

        But there's a difference between resting and quitting. Resting says, "I need time to recover." Quitting says, "I'm done forever." Resting prepares you for the next battle. Quitting hands victory to your fears.

        I teach my students to rest like warriors—intentionally, purposefully, with the end goal of returning stronger. Rest with a plan. Rest with hope. Rest with the knowledge that this pause is not permanent.

        Your battles are not over. Your purpose is not done. Your story is not finished. Sometimes the most courageous thing you can do is rest, so you can rise again ready to fight for what matters most.

        Rest, warrior. But remember—you're resting to rise, not to retreat forever.`;
      
      default:
        return post.excerpt;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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

          {/* Blog content */}
          <div className="space-y-6">
            <div className="text-center border-b border-border pb-6">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="heading-xl text-primary mb-4">{post.title}</h1>
              <p className="text-muted-foreground">{post.readTime}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="body-lg text-foreground leading-relaxed whitespace-pre-line">
                {getFullContent(post.id)}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    Share
                  </button>
                  <button className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors">
                    Save for Later
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Written with ❤️ for the giants rising
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;