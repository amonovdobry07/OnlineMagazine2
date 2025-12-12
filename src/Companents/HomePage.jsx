import { use, useEffect, useState } from "react";
import "../Styles/HomePage.css";
import ProductsAPI from "./ProductsAPI";
import Hero from "./Hero";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const result = await res.json();
      setData(result);
    };

    loadData();
  }, []);

  return (
    <main className="min-h-screen  max-w-7xl mx-auto px-8 xl:px-0 mt-">
     <Hero /> 

      <section className="flex flex-col space-y-12">
        <h1 className="Homeh1 text-5xl font-bold text-center">
          Amonoff Shop Deals
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {data.map((c) => (
            <ProductsAPI
              data={c}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
