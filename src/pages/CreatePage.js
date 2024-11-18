import React from "react";
import Navigation from "../layouts/Navigation";
import ProductForm from "../components/ProductForm";

const CreatePage = () => {
  return (
    <div>
      <Navigation />
      <h1>등록 페이지</h1>
      <ProductForm />
    </div>
  );
};

export default CreatePage;
