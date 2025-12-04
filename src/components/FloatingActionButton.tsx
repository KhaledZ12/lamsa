import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(true); // مفتوح افتراضياً

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">

      {/* الأزرار (ثابتة بدون إخفاء DOM) */}
      <div className="flex flex-col items-center space-y-3 mb-3">

        {/* Call Button */}
        <motion.a
          href="tel:0566995008"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 20,
            pointerEvents: isExpanded ? "auto" : "none",
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant hover:shadow-2xl cursor-pointer">
            <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/966566995008"
          target="_blank"
          rel="noopener noreferrer"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 20,
            pointerEvents: isExpanded ? "auto" : "none",
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-elegant hover:shadow-2xl cursor-pointer">
            <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </div>
        </motion.a>
      </div>

      {/* زرار التبديل */}
      <motion.button
        onClick={toggleExpanded}
        whileTap={{ scale: 0.93 }}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-elegant hover:shadow-2xl transition-all duration-300 ${
          isExpanded ? "bg-gradient-gold" : "bg-gradient-primary"
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
        </motion.div>
      </motion.button>

    </div>
  );
};
