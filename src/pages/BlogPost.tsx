import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import teamProfessional from "@/assets/team-professional.jpg";
import serviceCleaningPro from "@/assets/service-cleaning-pro.jpg";
import aboutTrust from "@/assets/about-trust.jpg";

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    slug: "how-to-choose-domestic-worker",
    title: "كيف تختار العاملة المنزلية المناسبة",
    excerpt: "دليل شامل لاختيار العاملة المنزلية المثالية لاحتياجات منزلك وعائلتك",
    content: `
      <h2>مقدمة</h2>
      <p>اختيار العاملة المنزلية المناسبة هو قرار مهم يؤثر على راحة وسعادة عائلتك. في هذا المقال، نقدم لك دليلاً شاملاً يساعدك على اتخاذ القرار الصحيح.</p>

      <h2>تحديد احتياجاتك</h2>
      <p>قبل البدء في البحث، من المهم أن تحدد بوضوح ما تحتاجه:</p>
      <ul>
        <li>هل تحتاج إلى خادمة للأعمال المنزلية العامة؟</li>
        <li>هل تبحث عن طباخة محترفة؟</li>
        <li>هل تحتاج إلى مربية أطفال؟</li>
        <li>هل تريد شخصاً للعناية بكبار السن؟</li>
      </ul>

      <h2>الخبرة والمهارات</h2>
      <p>تأكد من أن العاملة لديها الخبرة والمهارات المطلوبة. اسأل عن:</p>
      <ul>
        <li>سنوات الخبرة في المجال المطلوب</li>
        <li>التدريب الذي حصلت عليه</li>
        <li>المهارات الخاصة (مثل الطبخ، رعاية الأطفال، إلخ)</li>
        <li>القدرة على التعامل مع التكنولوجيا المنزلية</li>
      </ul>

      <h2>التواصل واللغة</h2>
      <p>القدرة على التواصل الفعال أمر بالغ الأهمية. تأكد من أن العاملة تستطيع:</p>
      <ul>
        <li>فهم اللغة العربية أو الإنجليزية بشكل كافٍ</li>
        <li>التواصل بوضوح حول المهام والاحتياجات</li>
        <li>فهم التعليمات والتوجيهات</li>
      </ul>

      <h2>الفحوصات الطبية</h2>
      <p>تأكد دائماً من حصول العاملة على:</p>
      <ul>
        <li>فحوصات طبية شاملة حديثة</li>
        <li>شهادة خلو من الأمراض المعدية</li>
        <li>لقاحات محدثة</li>
      </ul>

      <h2>فترة التجربة</h2>
      <p>نوصي دائماً ببدء العمل بفترة تجربة (عادة 7 أيام) لتقييم:</p>
      <ul>
        <li>مدى توافق العاملة مع أسرتك</li>
        <li>جودة العمل والالتزام</li>
        <li>القدرة على التكيف مع بيئة المنزل</li>
      </ul>

      <h2>نصائح إضافية</h2>
      <p>للحصول على أفضل تجربة، ننصح بـ:</p>
      <ul>
        <li>وضع جدول واضح للمهام اليومية</li>
        <li>تحديد توقعات واضحة من البداية</li>
        <li>التواصل المستمر والمتابعة</li>
        <li>معاملة العاملة باحترام وتقدير</li>
      </ul>

      <h2>الخلاصة</h2>
      <p>اختيار العاملة المنزلية المناسبة يتطلب تخطيطاً دقيقاً وتقييماً شاملاً. في مكتب لمسة، نساعدك على اختيار العاملة المثالية من خلال فريق متخصص وعملية اختيار دقيقة. تواصل معنا اليوم للحصول على استشارة مجانية!</p>
    `,
    date: "2025-01-15",
    author: "مكتب لمسة",
    category: "نصائح",
    image: teamProfessional,
    tags: ["عاملات منزلية", "نصائح", "التوظيف", "اختيار العاملة"],
  },
  {
    id: "2",
    slug: "importance-of-training",
    title: "أهمية التدريب المهني للعاملات المنزليات",
    excerpt: "تعرف على كيفية تأثير التدريب الجيد على جودة الخدمات المنزلية",
    content: `
      <h2>لماذا التدريب مهم؟</h2>
      <p>التدريب المهني للعاملات المنزليات ليس مجرد رفاهية، بل هو ضرورة لضمان تقديم خدمات عالية الجودة.</p>

      <h2>مجالات التدريب الأساسية</h2>
      <ul>
        <li>تقنيات التنظيف الحديثة</li>
        <li>السلامة والصحة المهنية</li>
        <li>مهارات الطبخ والتغذية</li>
        <li>رعاية الأطفال وكبار السن</li>
        <li>استخدام الأجهزة المنزلية الحديثة</li>
      </ul>

      <h2>فوائد التدريب</h2>
      <p>التدريب الجيد يؤدي إلى:</p>
      <ul>
        <li>تحسين جودة الخدمات</li>
        <li>زيادة الكفاءة والإنتاجية</li>
        <li>تقليل الأخطاء والحوادث</li>
        <li>رضا أعلى للعملاء</li>
      </ul>

      <h2>برامج التدريب في مكتب لمسة</h2>
      <p>نحن نقدم برامج تدريبية شاملة تشمل:</p>
      <ul>
        <li>تدريب عملي على أعمال التنظيف</li>
        <li>دورات في الطبخ والتغذية</li>
        <li>تدريب على رعاية الأطفال</li>
        <li>تعليم السلامة المنزلية</li>
      </ul>
    `,
    date: "2025-01-10",
    author: "مكتب لمسة",
    category: "تدريب",
    image: serviceCleaningPro,
    tags: ["تدريب", "مهارات", "جودة الخدمة"],
  },
  {
    id: "3",
    slug: "rights-and-duties",
    title: "حقوق وواجبات العامل والمستخدم",
    excerpt: "فهم الحقوق والواجبات المتبادلة لضمان علاقة عمل ناجحة ومتوازنة",
    content: `
      <h2>حقوق العامل</h2>
      <p>من المهم معرفة حقوق العاملة المنزلية وضمان احترامها:</p>
      <ul>
        <li>الحصول على راتب في الموعد المحدد</li>
        <li>يوم راحة أسبوعي</li>
        <li>مكان مناسب للنوم</li>
        <li>وجبات غذائية صحية</li>
        <li>الرعاية الطبية عند الحاجة</li>
        <li>المعاملة بكرامة واحترام</li>
      </ul>

      <h2>واجبات العامل</h2>
      <p>على العاملة الالتزام بـ:</p>
      <ul>
        <li>أداء المهام المتفق عليها</li>
        <li>احترام خصوصية الأسرة</li>
        <li>الحفاظ على ممتلكات المنزل</li>
        <li>الالتزام بمواعيد العمل</li>
        <li>الصدق والأمانة</li>
      </ul>

      <h2>حقوق صاحب العمل</h2>
      <ul>
        <li>الحصول على خدمة عالية الجودة</li>
        <li>الأمان والخصوصية في المنزل</li>
        <li>التزام العاملة بالعقد</li>
      </ul>

      <h2>نصائح لعلاقة عمل ناجحة</h2>
      <p>لضمان علاقة عمل صحية ومثمرة:</p>
      <ul>
        <li>وضع عقد واضح يحدد الحقوق والواجبات</li>
        <li>التواصل المفتوح والصريح</li>
        <li>المرونة والتفاهم من الطرفين</li>
        <li>حل المشكلات بالحوار</li>
      </ul>
    `,
    date: "2025-01-05",
    author: "مكتب لمسة",
    category: "قانوني",
    image: aboutTrust,
    tags: ["حقوق", "قانون", "عقود العمل"],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  
  // Find current post index
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Get related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActionButton />

      <main className="pt-32 pb-20">
        {/* Hero Section with Featured Image */}
        <section className="relative h-[60vh] mb-12 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Badge className="mb-4 bg-gold text-white">{post.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <div 
                  className="prose prose-lg max-w-none rtl-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    direction: 'rtl',
                    textAlign: 'right',
                  }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prevPost && (
                    <Link to={`/blog/${prevPost.slug}`}>
                      <div className="bg-muted/50 hover:bg-muted rounded-xl p-6 transition-all hover-lift group">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          <span>المقال السابق</span>
                        </div>
                        <h3 className="font-bold text-foreground">{prevPost.title}</h3>
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link to={`/blog/${nextPost.slug}`}>
                      <div className="bg-muted/50 hover:bg-muted rounded-xl p-6 transition-all hover-lift group text-left">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2 justify-end">
                          <span>المقال التالي</span>
                          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <h3 className="font-bold text-foreground text-right">{nextPost.title}</h3>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* Author Card */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-white/80 mb-6">
                  مكتب متخصص في توفير العمالة المنزلية المدربة
                </p>
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 w-full">
                    تواصل معنا
                  </Button>
                </Link>
              </div>

              {/* Related Posts */}
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-foreground">مقالات ذات صلة</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-4 hover:bg-muted/50 rounded-lg p-3 transition-all">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(relatedPost.date).toLocaleDateString('ar-SA')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">هل تبحث عن عاملة منزلية؟</h3>
                <p className="text-white/90 mb-6">
                  نوفر لك أفضل العاملات المدربات من جميع الجنسيات
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-gold hover:bg-white/90 w-full">
                    اطلب الآن
                  </Button>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
