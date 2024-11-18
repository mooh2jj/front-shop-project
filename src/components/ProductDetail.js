import React, { useEffect, useState } from "react";
import { getOne } from "../api/productApi";
import { Link } from "react-router-dom";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    // getOne(id).then((res) => {
    //   console.log(res);

    //   setProduct(res);
    // });

    // fetch async & await
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await fetch(`http://localhost:8083/api/products/${id}`);
    const data = await response.json();

    if (response.ok) {
      setProduct(data);
    } else {
      throw new Error("상품 상세 불러오기 실패");
    }
  };

  return (
    <div>
      <img src={product.imgsrc} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to={`/edit/${id}`}>수정</Link>
    </div>
  );
};

export default ProductDetail;
