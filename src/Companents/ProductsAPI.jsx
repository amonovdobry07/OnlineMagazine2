import React, { useState } from "react";
import "../Styles/ProductAPI.css";
import { Link } from "react-router-dom";

const ProductsAPI = ({ data }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={`/product/${data.id}`}
      className="bg-gray-100 p-6 rounded-lg group hover:scale-105 cursor-pointer transition-transform ease-out duration-200 hover:border"
    >
      <img
        src={data.image}
        alt={data.title}
        className={`ProductsApi-img h-40 rounded w-full object-cover object-center mb-6 transition-all duration-700 filter
    ${
      loaded ? "scale-100 blur-0 grayscale-0" : "scale-110 blur-2xl grayscale"
    }`}
        onLoad={() => setLoaded(true)}
      />

      <h3 className="tracking-widest mt-5 text-indigo-500 text-xs font-medium title-font">
        {data.category}
      </h3>

      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{data.title}</p>
        <p>${data.price}</p>
      </div>

      <p className="leading-relaxed text-base line-clamp-2">
        {data.description}
      </p>
    </Link>
  );
};

export default ProductsAPI;
