import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'سياسة الخصوصية | لمسة';
  }, []);
  
  return (
    <>
      <Helmet>
        <title>سياسة الخصوصية | لمسة</title>
        <meta name="description" content="سياسة الخصوصية لموقع لمسة للخدمات" />
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
                <Shield className="h-16 w-16 text-gold mx-auto" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                سياسة الخصوصية
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية
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
                  <Eye className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">مقدمة</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نرحب بكم في سياسة الخصوصية الخاصة بموقع لمسة. نحن ندرك أهمية الخصوصية بالنسبة لزوارنا وعملائنا، ونحن ملتزمون بحماية معلوماتكم الشخصية.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Information Collection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">المعلومات التي نجمعها</h2>
                    <p className="text-muted-foreground mb-4">
                      قد نقوم بجمع المعلومات التالية عند زيارتك لموقعنا:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>الاسم وعنوان البريد الإلكتروني عند التواصل معنا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>معلومات الطلب عند إتمام عملية الحجز</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>بيانات التصفح مثل عنوان IP ونوع المتصفح</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Usage of Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">كيف نستخدم معلوماتك</h2>
                    <p className="text-muted-foreground mb-4">
                      نستخدم المعلومات التي نجمعها منك لـ:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>توفير الخدمات المطلوبة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>تحسين تجربة المستخدم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>الرد على استفساراتك وطلباتك</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>إرسال تحديثات وعروض خاصة (إذا وافقت على ذلك)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Data Protection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">حماية المعلومات</h2>
                    <p className="text-muted-foreground">
                      نتبع إجراءات أمان قوية لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف عنها أو التعديل عليها.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Changes to Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground">تغييرات على سياسة الخصوصية</h2>
                <p className="text-muted-foreground">
                  نحتفظ بحقنا في تحديث هذه السياسة في أي وقت. وسنقوم بنشر أي تغييرات على هذه الصفحة.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-elegant mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground">اتصل بنا</h2>
                <p className="text-muted-foreground">
                  إذا كان لديك أي أسئلة بخصوص سياسة الخصوصية هذه، يرجى الاتصال بنا عبر صفحة <Link to="/contact/" className="text-gold hover:text-gold-dark transition-colors font-semibold">اتصل بنا</Link>.
                </p>
              </motion.div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <p className="text-muted-foreground mb-6">آخر تحديث: 30 نوفمبر 2025</p>
                <Button asChild variant="outline" className="gap-2 bg-card hover:bg-accent border-gold/20 text-gold hover:text-gold/90">
                  <Link to="/terms/">
                    اقرأ شروط الاستخدام <ArrowRight className="h-4 w-4" />
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

export default PrivacyPolicy;
