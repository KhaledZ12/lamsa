import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import aboutImage from "@/assets/about-trust.jpg";
import staffImage from "@/assets/staff-group.jpg";
import teamProfessional from "@/assets/team-professional.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const About = () => {
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
              من نحن
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مكتب لمسة  للعمالة المنزلية - شريكك الموثوق في توفير أفضل الخدمات المنزلية
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20 rounded-2xl overflow-hidden shadow-elegant"
          >
            <img
              src={staffImage}
              alt="فريق مكتب لمسة"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Vision, Mission, Goal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                نسعي أن يكون مكتب لمسة هو المكتب المفضل لعملائنا من خلال تيسير عملية نقل الخدمات وتقديم لهم افضل الخدمات المتميزة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">رسالتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                نعمل على توفير العمالة المنزلية من كلا الجنسيات وتلبية جميع احتياجات العملاء ونقدم لهم افضل الخدمات والمعايير التي تحفظ حقوقهم كما أننا نلتزم في كافة تعاملاتنا بالمصداقية والوضوح.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">هدفنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                هو إرضاء العميل بكل ما نستطيع، وكذلك تحقيق تطور في مجال العمالة المنزلية وبناء ثقافة الاحترام بين العاملة واصحاب العمل وفقا لثقافتنا العربية.
              </p>
            </motion.div>
          </div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-muted to-background rounded-2xl p-12 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                الثقة والمصداقية
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                نلتزم بتقديم أفضل الخدمات وتحقيق أعلى معايير الجودة. نعمل بمصداقية ووضوح تام مع جميع عملائنا، ونضمن لهم تجربة استثنائية من البداية للنهاية.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span className="text-muted-foreground">أكثر من 10 سنوات من الخبرة في المجال</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span className="text-muted-foreground">أكثر من 8000 عميل راضٍ عن خدماتنا</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span className="text-muted-foreground">فريق محترف متخصص في خدمة العملاء</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={aboutImage}
                alt="الثقة والمصداقية"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </motion.div>

          {/* Team and Office Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <img
                src={teamProfessional}
                alt="فريق العمل المحترف"
                className="w-full h-80 object-cover"
              />
              <div className="bg-card p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">فريق محترف</h3>
                <p className="text-muted-foreground">
                  فريق عمل متخصص ومدرب على أعلى مستوى لخدمتك وتلبية احتياجاتك
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <img
                src={officeInterior}
                alt="مكتبنا"
                className="w-full h-80 object-cover"
              />
              <div className="bg-card p-6">
                <h3 className="text-2xl font-bold mb-3 text-gold">مكتب حديث</h3>
                <p className="text-muted-foreground">
                  بيئة عمل احترافية ومريحة لاستقبال عملائنا الكرام
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
