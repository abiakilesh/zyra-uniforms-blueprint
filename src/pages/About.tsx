import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutImage from "@/assets/about-fabric.jpg";

const values = [
  "Premium Mafatlal certified fabrics",
  "Strict quality control measures",
  "Timely delivery commitments",
  "Competitive wholesale pricing",
  "Custom uniform solutions",
  "Long-lasting durability",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Zyra Uniforms
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner for premium school uniforms in Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Crafting Quality Since Day One
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Based in Tiruppur, the textile hub of India, Zyra Uniforms has 
                  established itself as a premier supplier of school uniforms. We 
                  specialize in Mafatlal certified fabrics, known for their durability, 
                  comfort, and premium quality.
                </p>
                <p>
                  Our commitment to excellence has made us the preferred choice for 
                  schools across Tamil Nadu. We understand that school uniforms are 
                  more than just clothing – they represent identity, pride, and unity.
                </p>
                <p>
                  From fabric selection to final delivery, we maintain strict quality 
                  standards to ensure every student looks their best and feels comfortable 
                  throughout their academic journey.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={aboutImage}
                alt="Premium fabric quality"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and service excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-card text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              <strong className="text-foreground">Zyra Uniforms</strong>
            </p>
            <p className="text-muted-foreground mb-6">
              3/409, Kondatthuamman Nagar, Perumanallur<br />
              Tiruppur 641 666, Tamil Nadu
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918807913062"
                className="btn-primary"
              >
                Call: 88079 13062
              </a>
              <a
                href="tel:+918289972184"
                className="btn-secondary"
              >
                Call: 82899 72184
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
