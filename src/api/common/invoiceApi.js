import axiosClient from "api/axiosClient";
import contentType from "configs/contentType.conf";

const configFormData = {
  headers: contentType.headersFormData,
};

export const invoiceApi = {
  xmlRead(data) {
    const url = "/invoice/xmlRead";
    return axiosClient.post(url, data, configFormData);
  },

  create(data) {
    const url = "/invoice/create";
    return axiosClient.post(url, data);
  },

  getAll(data) {
    const url = "/invoice/getAll";
    return axiosClient.get(url, data);
  },

  update(data) {
    const url = `/invoice/update/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete(data) {
    const url = `/invoice/delete/${data.id}`;
    return axiosClient.put(url, data);
  },
};
