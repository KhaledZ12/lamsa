import { useState, useEffect } from "react";
import { X, Phone, Check, Clock, Headset, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Dialog, 
  DialogContent, 
  DialogOverlay,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button";

const GRADIENT_PRIMARY = 'linear-gradient(135deg, hsl(213, 70%, 40%), hsl(213, 60%, 55%))';
const GRADIENT_GOLD = 'linear-gradient(135deg, hsl(43, 65%, 45%), hsl(43, 55%, 65%))';
const SHADOW_ELEGANT = '0 10px 40px -10px hsl(213 70% 40% / 0.3)';
const SHADOW_GOLD = '0 10px 30px -10px hsl(43 60% 55% / 0.4)';
const WHATSAPP_COLOR = "bg-[#25D366] hover:bg-[#1DA851]";

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
    
  }, []);

  const features = [
    {
      icon: Check,
      title: "ضمان الجودة",
      description: "عاملات مدربات ومؤهلات مع ضمان الاستبدال"
    },
    {
      icon: Clock,
      title: "تنازل سريع",
      description: "خدمة تنازل خلال 3-7 أيام عمل"
    },
    {
      icon: Headset,
      title: "متابعة مستمرة",
      description: "دعم ومتابعة بعد التنازل"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      
      {/* DialogOverlay: Dark overlay background */}
      <DialogOverlay className="fixed inset-0 z-50 bg-black/70 transition-opacity duration-300" /> 
      
      <DialogContent 
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] max-w-xs sm:max-w-md 
                   bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border-0 overflow-hidden z-[60] transition-all duration-300"
      >
        
        {/* Close Button: Simple white/gray */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition z-50 text-gray-700"
          aria-label="إغلاق النافذة"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Accessibility: Hidden DialogTitle and DialogDescription */}
        <DialogTitle className="sr-only">
          أفضل العاملات المنزلية للتنازل - عرض حصري ومحدود
        </DialogTitle>
        <DialogDescription className="sr-only">
          خدمات تنازل متكاملة مع ضمان الجودة والموثوقية لراحة منزلك. تواصل معنا عبر واتساب أو الاتصال المباشر للحصول على أفضل العاملات المنزلية.
        </DialogDescription>

        {/* Header/Title Section */}
        <div className="text-center mb-5 pt-2">
          {/* Tag: Uses the Primary Gradient with white text */}
          <div 
            className="text-white text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-3"
            style={{ background: GRADIENT_PRIMARY, boxShadow: SHADOW_ELEGANT }}
          >
            ✨ عرض حصري ومحدود
          </div>
          
          {/* Main Title (Smaller on mobile) */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
            أفضل العاملات المنزلية للتنازل
          </h2>
          {/* Subtitle (Smaller text) */}
          <p className="text-gray-600 mt-2 text-sm leading-relaxed px-1">
            خدمات تنازل متكاملة مع ضمان الجودة والموثوقية لراحة منزلك.
          </p>
        </div>

        {/* Feature Grid: Uses Gold Gradient icons for premium look */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 rounded-xl">
              <div 
                className={`p-2 rounded-lg mb-2`}
                style={{ background: GRADIENT_GOLD, boxShadow: SHADOW_GOLD }}
              >
                {/* Icon is white to contrast with the gold background */}
                <feature.icon className={`w-5 h-5 text-white`} />
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{feature.title}</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">{feature.description}</p>
              {/* Description hidden on mobile to save space */}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          {/* WhatsApp Button (Kept standard green) */}
          <a 
            href="https://wa.me/966566995008" 
            className="block" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className={`w-full h-12 sm:h-14 text-base sm:text-lg rounded-xl text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-between px-5 ${WHATSAPP_COLOR}`}
            >
              <div className="flex items-center gap-2">
                <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                <span>تواصل واتساب</span>
              </div>
              <span className="font-mono text-sm">0566995008</span>
            </Button>
          </a>

          {/* Call Button: Uses the Premium Primary Gradient */}
          <a href="tel:0566995008" className="block">
            <Button 
              className={`w-full h-12 sm:h-14 text-base sm:text-lg rounded-xl text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-between px-5`}
              style={{ background: GRADIENT_PRIMARY, boxShadow: SHADOW_ELEGANT }}
            >
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                اتصال مباشر
              </div>
              <span className="font-mono text-sm">0566995008</span>
            </Button>
          </a>
        </div>
        
        {/* Footer Guarantee */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-gray-700">خدمات موثوقة</span>
            • استلام فوري
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};