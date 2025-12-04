import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/luxury-home.jpg";

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Professional Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={footerBg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/90 to-accent/95 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="مكتب لمسة" className="h-16 w-auto" />
            <p className="text-sm text-white/90 leading-relaxed">
              مكتب لمسة للعمالة المنزلية - نوفر أفضل خدمات العمالة المنزلية في المملكة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/nationalities/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  الجنسيات
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/faq/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gold font-bold mb-4">معلومات قانونية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms/" className="text-sm text-white/80 hover:text-gold transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:0566995008" className="text-sm text-white/80 hover:text-gold transition-colors block">
                    0566995008
                  </a>
                  <a href="https://wa.me/966566995008" className="text-sm text-white/80 hover:text-gold transition-colors block">
                    واتساب
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ads-lamsa.com" className="text-sm text-white/80 hover:text-gold transition-colors">
                  info@ads-lamsa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  المملكة العربية السعودية
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
          <span>جميع الحقوق محفوظة لـ مكتب لمسة © 2025 </span>
              <span >By {'    '}
              <a
                href="https://pixeleg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
                style={{ color: 'hsl(16 65% 55%)' }}
              >
                Pixel-DM
              </a></span>          </p>
        </div>
      </div>
    </footer>
  );
};
