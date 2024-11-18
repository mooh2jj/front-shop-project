import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOne, getOne, update } from "../api/productApi";
import Navigation from "../layouts/Navigation";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    imgsrc: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    getOne(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    update(id, product).then((res) => {
      console.log(res);
      alert("수정 완료");
      navigate("/");
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteOne(id).then((res) => {
      console.log(res);
      alert("삭제 완료!");
      navigate("/");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <Navigation />
      <h1>수정페이지</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="text" name="imgsrc" value={product.imgsrc} readOnly />{" "}
        <br />
        <button type="submit">수정</button>
        <button onClick={handleDelete}>삭제</button>
      </form>
    </div>
  );
};

export default EditPage;
