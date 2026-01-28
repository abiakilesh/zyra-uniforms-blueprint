import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/zyra-logo.png";

const productCategories = [
  { name: "Mafatlal Premium Combinations", path: "/products/premium-combinations" },
  { name: "Mafatlal Happy Days", path: "/products/happy-days" },
  { name: "Eco Earth Mafatlal", path: "/products/eco-earth" },
  { name: "Mafatlal Vision Combination", path: "/products/vision-combination" },
  { name: "Sport Wear", path: "/products/sport-wear" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = location.pathname.startsWith("/products");

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Zyra Uniforms" className="h-12 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={isActive("/") ? "nav-link-active" : "nav-link"}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={isActive("/about") ? "nav-link-active" : "nav-link"}
            >
              About
            </Link>
            <Link
              to="/clients"
              className={isActive("/clients") ? "nav-link-active" : "nav-link"}
            >
              Our Clients
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 ${isProductActive ? "nav-link-active" : "nav-link"}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-200 ${
                  isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                {productCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block px-4 py-3 hover:bg-secondary transition-colors text-foreground/80 hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={isActive("/contact") ? "nav-link-active" : "nav-link"}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/918807913062"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={isActive("/") ? "nav-link-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={isActive("/about") ? "nav-link-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/clients"
                className={isActive("/clients") ? "nav-link-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Clients
              </Link>
              <div className="space-y-2">
                <span className="font-semibold text-primary">Products</span>
                <div className="pl-4 space-y-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block text-foreground/70 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className={isActive("/contact") ? "nav-link-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/918807913062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center mt-2"
              >
                Get Quote on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
