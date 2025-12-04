import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كم تستغرق إجراءات نقل الكفالة؟",
    answer: "عادة ما تستغرق إجراءات نقل الكفالة من 3 إلى 7 أيام عمل، حسب جاهزية الأوراق المطلوبة. نحن نعمل على تسريع الإجراءات قدر الإمكان لضمان حصولك على الخدمة بأسرع وقت.",
  },
  {
    question: "هل هناك فترة تجربة؟",
    answer: "نعم، نوفر فترة تجربة مدتها 7 أيام للتأكد من رضاك الكامل عن العاملة. خلال هذه الفترة، يمكنك تقييم أداء العاملة ومدى ملاءمتها لاحتياجاتك.",
  },
  {
    question: "ما هي الجنسيات المتوفرة؟",
    answer: "نوفر عاملات منزلية من جميع الجنسيات الآسيوية والأفريقية بما في ذلك: الفلبين، إندونيسيا، كينيا، أوغندا، إثيوبيا، وبنغلاديش. جميع العاملات مدربات ومؤهلات.",
  },
  {
    question: "هل العاملات مدربات؟",
    answer: "نعم، جميع العاملات يخضعن لدورات تدريبية مكثفة واختبارات مهارية لضمان تقديم أفضل الخدمات. كما نقوم بتقييم مهاراتهن باستمرار.",
  },
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer: "نقدم مجموعة متنوعة من الخدمات تشمل: خادمات للأعمال المنزلية، طباخات محترفات، مربيات أطفال، وعاملات رعاية المسنين. جميع الخدمات متاحة للتنازل ونقل الكفالة.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer: "يمكنك التواصل معنا عبر الهاتف، واتساب، أو البريد الإلكتروني. فريقنا متاح للرد على استفساراتك في أي وقت.",
  },
  {
    question: "هل تقدمون خدمة المتابعة بعد التوظيف؟",
    answer: "نعم، نقدم خدمة متابعة مستمرة بعد استلام العاملة للتأكد من رضا العميل وحل أي مشكلات قد تطرأ. رضاك هو أولويتنا.",
  },
  {
    question: "ما هي الأوراق المطلوبة لنقل الكفالة؟",
    answer: "تشمل الأوراق المطلوبة: صورة من الهوية الوطنية، صورة من جواز السفر، وموافقة الطرفين على نقل الكفالة. سنساعدك في إتمام جميع الإجراءات بسهولة.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActionButton />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-ibm-plex-sans-arabic font-bold mb-6 gradient-text">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-muted-foreground">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-lg hover-lift"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-right pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-primary rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
            <p className="text-xl mb-8 text-white/90">
              تواصل معنا مباشرة وسنكون سعداء بمساعدتك
            </p>
            <a href="/contact">
              <button className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover-lift shadow-gold">
                تواصل معنا
              </button>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
