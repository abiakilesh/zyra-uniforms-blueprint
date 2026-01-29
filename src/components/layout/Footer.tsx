import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/zyra-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Zyra Uniforms" className="h-12" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium school uniform supplier in Tiruppur, Tamil Nadu. 
              Quality fabrics, trusted by schools across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/premium-combinations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Premium Combinations
                </Link>
              </li>
              <li>
                <Link to="/products/happy-days" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Happy Days
                </Link>
              </li>
              <li>
                <Link to="/products/eco-earth" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Eco Earth Mafatlal
                </Link>
              </li>
              <li>
                <Link to="/products/vision-combination" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vision Combination
                </Link>
              </li>
              <li>
                <Link to="/products/sport-wear" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sport Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  3/409, Kondatthuamman Nagar, Perumanallur, Tiruppur 641 666, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <a href="tel:+918807913062" className="hover:text-primary-foreground">88079 13062</a>
                  <span className="mx-2">|</span>
                  <a href="tel:+918289972184" className="hover:text-primary-foreground">82899 72184</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@zyrauniforms.com" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  info@zyrauniforms.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo in footer bottom */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="Zyra Uniforms" className="h-10" />
              <p className="text-primary-foreground/60 text-sm">
                © {new Date().getFullYear()} Zyra Uniforms. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/photo?fbid=122109059847197837&set=a.122097646749197837"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/p/DT2AkJLgaDf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/mylaimanjuvilas/status/2014593469302636844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
