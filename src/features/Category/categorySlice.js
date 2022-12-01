import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/categoryApi";

export const create = createAsyncThunk("category/create", async (payload) => {
  const data = await categoryApi.create(payload);

  return data;
});

export const edit = createAsyncThunk("category/edit", async (payload) => {
  const data = await categoryApi.update(payload);

  return data;
});

export const deleted = createAsyncThunk("category/delete", async (payload) => {
  const data = await categoryApi.delete(payload);

  return data;
});

const categorySlice = createSlice({
  name: "category",
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
  },
});

const { actions, reducer } = categorySlice;
export const { selected, removeSelected } = actions;
export default reducer;
