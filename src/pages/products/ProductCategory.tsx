import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface Product {
  id: number;
  name: string;
  image: string;
  pdfUrl: string;
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
      { id: 1, name: "Classic Navy & White Combo", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 2, name: "Royal Blue Premium", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 3, name: "Maroon & Cream Blend", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 4, name: "Bottle Green Elite", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 5, name: "Grey Professional", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 6, name: "Sky Blue Classic", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 7, name: "Brown Prestige", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 8, name: "Black & White Executive", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
    ],
  },
  "happy-days": {
    title: "Mafatlal Happy Days",
    description: "Comfortable and colorful fabrics designed for everyday school wear. Easy to maintain and perfect for active students.",
    catalogPdf: "/catalogs/mafatlal-happy-days.pdf",
    products: [
      { id: 1, name: "Sunshine Yellow Mix", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 2, name: "Ocean Blue Comfort", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 3, name: "Forest Green Fresh", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 4, name: "Cherry Red Vibrant", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 5, name: "Purple Dream", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 6, name: "Turquoise Breeze", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 7, name: "Coral Sunset", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
      { id: 8, name: "Mint Fresh Collection", image: "", pdfUrl: "/catalogs/mafatlal-happy-days.pdf" },
    ],
  },
  "eco-earth": {
    title: "Eco Earth Mafatlal",
    description: "Sustainable and environmentally friendly uniform fabrics. Made with eco-conscious materials without compromising on quality.",
    catalogPdf: "/catalogs/eco-earth-mafatlal.pdf",
    products: [
      { id: 1, name: "Natural Cotton Blend", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 2, name: "Organic Green Series", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 3, name: "Earth Brown Collection", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 4, name: "Bamboo Fiber Mix", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 5, name: "Recycled Navy Classic", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 6, name: "Hemp Blend Grey", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 7, name: "Sustainable White Pure", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
      { id: 8, name: "Eco Blue Harmony", image: "", pdfUrl: "/catalogs/eco-earth-mafatlal.pdf" },
    ],
  },
  "vision-combination": {
    title: "Mafatlal Vision Combination",
    description: "Modern and contemporary fabric combinations for the new age schools. Innovative designs meeting today's requirements.",
    catalogPdf: "/catalogs/mafatlal-premium-combinations.pdf",
    products: [
      { id: 1, name: "Modern Navy Vision", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 2, name: "Contemporary Grey", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 3, name: "Future Blue Series", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 4, name: "Tech Green Innovation", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 5, name: "Digital Maroon", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 6, name: "Smart Black Edition", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 7, name: "Next Gen White", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
      { id: 8, name: "Vision Royal Collection", image: "", pdfUrl: "/catalogs/mafatlal-premium-combinations.pdf" },
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

      {/* Download Full Catalog */}
      <section className="bg-secondary py-6">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            <span className="font-medium text-foreground">Download complete catalog for this category</span>
          </div>
          <a
            href={data.catalogPdf}
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Catalog PDF
          </a>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.products.map((product, index) => (
              <div
                key={product.id}
                className="card-product overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-display font-bold text-primary">
                        {product.id}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">Product Image</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {product.name}
                  </h3>
                  <a
                    href={product.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
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
            href="https://wa.me/918807913062?text=Hello! I'm interested in the {data.title} products."
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
