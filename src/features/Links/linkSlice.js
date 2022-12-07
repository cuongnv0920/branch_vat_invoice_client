import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { linkApi } from "../../api/index";

export const create = createAsyncThunk("link/create", async (payload) => {
  const data = await linkApi.create(payload);

  return data;
});

export const edit = createAsyncThunk("link/edit", async (payload) => {
  const data = await linkApi.update(payload);

  return data;
});

export const deleted = createAsyncThunk("link/delete", async (payload) => {
  const data = await linkApi.delete(payload);

  return data;
});

const linkSlice = createSlice({
  name: "link",
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
  },
});

const { actions, reducer } = linkSlice;
export const { selected, removeSelected } = actions;
export default reducer;
