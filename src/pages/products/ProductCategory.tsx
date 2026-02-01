import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ImageLightbox from "@/components/ImageLightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

// Import Happy Days human model images
import happyHuman01 from "@/assets/products/happy-human-01.png";
import happyHuman02 from "@/assets/products/happy-human-02.png";
import happyHuman03 from "@/assets/products/happy-human-03.png";
import happyHuman04 from "@/assets/products/happy-human-04.png";

// Import Vision Combination images
import vision01 from "@/assets/products/vision-01.png";
import vision02 from "@/assets/products/vision-02.png";
import vision03 from "@/assets/products/vision-03.png";
import vision04 from "@/assets/products/vision-04.png";
import vision05 from "@/assets/products/vision-05.png";
import vision06 from "@/assets/products/vision-06.png";
import vision07 from "@/assets/products/vision-07.png";
import vision09 from "@/assets/products/vision-09.png";
import vision10 from "@/assets/products/vision-10.png";

// Import Vision Combination Slide images
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

// Vision slider images array
const visionSlideImages = [
  { src: visionSlide01, alt: "Vision Uniform 1" },
  { src: visionSlide02, alt: "Vision Uniform 2" },
  { src: visionSlide03, alt: "Vision Uniform 3" },
  { src: visionSlide04, alt: "Vision Uniform 4" },
  { src: visionSlide05, alt: "Vision Uniform 5" },
  { src: visionSlide06, alt: "Vision Uniform 6" },
  { src: visionSlide07, alt: "Vision Uniform 7" },
  { src: visionSlide08, alt: "Vision Uniform 8" },
  { src: visionSlide09, alt: "Vision Uniform 9" },
  { src: visionSlide10, alt: "Vision Uniform 10" },
];

// Import Sport Wear (formerly Other) category images
import other01 from "@/assets/products/other-01.png";
import other02 from "@/assets/products/other-02.png";
import other03 from "@/assets/products/other-03.png";
import other04 from "@/assets/products/other-04.png";
import other05 from "@/assets/products/other-05.png";
import other06 from "@/assets/products/other-06.png";
import other07 from "@/assets/products/other-07.png";
import other08 from "@/assets/products/other-08.png";

interface Product {
  id: number;
  name: string;
  image: string;
  humanImage?: string; // For products with human model images
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
      { id: 1, name: "Taurus-6 | Memory-913", image: premium01 },
      { id: 2, name: "Premium Chef & Hostess", image: premium02 },
      { id: 3, name: "Bakooza-20 | 800025", image: premium03 },
      { id: 4, name: "Premium Green Collection", image: premium04 },
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
      { id: 1, name: "Vision-14 | Sure Shot-310", image: happy01, humanImage: happyHuman01 },
      { id: 2, name: "Vision-15 | Big Boss-5130", image: happy02, humanImage: happyHuman02 },
      { id: 3, name: "Vision-18 | Big Boss-5129", image: happy03, humanImage: happyHuman03 },
      { id: 4, name: "Vision-26 | Big Boss-579", image: happy04, humanImage: happyHuman04 },
      { id: 5, name: "Blaze-5 | Memory-913", image: happy05 },
      { id: 6, name: "Yellow & Grey Cricket Set", image: happy06 },
      { id: 7, name: "Pink & Black Doctor Set", image: happy07 },
      { id: 8, name: "Spark-10 | Ziba-1", image: happy08 },
    ],
  },
  "eco-earth": {
    title: "Eco Earth Mafatlal",
    description: "Sustainable and environmentally friendly uniform fabrics. Made with eco-conscious materials without compromising on quality.",
    catalogPdf: "/catalogs/eco-earth-mafatlal.pdf",
    products: [
      { id: 1, name: "Oxygen 1-8 Blue Collection", image: eco01 },
      { id: 2, name: "Oxygen Blue Fabric", image: eco02 },
      { id: 3, name: "Oxygen 9-16 Grey Collection", image: eco03 },
      { id: 4, name: "Oxygen Grey Fabric", image: eco04 },
      { id: 5, name: "Oxygen 17-24 Pink Collection", image: eco05 },
      { id: 6, name: "Oxygen Pink Fabric", image: eco06 },
      { id: 7, name: "Oxygen 25-32 Purple Collection", image: eco07 },
      { id: 8, name: "Oxygen Purple Fabric", image: eco08 },
    ],
  },
  "vision-combination": {
    title: "Mafatlal Vision Combination",
    description: "Modern and contemporary fabric combinations for the new age schools. Innovative designs meeting today's requirements.",
    catalogPdf: "/catalogs/mafatlal-premium-combinations.pdf",
    products: [
      { id: 1, name: "Vision-01 | Sure Shot-SS194", image: vision01 },
      { id: 2, name: "Vision-02 | Big Boss-512", image: vision02 },
      { id: 3, name: "Vision-03 | Big Boss-5128", image: vision03 },
      { id: 4, name: "Vision-04 | Sure Shot-306", image: vision04 },
      { id: 5, name: "Vision-05 | Big Boss-569", image: vision05 },
      { id: 6, name: "Vision-06 | Big Boss-5128", image: vision06 },
      { id: 7, name: "Vision-07 | Big Boss-525", image: vision07 },
      { id: 8, name: "Vision-09 | Big Boss-567", image: vision09 },
      { id: 9, name: "Vision-10 | Big Boss-5128", image: vision10 },
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
};

// Product card with optional human/fabric flip
const ProductCard = ({ 
  product, 
  index, 
  onImageClick 
}: { 
  product: Product; 
  index: number; 
  onImageClick: (imageSrc: string, imageAlt: string, images?: { src: string; alt: string }[]) => void;
}) => {
  const [showHuman, setShowHuman] = useState(!!product.humanImage);
  const hasFlip = !!product.humanImage;

  const currentImage = showHuman && product.humanImage ? product.humanImage : product.image;

  const handleClick = () => {
    if (!product.image) return;
    
    if (hasFlip) {
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
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Zoom overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                Click to view
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
        {product.image && !hasFlip && (
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

      {/* Vision Combination Slider - Only show for vision-combination category */}
      {category === "vision-combination" && (
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Uniform Showcase
            </h2>
            <div className="max-w-4xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {visionSlideImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                        onClick={() => openLightbox(image.src, image.alt, visionSlideImages)}
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          </div>
        </section>
      )}

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

      {/* Lightbox with slide navigation */}
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
