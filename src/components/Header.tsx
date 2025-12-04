import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about/" },
  { name: "خدماتنا", path: "/services/" },
  { name: "الجنسيات", path: "/nationalities/" },
  { name: "المدونة", path: "/blog/" },
  { name: "الأسئلة الشائعة", path: "/faq/" },
  { name: "تواصل معنا", path: "/contact/" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-cairo ${
        scrolled 
          ? "bg-gradient-to-b from-primary/95 via-primary/90 to-primary/70 backdrop-blur-md" 
          : "bg-gradient-to-b from-primary/85 via-primary/70 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img src={logo} alt="مكتب لمسة" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white font-semibold transition-colors relative group ${
                  location.pathname === link.path ? "text-primary font-semibold" : ""
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0566995008">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Phone className="ml-2 h-4 w-4" />
                اتصل بنا
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
              isOpen 
                ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25" 
                : "text-foreground hover:bg-primary/10 hover:text-primary"
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-center items-center">
              {/* Hamburger lines */}
              <span 
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span 
                className={`h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border-t border-border/20 shadow-2xl rounded-b-2xl mx-4 mt-2">
                <div className="py-6 px-4 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                          location.pathname === link.path 
                            ? "bg-gradient-to-r from-primary/20 to-primary-light/10 text-primary font-semibold shadow-lg" 
                            : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-light/5 hover:text-primary hover:shadow-md"
                        }`}
                      >
                        <div className="relative z-10 flex items-center justify-between">
                          <span>{link.name}</span>
                          {location.pathname === link.path && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary rounded-full"
                            />
                          )}
                        </div>
                        {location.pathname === link.path && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                    className="pt-6 border-t border-border/20"
                  >
                    <a 
                      href="tel:0566995008" 
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 py-4 text-lg font-semibold">
                        <Phone className="ml-3 h-5 w-5" />
                        اتصل بنا
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
