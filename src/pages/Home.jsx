import Layout from "../layouts/Layout";
import useStore from "../stores/store";
import Product from "../components/products/Product";

const Home = () => {
  const store = useStore();
  const filteredProducts = store.getFilteredProducts();

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
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
