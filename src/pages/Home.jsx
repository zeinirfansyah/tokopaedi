import useStore from "../stores/store";
import Product from "../components/products/Product";
import Filter from "../components/ui/Filter";
import { useEffect } from "react";

const Home = () => {
  const store = useStore();
  const filteredProducts = store.getFilteredProducts();

  useEffect(() => {
    store.fetchProducts();
  }, [store]);


  const handleFilterProducts = (e) => {
    store.filterProducts(e.target.value);
  };


  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div>
        <Filter
          options={store.categories}
          value={store.selectedCategory}
          onChange={handleFilterProducts}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 py-4">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={() => store.addToCart(product)}
            onProductDetails={() => store.ProductDetails(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
