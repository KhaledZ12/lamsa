import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Home, UtensilsCrossed, Baby, Sparkles, Check, ArrowRight, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PH, ID, KE, UG, ET, BD } from 'country-flag-icons/react/3x2';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { PromoPopup } from "@/components/PromoPopup";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import touch from "@/assets/touch.png";
import cleaning1 from "@/assets/cleaning-1.webp";
import cleaning2 from "@/assets/cleaning-2.jpg";
import cleaning3 from "@/assets/cleaning-3.jpg";
import cleaning4 from "@/assets/cleaning-4.webp";
import cooking from "@/assets/cooking.jpg";
import childcare from "@/assets/childcare.webp";
import elderly from "@/assets/elderly-care.webp";
import staffGroup from "@/assets/staff-group.jpg";
import nanny from "@/assets/nanny.png";
import cleaningResult from "@/assets/cleaning-result.jpg";
import serviceCleaningPro from "@/assets/service-cleaning-pro.jpg";
import philippinesImg from "@/assets/nationality-philippines.jpg";
import indonesiaImg from "@/assets/nationality-indonesia.jpg";
import kenyaImg from "@/assets/nationality-kenya.jpg";
import ugandaImg from "@/assets/nationality-uganda.jpg";
import ethiopiaImg from "@/assets/nationality-ethiopia.jpg";
import bangladeshImg from "@/assets/nationality-bangladesh.jpg";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('ar-SA')}</span>;
};

const services = [
  { icon: Home, title: "خادمات للتنازل", description: "مدربات على جميع الأعمال المنزلية", image: serviceCleaningPro },
  { icon: UtensilsCrossed, title: "طباخات محترفات", description: "خبرة في الطبخ العربي والعالمي", image: cooking },
  { icon: Baby, title: "مربيات أطفال", description: "رعاية متخصصة للأطفال", image: childcare },
  { icon: Sparkles, title: "عاملات للتنازل جميع الجنسيات", description: "نوفر لكم العديد من الجنسيات", image: cleaningResult },
];

const whyChooseUs = [
  { title: "خادمات للتنازل مدربات", description: "خادمات محترفات مدربات على أعلى مستوى من الكفاءة والخبرة", image: cleaning2 },
  { title: "شغالات للتنازل مدربات", description: "شغالات مدربات ومؤهلات لتلبية كافة احتياجاتكم المنزلية", image: cleaning3 },
];

const features = [
  { title: "ضمان الجودة", description: "جميع العاملات مدربات ومؤهلات بأعلى المعايير المهنية" },
  { title: "خبرة 10 سنوات", description: "أكثر من عقد من الخبرة في مجال العمالة المنزلية" },
  { title: "سرعة في الإنجاز", description: "إتمام جميع الإجراءات بأسرع وقت ممكن" },
  { title: "دعم مستمر", description: "متابعة دائمة مع العملاء بعد استلام العاملة" },
  { title: "فحوصات طبية", description: "جميع العاملات تخضع لفحوصات طبية شاملة" },
  { title: "رضا العملاء", description: "أكثر من 8000 عميل راضٍ عن خدماتنا" },
];

const steps = [
  { number: "01", title: "تواصل معنا", description: "اتصل بنا عبر الهاتف أو واتساب وحدد احتياجاتك" },
  { number: "02", title: "اختر العاملة المناسبة", description: "قم بزيارة المكتب واختيار العاملة بعد إجراء المقابلة" },
  { number: "03", title: "إتمام الإجراءات", description: "توقيع العقد وإنهاء جميع الأوراق المطلوبة" },
  { number: "04", title: "استلام العاملة", description: "استلم العاملة مع فترة تجربة 7 أيام ومتابعة مستمرة" },
];

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
    <div className="w-6 h-4 overflow-hidden rounded shadow-sm">
      {flag}
    </div>
  ) : null;
};

const nationalities = [
  {
    name: "الفلبين",
    flag: <FlagComponent country="الفلبين" />,
    image: philippinesImg,
    features: ["خبرة في رعاية الأطفال", "إجادة اللغة الإنجليزية"]
  },
  {
    name: "إندونيسيا",
    flag: <FlagComponent country="إندونيسيا" />,
    image: indonesiaImg,
    features: ["خبرة في الأعمال المنزلية", "مهارات متعددة"]
  },
  {
    name: "كينيا",
    flag: <FlagComponent country="كينيا" />,
    image: kenyaImg,
    features: ["خبرة في الطبخ", "سرعة في الإنجاز"]
  },
  {
    name: "أوغندا",
    flag: <FlagComponent country="أوغندا" />,
    image: ugandaImg,
    features: ["قوة بدنية عالية", "مهارات التنظيف الشامل"]
  },
  {
    name: "إثيوبيا",
    flag: <FlagComponent country="إثيوبيا" />,
    image: ethiopiaImg,
    features: ["أمانة وإخلاص", "تعلم سريع"]
  },
  {
    name: "بنغلاديش",
    flag: <FlagComponent country="بنغلاديش" />,
    image: bangladeshImg,
    features: ["مهارات طبخ متنوعة", "خبرة في رعاية المسنين"]
  }
];

const testimonials = [
  {
    name: "أحمد السعيد",
    location: "الرياض",
    text: "خدمة ممتازة واحترافية عالية. العاملة التي استلمتها كانت مدربة جداً وملتزمة. شكراً لمكتب لمسة.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"
  },
  {
    name: "فاطمة محمد",
    location: "جدة",
    text: "تعامل راقي وسرعة في إنجاز المعاملات. أنصح الجميع بالتعامل مع مكتب لمسة للعمالة المنزلية.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"
  },
  {
    name: "خالد العتيبي",
    location: "الدمام",
    text: "أفضل مكتب تعاملت معه. المتابعة المستمرة والدعم الكامل جعل التجربة سهلة ومريحة.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khaled"
  },
  {
    name: "نورة القحطاني",
    location: "الرياض",
    text: "العاملة المنزلية متميزة وأخلاقها عالية. المكتب وفر لي كل احتياجاتي بكل سهولة.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noura"
  },
  {
    name: "عبدالله الشمري",
    location: "المدينة المنورة",
    text: "مصداقية ووضوح في التعامل. فترة التجربة أعطتني راحة البال. شكراً لكم.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah"
  },
  {
    name: "مريم العنزي",
    location: "الرياض",
    text: "تجربة رائعة من البداية للنهاية. الأسعار ممتازة والخدمة احترافية جداً.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam"
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActionButton />
      <PromoPopup />

      {/* Hero Section */}
      <section className="relative fix-mobile h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden">

        {/* الخلفية */}
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/85 to-gold/75" />
        </div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white py-12 md:py-20">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto space-y-6 md:space-y-12">

            {/* العنوان */}
            <div className="relative w-full px-4 md:px-0 flex justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-6xl 
                       font-ibm-plex-sans-arabic font-black
                       leading-relaxed
                       pb-4
                       bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 
                       bg-clip-text text-transparent 
                       drop-shadow-2xl">
                مكتب لمسة للعمالة المنزلية
              </h1>
            </div>

            {/* النص الوصفي */}
            <div className="w-full max-w-2xl md:max-w-3xl mx-auto px-4">
              <div className="relative bg-white/15 md:bg-gradient-to-br md:from-white/20 md:to-white/10 
                        backdrop-blur-md
                        rounded-full
                        px-8 py-5 md:px-10 md:py-7
                        border border-white/30 md:border-2 md:border-white/40 
                        shadow-lg md:shadow-2xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                        font-medium md:font-semibold noto-kufi-arabic-regular
                        text-white text-center leading-relaxed drop-shadow-md">
                  يوجد عاملات للتنازل نقل كفالة من جميع الجنسيات والاستلام فوري ومطلوب عاملات للتنازل من جميع الجنسيات استلام فوري بعقد موثق
                </p>
              </div>
            </div>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full max-w-2xl mx-auto px-4">
              <a href="tel:0566995008" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-500 hover:from-gold-dark hover:to-yellow-600 
                                      text-white font-bold noto-kufi-arabic-regular
                                      px-8 md:px-10 lg:px-12 
                                      py-5 md:py-6 lg:py-7 
                                      text-base md:text-lg lg:text-xl
                                      shadow-2xl shadow-gold/50 
                                      w-full sm:w-auto
                                      transform hover:scale-105 transition-all duration-300
                                      border-2 border-yellow-300/30">
                  <Phone className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                  اتصل بنا الآن
                </Button>
              </a>

              <a href="https://wa.me/966566995008" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 
                                      text-white font-bold noto-kufi-arabic-regular
                                      px-8 md:px-10 lg:px-12 
                                      py-5 md:py-6 lg:py-7 
                                      text-base md:text-lg lg:text-xl
                                      w-full sm:w-auto 
                                      shadow-2xl shadow-green-500/50 
                                      transform hover:scale-105 transition-all duration-300
                                      border-2 border-green-300/30">
                  <FaWhatsapp className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* سهم التنقل لأسفل */}
        <motion.div
          className="absolute bottom-8 md:bottom-10 left-1/2 cursor-pointer z-20"
          initial={{ x: "-50%", y: 0 }}
          animate={{ y: [0, -10, 0], x: "-50%" }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            const element = document.getElementById('services');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img
            src={touch}
            alt="Touch to scroll"
            className="w-12 h-12 md:w-14 md:h-14 opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>

      </section>


      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              توفر العمالة المنزلية
            </h2>
            <p className="text-xl text-muted-foreground">يوجد عاملات للتنازل</p>
            <p className="text-lg text-muted-foreground mt-2">
              نوفر مجموعة مميزة من العاملات المنزليات الجاهزات للتنازل من جميع الجنسيات، مع ضمان الجودة والكفاءة في الأداء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <img src={cleaning2} alt="عاملات للتنازل" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">يوجد عاملات للتنازل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نوفر مجموعة مميزة من العاملات المنزليات الجاهزات للتنازل من جميع الجنسيات، مع ضمان الجودة والكفاءة في الأداء
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <img src={staffGroup} alt="مطلوب عاملات" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gold">مطلوب عاملات للتنازل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نبحث عن عاملات منزلية للتنازل من مختلف الجنسيات، مع مراعاة الشروط والمتطلبات الخاصة بكل عميل
                </p>
              </div>
            </motion.div>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary"
          >
            خدمات احترافية متكاملة
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-vazirmatn font-bold mb-4 gradient-text">
              رؤيتنا ورسالتنا وهدفنا
            </h2>
            <p className="text-xl text-muted-foreground">
              نلتزم بتقديم أفضل الخدمات وتحقيق أعلى معايير الجودة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                نسعي أن يكون مكتب لمسة هو المكتب المفضل لعملائنا من خلال تيسير عملية نقل الخدمات وتقديم لهم افضل الخدمات المتميزة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">رسالتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                نعمل على توفير العمالة المنزلية من كلا الجنسيات وتلبية جميع احتياجات العملاء ونقدم لهم افضل الخدمات والمعايير التي تحفظ حقوقهم كما أننا نلتزم في كافة تعاملاتنا بالمصداقية والوضوح.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-lg text-center hover-lift"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">هدفنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                هو إرضاء العميل بكل ما نستطيع، وكذلك تحقيق تطور في مجال العمالة المنزلية وبناء ثقافة الاحترام بين العاملة واصحاب العمل وفقا لثقافتنا العربية.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-vazirmatn font-bold mb-4 gradient-text">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-muted-foreground">
              نوفر لك أفضل العاملات المنزليات المدربات من جميع الجنسيات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "خادمات للتنازل", desc: "مدربات على جميع الأعمال المنزلية" },
              { icon: UtensilsCrossed, title: "طباخات محترفات", desc: "خبرة في الطبخ العربي والعالمي" },
              { icon: Baby, title: "مربيات أطفال", desc: "رعاية متخصصة للأطفال" },
              { icon: Sparkles, title: "عاملات من جميع الجنسيات", desc: "نوفر لكم العديد من الجنسيات" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg text-center hover-lift"
              >
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-vazirmatn font-bold mb-4 gradient-text">
              لماذا تختار مكتب لمسة؟
            </h2>
            <p className="text-xl text-muted-foreground">
              نحن نقدم أفضل الخدمات بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift"
              >
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-lg hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 rounded-full p-2 flex-shrink-0">
                    <Check className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-vazirmatn font-bold mb-4 gradient-text">
              كيف نعمل؟
            </h2>
            <p className="text-xl text-muted-foreground">
              أربع خطوات بسيطة للحصول على العاملة المنزلية المثالية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg hover-lift text-center">
                  <div className="text-6xl font-bold text-gold/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-gold">👥</span>
                <AnimatedCounter end={8560} />+
              </div>
              <p className="text-xl text-white/90">نقل كفالة عاملات</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-gold">📝</span>
                <AnimatedCounter end={7633} />+
              </div>
              <p className="text-xl text-white/90">عقود تمت بنجاح</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-gold">⭐</span>
                <AnimatedCounter end={8290} />+
              </div>
              <p className="text-xl text-white/90">عميل راضي عن الخدمة</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nationalities Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-vazirmatn font-bold mb-4 gradient-text">
              الجنسيات المتوفرة
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              نوفر لكم عاملات منزليات من أفضل الجنسيات الآسيوية والأفريقية المدربة والمؤهلة
            </p>
            <div className="bg-gradient-primary rounded-xl p-6 text-white inline-block">
              <p className="text-lg text-white font-semibold mb-2">يوجد عاملات للتنازل | مطلوب عاملات للتنازل</p>
              <p className="text-sm text-white/80">
                يعلن مكتب لمسة عن حاجته لخادمات من إندونيسيا للتنازل. نوفر عاملات منزلية من جميع الجنسيات المدربة والمؤهلة.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {nationalities.map((nationality, index) => (
              <motion.div
                key={nationality.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div className="relative h-40 overflow-hidden">
                    <img src={nationality.image} alt={nationality.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-scale-in p-1">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        {nationality.flag}
                      </div>
                    </div>
                    <h3 className="absolute bottom-2 right-2 text-lg font-bold text-white">{nationality.name}</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {nationality.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/nationalities">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                عرض جميع الجنسيات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-vazirmatn font-bold mb-4 gradient-text">
              آراء عملائنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ثقة عملائنا هي أغلى ما نملك. اقرأ تجاربهم الحقيقية معنا
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(currentTestimonial * 3, currentTestimonial * 3 + 3).map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="bg-card rounded-3xl p-8 shadow-elegant hover-lift relative overflow-hidden h-full">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                    {/* Quote icon */}
                    <div className="absolute top-4 left-4 text-6xl text-gold/10 font-serif leading-none">"</div>

                    {/* Customer Avatar */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-primary rounded-full p-1">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-gold" />
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-gold text-gold" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed relative z-10 mb-4">
                      {testimonial.text}
                    </p>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-2 text-xs text-gold font-semibold">
                      <Check className="h-4 w-4" />
                      <span>عميل موثق</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gradient-primary text-white rounded-full p-4 shadow-elegant hover:scale-110 transition-all hover-lift z-20"
              aria-label="Previous"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-gradient-primary text-white rounded-full p-4 shadow-elegant hover:scale-110 transition-all hover-lift z-20"
              aria-label="Next"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-12">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${i === currentTestimonial ? 'w-8 bg-gold' : 'w-2 bg-muted-foreground/30'
                    }`}
                  aria-label={`Go to testimonial set ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              احصل على أفضل العاملات المنزليات المدربات اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0566995008">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg shadow-gold">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا الآن
                </Button>
              </a>
              <a href="https://wa.me/966566995008">
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg shadow-gold">
                  <FaWhatsapp className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
