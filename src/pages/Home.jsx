import { useEffect } from "react";
import Layout from "../layouts/Layout";
import useStore from "../stores/store";
import Product from "../components/products/Product";

const Home = () => {
  const store = useStore();
  const products = store.products;

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return (
    <Layout>
      <section>
        <div className="grid grid-cols-2 gap-2 mx-4">
          {products.map((product) => (
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
