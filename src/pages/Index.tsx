import { Link } from "react-router-dom";
import { Award, Users, Truck, Shield, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-uniforms.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Mafatlal certified fabrics ensuring durability and comfort for students.",
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description: "Serving schools across Tamil Nadu with reliable uniform solutions.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "On-time delivery to meet your academic calendar requirements.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product undergoes strict quality checks before dispatch.",
  },
];

const productCategories = [
  {
    name: "Mafatlal Premium Combinations",
    description: "High-quality premium fabric combinations for distinguished uniforms.",
    path: "/products/premium-combinations",
  },
  {
    name: "Mafatlal Happy Days",
    description: "Comfortable everyday wear designed for active school life.",
    path: "/products/happy-days",
  },
  {
    name: "Eco Earth Mafatlal",
    description: "Sustainable and eco-friendly uniform solutions.",
    path: "/products/eco-earth",
  },
  {
    name: "Mafatlal Vision Combination",
    description: "Modern designs meeting contemporary school requirements.",
    path: "/products/vision-combination",
  },
  {
    name: "Sport Wear",
    description: "Quality athletic uniforms for school sports activities.",
    path: "/products/sport-wear",
  },
  {
    name: "Hospitality",
    description: "Professional uniforms for hotels, restaurants and healthcare.",
    path: "/products/hospitality",
  },
  {
    name: "Other Products",
    description: "Industrial, security and specialized uniform solutions.",
    path: "/products/other-products",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Premium School Uniforms for Excellence
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Trusted by leading schools in Tamil Nadu. Quality fabrics, 
              impeccable tailoring, and reliable service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products/premium-combinations"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/918807913062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 text-lg"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Zyra Uniforms?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine quality materials with expert craftsmanship to deliver uniforms that last.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of Mafatlal certified school uniform fabrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={category.path}
                to={category.path}
                className="group card-product p-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Outfit Your School?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for bulk orders, custom requirements, or to discuss 
            your school's uniform needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 text-lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918807913062"
              className="bg-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/30 transition-colors"
            >
              Call: 88079 13062
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
