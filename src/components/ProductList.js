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
      .catch((err) => {
        if (err.code === "ECONNABORTED") {
          alert("서버 응답시간이 초과되었습니다. 잠시 후 다시 시도해주세요.");
        } else if (err.response) {
          console.log(err.response.status);
          console.log(err.response.data);
          alert(err.response.data.message);
        } else if (err.request) {
          console.log(err.message);
          alert("요청 패킷 에러");
        } else {
          console.log(err.message);
          alert("알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      });
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
