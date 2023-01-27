import axiosClient from "api/axiosClient";

export const userApi = {
  create(data) {
    const url = "/user/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/user/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/user/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/user/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
