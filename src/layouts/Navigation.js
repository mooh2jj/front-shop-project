import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to={"/"}>상품 목록</Link> | &nbsp; <Link to={"/create"}>등록</Link>{" "}
    </>
  );
};

export default Navigation;
