import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import blogImage1 from "@/assets/team-professional.jpg";
import blogImage2 from "@/assets/service-cleaning-pro.jpg";
import blogImage3 from "@/assets/about-trust.jpg";

const blogPosts = [
  {
    slug: "how-to-choose-domestic-worker",
    title: "كيف تختار العاملة المنزلية المناسبة",
    excerpt: "دليل شامل لاختيار العاملة المنزلية المثالية لاحتياجات منزلك وعائلتك",
    date: "2025-01-15",
    author: "مكتب لمسة",
    category: "نصائح",
    image: blogImage1,
  },
  {
    slug: "importance-of-training",
    title: "أهمية التدريب المهني للعاملات المنزليات",
    excerpt: "تعرف على كيفية تأثير التدريب الجيد على جودة الخدمات المنزلية",
    date: "2025-01-10",
    author: "مكتب لمسة",
    category: "تدريب",
    image: blogImage2,
  },
  {
    slug: "rights-and-duties",
    title: "حقوق وواجبات العامل والمستخدم",
    excerpt: "فهم الحقوق والواجبات المتبادلة لضمان علاقة عمل ناجحة ومتوازنة",
    date: "2025-01-05",
    author: "مكتب لمسة",
    category: "قانوني",
    image: blogImage3,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActionButton />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-ibm-plex-sans-arabic font-bold mb-6 gradient-text">
              المدونة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              آخر الأخبار والنصائح في عالم العمالة المنزلية
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('ar-SA')}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-primary hover:text-primary-light font-semibold p-0 h-auto hover:bg-transparent group">
                      اقرأ المزيد
                      <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-muted to-background rounded-2xl p-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              المزيد من المقالات قريباً
            </h2>
            <p className="text-muted-foreground">
              تابعنا للحصول على آخر الأخبار والنصائح المفيدة
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
