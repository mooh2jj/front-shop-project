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
    try {
      const response = await fetch("http://localhost:8083/api/products");
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      } else {
        alert("상품 목록 불러오기 실패");
      }
    } catch (error) {
      throw new Error("상품 목록 불러오기 중 오류 발생: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    // deleteOne(id).then((res) => {
    //   console.log(res);
    //   alert("삭제 완료!");
    //   setRefresh((prev) => !prev);
    // });
    // fetch async & await
    try {
      const response = await fetch(`http://localhost:8083/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("삭제 완료");
        setRefresh((prev) => !prev);
      } else {
        alert("삭제 실패");
      }
    } catch (error) {
      throw new Error("상품 삭제 중 오류 발생: " + error.message);
    }
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
