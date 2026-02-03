import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ImageLightbox from "@/components/ImageLightbox";

// Import Premium Combination images
import premium01 from "@/assets/products/premium-01.png";
import premium02 from "@/assets/products/premium-02.png";
import premium03 from "@/assets/products/premium-03.png";
import premium04 from "@/assets/products/premium-04.png";
import premium05 from "@/assets/products/premium-05.png";
import premium06 from "@/assets/products/premium-06.png";
import premium07 from "@/assets/products/premium-07.png";
import premium08 from "@/assets/products/premium-08.png";

// Import Eco Earth images
import eco01 from "@/assets/products/eco-01.png";
import eco02 from "@/assets/products/eco-02.png";
import eco03 from "@/assets/products/eco-03.png";
import eco04 from "@/assets/products/eco-04.png";
import eco05 from "@/assets/products/eco-05.png";
import eco06 from "@/assets/products/eco-06.png";
import eco07 from "@/assets/products/eco-07.png";
import eco08 from "@/assets/products/eco-08.png";

// Import Happy Days images (fabric)
import happy01 from "@/assets/products/happy-01.png";
import happy02 from "@/assets/products/happy-02.png";
import happy03 from "@/assets/products/happy-03.png";
import happy04 from "@/assets/products/happy-04.png";
import happy05 from "@/assets/products/happy-05.png";
import happy06 from "@/assets/products/happy-06.png";
import happy07 from "@/assets/products/happy-07.png";
import happy08 from "@/assets/products/happy-08.png";
import happy09 from "@/assets/products/happy-09.png";
import happy10 from "@/assets/products/happy-10.png";
import happy11 from "@/assets/products/happy-11.png";
import happy12 from "@/assets/products/happy-12.png";
import happy13 from "@/assets/products/happy-13.png";
import happy14 from "@/assets/products/happy-14.png";
import happy15 from "@/assets/products/happy-15.png";
import happy16 from "@/assets/products/happy-16.png";
import happy17 from "@/assets/products/happy-17.png";

// Import Happy Days human model images
import happyHuman01 from "@/assets/products/happy-human-01.png";
import happyHuman02 from "@/assets/products/happy-human-02.png";
import happyHuman03 from "@/assets/products/happy-human-03.png";
import happyHuman04 from "@/assets/products/happy-human-04.png";

// Import Vision Combination images (uniform only)
import vision01 from "@/assets/products/vision-01.png";
import vision02 from "@/assets/products/vision-02.png";
import vision03 from "@/assets/products/vision-03.png";
import vision04 from "@/assets/products/vision-04.png";
import vision05 from "@/assets/products/vision-05.png";
import vision06 from "@/assets/products/vision-06.png";
import vision07 from "@/assets/products/vision-07.png";
import vision09 from "@/assets/products/vision-09.png";
import vision10 from "@/assets/products/vision-10.png";

// Import Vision Combination Slide images (fabric)
import visionSlide01 from "@/assets/products/vision-slide-01.png";
import visionSlide02 from "@/assets/products/vision-slide-02.png";
import visionSlide03 from "@/assets/products/vision-slide-03.png";
import visionSlide04 from "@/assets/products/vision-slide-04.png";
import visionSlide05 from "@/assets/products/vision-slide-05.png";
import visionSlide06 from "@/assets/products/vision-slide-06.png";
import visionSlide07 from "@/assets/products/vision-slide-07.png";
import visionSlide08 from "@/assets/products/vision-slide-08.png";
import visionSlide09 from "@/assets/products/vision-slide-09.png";
import visionSlide10 from "@/assets/products/vision-slide-10.png";

// Import Vision Human + Fabric combined images
import visionHf01 from "@/assets/products/vision-hf-01.png";
import visionHf02 from "@/assets/products/vision-hf-02.png";
import visionHf03 from "@/assets/products/vision-hf-03.png";
import visionHf04 from "@/assets/products/vision-hf-04.png";
import visionHf05 from "@/assets/products/vision-hf-05.png";
import visionHf06 from "@/assets/products/vision-hf-06.png";
import visionHf07 from "@/assets/products/vision-hf-07.png";
import visionHf08 from "@/assets/products/vision-hf-08.png";
import visionHf09 from "@/assets/products/vision-hf-09.png";
import visionHf10 from "@/assets/products/vision-hf-10.png";


// Import Sport Wear (formerly Other) category images
import other01 from "@/assets/products/other-01.png";
import other02 from "@/assets/products/other-02.png";
import other03 from "@/assets/products/other-03.png";
import other04 from "@/assets/products/other-04.png";
import other05 from "@/assets/products/other-05.png";
import other06 from "@/assets/products/other-06.png";
import other07 from "@/assets/products/other-07.png";
import other08 from "@/assets/products/other-08.png";

// Import Hospitality/Other Products images
import hosp01 from "@/assets/products/hosp-01.png";
import hosp02 from "@/assets/products/hosp-02.png";
import hosp03 from "@/assets/products/hosp-03.png";
import hosp04 from "@/assets/products/hosp-04.png";
import hosp05 from "@/assets/products/hosp-05.png";
import hosp06 from "@/assets/products/hosp-06.png";
import hosp07 from "@/assets/products/hosp-07.png";
import hosp08 from "@/assets/products/hosp-08.png";
import hosp09 from "@/assets/products/hosp-09.png";
import hosp10 from "@/assets/products/hosp-10.png";
import hosp11 from "@/assets/products/hosp-11.png";
import hosp12 from "@/assets/products/hosp-12.png";
import hosp13 from "@/assets/products/hosp-13.png";
import hosp14 from "@/assets/products/hosp-14.png";
import hosp15 from "@/assets/products/hosp-15.png";
import hosp16 from "@/assets/products/hosp-16.png";

interface Product {
  id: number;
  name: string;
  image: string;
  humanImage?: string; // For products with human model images
  fabricImage?: string; // For products with fabric images
  combinedImage?: string; // For products with combined view (only for 3-image lightbox)
  twoImageLightbox?: boolean; // For 2-image lightbox (Uniform, Fabric)
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
      { id: 1, name: "Taurus-6 | Memory-913", image: premium01, humanImage: premium01, fabricImage: premium02, combinedImage: premium01 },
      { id: 2, name: "Premium Chef & Hostess", image: premium02, humanImage: premium02, fabricImage: premium01, combinedImage: premium02 },
      { id: 3, name: "Bakooza-20 | 800025", image: premium03, humanImage: premium03, fabricImage: premium04, combinedImage: premium03 },
      { id: 4, name: "Premium Green Collection", image: premium04, humanImage: premium04, fabricImage: premium03, combinedImage: premium04 },
      { id: 5, name: "Vision-05 | Big Boss-569", image: premium05, humanImage: premium05, fabricImage: premium06, combinedImage: premium05 },
      { id: 6, name: "Vision-06 | Big Boss-5128", image: premium06, humanImage: premium06, fabricImage: premium05, combinedImage: premium06 },
      { id: 7, name: "Vision-07 | Big Boss-525", image: premium07, humanImage: premium07, fabricImage: premium08, combinedImage: premium07 },
      { id: 8, name: "Vision-08 | Big Boss-5111", image: premium08, humanImage: premium08, fabricImage: premium07, combinedImage: premium08 },
    ],
  },
  "happy-days": {
    title: "Mafatlal Happy Days",
    description: "Comfortable and colorful fabrics designed for everyday school wear. Easy to maintain and perfect for active students.",
    catalogPdf: "/catalogs/mafatlal-happy-days.pdf",
    products: [
      { id: 1, name: "Vision-14 | Sure Shot-310", image: happyHuman01, fabricImage: happy01, twoImageLightbox: true },
      { id: 2, name: "Vision-15 | Big Boss-5130", image: happyHuman02, fabricImage: happy02, twoImageLightbox: true },
      { id: 3, name: "Vision-18 | Big Boss-5129", image: happyHuman03, fabricImage: happy03, twoImageLightbox: true },
      { id: 4, name: "Vision-26 | Big Boss-579", image: happyHuman04, fabricImage: happy04, twoImageLightbox: true },
      { id: 5, name: "Blaze-5 | Memory-913", image: happy05, fabricImage: happy06, twoImageLightbox: true },
      { id: 6, name: "Yellow & Grey Cricket Set", image: happy06, fabricImage: happy05, twoImageLightbox: true },
      { id: 7, name: "Pink & Black Doctor Set", image: happy07, fabricImage: happy08, twoImageLightbox: true },
      { id: 8, name: "Spark-10 | Ziba-1", image: happy08, fabricImage: happy07, twoImageLightbox: true },
      { id: 9, name: "Navy Blue & Sky Uniform", image: happy09, fabricImage: happy01, twoImageLightbox: true },
      { id: 10, name: "Green & Navy Combo", image: happy10, fabricImage: happy02, twoImageLightbox: true },
      { id: 11, name: "Pink & Black Set", image: happy11, fabricImage: happy03, twoImageLightbox: true },
      { id: 12, name: "Yellow & Grey Pinafore", image: happy12, fabricImage: happy04, twoImageLightbox: true },
      { id: 13, name: "Orange & Navy Dungaree", image: happy13, fabricImage: happy05, twoImageLightbox: true },
      { id: 14, name: "Grey Check Formal", image: happy14, fabricImage: happy06, twoImageLightbox: true },
      { id: 15, name: "Purple Formal Set", image: happy15, fabricImage: happy07, twoImageLightbox: true },
      { id: 16, name: "Pink & Blue Classic", image: happy16, fabricImage: happy08, twoImageLightbox: true },
      { id: 17, name: "Light Blue Formal", image: happy17, fabricImage: happy01, twoImageLightbox: true },
    ],
  },
  "eco-earth": {
    title: "Eco Earth Mafatlal",
    description: "Sustainable and environmentally friendly uniform fabrics. Made with eco-conscious materials without compromising on quality.",
    catalogPdf: "/catalogs/eco-earth-mafatlal.pdf",
    products: [
      { id: 1, name: "Oxygen 1-8 Blue Collection", image: eco01, fabricImage: eco02, twoImageLightbox: true },
      { id: 2, name: "Oxygen Blue Fabric", image: eco02, fabricImage: eco01, twoImageLightbox: true },
      { id: 3, name: "Oxygen 9-16 Grey Collection", image: eco03, fabricImage: eco04, twoImageLightbox: true },
      { id: 4, name: "Oxygen Grey Fabric", image: eco04, fabricImage: eco03, twoImageLightbox: true },
      { id: 5, name: "Oxygen 17-24 Pink Collection", image: eco05, fabricImage: eco06, twoImageLightbox: true },
      { id: 6, name: "Oxygen Pink Fabric", image: eco06, fabricImage: eco05, twoImageLightbox: true },
      { id: 7, name: "Oxygen 25-32 Purple Collection", image: eco07, fabricImage: eco08, twoImageLightbox: true },
      { id: 8, name: "Oxygen Purple Fabric", image: eco08, fabricImage: eco07, twoImageLightbox: true },
    ],
  },
  "vision-combination": {
    title: "Mafatlal Vision Combination",
    description: "Modern and contemporary fabric combinations for the new age schools. Innovative designs meeting today's requirements.",
    catalogPdf: "/catalogs/mafatlal-premium-combinations.pdf",
    products: [
      { id: 1, name: "Vision-01 | Sure Shot-SS194", image: vision01, humanImage: vision01, fabricImage: visionSlide01, combinedImage: visionHf01 },
      { id: 2, name: "Vision-02 | Big Boss-512", image: vision02, humanImage: vision02, fabricImage: visionSlide02, combinedImage: visionHf02 },
      { id: 3, name: "Vision-03 | Big Boss-5128", image: vision03, humanImage: vision03, fabricImage: visionSlide03, combinedImage: visionHf03 },
      { id: 4, name: "Vision-04 | Sure Shot-306", image: vision04, humanImage: vision04, fabricImage: visionSlide04, combinedImage: visionHf04 },
      { id: 5, name: "Vision-05 | Big Boss-569", image: vision05, humanImage: vision05, fabricImage: visionSlide05, combinedImage: visionHf05 },
      { id: 6, name: "Vision-06 | Big Boss-5128", image: vision06, humanImage: vision06, fabricImage: visionSlide06, combinedImage: visionHf06 },
      { id: 7, name: "Vision-07 | Big Boss-525", image: vision07, humanImage: vision07, fabricImage: visionSlide07, combinedImage: visionHf07 },
      { id: 8, name: "Vision-09 | Big Boss-567", image: vision09, humanImage: vision09, fabricImage: visionSlide09, combinedImage: visionHf09 },
      { id: 9, name: "Vision-10 | Big Boss-5128", image: vision10, humanImage: vision10, fabricImage: visionSlide10, combinedImage: visionHf10 },
    ],
  },
  "sport-wear": {
    title: "Sport Wear",
    description: "Explore our diverse collection of quality school sports uniforms featuring various styles, colors, and designs to meet your athletic requirements.",
    catalogPdf: "/catalogs/other-products.pdf",
    products: [
      { id: 1, name: "Navy & Sky Blue Sports Set", image: other01 },
      { id: 2, name: "Green & Gold Polo Shirt", image: other02 },
      { id: 3, name: "Neon Green Track Suit", image: other03 },
      { id: 4, name: "Red Classic Uniform Set", image: other04 },
      { id: 5, name: "Black & Grey Polo Set", image: other05 },
      { id: 6, name: "Multi-Color Polo Collection", image: other06 },
      { id: 7, name: "Red & Black Girls Uniform", image: other07 },
      { id: 8, name: "Yellow & Blue Sports Set", image: other08 },
    ],
  },
  "hospitality": {
    title: "Hospitality",
    description: "Professional uniforms for the hospitality industry including hotels, restaurants, healthcare and corporate settings. Elegant designs with premium comfort.",
    catalogPdf: "/catalogs/hospitality-catalog.pdf",
    products: [
      { id: 1, name: "Chef White Uniform", image: hosp04 },
      { id: 2, name: "Kitchen Apron Set", image: hosp05 },
      { id: 3, name: "Hotel Staff Uniform - Olive", image: hosp06 },
      { id: 4, name: "Formal Bandhgala - Navy", image: hosp07 },
      { id: 5, name: "Formal Bandhgala - Charcoal", image: hosp08 },
      { id: 6, name: "Executive Suit - Black", image: hosp09 },
      { id: 7, name: "Doctor Coat - White", image: hosp10 },
      { id: 8, name: "Nurse Uniform - Pink", image: hosp11 },
      { id: 9, name: "Medical Staff - Sky Blue", image: hosp12 },
      { id: 10, name: "Nurse Uniform - Rose", image: hosp13 },
      { id: 11, name: "Medical Scrubs - Purple", image: hosp14 },
      { id: 12, name: "Medical Scrubs - Lavender", image: hosp15 },
      { id: 13, name: "Doctor Uniform Set", image: hosp16 },
    ],
  },
  "other-products": {
    title: "Other Products",
    description: "Specialized uniforms for industrial, security, and professional sectors. Durable and functional designs for demanding work environments.",
    catalogPdf: "/catalogs/hospitality-catalog.pdf",
    products: [
      { id: 1, name: "Industrial Workwear - Navy Red", image: hosp01 },
      { id: 2, name: "Safety High-Vis Coverall", image: hosp02 },
      { id: 3, name: "Security Uniform Set", image: hosp03 },
      { id: 4, name: "Chef White Uniform", image: hosp04 },
      { id: 5, name: "Kitchen Apron Set", image: hosp05 },
      { id: 6, name: "Hotel Staff Uniform", image: hosp06 },
      { id: 7, name: "Formal Bandhgala - Navy", image: hosp07 },
      { id: 8, name: "Executive Suit - Black", image: hosp09 },
    ],
  },
};


// Product card with lightbox support (2-image or 3-image)
const ProductCard = ({ 
  product, 
  index, 
  onImageClick 
}: { 
  product: Product; 
  index: number; 
  onImageClick: (imageSrc: string, imageAlt: string, images?: { src: string; alt: string }[]) => void;
}) => {
  // Check if product has 2-image lightbox (Uniform, Fabric)
  const hasTwoViews = !!product.twoImageLightbox && !!product.fabricImage;
  // Check if product has all 3 image types
  const hasThreeViews = !!product.humanImage && !!product.fabricImage && !!product.combinedImage && !product.twoImageLightbox;
  // Check if product has just human/fabric flip
  const hasFlip = !!product.humanImage && !product.fabricImage && !product.twoImageLightbox;
  
  const [showHuman, setShowHuman] = useState(!!product.humanImage);
  const currentImage = showHuman && product.humanImage ? product.humanImage : product.image;

  const handleClick = () => {
    if (!product.image) return;
    
    if (hasTwoViews) {
      // For products with 2 views, pass Uniform and Fabric images for lightbox with slide effect
      const images = [
        { src: product.image, alt: `${product.name} - Uniform View` },
        { src: product.fabricImage!, alt: `${product.name} - Fabric View` },
      ];
      onImageClick(product.image, `${product.name} - Uniform View`, images);
    } else if (hasThreeViews) {
      // For products with 3 views, pass all 3 images for lightbox with slide effect
      const images = [
        { src: product.humanImage!, alt: `${product.name} - Uniform View` },
        { src: product.fabricImage!, alt: `${product.name} - Fabric View` },
        { src: product.combinedImage!, alt: `${product.name} - Uniform & Fabric View` },
      ];
      onImageClick(product.humanImage!, `${product.name} - Uniform View`, images);
    } else if (hasFlip) {
      // For flip cards, pass both images for lightbox navigation
      const images = [
        { src: product.humanImage!, alt: `${product.name} - Model View` },
        { src: product.image, alt: `${product.name} - Fabric View` },
      ];
      onImageClick(currentImage, showHuman ? `${product.name} - Model View` : `${product.name} - Fabric View`, images);
    } else {
      onImageClick(product.image, product.name);
    }
  };

  const getViewCount = () => {
    if (hasTwoViews) return 2;
    if (hasThreeViews) return 3;
    return 1;
  };

  return (
    <div
      className={`card-product overflow-hidden animate-fade-in group ${product.image ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={handleClick}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden relative">
        {product.image ? (
          <>
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-active:scale-95"
            />
            {/* Enhanced zoom overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                🔍 Click to view {getViewCount() > 1 ? `${getViewCount()} images` : 'full size'}
              </span>
            </div>
          </>
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
        {(hasTwoViews || hasThreeViews) && (
          <p className="text-xs text-primary mt-1">Click to view {getViewCount()} images with slide effect</p>
        )}
        {hasFlip && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowHuman(!showHuman);
            }}
            className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors underline"
          >
            {showHuman ? "View Fabric" : "View Model"}
          </button>
        )}
        {product.image && !hasFlip && !hasThreeViews && !hasTwoViews && (
          <p className="text-xs text-muted-foreground mt-1">Click to view full size</p>
        )}
      </div>
    </div>
  );
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const openLightbox = (imageSrc: string, imageAlt: string, images?: { src: string; alt: string }[]) => {
    if (imageSrc) {
      setSelectedImage({ src: imageSrc, alt: imageAlt });
      if (images && images.length > 1) {
        setLightboxImages(images);
        setCurrentImageIndex(images.findIndex(img => img.src === imageSrc) || 0);
      } else {
        setLightboxImages([]);
        setCurrentImageIndex(0);
      }
      setLightboxOpen(true);
    }
  };

  const handleNavigate = (index: number) => {
    if (lightboxImages[index]) {
      setCurrentImageIndex(index);
      setSelectedImage(lightboxImages[index]);
    }
  };

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

      {/* Removed Vision Combination Slider section - lightbox now shows 3 images directly */}

      {/* Products Grid - 3 columns x 3 rows */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Our Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onImageClick={openLightbox}
              />
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
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for bulk orders, custom requirements, and best pricing
          </p>
          <Link
            to="/contact"
            className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigate}
      />
    </Layout>
  );
};

export default ProductCategory;
