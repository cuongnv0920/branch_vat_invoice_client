import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { invoiceApi } from "api";

export const create = createAsyncThunk("invoice/create", async (payload) => {
  const data = await invoiceApi.create(payload);

  return data;
});

export const edit = createAsyncThunk("invoice/edit", async (payload) => {
  const data = await invoiceApi.update(payload);

  return data;
});

export const deleted = createAsyncThunk("invoice/delete", async (payload) => {
  const data = await invoiceApi.delete(payload);

  return data;
});

export const xmlRead = createAsyncThunk("invoice/xmlRead", async (payload) => {
  const data = await invoiceApi.xmlRead(payload);

  return data;
});

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {},
  reducers: {
    selected(state, action) {
      return (state = action.payload);
    },

    removeSelected(state) {
      return (state = {});
    },
  },
  extraReducers: {
    [create.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [edit.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [deleted.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [xmlRead.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = invoiceSlice;
export const { selected, removeSelected } = actions;
export default reducer;
