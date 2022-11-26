import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/categoryApi";

export const create = createAsyncThunk("category/create", async (payload) => {
  const data = await categoryApi.create(payload);

  return data;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {},
  reducers: {},
  extraReducers: {
    [create.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = categorySlice;
export default reducer;
