import React from "react";
import Navigation from "../layouts/Navigation";
import ProductList from "../components/ProductList";

const ListPage = () => {
  return (
    <>
      <Navigation />
      <h1>상품 목록</h1>
      <ProductList />
    </>
  );
};

export default ListPage;
