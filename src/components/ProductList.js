import React, { useEffect, useState } from "react";
import { deleteOne, getList } from "../api/productApi";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // getList()
    //   .then((data) => {
    //     setProducts(data);
    //   })
    //   .catch((err) => console.log(err));
    fetchProducts();
  }, [refresh]); // refresh 상태가 변경될 때마다 실행

  // fetch async & await
  const fetchProducts = async () => {
    const data = await fetch("http://localhost:8083/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    deleteOne(id).then((res) => {
      console.log(res);
      alert("삭제 완료!");
      setRefresh((prev) => !prev);
    });
  };

  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            gap: "10px",
          }}
        >
          {products.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
