import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
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
            <h1 className="text-5xl md:text-7xl font-ibm-plex-sans-arabic font-bold mb-6 gradient-text">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              نحن هنا لخدمتك على مدار الساعة. تواصل معنا بأي وسيلة تناسبك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/966566995008">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg shadow-gold">
                  <FaWhatsapp className="ml-2 h-6 w-6" />
                  تواصل عبر واتساب
                </Button>
              </a>
              <a href="tel:0566995008">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-6 text-lg">
                  <Phone className="ml-2 h-6 w-6" />
                  اتصل بنا الآن
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              ابقَ على تواصل
            </h2>
            <p className="text-xl text-muted-foreground">
              يسعدنا تواصلك معنا في أي وقت
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover-lift text-center"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">الهاتف</h3>
              <a
                href="tel:0566995008"
                className="text-lg text-primary hover:text-primary-light transition-colors font-semibold block"
              >
                0566995008
              </a>
              <p className="text-sm text-muted-foreground mt-2">متاح طوال الوقت</p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover-lift text-center"
            >
              <div className="bg-[#25D366] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaWhatsapp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">واتساب</h3>
              <a
                href="https://wa.me/966566995008"
                className="text-lg text-[#25D366] hover:text-[#20BA5A] transition-colors font-semibold block"
              >
                0566995008
              </a>
              <p className="text-sm text-muted-foreground mt-2">رد فوري</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover-lift text-center"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:info@ads-lamsa.com"
                className="text-sm text-gold hover:text-gold-dark transition-colors font-semibold block break-all"
              >
                info@ads-lamsa.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">نرد خلال 24 ساعة</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover-lift text-center"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">الموقع</h3>
              <p className="text-muted-foreground">
                المملكة العربية السعودية
              </p>
              <p className="text-sm text-muted-foreground mt-2">نخدم جميع المناطق</p>
            </motion.div>
          </div>

          {/* Working Hours & Social Media */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-2xl p-10 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 rounded-full p-3">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">ساعات العمل</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-lg text-white/90">السبت - الخميس</span>
                  <span className="text-xl font-bold">9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-white/90">الجمعة</span>
                  <span className="text-xl font-bold text-gold">مغلق</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-10 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">تابعنا على</h3>
              <p className="text-white/90 mb-8">ابقَ على اطلاع بآخر العروض والأخبار</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all hover-lift"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all hover-lift"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all hover-lift"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://wa.me/966566995008"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all hover-lift"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6 text-white" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;
