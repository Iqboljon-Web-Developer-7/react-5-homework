import axios from "axios";

const axiosFun = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export default axiosFun;
