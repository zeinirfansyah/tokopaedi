import useStore from "../stores/store";
import Product from "../components/products/Product";
import Filter from "../components/ui/Filter";
import Layout from "../layouts/Layout";

const Home = () => {
  const store = useStore();

  const handleFilterProducts = (e) => {
    store.filterProducts(e.target.value);
  };

  const filteredProducts = store.getFilteredProducts();

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
