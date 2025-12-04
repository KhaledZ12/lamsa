import { motion } from "framer-motion";
import { Home, UtensilsCrossed, Baby, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import cleaning1 from "@/assets/cleaning-1.webp";
import cooking from "@/assets/cooking.jpg";
import childcare from "@/assets/childcare.webp";
import elderly from "@/assets/elderly-care.webp";
import serviceCleaningPro from "@/assets/service-cleaning-pro.jpg";
import cookingPro from "@/assets/cooking-pro.jpg";
import childcare2 from "@/assets/childcare-2.jpg";
import elderlyCare2 from "@/assets/elderly-care-2.jpg";

const services = [
  {
    icon: Home,
    title: "خادمات للتنازل",
    description: "مدربات على جميع الأعمال المنزلية",
    details: "نوفر خادمات محترفات مدربات على أعلى مستوى من الكفاءة والخبرة في جميع الأعمال المنزلية. تشمل خدماتهن التنظيف، الغسيل، الكي، وترتيب المنزل.",
    image: serviceCleaningPro,
  },
  {
    icon: UtensilsCrossed,
    title: "طباخات محترفات",
    description: "خبرة في الطبخ العربي والعالمي",
    details: "طباخات ذوات خبرة واسعة في إعداد المأكولات العربية والعالمية. مدربات على معايير النظافة والسلامة الغذائية ويتمتعن بمهارات عالية في الطهي.",
    image: cookingPro,
  },
  {
    icon: Baby,
    title: "مربيات أطفال",
    description: "رعاية متخصصة للأطفال",
    details: "مربيات مؤهلات ومدربات على رعاية الأطفال من جميع الأعمار. يتمتعن بخبرة في التعامل مع الأطفال وتوفير بيئة آمنة ومحفزة لنموهم.",
    image: childcare2,
  },
  {
    icon: Sparkles,
    title: "رعاية المسنين",
    description: "عناية خاصة بكبار السن",
    details: "نوفر عاملات مدربات على رعاية كبار السن بكل اهتمام واحترام. تشمل الخدمات المساعدة اليومية، مرافقة المسنين، والعناية الشخصية.",
    image: elderlyCare2,
  },
];

const Services = () => {
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
              خدماتنا المتميزة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نوفر لك أفضل العاملات المنزليات المدربات من جميع الجنسيات
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                  <p className="text-xl text-gold font-semibold">{service.description}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">مدربات ومؤهلات بأعلى المعايير</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">فحوصات طبية شاملة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">فترة تجربة 7 أيام</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-primary rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-8 text-white/90">
              احصل على أفضل العاملات المنزليات المدربات اليوم
            </p>
            <a href="tel:0566995008">
              <button className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover-lift shadow-gold">
                اتصل بنا الآن
              </button>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
