import axiosClient from "./axios.Client";

const categoryApi = {
  create(data) {
    const url = "/category/create";
    return axiosClient.post(url, data);
  },

  list(data) {
    const url = "/category/list";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = "/category/update";
    return axiosClient.put(url, data);
  },

  delete(id) {
    const url = `/categor/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
