import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../api/productApi";

const initProduct = {
  title: "",
  price: 0,
  description: "",
  imgsrc: "https://via.placeholder.com/150",
};

const CreateForm = () => {
  const [product, setProduct] = useState(initProduct);

  //   const dispatch = useDispatch();

  const navigate = useNavigate();

  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  //   const addProduct = (param) => {
  //     dispatch(postProduct(param));
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addProduct(product);

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;

    if (title === "" || title.length === 0) {
      alert("빈칸을 채워주세요!");
      // 다시 입력하도록 포커스 이동
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

    create(product)
      .then((res) => {
        alert("등록 완료");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    // input 요소에서 변경이 발생할 때마다 호출되는 이벤트 핸들러
    const { name, value } = e.target; // 이벤트가 발생한 input의 name과 value를 구조분해할당으로 추출
    setProduct({ ...product, [name]: value }); // 기존 product 객체를 복사하고, 변경된 필드만 새 값으로 업데이트
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        제목:{" "}
        <input
          ref={titleRef}
          type="text"
          placeholder="상품 제목"
          onChange={handleChange}
          value={product.title}
          name="title"
        />{" "}
        <br />
        가격:{" "}
        <input
          ref={priceRef}
          type="number"
          placeholder="상품 가격"
          onChange={handleChange}
          value={product.price}
          name="price"
        />{" "}
        <br />
        설명:{" "}
        <input
          ref={descriptionRef}
          type="text"
          placeholder="상품 설명"
          onChange={handleChange}
          value={product.description}
          name="description"
        />{" "}
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default CreateForm;
