import axiosClient from "../axios.Client";

export const depositApi = {
  create(data) {
    const url = "/deposit/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/deposit/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/deposit/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  effect(data) {
    const url = `/deposit/effect`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/deposit/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
