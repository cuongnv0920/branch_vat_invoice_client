import axiosClient from "../axios.Client";

export const roomApi = {
  create(data) {
    const url = "/room/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/room/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/room/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/room/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
