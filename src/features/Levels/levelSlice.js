import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { levelApi } from "../../api/index";

export const create = createAsyncThunk("level/create", async (payload) => {
  const data = await levelApi.create(payload);

  return data;
});

export const edit = createAsyncThunk("level/edit", async (payload) => {
  const data = await levelApi.update(payload);

  return data;
});

export const deleted = createAsyncThunk("level/delete", async (payload) => {
  const data = await levelApi.delete(payload);

  return data;
});

const levelSlice = createSlice({
  name: "level",
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

const { actions, reducer } = levelSlice;
export const { selected, removeSelected } = actions;
export default reducer;
