import React from "react";
import CreateForm from "../components/CreateForm";
import Navigation from "../layouts/Navigation";

const CreatePage = () => {
  return (
    <div>
      <Navigation />
      <h1>등록 페이지</h1>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
