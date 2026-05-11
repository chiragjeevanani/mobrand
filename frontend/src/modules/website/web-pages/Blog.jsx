import React from 'react';
import { Newspaper, TrendingUp, Utensils, ShoppingBag, Terminal, PenTool, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';

const Blog = () => {
  const categories = [
    {
      title: "Online Business Growth",
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      desc: "Digital strategies and management guides for modern businesses.",
      topics: ["Grow Online in India", "Digital Strategies", "Increase Sales"]
    },
    {
      title: "Restaurant & Food Business",
      icon: <Utensils className="w-6 h-6 text-orange-500" />,
      desc: "Guides and insights for cafes, bakeries, and delivery operations.",
      topics: ["Increase Orders", "Management Software", "Delivery Growth"]
    },
    {
      title: "Grocery & Retail",
      icon: <ShoppingBag className="w-6 h-6 text-blue-500" />,
      desc: "Efficiency tips for marts, grocery stores, and retail shops.",
      topics: ["Inventory Tips", "Go Online Guide", "Management Systems"]
    },
    {
      title: "SaaS & Tech",
      icon: <Terminal className="w-6 h-6 text-indigo-500" />,
      desc: "Explore business automation and commerce technology.",
      topics: ["SaaS Benefits", "Vendor Software", "Commerce Platforms"]
    },
    {
      title: "White-Label & Branding",
      icon: <PenTool className="w-6 h-6 text-purple-500" />,
      desc: "Build your digital identity with custom solutions.",
      topics: ["Branded Apps", "Custom Solutions", "Brand Growth"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-body text-slate-800 antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-mobrand-primary to-mobrand-dark text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mobrand-teal/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Newspaper className="w-4 h-4 text-mobrand-accent" />
            <span>Mobrand Insights Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 tracking-tight">
            Grow Your Business with <br /> <span className="text-mobrand-teal">Digital Commerce</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover expert tips, SaaS insights, and vendor growth strategies designed for the modern Indian marketplace.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-slate-800">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{cat.desc}</p>
                <div className="space-y-2 mb-8">
                  {cat.topics.map((topic, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-mobrand-teal" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-mobrand-teal group/btn">
                  <span>Explore Topics</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}

            {/* Newsletter Box */}
            <div className="lg:col-span-1 bg-gradient-to-br from-mobrand-teal to-indigo-600 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-32 h-32" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">Never Miss an Update</h3>
                <p className="text-white/80 text-sm mb-6">Join 5,000+ business owners receiving weekly digital growth tips.</p>
              </div>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your business email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:bg-white focus:text-slate-800 outline-none transition-all placeholder:text-white/50"
                />
                <button className="w-full bg-white text-mobrand-primary font-bold py-3 rounded-xl hover:bg-mobrand-accent hover:text-white transition-all text-sm">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blog;
