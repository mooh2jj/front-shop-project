import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteOne, getOne } from "../api/productApi";
const ProductItem = ({ id, title, imgsrc, price, description, onDelete }) => {
  // const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <>
      <div>
        <Link to={`/detail/${id}`}>
          <img src={imgsrc} alt={title} />
        </Link>
        <li>{title}</li>
        <li>{price}</li>
        <li>{description}</li>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </>
  );
};

export default ProductItem;
