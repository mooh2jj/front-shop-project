import React from "react";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import Navigation from "../layouts/Navigation";

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navigation />
      <h1>상세페이지</h1>
      <ProductDetail id={id} />
    </div>
  );
};

export default DetailPage;
