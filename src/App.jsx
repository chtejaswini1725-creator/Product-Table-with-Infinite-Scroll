import { useCallback, useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const LIMIT = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );
      const data = await res.json();

      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + LIMIT);

      if (data.products.length < LIMIT) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, hasMore]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const loaderRef = useInfiniteScroll(fetchProducts);

  const handleTitleChange = (id, newTitle) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, title: newTitle } : product,
      ),
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <ProductTable
        products={products}
        onTitleChange={handleTitleChange}
        loaderRef={loaderRef}
      />

      {loading && <p>Loading more products...</p>}
      {!hasMore && <p>No more products to load.</p>}
    </div>
  );
}

export default App;
