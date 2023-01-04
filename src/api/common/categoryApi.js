import axiosClient from "../axios.Client";

export const categoryApi = {
  create(data) {
    const url = "/category/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/category/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/category/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/category/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
