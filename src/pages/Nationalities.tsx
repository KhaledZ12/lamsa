import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { PH, ID, KE, UG, ET, BD } from 'country-flag-icons/react/3x2';
import philippinesImg from "@/assets/nationality-philippines.jpg";
import indonesiaImg from "@/assets/nationality-indonesia.jpg";
import kenyaImg from "@/assets/nationality-kenya.jpg";
import ugandaImg from "@/assets/nationality-uganda.jpg";
import ethiopiaImg from "@/assets/nationality-ethiopia.jpg";
import bangladeshImg from "@/assets/nationality-bangladesh.jpg";

// In Nationalities.tsx
interface FlagProps {
  country: string;
  className?: string;
}

const FlagComponent: React.FC<FlagProps> = ({ country, className = '' }) => {
  const flagComponents: Record<string, React.ReactNode> = {
    'الفلبين': <PH className={`w-full h-full object-cover ${className}`} />,
    'إندونيسيا': <ID className={`w-full h-full object-cover ${className}`} />,
    'كينيا': <KE className={`w-full h-full object-cover ${className}`} />,
    'أوغندا': <UG className={`w-full h-full object-cover ${className}`} />,
    'إثيوبيا': <ET className={`w-full h-full object-cover ${className}`} />,
    'بنغلاديش': <BD className={`w-full h-full object-cover ${className}`} />
  };

  const flag = flagComponents[country];

  return flag ? (
    <div className="w-8 h-6 overflow-hidden rounded shadow-md">
      {flag}
    </div>
  ) : null;
};

const nationalities = [
  {
    name: "الفلبين",
    flag: <FlagComponent country="الفلبين" />,
    image: philippinesImg,
    features: [
      "مدربات على أعلى مستوى",
      "خبرة في رعاية الأطفال",
      "إجادة اللغة الإنجليزية",
    ],
  },
  {
    name: "إندونيسيا",
    flag: <FlagComponent country="إندونيسيا" />,
    image: indonesiaImg,
    features: [
      "خبرة في الأعمال المنزلية",
      "مهارات متعددة",
      "التعاون والمرونة",
    ],
  },
  {
    name: "كينيا",
    flag: <FlagComponent country="كينيا" />,
    image: kenyaImg,
    features: [
      "خبرة في الطبخ",
      "مرونة في العمل",
      "سرعة في الإنجاز",
    ],
  },
  {
    name: "أوغندا",
    flag: <FlagComponent country="أوغندا" />,
    image: ugandaImg,
    features: [
      "قوة بدنية عالية",
      "مهارات التنظيف الشامل",
      "التزام وانضباط",
    ],
  },
  {
    name: "إثيوبيا",
    flag: <FlagComponent country="إثيوبيا" />,
    image: ethiopiaImg,
    features: [
      "أمانة وإخلاص",
      "تعلم سريع",
      "التزام بالعمل",
    ],
  },
  {
    name: "بنغلاديش",
    flag: <FlagComponent country="بنغلاديش" />,
    image: bangladeshImg,
    features: [
      "مهارات طبخ متنوعة",
      "خبرة في رعاية المسنين",
      "تعليم عالي",
    ],
  },
];

const Nationalities = () => {
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
              الجنسيات المتوفرة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نوفر لكم عاملات منزليات من أفضل الجنسيات الآسيوية والأفريقية المدربة والمؤهلة
            </p>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-primary rounded-2xl p-8 text-white mb-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">يوجد عاملات للتنازل</h2>
            <p className="text-lg text-white/90 mb-2">
              مطلوب عاملات للتنازل
            </p>
            <p className="text-white/80">
              يعلن مكتب لمسة عن حاجته لخادمات من إندونيسيا للتنازل. نوفر عاملات منزلية من جميع الجنسيات المدربة والمؤهلة.
            </p>
          </motion.div>

          {/* Nationalities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nationalities.map((nationality, index) => (
              <motion.div
                key={nationality.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={nationality.image}
                      alt={nationality.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300 p-1">
                      <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full">
                        {nationality.flag}
                      </div>
                    </div>
                    <h3 className="absolute bottom-4 right-4 text-2xl font-bold text-white">
                      {nationality.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {nationality.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-gold/10 rounded-full p-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-gold" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-muted to-background rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">
              ضمان الجودة والكفاءة
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              جميع العاملات يخضعن لاختبارات مهارية ودورات تدريبية مكثفة لضمان تقديم أفضل الخدمات المنزلية. نحرص على اختيار العاملات ذوات الكفاءة العالية والأخلاق الحميدة.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Nationalities;
