import Layout from "@/components/layout/Layout";
import gayathriVidhya from "@/assets/clients/gayathri-vidhya.png";
import thaiMatriculation from "@/assets/clients/thai-matriculation.png";
import littleKites from "@/assets/clients/little-kites.png";
import gayathriCentral from "@/assets/clients/gayathri-central.png";
import goodSam from "@/assets/clients/good-sam-new.jpeg";
import cnmNdParekh from "@/assets/clients/cnm-nd-parekh.jpeg";
import nammhss from "@/assets/clients/nammhss.jpeg";
import sriSakthiVinayagar from "@/assets/clients/sri-sakthi-vinayagar.jpeg";
import hayagrivas from "@/assets/clients/hayagrivas.jpeg";
import akalVilakku from "@/assets/clients/akal-vilakku.jpeg";

const clients = [
  {
    name: "Gayathri Vidhya Matriculation Hr. Sec. School",
    location: "Chinnamanur",
    logo: gayathriVidhya,
  },
  {
    name: "Thai Matriculation School",
    location: "Chinnamanur",
    logo: thaiMatriculation,
  },
  {
    name: "Little Kites",
    location: "Tamil Nadu",
    logo: littleKites,
  },
  {
    name: "Gayathri Central School",
    location: "Tamil Nadu",
    logo: gayathriCentral,
  },
  {
    name: "Good Sam School",
    location: "Tamil Nadu",
    logo: goodSam,
  },
  {
    name: "C.N.M. & N.D. Parekh ICSE School",
    location: "SVKM's",
    logo: cnmNdParekh,
  },
  {
    name: "Nagamani Ammal Memorial Matriculation Hr. Sec. School",
    location: "Cumbum",
    logo: nammhss,
  },
  {
    name: "Sri Sakthi Vinayagar Math. S.C. Sel. School",
    location: "Cumbum",
    logo: sriSakthiVinayagar,
  },
  {
    name: "Hayagrivas International School (CBSE)",
    location: "Tamil Nadu",
    logo: hayagrivas,
  },
  {
    name: "Akal Vilakku Educational Trust",
    location: "Musiri",
    logo: akalVilakku,
  },
];

const Clients = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Valued Clients
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Trusted by leading educational institutions across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Schools We Partner With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are proud to supply quality uniforms to these esteemed institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-md transition-all duration-300 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-40 h-40 flex items-center justify-center mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">{client.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Join Our Growing Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Zyra Uniforms for reliable, quality school uniform solutions. 
            Contact us today to discuss your requirements.
          </p>
          <a
            href="https://wa.me/918807913062?text=Hello! I'm interested in becoming a Zyra Uniforms client."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
