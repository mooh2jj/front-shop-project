import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";

const host = `${API_SERVER_HOST}/api/products`;

// 목록
export const getList = async () => {
  const res = await axios.get(`${host}`);
  return res.data;
};

// 등록
export const create = async (product) => {
  const res = await axios.post(`${host}`, product);
  return res.data;
};

// 상세
export const getOne = async (id) => {
  const res = await axios.get(`${host}/${id}`);
  return res.data;
};

// 수정
export const update = async (id, product) => {
  const res = await axios.put(`${host}/${id}`, product);
  return res.data;
};

// 삭제
export const deleteOne = async (id) => {
  const res = await axios.delete(`${host}/${id}`);
  return res.data;
};
