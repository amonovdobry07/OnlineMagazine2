import { useEffect, useState } from "react";
import ProductsAPI from "./ProductsAPI";

const ProductAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center mt-10">All Products</h1>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <ProductsAPI key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default ProductAll;
