import axios from "axios";

const enerbitApi = axios.create({
  baseURL: "https://ops.enerbit.dev/learning/api/v1",
});

export default enerbitApi;
