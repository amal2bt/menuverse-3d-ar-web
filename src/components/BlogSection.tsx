import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Smartphone, Globe, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Technology",
    readTime: "5 min read",
    title: "How AR Menus Are Boosting Restaurant Revenue by 34%",
    excerpt: "We investigated the impact of augmented reality menus on customer decision-making and average order value.",
    color: "from-blue-500 to-blue-600",
    Icon: Smartphone,
  },
  {
    category: "Marketing",
    readTime: "4 min read",
    title: "Getting the Most Out of Your QR Menu: The 2026 Strategy Guide",
    excerpt: "Analyzing customer data to optimize your menu and encourage repeat visits.",
    color: "from-purple-500 to-purple-600",
    Icon: TrendingUp,
  },
  {
    category: "Operations",
    readTime: "6 min read",
    title: "Multi-Language Menus: The Revenue Secret for Tourist Areas",
    excerpt: "We examined the business impact of greeting every customer in their own language with 7-language support.",
    color: "from-emerald-500 to-emerald-600",
    Icon: Globe,
  },
  {
    category: "Case Study",
    readTime: "7 min read",
    title: "A Success Story: The Vakko Brasserie Digital Transformation",
    excerpt: "Digital menu adoption, customer satisfaction, and revenue changes 6 months after integrating Menuverse.",
    color: "from-orange-500 to-orange-600",
    Icon: BookOpen,
  },
  {
    category: "Tips & Tricks",
    readTime: "3 min read",
    title: "8 Golden Rules for Stunning 3D Product Photography",
    excerpt: "Expert tips for creating impressive product visuals without professional equipment.",
    color: "from-rose-500 to-rose-600",
    Icon: Clock,
  },
  {
    category: "Industry",
    readTime: "5 min read",
    title: "2026 Restaurant Tech Trends: AI and Beyond",
    excerpt: "The future of AI-driven menu recommendations, dynamic pricing, and personalized dining experiences.",
    color: "from-indigo-500 to-indigo-600",
    Icon: TrendingUp,
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
              BLOG & RESOURCES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Industry Insights &<br />Success Stories
            </h2>
          </div>
          <button className="shrink-0 flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:gap-3 transition-all">
            View All Articles <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${post.color} h-44 flex items-center justify-center`}>
                <post.Icon size={48} className="text-white/90" strokeWidth={1.5} />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-[#FFF0E6] text-[#FF6B00] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#FF6B00] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-sm font-semibold text-[#FF6B00] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
