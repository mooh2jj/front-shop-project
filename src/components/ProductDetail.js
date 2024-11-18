import React, { useEffect, useState } from "react";
import { getOne } from "../api/productApi";
import { Link } from "react-router-dom";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(id).then((res) => {
      console.log(res);

      setProduct(res);
    });
  }, [id]);

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
