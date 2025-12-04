import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const TermsOfUse = () => {
  useEffect(() => {
    document.title = 'شروط الاستخدام | لمسة';
  }, []);
  
  return (
    <>
      <Helmet>
        <title>شروط الاستخدام | لمسة</title>
        <meta name="description" content="شروط وأحكام استخدام موقع لمسة للخدمات" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingActionButton />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-gold opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="mb-6">
                <FileText className="h-16 w-16 text-gold mx-auto" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                شروط وأحكام الاستخدام
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                شروط استخدام موقع لمسة لضمان تجربة آمنة وموثوقة للجميع
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. مقدمة</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      مرحباً بكم في موقع لمسة. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام الموقع. يعد استخدامك للموقع بمثابة موافقة منك على الالتزام بهذه الشروط وجميع القوانين واللوائح المعمول بها.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Accounts Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. الحسابات والمستخدمون</h2>
                    <p className="text-muted-foreground mb-4">
                      عند إنشاء حساب على موقعنا، يجب عليك:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>تقديم معلومات دقيقة وكاملة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>الحفاظ على سرية معلومات الحساب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>الإبلاغ فوراً عن أي استخدام غير مصرح به لحسابك</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. الخدمات والحجوزات</h2>
                    <p className="text-muted-foreground mb-4">
                      نحن نقدم خدمات متنوعة تشمل:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>خدمات النظافة المنزلية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>خدمات الصيانة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>خدمات أخرى حسب الطلب</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground">
                      جميع الحجوزات تخضع للتأكيد وتوافر مقدمي الخدمة.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cancellation Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. إلغاء الحجوزات واسترداد المبالغ</h2>
                    <p className="text-muted-foreground">
                      يمكنك إلغاء الحجز قبل 24 ساعة من الموعد المحدد. قد تنطوي عمليات الإلغاء المتأخرة على رسوم إلغاء.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Liability Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. المسؤولية</h2>
                    <p className="text-muted-foreground">
                      لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Modifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. التعديلات على الشروط</h2>
                    <p className="text-muted-foreground">
                      نحتفظ بالحق في تعديل هذه الشروط في أي وقت. وسيتم نشر أي تغييرات على هذه الصفحة.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. الاتصال بنا</h2>
                <p className="text-muted-foreground">
                  لطرح أي استفسارات بخصوص شروط الاستخدام، يرجى الاتصال بنا عبر صفحة <Link to="/contact/" className="text-gold hover:text-gold-dark transition-colors font-semibold">اتصل بنا</Link>.
                </p>
              </motion.div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <p className="text-muted-foreground mb-6">تاريخ النفاذ: 30 نوفمبر 2025</p>
                <Button asChild variant="outline" className="gap-2 bg-card hover:bg-accent border-gold/20 text-gold hover:text-gold/90">
                  <Link to="/privacy/">
                    <ArrowLeft className="h-4 w-4" /> العودة إلى سياسة الخصوصية
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfUse;
