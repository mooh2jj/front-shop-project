import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOne, getOne, update } from "../api/productApi";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

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
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;

    if (title === "" || title.length === 0) {
      alert("빈칸을 채워주세요!");
      titleRef.current.focus();
      return;
    }

    if (price === "" || price.length === 0) {
      alert("빈칸을 채워주세요!");
      priceRef.current.focus();
      return;
    }

    if (description === "" || description.length === 0) {
      alert("빈칸을 채워주세요!");
      descriptionRef.current.focus();
      return;
    }

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
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          ref={priceRef}
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          ref={descriptionRef}
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

export default UpdateForm;
