import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Import Premium Combination images
import premium01 from "@/assets/products/premium-01.png";
import premium02 from "@/assets/products/premium-02.png";
import premium03 from "@/assets/products/premium-03.png";
import premium04 from "@/assets/products/premium-04.png";
import premium05 from "@/assets/products/premium-05.png";
import premium06 from "@/assets/products/premium-06.png";
import premium07 from "@/assets/products/premium-07.png";
import premium08 from "@/assets/products/premium-08.png";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface CategoryData {
  title: string;
  description: string;
  catalogPdf: string;
  products: Product[];
}

const categoryData: Record<string, CategoryData> = {
  "premium-combinations": {
    title: "Mafatlal Premium Combinations",
    description: "Our premium fabric combinations offer superior quality, exceptional comfort, and long-lasting durability. Perfect for schools that demand the finest uniforms.",
    catalogPdf: "/catalogs/mafatlal-premium-combinations.pdf",
    products: [
      { id: 1, name: "Vision-01 | Sure Shot- SS194", image: premium01 },
      { id: 2, name: "Vision-02 | Big Boss-512", image: premium02 },
      { id: 3, name: "Vision-03 | Big Boss-5128", image: premium03 },
      { id: 4, name: "Vision-04 | Sure Shot-306", image: premium04 },
      { id: 5, name: "Vision-05 | Big Boss-569", image: premium05 },
      { id: 6, name: "Vision-06 | Big Boss-5128", image: premium06 },
      { id: 7, name: "Vision-07 | Big Boss-525", image: premium07 },
      { id: 8, name: "Vision-08 | Big Boss-5111", image: premium08 },
    ],
  },
  "happy-days": {
    title: "Mafatlal Happy Days",
    description: "Comfortable and colorful fabrics designed for everyday school wear. Easy to maintain and perfect for active students.",
    catalogPdf: "/catalogs/mafatlal-happy-days.pdf",
    products: [
      { id: 1, name: "Sunshine Yellow Mix", image: "" },
      { id: 2, name: "Ocean Blue Comfort", image: "" },
      { id: 3, name: "Forest Green Fresh", image: "" },
      { id: 4, name: "Cherry Red Vibrant", image: "" },
      { id: 5, name: "Purple Dream", image: "" },
      { id: 6, name: "Turquoise Breeze", image: "" },
      { id: 7, name: "Coral Sunset", image: "" },
      { id: 8, name: "Mint Fresh Collection", image: "" },
    ],
  },
  "eco-earth": {
    title: "Eco Earth Mafatlal",
    description: "Sustainable and environmentally friendly uniform fabrics. Made with eco-conscious materials without compromising on quality.",
    catalogPdf: "/catalogs/eco-earth-mafatlal.pdf",
    products: [
      { id: 1, name: "Natural Cotton Blend", image: "" },
      { id: 2, name: "Organic Green Series", image: "" },
      { id: 3, name: "Earth Brown Collection", image: "" },
      { id: 4, name: "Bamboo Fiber Mix", image: "" },
      { id: 5, name: "Recycled Navy Classic", image: "" },
      { id: 6, name: "Hemp Blend Grey", image: "" },
      { id: 7, name: "Sustainable White Pure", image: "" },
      { id: 8, name: "Eco Blue Harmony", image: "" },
    ],
  },
  "vision-combination": {
    title: "Mafatlal Vision Combination",
    description: "Modern and contemporary fabric combinations for the new age schools. Innovative designs meeting today's requirements.",
    catalogPdf: "/catalogs/mafatlal-premium-combinations.pdf",
    products: [
      { id: 1, name: "Modern Navy Vision", image: "" },
      { id: 2, name: "Contemporary Grey", image: "" },
      { id: 3, name: "Future Blue Series", image: "" },
      { id: 4, name: "Tech Green Innovation", image: "" },
      { id: 5, name: "Digital Maroon", image: "" },
      { id: 6, name: "Smart Black Edition", image: "" },
      { id: 7, name: "Next Gen White", image: "" },
      { id: 8, name: "Vision Royal Collection", image: "" },
    ],
  },
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;

  if (!data) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Products Grid - Images First */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Our Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.products.map((product, index) => (
              <div
                key={product.id}
                className="card-product overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-display font-bold text-primary">
                          {product.id}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">Product Image</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Catalog PDF Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Download Complete Catalog
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the complete catalog with all products, specifications, and pricing details in PDF format.
            </p>
            <a
              href={data.catalogPdf}
              download
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <Download className="w-6 h-6" />
              Download Catalog PDF
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Interested in These Products?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for pricing, bulk orders, or custom requirements.
          </p>
          <a
            href={`https://wa.me/918807913062?text=Hello! I'm interested in the ${data.title} products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2"
          >
            Get Quote on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
