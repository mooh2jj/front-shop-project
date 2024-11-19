import React from "react";
import Navigation from "../layouts/Navigation";
import UpdateForm from "../components/UpdateForm";

const EditPage = () => {
  return (
    <div>
      <Navigation />
      <h1>수정페이지</h1>
      <UpdateForm />
    </div>
  );
};

export default EditPage;
