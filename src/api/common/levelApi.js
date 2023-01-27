import axiosClient from "api/axiosClient";

export const levelApi = {
  create(data) {
    const url = "/level/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/level/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/level/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/level/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
