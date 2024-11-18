import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, imgsrc, price, description, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img src={imgsrc} alt={title} />
      </Link>
      <li>{title}</li>
      <li>{price}</li>
      <li>{description}</li>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default ProductItem;
