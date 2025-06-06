import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-25 to-blue-25">
      <Header />
      <Hero />
      <ProductCatalog />
    </div>
  );
};

export default Index;
