import Header from "@/components/Header";
import ProductCatalog from "@/components/ProductCatalog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-peach-50">
      <Header />
      <main>
        <ProductCatalog />
      </main>
    </div>
  );
};

export default Index;
