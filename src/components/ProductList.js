import React, { useEffect, useState } from "react";
import { deleteOne, getList } from "../api/productApi";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getList()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [refresh]); // refresh 상태가 변경될 때마다 실행

  const handleDelete = async (id) => {
    deleteOne(id).then((res) => {
      console.log(res);
      alert("삭제 완료!");
      setRefresh((prev) => !prev);
    });
  };

  return (
    <>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} onDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
